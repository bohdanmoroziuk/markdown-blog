<template>
  <div class="container mx-auto max-w-2xl px-4 mt-5">
    <header class="flex items-center justify-between">
      <div class="flex items-center space-x-12">
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
