import type { DefDatabase } from '@/types'

let defDatabase = ref<DefDatabase>({
  ThingDef: [],
  WeaponTraitDef: [],
})
let hasData = ref(false)

async function readDefDatabaseByDir() {
  let defsArray: Array<Defs> = []

  try {
    const dirHandle = await showDirectoryPicker()
    const xmlHandles = await getAllHandles(dirHandle, '.xml')

    defsArray = await Promise.all(
      xmlHandles.map(async handle =>
        xmlParser.parse(await (await handle.getFile()).text())
      )
    )
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return
    } else {
      throw error
    }
  }

  const internalDefs = defsArray.map(d => d.Defs)
  defDatabase.value = mergeObjArray(internalDefs) as DefDatabase
  hasData.value = true
}

export function useDefDatabase() {
  return { defDatabase, hasData, readDefDatabaseByDir }
}
