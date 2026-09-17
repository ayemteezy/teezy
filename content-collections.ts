import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: './src/content/blog',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),     
    tags: z.array(z.string()).default([]),
  }),
  transform: (doc) => {
    const wordsPerMinute = 200
    const cleanText = doc.content.trim()
    const wordCount = cleanText.split(/\s+/).length
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)

    const cleanSnippet = cleanText
      .replace(/[#*`>_\-]/g, '') 
      .substring(0, 160) + '...'

    return {
      ...doc,
      slug: doc._meta.fileName.replace(/\.md$/, ''),
      readingTime: `${readingTimeMinutes} min read`,
      snippet: cleanSnippet,
      coverImage: doc.image || 'https://unsplash.com',
    }
  },
})

export default defineConfig({
  collections: [posts],
})
