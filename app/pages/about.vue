<template>
  <div class="page-container" :class="{ dark: colorMode === 'dark' }">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
  </div>
</template>

<script setup lang="ts">
interface AboutPage {
  title?: string
  description?: string
  [key: string]: any
}

const { colorMode } = useTheme()
const { data: page } = await useAsyncData('about', () =>
  queryCollection('content').path('/about').first()
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

:deep(h1) {
  font-size: 3rem;
  font-weight: 200;
  color: #334155;
  margin: 0 0 2rem 0;
  letter-spacing: -0.03em;
  text-align: center;
}

.page-container.dark :deep(h1) {
  color: #e2e8f0;
}

:deep(p) {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.page-container.dark :deep(p) {
  color: #94a3b8;
}

:deep(h2) {
  font-size: 2rem;
  font-weight: 300;
  color: #334155;
  margin: 3rem 0 1.5rem;
  letter-spacing: -0.02em;
}

.page-container.dark :deep(h2) {
  color: #e2e8f0;
}

:deep(h3) {
  font-size: 1.5rem;
  font-weight: 400;
  color: #475569;
  margin: 2rem 0 1rem;
}

.page-container.dark :deep(h3) {
  color: #cbd5e1;
}

:deep(a) {
  background: linear-gradient(90deg, #60a5fa, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  border-bottom: 1px dashed rgba(167, 139, 250, 0.4);
  transition: all 0.3s ease;
  padding-bottom: 1px;
}

:deep(a:hover) {
  border-bottom-style: solid;
  border-bottom-color: #c084fc;
  opacity: 0.8;
}

:deep(ul),
:deep(ol) {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  color: #64748b;
}

.page-container.dark :deep(ul),
.page-container.dark :deep(ol) {
  color: #94a3b8;
}

:deep(li) {
  margin: 0.5rem 0;
  line-height: 1.7;
}

:deep(strong) {
  font-weight: 600;
  color: #334155;
}

.page-container.dark :deep(strong) {
  color: #e2e8f0;
}
</style>