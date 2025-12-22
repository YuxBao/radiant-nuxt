<template>
    <div class="card">
        <div v-if="$slots.header || title" class="card-header">
            <h3 v-if="title">{{ title }}</h3>
            <slot name="header" />
        </div>
        <div class="card-body">
            <slot />
        </div>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.card {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
    margin: 1.5rem 0;
    overflow: hidden;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.7);
}

.card-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.3);
}

.card-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #334155;
}

.card-body {
    padding: 1.5rem;
}

.card-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.3);
    font-size: 0.9rem;
    color: #64748b;
}
</style>
