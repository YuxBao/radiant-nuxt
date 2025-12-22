<template>
    <div class="post-detail">
        <div v-if="post" class="post-layout">
            <article class="post-article">
                <header class="post-header">
                    <time class="post-date">{{ formatDate((post as any).date) }}</time>

                    <h1 class="post-title">{{ post.title }}</h1>

                    <p v-if="(post as any).description" class="post-description">
                        {{ (post as any).description }}
                    </p>

                    <div class="post-meta-footer">
                        <div class="post-author">
                            <span class="author-label">By</span>
                            {{ (post as any).author || 'Radiant' }}
                        </div>

                        <div v-if="(post as any).tags && (post as any).tags.length > 0" class="post-tags">
                            <span v-for="tag in (post as any).tags" :key="tag" class="tag">#{{ tag }}</span>
                        </div>
                    </div>
                </header>

                <div class="post-content">
                    <ContentRenderer :value="post" />
                </div>

                <footer class="post-footer">
                    <NuxtLink to="/posts" class="back-link">← Back</NuxtLink>
                </footer>
            </article>

            <aside v-if="(post as any).body?.toc?.links?.length" class="toc-sidebar">
                <div class="toc-wrapper">
                    <h3 class="toc-title">目录</h3>
                    <nav class="toc-nav">
                        <ul>
                            <li v-for="link in (post as any).body.toc.links" :key="link.id">
                                <a :href="`#${link.id}`">{{ link.text }}</a>
                                <ul v-if="link.children" class="toc-sub">
                                    <li v-for="child in link.children" :key="child.id">
                                        <a :href="`#${child.id}`">{{ child.text }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>

        <div v-else class="not-found">
            <h2>Article Not Found</h2>
            <NuxtLink to="/posts" class="back-link"> <- Back</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Post {
    path: string
    title: string
    description?: string
    date?: string
    author?: string
    tags?: string[]
}

const route = useRoute()
const slug = route.params.slug as string

console.log('Slug:', slug)
console.log('Query path:', `/posts/${slug}`)

const { data: post } = await useAsyncData(`post-${slug}`, () =>
    queryCollection('posts').path(`/posts/${slug}`).first()
)

console.log('Post found:', post.value ? post.value.title : 'NOT FOUND')

const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

useSeoMeta({
    title: post.value?.title || '文章详情',
    description: post.value?.description || ''
})
</script>

<style scoped>
.post-detail {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.post-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 3rem;
    align-items: start;
}

.post-article {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 24px;
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
    min-width: 0;
}

.toc-sidebar {
    position: sticky;
    top: 6rem;
}

.toc-wrapper {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.toc-title {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: #334155;
    letter-spacing: -0.01em;
}

.toc-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-nav li {
    margin: 0.5rem 0;
}

.toc-nav a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
    display: block;
    line-height: 1.5;
    border-left: 2px solid transparent;
    padding-left: 0.75rem;
}

.toc-nav a:hover {
    color: #334155;
    border-left-color: #cbd5e1;
}

.toc-sub {
    margin-top: 0.5rem;
    margin-left: 0.25rem;
}

.toc-sub a {
    font-size: 0.85rem;
}

.post-header {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.post-date {
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 1rem;
}

.post-title {
    font-size: 2.5rem;
    font-weight: 300;
    color: #334155;
    margin: 0 0 1rem 0;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.post-description {
    font-size: 1.15rem;
    line-height: 1.6;
    color: #64748b;
    margin: 0 0 2rem 0;
    font-weight: 300;
}

.post-meta-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px dashed rgba(0, 0, 0, 0.05);
    gap: 2rem;
    /* Ensure minimum space between author and tags */
}

.post-author {
    font-size: 0.9rem;
    color: #64748b;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    /* Prevent author info from shrinking */
}

.author-label {
    opacity: 0.6;
    margin-right: 0.4rem;
}

.post-tags {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    /* Align tags to the right */
    align-items: center;
    /* Vertically center tags */
}

.tag {
    font-size: 0.8rem;
    color: #64748b;
    background: rgba(241, 245, 249, 0.5);
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    transition: all 0.2s;
    text-decoration: none;
    line-height: 1.4;
    /* Ensure consistent height */
    display: inline-flex;
    /* Better alignment */
    align-items: center;
}

.tag:hover {
    background: rgba(241, 245, 249, 0.8);
    color: #334155;
}

.post-content {
    font-size: 1.05rem;
    line-height: 1.9;
    color: #475569;
    font-weight: 300;
}

.post-content :deep(h1) {
    font-size: 2.2rem;
    font-weight: 300;
    margin: 3.5rem 0 1.5rem;
    color: #334155;
    letter-spacing: -0.02em;
}

.post-content :deep(h2) {
    font-size: 1.8rem;
    font-weight: 300;
    margin: 3rem 0 1.25rem;
    color: #334155;
    letter-spacing: -0.01em;
    padding-bottom: 0.5rem;
}

.post-content :deep(h1 a),
.post-content :deep(h2 a),
.post-content :deep(h3 a),
.post-content :deep(h4 a),
.post-content :deep(h5 a),
.post-content :deep(h6 a) {
    border-bottom: none !important;
    color: inherit !important;
    pointer-events: none;
    text-decoration: none !important;
}

.post-content :deep(h3) {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 2.5rem 0 1rem;
    color: #475569;
}

.post-content :deep(p) {
    margin: 1.5rem 0;
}

.post-content :deep(ul),
.post-content :deep(ol) {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    color: #475569;
}

.post-content :deep(li) {
    margin: 0.5rem 0;
    padding-left: 0.5rem;
}

.post-content :deep(li::marker) {
    color: #94a3b8;
}

.post-content :deep(code) {
    background: rgba(241, 245, 249, 0.6);
    padding: 0.2rem 0.4rem;
    border-radius: 0.375rem;
    font-size: 0.85em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    color: #475569;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.post-content :deep(pre) {
    background: rgba(255, 255, 255, 0.5) !important;
    padding: 1.5rem;
    border-radius: 16px;
    overflow-x: auto;
    margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.post-content :deep(pre code) {
    background: none !important;
    padding: 0;
    color: inherit;
    border: none;
    font-size: 0.9em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.post-content :deep(blockquote) {
    border-left: 3px solid rgba(148, 163, 184, 0.4);
    padding-left: 1.5rem;
    margin: 2rem 0;
    color: #64748b;
    font-style: italic;
    background: rgba(248, 250, 252, 0.3);
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
}

.post-content :deep(hr) {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    margin: 3rem 0;
}

.post-content :deep(img) {
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    margin: 2rem 0;
    max-width: 100%;
}

.post-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.back-link {
    display: inline-flex;
    align-items: center;
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.back-link:hover {
    color: #334155;
}

.not-found {
    text-align: center;
    padding: 4rem 2rem;
}

.not-found h2 {
    font-size: 1.5rem;
    color: #94a3b8;
    margin-bottom: 1.5rem;
    font-weight: 300;
}

@media (max-width: 1024px) {
    .post-layout {
        grid-template-columns: 1fr;
    }

    .toc-sidebar {
        display: none;
    }
}

@media (max-width: 768px) {
    .post-detail {
        padding: 2rem 1rem;
    }

    .post-article {
        padding: 1.5rem;
        border-radius: 16px;
    }

    .post-title {
        font-size: 1.8rem;
    }

    .post-meta {
        flex-direction: column;
        gap: 0.5rem;
    }

    .post-content {
        font-size: 1rem;
    }
}
</style>
