<script setup lang="ts">
useHead({
  titleTemplate: '%s - Markdown Blog',
})
</script>

<template>
  <div class="container mx-auto max-w-4xl px-4 mt-5">
    <header class="flex items-start md:items-center justify-between">
      <div class="flex items-center md:space-x-12">
        <AppBrand />
        <AppMenu />
      </div>
      <ColorModeSwitch />
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>
