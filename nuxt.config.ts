// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/content"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s - Radiant",
      title: "Radiant Theme",
      meta: [
        {
          name: "description",
          content: "A minimal, glassmorphism-inspired Nuxt blog theme.",
        },
      ],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "vitesse-light",
          langs: [
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
          ],
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },
});
