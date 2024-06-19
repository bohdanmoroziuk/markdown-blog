export const useTheme = () => {
  const colorMode = useColorMode()

  const theme = computed(() => {
    return colorMode.value
  })

  const isLight = computed(() => {
    return colorMode.value === 'light'
  })

  const iconName = computed(() => {
    return isLight.value
      ? 'ph:sun-bold'
      : 'ph:moon-bold'
  })

  const toggle = () => {
    colorMode.preference = isLight.value
      ? 'dark'
      : 'light'
  }

  return {
    theme,
    iconName,
    toggle,
  }
}
