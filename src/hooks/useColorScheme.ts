const isDark = ref(matchMedia('(prefers-color-scheme: dark)').matches)

export function useColorScheme() {
  return { isDark }
}
