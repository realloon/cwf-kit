export interface ReferenceSchema {
  version: string
  tags: Array<XmlTag>
  enums: Array<Enum>
}

export interface XmlTag {
  id: string
  type: 'tag' | 'LiWithClass'
  path: string
  description: string
  attributes: Array<Attribute>
  parents: Array<string>
  children: Array<`${ValueType}:${string}`>
  isArray: boolean
  example: string
  updateAt: number
}

export type ValueType = 'tag' | 'defName' | 'enum'

interface Attribute {
  name: string
  value: string | number | boolean
}

interface Enum {
  id: string
  values: Array<string>
}
