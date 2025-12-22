<template>
    <span class="badge" :class="[type]">
        <slot />
    </span>
</template>

<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (value: string) => ['default', 'info', 'success', 'warning', 'danger'].includes(value)
    }
})
</script>

<style scoped>
.badge {
    display: inline-flex;
    align-items: center;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0.25rem;
    vertical-align: middle;
    border: 1px solid transparent;
    white-space: nowrap;
}

.default {
    background: rgba(241, 245, 249, 0.8);
    color: #475569;
    border-color: rgba(203, 213, 225, 0.5);
}

.info {
    background: rgba(224, 242, 254, 0.8);
    color: #0369a1;
    border-color: rgba(186, 230, 253, 0.5);
}

.success {
    background: rgba(220, 252, 231, 0.8);
    color: #15803d;
    border-color: rgba(187, 247, 208, 0.5);
}

.warning {
    background: rgba(254, 249, 195, 0.8);
    color: #a16207;
    border-color: rgba(253, 230, 138, 0.5);
}

.danger {
    background: rgba(254, 226, 226, 0.8);
    color: #b91c1c;
    border-color: rgba(254, 202, 202, 0.5);
}
</style>
