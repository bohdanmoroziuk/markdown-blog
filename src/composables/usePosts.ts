export interface UsePostsOptions {
  limit?: number
}

export const usePosts = async ({ limit = Number.MAX_SAFE_INTEGER }: UsePostsOptions = {}) => {
  const { data: posts } = await useAsyncData(
    'posts',
    () => {
      return queryContent('/blog')
        .only(['_path', 'title', 'published_at'])
        .sort({ published_at: -1, })
        .limit(limit)
        .find()
    }
  )

  return {
    posts,
  }
}
