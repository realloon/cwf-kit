export interface Reference {
  version: string
  tags: Array<ApiTag>
  enums: Array<ApiEnum>
}

interface ApiTag {
  id: string
  paths: Array<string>
  description: string
  attributes: Array<AttributeDetail> | null
  parents: Array<string> | null
  content: Content
  example: string
  updateAt: number
}

interface ApiEnum {
  id: string
  values: Array<string>
}

// Base

interface AttributeDetail {
  name: string
  description: string
  required: boolean
  value?: string
}

interface PropertyDetail {
  ref: string
  required: boolean
  description: string
}

// Content

interface ArrayContent {
  type: 'array'
  items: PrimitiveContent | ObjectContent | EnumContent
}

interface PrimitiveContent {
  type: 'string' | 'integer' | 'float' | 'boolean'
  defaultValue?: string | number | boolean
  range?: [number, number]
}

interface ObjectContent {
  type: 'object'
  properties: Array<PropertyDetail>
}

interface EnumContent {
  type: 'enum'
  ref: string
}

type Content = ArrayContent | PrimitiveContent | ObjectContent | EnumContent
