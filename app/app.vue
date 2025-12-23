<template>
  <div class="app-container" :class="{ dark: colorMode === 'dark' }">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { initTheme, colorMode } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
:root {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  transition: background 0.3s ease, color 0.3s ease;
  background-color: #F6F9FB;
}

html.dark,
body,
dark {
  background-color: #111C30;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.app-container {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%);
  transition: background 0.3s ease;
}

/* Dark mode styles */
.app-container.dark {
  background: linear-gradient(to bottom, #0f172a 0%, #1e293b 100%);
}

h1,
h2 {
  color: #111827;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 2rem 0 1rem 0;
  transition: color 0.3s ease;
}

.app-container.dark h1,
.app-container.dark h2 {
  color: #e2e8f0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  color: #374151;
}

.app-container.dark h2 {
  color: #cbd5e1;
}

p {
  color: #6b7280;
  line-height: 1.7;
  font-size: 15px;
  transition: color 0.3s ease;
}

.app-container.dark p {
  color: #94a3b8;
}

::selection {
  background: rgba(148, 163, 184, 0.2);
  color: inherit;
  text-decoration: none;
}

.app-container.dark ::selection {
  background: rgba(148, 163, 184, 0.3);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(20px) scale(0.98);
}

pre,
code {
  border: none !important;
}
</style>
