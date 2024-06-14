<script setup lang="ts">
const { posts } = await usePosts()
</script>

<template>
  <section class="font-mono not-prose">
    <div class="column text-gray-400 text-sm">
      <div>
        date
      </div>
      <div>
        title
      </div>
    </div>
    <ul>
      <li
        v-for="post of posts"
        :key="post._path"
      >
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div class="text-gray-500">
            {{ new Date(post.published_at).getFullYear() }}
          </div>
          <div>
            {{ post.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
