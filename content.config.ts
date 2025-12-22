import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    posts: defineCollection({
      type: "page",
      source: "posts/**/*.md",
      schema: z.object({
        tags: z.array(z.string()),
        date: z.string(),
        author: z.string(),
      }),
    }),
  },
});
