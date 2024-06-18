<script setup lang="ts">
const activeId = ref<string | undefined>()

const callback: IntersectionObserverCallback = (entries) => {
  const activeEntry = entries.find((entry) => entry.isIntersecting)

  if (activeEntry) {
    activeId.value = activeEntry.target.id
  }
}

onMounted(async () => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  })

  setTimeout(() => {
    document
      .querySelectorAll('h2, h3, h4')
      .forEach((element) => {
        observer.observe(element)
      })
  }, 500)

  onBeforeUnmount(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <article
    class="
      prose
      dark:prose-invert
      prose-h1:text-2xl
      prose-pre:bg-white
      dark:prose-pre:bg-gray-800
      prose-pre:text-gray-700
      dark:prose-pre:text-gray-300
      max-w-none
    "
  >
    <ContentDoc>
      <template #default="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="[doc.toc ? 'col-span-6 md:col-span-4' : 'col-span-6']">
            <ContentRenderer :value="doc" />
          </div>
          <div
            v-if="doc.toc"
            class="hidden md:block md:col-span-2 not-prose"
          >
            <div class="sticky top-8">
              <h3 class="font-semibold mt-0 mb-2">
                Table of Contents
              </h3>
              <nav>
                <TocLinks
                  :links="doc.body.toc.links"
                  :active-id="activeId"
                />
              </nav>
            </div>
          </div>
        </div>
      </template>
      <template #not-found>
        <h1>
          404 Not found
        </h1>
        <p>
          This blog post could not be found
        </p>
      </template>
    </ContentDoc>
  </article>
</template>
