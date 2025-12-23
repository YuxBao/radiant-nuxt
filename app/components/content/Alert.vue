<template>
    <div class="alert" :class="[type, { dark: colorMode === 'dark' }]">
        <slot />
    </div>
</template>

<script setup lang="ts">
const { colorMode } = useTheme()
defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (value: string) => ['info', 'success', 'warning', 'danger'].includes(value)
    }
})
</script>

<style scoped>
.alert {
    font-size: 1rem;
    display: block;
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    border-radius: 12px;
    line-height: 1.6;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.info {
    background-color: rgba(224, 242, 254, 0.5);
    border-color: rgba(186, 230, 253, 0.5);
    color: #0369a1;
}

.alert.dark.info {
    background-color: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.3);
    color: #7dd3fc;
}

.success {
    background-color: rgba(220, 252, 231, 0.5);
    border-color: rgba(187, 247, 208, 0.5);
    color: #15803d;
}

.alert.dark.success {
    background-color: rgba(34, 197, 94, 0.2);
    border-color: rgba(34, 197, 94, 0.3);
    color: #86efac;
}

.warning {
    background-color: rgba(254, 249, 195, 0.5);
    border-color: rgba(253, 224, 71, 0.5);
    color: #854d0e;
}

.alert.dark.warning {
    background-color: rgba(234, 179, 8, 0.2);
    border-color: rgba(234, 179, 8, 0.3);
    color: #fde047;
}

.danger {
    background-color: rgba(254, 226, 226, 0.5);
    border-color: rgba(252, 165, 165, 0.5);
    color: #991b1b;
}

.alert.dark.danger {
    background-color: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.3);
    color: #fca5a5;
}
</style>
