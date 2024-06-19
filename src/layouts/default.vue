<script setup lang="ts">
useHead({
  titleTemplate: '%s - Markdown Blog',
})

const { copyrightText, menuLinks } = useAppConfig()
</script>

<template>
  <div class="container mx-auto max-w-4xl p-4 min-h-[100vh] flex flex-col gap-10">
    <header class="flex items-start md:items-center justify-between">
      <div class="flex items-center md:space-x-12">
        <AppBrand />
        <AppMenu :links="menuLinks" />
      </div>
      <ColorModeSwitch />
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer>
      <p class="text-center">
        {{ copyrightText }}
      </p>
    </footer>
  </div>
</template>
