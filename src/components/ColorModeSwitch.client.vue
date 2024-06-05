<script setup lang="ts">
const buttonRef = ref<HTMLButtonElement>()

const isHovered = useElementHover(buttonRef)

const colorModes = [
  'system',
  'light',
  'dark',
]

const colorModeIcons: Record<string, string> = {
  system: '🌓',
  light: '🌕',
  dark: '🌑',
}

const colorMode = useColorMode()

const nextColorMode = computed(() => {
  const colorModeIndex = colorModes.indexOf(colorMode.preference)
  const nextColorModeIndex = colorModeIndex === colorModes.length - 1
    ? 0
    : colorModeIndex + 1

  return colorModes[nextColorModeIndex]
})

const nextColorModeIcon = computed(() => {
  return colorModeIcons[nextColorMode.value]
})

const toggleColorMode = () => {
  colorMode.preference = nextColorMode.value
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <p
      v-if="isHovered"
      class="text-gray-500 text-xs"
    >
      Change to {{ nextColorMode }}
    </p>
    <button
      ref="buttonRef"
      class="hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
      @click="toggleColorMode"
    >
      {{ nextColorModeIcon }}
    </button>
  </div>
</template>
