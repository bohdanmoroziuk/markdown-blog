<script setup lang="ts">
const activeId = ref<string | undefined>()

const callback: IntersectionObserverCallback = (entries) => {
  const activeEntry = entries.find((entry) => entry.isIntersecting)

  if (activeEntry) {
    activeId.value = activeEntry.target.id
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  })

  const elements = document.querySelectorAll('h2, h3')

  elements.forEach((element) => {
    observer.observe(element)
  })

  onBeforeUnmount(() => {
    elements.forEach((element) => {
      observer.unobserve(element)
    })
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
    <ContentDoc #default="{ doc }">
      <div class="grid grid-cols-6 gap-16">
        <div :class="[doc.toc ? 'col-span-4' : 'col-span-6']">
          <ContentRenderer :value="doc" />
        </div>
        <div
          v-if="doc.toc"
          class="col-span-2 not-prose"
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
    </ContentDoc>
  </article>
</template>
