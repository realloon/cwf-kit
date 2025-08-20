import type { DefDatabase } from '@/types'

const defDatabase = ref<DefDatabase>({
  ThingDef: [],
  WeaponTraitDef: [],
})

const isBuilded = ref(false)

async function build() {
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
  isBuilded.value = true
}

export function useDefDatabase() {
  return { defDatabase, isBuilded, build }
}
