import referenceData from './reference.json'
import { arrayToMap } from '~/utils/arrayToMap'

const tags = referenceData.tags
const tagsMap = arrayToMap(referenceData.tags)

export { tags, tagsMap }
