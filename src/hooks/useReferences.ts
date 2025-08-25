import json from '@/assets/db/reference.json?raw'

const { tags }: ReferenceSchema = JSON.parse(json)
const tagMap = arrayToMap(tags)

export function useReferences() {
  return { tags, tagMap }
}
