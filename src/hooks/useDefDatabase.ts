import type { DefDatabase } from '@/types'

let defs: DefDatabase
let isBuilded = ref(false)

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
  defs = mergeObjArray(internalDefs) as DefDatabase
  isBuilded.value = true
}

const defDatabase = computed(async () => {
  if (isBuilded.value === false) {
    await build()
  }

  return defs
})

export function useDefDatabase() {
  return { defDatabase, isBuilded }
}
