# Radiant [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yuxbao/radiant-nuxt)

<img src="https://img.shields.io/github/v/release/yuxbao/radiant-nuxt?style=hero&color=%23FFFFFF&label=version&labelColor=%2383C092" alt="Version"/>

[中文文档](./README.zh-CN.md)

<p align="center">
   <img src="./public/logo.png" alt="Radiant Theme Logo" style="width: 200px;"/>
</p>

**Radiant** is a modern, minimal static blog theme built with **Nuxt 4** and **Nuxt Content**. It features a clean "cold" aesthetic, glassmorphism effects, and a focus on typography.

## ✨ Features

<p align="center">
  <img src="./public/screenshot.png" alt="Radiant Theme Screenshot" style="width: 80%; border: 1px solid #eaeaea; border-radius: 8px;"/>
</p>

- **Glassmorphism Design**: Frosted glass effects on cards and navigation.
- **Nuxt Content v3**: Powerful file-based CMS.
- **TypeScript**: Fully typed codebase.
- **Responsive**: Looks great on mobile and desktop.
- **Custom Components**: Built-in MDC components like `::card`, `::badge`, `::grid`, and `::alert`.
- **SEO Friendly**: Optimized meta tags and structure.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (recommended)

### Installation

Click on "deploy" button above to deploy to Vercel instantly, or follow these steps to run locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yuxbao/radiant-nuxt.git
   cd radiant-nuxt
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your blog.

## 📝 Writing Content

Create Markdown files in the `content/posts` directory.

```markdown
---
title: "My First Post"
description: "This is a description."
date: "2024-03-22"
author: "Your Name"
tags: ["Nuxt", "Blog"]
---

# Hello World

Write your content here...
```

## 🎨 Customization

- **App Config**: Edit `nuxt.config.ts` to change site title and meta.
- **Styles**: Global styles are in `app/app.vue` and `app/layouts/default.vue`.

## 📄 License

MIT
