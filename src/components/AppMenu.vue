<template>
  <nav class="flex items-center space-x-4">
    <NuxtLink
      :to="{ name: 'index' }"
      class="font-mono p-1 hover:bg-gray-100"
    >
      Home
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'blog' }"
      class="font-mono p-1 hover:bg-gray-100"
    >
      Blog
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'projects' }"
      class="font-mono p-1 hover:bg-gray-100"
    >
      Projects
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'about' }"
      class="font-mono p-1 hover:bg-gray-100"
    >
      About
    </NuxtLink>
  </nav>
</template>
