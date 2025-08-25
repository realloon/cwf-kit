const traitModules = ref<TraitModule[]>([])

async function readTraitModule() {
  const { defDatabase, hasData, readDefDatabaseByDir } = useDefDatabase()

  if (!hasData.value) {
    await readDefDatabaseByDir()
  }

  const defs = defDatabase.value
  const { ThingDef, WeaponTraitDef } = defs

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
