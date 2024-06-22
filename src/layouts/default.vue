<script setup lang="ts">
useHead({
  titleTemplate: '%s - Markdown Blog',
})

const { copyrightText, menuLinks } = useAppConfig()

const { iconName, toggle, } = useTheme()
</script>

<template>
  <div class="container mx-auto max-w-4xl p-2 min-h-[100vh] flex flex-col gap-10">
    <header class="flex items-start md:items-center justify-between">
      <div class="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:space-x-12">
        <AppBrand />
        <AppMenu :links="menuLinks" />
      </div>
      <div class="mt-[6px] md:mt-0">
        <ColorModeSwitch
          :icon-name="iconName"
          @toggle="toggle"
        />
      </div>
    </header>
    <main class="flex-1 px-2">
      <slot />
    </main>
    <footer class="px-2 pb-2">
      <p class="text-center">
        {{ copyrightText }}
      </p>
    </footer>
  </div>
</template>
