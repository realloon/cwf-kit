import prettier from 'prettier/standalone'
import * as prettierPluginHtml from 'prettier/plugins/html'

export async function formatXml(minified: string) {
  return await prettier.format(minified, {
    parser: 'html',
    plugins: [prettierPluginHtml],
    htmlWhitespaceSensitivity: 'ignore',
  })
}
