<template>
  <div class="info" :class="{ dark: colorMode === 'dark' }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { colorMode } = useTheme()
</script>

<style scoped>
.info {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #475569;
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.info.dark {
  color: #94a3b8;
  background-color: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(51, 65, 85, 0.5);
}

.info:hover {
  background-color: rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.info.dark:hover {
  background-color: rgba(30, 41, 59, 0.6);
  border-color: rgba(51, 65, 85, 0.8);
}
</style>