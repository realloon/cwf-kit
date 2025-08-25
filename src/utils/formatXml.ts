import { format } from 'prettier/standalone'
import prettierPluginXml from '@prettier/plugin-xml'

export async function formatXml(xmlString: string) {
  try {
    const formattedXml = await format(xmlString, {
      parser: 'xml',
      plugins: [prettierPluginXml],
      xmlWhitespaceSensitivity: 'ignore',
    })
    return formattedXml
  } catch (error) {
    console.error(error)
    return xmlString
  }
}
