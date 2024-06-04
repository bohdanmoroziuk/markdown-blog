<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>
    Blog post
  </h1>
  <p>
    Post id is {{ route.params.id }}
  </p>
</template>
