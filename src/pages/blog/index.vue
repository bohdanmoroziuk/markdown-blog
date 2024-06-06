<script setup lang="ts">
const { data: posts } = await useAsyncData(
  'posts',
  () => {
    return queryContent('/blog')
      .only(['_path', 'title'])
      .find()
  }
)
</script>

<template>
  <section>
    <ul>
      <li
        v-for="post of posts"
        :key="post._path"
      >
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
