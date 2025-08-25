export interface ReferenceSchema {
  version: string
  references: Array<XmlDoc>
}

export interface XmlDoc {
  id: string
  type: 'tag' | 'LiWithClass'
  path: string
  description: string
  valueType: 'class' | 'enum'
  attributes: Array<Attribute>
  parents: Array<string>
  children: Array<string>
  example: string
  updateAt: number
}

interface Attribute {
  name: string
  value: string | number | boolean
}
