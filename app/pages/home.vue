<template>
    <div class="page-container" :class="{ dark: colorMode === 'dark' }">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else class="error-container">
            <h1>Home not found</h1>
            <p>Could not find the homepage content.</p>
            <details>
                <summary>Debug Info</summary>
                <p>Looking for path: /home</p>
                <p>Available paths in 'content' collection:</p>
                <ul>
                    <li v-for="p in allPaths" :key="p.path">{{ p.path }}</li>
                </ul>
            </details>
        </div>
    </div>
</template>

<script setup lang="ts">
const { colorMode } = useTheme()
const { data: home } = await useAsyncData('home', () => queryCollection('content').where('path', '=', '/home').first())

const { data: allPaths } = await useAsyncData('debug-paths', () => queryCollection('content').select('path').all())

useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
</script>

<style scoped>
.error-container {
    text-align: center;
    padding: 4rem 2rem;
    color: #ef4444;
}

details {
    margin-top: 2rem;
    text-align: left;
    background: #f8fafc;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #334155;
}

.page-container.dark details {
    background: #1e293b;
    color: #e2e8f0;
}

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
