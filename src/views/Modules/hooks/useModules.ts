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
    const xmlHandles = await getAllHandles(dirHandle, '.xml')

    defsArray = await Promise.all(
      xmlHandles.map(async handle =>
        parser.parse(await (await handle.getFile()).text())
      )
    )

    isLoaded.value = true
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return
    } else {
      throw error
    }
  }

  const internalDefs = defsArray.map(d => d.Defs)
  const defDatabase = mergeObjArray(internalDefs)
  const { ThingDef, WeaponTraitDef } = defDatabase
  if (!ThingDef || !WeaponTraitDef) {
    return console.error('No modules or traits in fold.')
  }

  const thingDefs = ThingDef.filter(
    t => t.defName && t['@_ParentName'] === 'CWF_TraitModule'
  )
  const weaponTraitDefs = WeaponTraitDef.filter(w => w.defName)

  traitModules.value = buildTraitModules(thingDefs, weaponTraitDefs)
}

export function useModules() {
  return { isLoaded, traitModules, loadXmlFiles }
}
