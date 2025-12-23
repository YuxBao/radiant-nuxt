<template>
    <div class="posts-page" :class="{ dark: colorMode === 'dark' }">
        <div class="posts-header">
            <h1>文章列表</h1>
            <p class="subtitle">探索技术分享与经验总结</p>
        </div>

        <div v-if="posts && posts.length > 0" class="posts-grid">
            <article v-for="post in posts" :key="post.path" class="post-card">
                <NuxtLink :to="post.path" class="post-link">
                    <div class="post-content">
                        <div class="post-meta">
                            <time class="post-date">{{ formatDate((post as any).date) }}</time>
                            <div v-if="(post as any).tags && (post as any).tags.length > 0" class="post-tags">
                                <span v-for="tag in (post as any).tags.slice(0, 1)" :key="tag" class="tag">#{{ tag
                                }}</span>
                                <span v-if="(post as any).tags.length > 1" class="tag-more">+{{ (post as
                                    any).tags.length - 1 }}</span>
                            </div>
                        </div>

                        <h2 class="post-title">{{ post.title }}</h2>
                        <p class="post-description">{{ post.description }}</p>

                        <div class="post-footer">
                            <span class="post-author">{{ (post as any).author || 'Radiant' }}</span>
                            <span class="read-more">阅读更多 →</span>
                        </div>
                    </div>
                </NuxtLink>
            </article>
        </div>

        <div v-else class="no-posts">
            <p>暂无文章</p>
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

const { colorMode } = useTheme()
const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('posts').all()
)

// 调试：打印文章路径
if (posts.value) {
    console.log('Posts paths:', posts.value.map(p => p.path))
}

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
    title: '文章列表 - Radiant',
    description: '探索技术分享与经验总结'
})
</script>

<style scoped>
.posts-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.posts-header {
    text-align: center;
    margin-bottom: 5rem;
}

.posts-header h1 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #334155;
    margin: 0 0 1rem 0;
    letter-spacing: -0.02em;
}

.posts-page.dark .posts-header h1 {
    color: #e2e8f0;
}

.subtitle {
    font-size: 1.1rem;
    color: #94a3b8;
    margin: 0;
    font-weight: 300;
    letter-spacing: 0.02em;
}

.posts-page.dark .subtitle {
    color: #94a3b8;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
}

.post-card {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
}

.posts-page.dark .post-card {
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(51, 65, 85, 0.5);
}

.post-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    border-color: rgba(255, 255, 255, 0.8);
}

.posts-page.dark .post-card:hover {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.8);
}

.post-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
}

.post-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: nowrap;
    /* Prevent wrapping to keep height consistent */
    gap: 1rem;
    height: 28px;
    /* Fixed height for alignment */
}

.post-date {
    font-size: 0.85rem;
    color: #94a3b8;
    font-weight: 400;
    white-space: nowrap;
    /* Prevent date wrapping */
    flex-shrink: 0;
}

.post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: nowrap;
    /* Prevent tags wrapping */
    overflow: hidden;
    /* Hide overflow if needed */
    justify-content: flex-end;
}

.tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: rgba(241, 245, 249, 0.6);
    color: #64748b;
    border-radius: 9999px;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.posts-page.dark .tag {
    background: rgba(51, 65, 85, 0.6);
    color: #94a3b8;
    border: 1px solid rgba(71, 85, 105, 0.5);
}

.tag-more {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    background: rgba(255, 255, 255, 0.5);
    color: #94a3b8;
    border-radius: 9999px;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.5);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
}

.posts-page.dark .tag-more {
    background: rgba(51, 65, 85, 0.5);
    border: 1px solid rgba(71, 85, 105, 0.5);
}

.post-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #334155;
    margin: 0 0 1rem 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
    /* Enforce 2 lines max with ellipsis */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Fixed min-height to ensure alignment even for 1-line titles */
    min-height: calc(1.5rem * 1.3 * 2);
}

.posts-page.dark .post-title {
    color: #e2e8f0;
}

.post-description {
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0 0 2rem 0;
    flex-grow: 1;
    font-weight: 300;
    /* Enforce 3 lines max with ellipsis */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.posts-page.dark .post-description {
    color: #94a3b8;
}

.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.posts-page.dark .post-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.post-author {
    font-size: 0.85rem;
    color: #94a3b8;
}

.read-more {
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 500;
    transition: color 0.2s;
}

.post-card:hover .read-more {
    color: #334155;
}

.posts-page.dark .read-more {
    color: #94a3b8;
}

.posts-page.dark .post-card:hover .read-more {
    color: #e2e8f0;
}

.no-posts {
    text-align: center;
    padding: 4rem 2rem;
    color: #94a3b8;
    font-size: 1.1rem;
    font-weight: 300;
}

@media (max-width: 768px) {
    .posts-page {
        padding: 2rem 1rem;
    }

    .posts-header {
        margin-bottom: 3rem;
    }

    .posts-header h1 {
        font-size: 2rem;
    }

    .posts-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>
