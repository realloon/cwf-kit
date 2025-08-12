import type { Defs, DefDatabase, TraitModule } from '@/types/Defs'
import { ref } from 'vue'
import { getAllHandles, mergeObjArray, buildTraitModules } from '../helpers'
import { parser } from '@/utils'

const isLoaded = ref(false)
const traitModules = ref<TraitModule[]>([])

async function loadXmlFiles() {
  let defsArray: Array<Defs> = []

  try {
    isLoaded.value = false

    const dirHandle = await showDirectoryPicker()
    console.time('timer')
    const xmlHandles = await getAllHandles(dirHandle, '.xml')
    console.timeLog('timer', '已获取文件句柄')

    defsArray = await Promise.all(
      xmlHandles.map(async handle =>
        parser.parse(await (await handle.getFile()).text())
      )
    )
    console.timeLog('timer', '已读取并解析文件')

    isLoaded.value = true
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return
    } else {
      throw error
    }
  }

  const internalDefs = defsArray.map(d => d.Defs)
  const defDatabase = mergeObjArray(internalDefs) as unknown as DefDatabase
  const { ThingDef, WeaponTraitDef } = defDatabase

  const thingDefs = ThingDef.filter(
    t => t.defName && t['@_ParentName'] === 'CWF_TraitModule'
  )
  const weaponTraitDefs = WeaponTraitDef.filter(w => w.defName)

  traitModules.value = buildTraitModules(thingDefs, weaponTraitDefs)
  console.timeLog('timer', '已构建模块数据库')
  console.timeEnd('timer')
}

export function useModules() {
  return { isLoaded, traitModules, loadXmlFiles }
}
