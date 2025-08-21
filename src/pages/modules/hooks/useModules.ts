import { useDefDatabase } from '@/hooks/useDefDatabase'

const traitModules = ref<TraitModule[]>([])

async function readTraitModule() {
  const { defDatabase } = useDefDatabase()

  const { ThingDef, WeaponTraitDef } = await defDatabase.value
  if (!ThingDef || !WeaponTraitDef) {
    return console.error('No modules or traits in fold.')
  }

  const thingDefs = ThingDef.filter(t => t['@_ParentName'] === 'CWF_Module')
  const weaponTraitDefs = WeaponTraitDef.filter(w => w.defName)

  traitModules.value = buildTraitModules(thingDefs, weaponTraitDefs)
}

export function useModules() {
  return { traitModules, readTraitModule }
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
