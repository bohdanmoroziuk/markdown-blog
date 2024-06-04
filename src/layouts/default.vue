<template>
  <div class="container mx-auto max-w-2xl px-4 mt-5">
    <header class="flex items-center justify-between">
      <AppBrand />
      <AppMenu />
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
