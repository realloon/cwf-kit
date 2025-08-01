import { XMLParser } from 'fast-xml-parser'

export const parser = new XMLParser({
  ignoreAttributes: false,
  isArray: (tag) => tag === 'li',
})
