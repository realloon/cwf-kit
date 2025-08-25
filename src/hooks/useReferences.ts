import json from '@/assets/db/reference.json?raw'

const { tags, enums, version }: ReferenceSchema = JSON.parse(json)

const tagMap = arrayToMap(tags)
const enumMap = arrayToMap(enums)

export function useReferences() {
  return { tagMap, enumMap, version }
}
