<script setup lang="ts">
const { projects, pending, error } = await useProjects()
</script>

<template>
  <div class="not-prose">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>
    <div v-else-if="projects.length">
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
