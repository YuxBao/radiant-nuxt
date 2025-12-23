declare module "@nuxt/content" {
  interface PostsCollectionItem {
    date?: string;
    author?: string;
    tags?: string[];
  }

  interface ContentCollectionItem {
    title?: string;
    description?: string;
  }
}

export {};
