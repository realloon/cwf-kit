import modulesXML from '/Users/lizhen/Library/Application Support/Steam/steamapps/common/RimWorld/RimWorldMac.app/Mods/CustomizeWeapon/Defs/TraitModules.xml?raw'
import traitsXML from '/Users/lizhen/Library/Application Support/Steam/steamapps/common/RimWorld/RimWorldMac.app/Mods/CustomizeWeapon/Defs/Traits.xml?raw'
import type { Defs, ThingDef, WeaponTraitDef } from '@/types/Defs'
import { ref } from 'vue'
import { parser } from '@/utils'

function getDefs(xml: string, type: 'ThingDef' | 'WeaponTraitDef') {
  const resource: Defs = parser.parse(xml)

  return type === 'ThingDef'
    ? resource.Defs.ThingDef.filter(def => def.defName)
    : resource.Defs.WeaponTraitDef
}

function buildModuleDB(
  modules: Array<ThingDef>,
  traits: Array<WeaponTraitDef>
) {
  const moduleDB: Array<ThingDef & WeaponTraitDef> = []

  modules.forEach(moduel => {
    const target = moduel.modExtensions.li[0].weaponTraitDef
    const trait = traits.find(trait => trait.defName === target)

    if (!trait) {
      throw new Error(`${moduel.defName} can't find matchered trait ${target}`)
    }

    moduleDB.push(Object.assign(moduel, trait))
  })

  return moduleDB
}

export function useModuleDB() {
  const modules = getDefs(modulesXML, 'ThingDef') as Array<ThingDef>
  const traits = getDefs(traitsXML, 'WeaponTraitDef') as Array<WeaponTraitDef>
  const moduleDB = ref(buildModuleDB(modules, traits))

  return { moduleDB }
}
