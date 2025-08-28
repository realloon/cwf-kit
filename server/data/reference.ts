import type { Reference } from '../../shared/types'
import referenceData from './reference.json'
import { arrayToMap } from '~/utils/arrayToMap'

const reference = referenceData as Reference

const tags = reference.tags
const tagsMap = arrayToMap(tags)

const enums = reference.enums
const enumsMap = arrayToMap(enums)

export { tags, tagsMap, enums, enumsMap }
