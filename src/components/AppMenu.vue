<script setup lang="ts">
import type { MenuLink } from '~/types'

interface Props {
  links: MenuLink[]
}

defineProps<Props>()
</script>

<template>
  <nav class="flex flex-col md:flex-row md:items-center md:space-x-4 font-mono">
    <NuxtLink
      v-for="link of links"
      :key="link.label"
      :to="link.to"
      class="link"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
