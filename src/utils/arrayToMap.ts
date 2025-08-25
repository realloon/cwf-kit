export function arrayToMap<T extends { id: string }>(arr: T[]) {
  const map = new Map<string, T>()
  arr.forEach(tag => map.set(tag.id, tag))
  return map
}
