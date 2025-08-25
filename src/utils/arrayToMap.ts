export function arrayToMap<T extends { id: string }>(arr: T[]) {
  const map: Record<string, T> = {}
  arr.forEach(tag => (map[tag.id] = tag))
  return map
}
