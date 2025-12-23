<template>
    <div class="grid" :class="{ dark: colorMode === 'dark' }"
        :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }">
        <slot />
    </div>
</template>

<script setup lang="ts">
const { colorMode } = useTheme()
defineProps({
    cols: {
        type: [Number, String],
        default: 2
    }
})
</script>

<style scoped>
.grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr !important;
    }
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4) {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #334155;
}

.grid.dark :deep(h1),
.grid.dark :deep(h2),
.grid.dark :deep(h3),
.grid.dark :deep(h4) {
    color: #e2e8f0;
}

:deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
}

:deep(ul),
:deep(ol) {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

:deep(ul) {
    list-style-type: disc;
}

:deep(ol) {
    list-style-type: decimal;
}

:deep(li) {
    margin-bottom: 0.25rem;
}

:deep(strong) {
    font-weight: 600;
    color: #1e293b;
}

.grid.dark :deep(strong) {
    color: #f1f5f9;
}
</style>
