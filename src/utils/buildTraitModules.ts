export function buildTraitModules(
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
