export default <T extends { id: string }>(arr: Array<T>) => {
  const map = new Map<string, T>()
  arr.forEach(item => map.set(item.id, item))
  return map
}
