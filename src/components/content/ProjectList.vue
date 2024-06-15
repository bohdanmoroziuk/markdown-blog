<script setup lang="ts">
import type { Project } from '~/types'

const { error, pending, data } = await useFetch<Project[]>('https://api.github.com/users/bohdanmoroziuk/repos', {
  lazy: true,
})

const projects = computed(() => {
  const list = data.value ?? []

  return list
    .filter((item) => item.description)
    .filter((item) => item.stargazers_count)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
})
</script>

<template>
  <div class="not-prose">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>
    <div v-else-if="data">
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="project of projects"
          :key="project.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        >
          <a
            :href="project.html_url"
            target="_blank"
          >
            <div class="flex items-center justify-between">
              <p class="font-semibold text-sm">
                {{ project.name }}
              </p>
              <p>
                {{ project.stargazers_count }} *
              </p>
            </div>
            <p class="text-sm">
              {{ project.description }}
            </p>
          </a>
        </li>
      </ul>
    </div>
    <div v-else>
      No projects found
    </div>
  </div>
</template>
