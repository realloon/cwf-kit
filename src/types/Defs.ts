export type Defs = {
  '?xml': {
    '@_encoding': string
    '@_version': string
  }
  Defs: {
    ThingDef: Array<ThingDef>
    WeaponTraitDef: Array<WeaponTraitDef>
  }
}

export type ThingDef = {
  defName: string
  costList: Record<string, number>
  statBases: { WorkToMake: number }
  modExtensions: {
    li: Array<{
      weaponTraitDef: string
      part: Part
      requiredWeaponTags: { li: Array<string> }
      graphicCases: Array<GraphicCase>
    }>
  }
}

type GraphicCase = {
  matcher: {
    weaponDefs: { li: Array<string> }
  }
  graphicData: {
    texturePath: string
    outlinePath: string
  }
}

export type WeaponTraitDef = {
  defName: string
  label: string
  description: string
  statOffsets: Record<string, number>
  statFactors: Record<string, number>
}

export const parts = [
  'Muzzle',
  'Barrel',
  'Receiver',
  'Trigger',
  'Stock',
  'Grip',
  'Sight',
  'Magazine',
  'Underbarrel',
  'Ammo',
  'Accessories',
] as const

export type Part = (typeof parts)[number]
