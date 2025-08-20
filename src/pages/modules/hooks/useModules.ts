import { useDefDatabase } from '@/hooks/useDefDatabase'

const isLoaded = ref(false)
const traitModules = ref<TraitModule[]>([])

async function loadXmlFiles() {
  const { defDatabase, isBuilded, build } = useDefDatabase()

  if (!isBuilded.value) {
    await build()
  }

  const { ThingDef, WeaponTraitDef } = defDatabase.value
  if (!ThingDef || !WeaponTraitDef) {
    return console.error('No modules or traits in fold.')
  }

  const thingDefs = ThingDef.filter(t => t['@_ParentName'] === 'CWF_Module')
  const weaponTraitDefs = WeaponTraitDef.filter(w => w.defName)

  traitModules.value = buildTraitModules(thingDefs, weaponTraitDefs)
}

export function useModules() {
  return { isLoaded, traitModules, loadXmlFiles }
}

// helper
function buildTraitModules(
  modules: Array<ThingDef>,
  traits: Array<WeaponTraitDef>
) {
  const traitModules: Array<TraitModule> = []

  modules.forEach(moduel => {
    const target = moduel.modExtensions.li[0].weaponTraitDef[0]

    const trait = traits.find(trait => trait.defName === target)

    if (!trait) {
      throw new Error(`${moduel.defName} can't find matchered trait ${target}`)
    }

    traitModules.push(Object.assign(moduel, trait))
  })

  return traitModules
}
