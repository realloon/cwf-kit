import { tags, tagsMap, enums, enumsMap } from '../../data/reference'

export default defineEventHandler(async event => {
  return { tags, tagsMap, enums, enumsMap }
})
