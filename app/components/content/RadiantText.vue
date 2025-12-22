<template>
    <component :is="tag" class="radiant-text">
        <slot />
    </component>
</template>

<script setup lang="ts">
defineProps({
    tag: {
        type: String,
        default: 'span'
    }
})
</script>

<style scoped>
.radiant-text {
    background: linear-gradient(90deg, #60a5fa, #c084fc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
    display: inline-block;
}
</style>