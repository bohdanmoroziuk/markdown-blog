<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

interface Props {
  links: TocLink[]
  level?: number
  activeId?: string
}

withDefaults(defineProps<Props>(), {
  level: 0,
})
</script>

<template>
  <ul>
    <li
      v-for="link of links"
      :key="link.id"
    >
      <NuxtLink
        :class="{ 'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id }"
        :to="{ path: $route.path, hash: `#${link.id}` }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        v-if="link.children"
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>
