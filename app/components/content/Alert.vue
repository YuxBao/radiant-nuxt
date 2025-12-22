<template>
    <div class="alert" :class="[type]">
        <slot />
    </div>
</template>

<script setup lang="ts">
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

.success {
    background-color: rgba(220, 252, 231, 0.5);
    border-color: rgba(187, 247, 208, 0.5);
    color: #15803d;
}

.warning {
    background-color: rgba(254, 249, 195, 0.5);
    border-color: rgba(253, 224, 71, 0.5);
    color: #854d0e;
}

.danger {
    background-color: rgba(254, 226, 226, 0.5);
    border-color: rgba(252, 165, 165, 0.5);
    color: #991b1b;
}
</style>
