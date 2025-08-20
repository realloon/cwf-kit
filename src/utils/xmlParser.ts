import { XMLParser } from 'fast-xml-parser'

export const xmlParser = new XMLParser({
  ignoreAttributes: false,
  isArray: tag => tag === 'li' || tag.endsWith('Def'),
})
