import type { DefDatabase } from '@/types'

export function mergeObjArray(
  objArray: Array<Record<string, any>>
): DefDatabase {
  return objArray.reduce((acc, cur) => {
    for (const key in cur) {
      if (Object.prototype.hasOwnProperty.call(cur, key)) {
        if (!acc[key]) {
          acc[key] = []
        }

        acc[key].push(...cur[key])
      }
    }

    return acc
  }, {})
}
