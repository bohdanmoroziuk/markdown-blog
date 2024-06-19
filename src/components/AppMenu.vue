<script setup lang="ts">
import type { MenuLink } from '~/types'

interface Props {
  links: MenuLink[]
}

defineProps<Props>()
</script>

<template>
  <nav class="flex flex-col md:flex-row md:items-center md:space-x-4">
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
  @apply text-xl font-mono hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1;
}
</style>
