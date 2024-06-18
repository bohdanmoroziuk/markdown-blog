import type { Project } from '~/types'

export const useProjects = async () => {
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

  return {
    projects,
    pending,
    error,
  }
}
