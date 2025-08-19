import type { Defs, ThingDef, WeaponTraitDef } from '@/types'
import { parser } from '@/utils'

export function getDefs(xml: string, type: 'ThingDef'): Array<ThingDef>

export function getDefs(
  xml: string,
  type: 'WeaponTraitDef'
): Array<WeaponTraitDef>

export function getDefs(
  xml: string,
  type: 'ThingDef' | 'WeaponTraitDef'
): Array<ThingDef | WeaponTraitDef> {
  const resource: Defs = parser.parse(xml)

  if (type === 'ThingDef') {
    return resource.Defs.ThingDef.filter(def => def.defName)
  } else {
    return resource.Defs.WeaponTraitDef
  }
}
