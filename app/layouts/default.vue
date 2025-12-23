<!-- 这里为页面的基本布局 -->
<!-- 存放Header或者Footer -->
<template>
    <div class="app-layout" :class="{ dark: colorMode === 'dark' }">
        <AppHeader :theme="colorMode" />
        <main class="main-content">
            <slot />
        </main>
        <AppFooter :theme="colorMode" />
    </div>
</template>

<script setup>
const { colorMode } = useTheme()
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f3f4f6;
    background-image:
        radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.1) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.05) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.05) 0px, transparent 50%);
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #334155;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.app-layout.dark {
    background-color: #0f172a;
    background-image:
        radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.1) 0px, transparent 50%);
    color: #e2e8f0;
}

.main-content {
    flex: 1;
    width: 100%;
}
</style>