import { XMLParser } from 'fast-xml-parser'

export const parser = new XMLParser({
  ignoreAttributes: false,
  isArray: (tag) => tag === 'li',
})

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}