import type { RouteLocationRaw } from 'vue-router'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Project {
  id: string
  name: string
  description: string
  html_url: string
  stargazers_count: number
}

export interface Post extends ParsedContent {
  published_at: string
  toc?: boolean
}

export interface MenuLink {
  to: RouteLocationRaw
  label: string
}
