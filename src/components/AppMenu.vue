<template>
  <nav class="flex items-center space-x-4 font-mono">
    <NuxtLink
      :to="{ name: 'index' }"
      class="link"
    >
      Home
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'blog' }"
      class="link"
    >
      Blog
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'projects' }"
      class="link"
    >
      Projects
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'about' }"
      class="link"
    >
      About
    </NuxtLink>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800;
}
</style>
