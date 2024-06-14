<script setup lang="ts">
interface Props {
  limit: number
}

const props = defineProps<Props>()

const { posts } = await usePosts({ limit: props.limit })
</script>

<template>
  <div>
    <div
      v-for="post in posts"
      :key="post._path"
    >
      <NuxtLink :to="post._path">
        {{ post.title }}
      </NuxtLink>
    </div>
  </div>
</template>
