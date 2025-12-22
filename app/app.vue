<template>
  <div class="app-container">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

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
}

h1,
h2 {
  color: #111827;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 2rem 0 1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  color: #374151;
}

p {
  color: #6b7280;
  line-height: 1.7;
  font-size: 15px;
}

::selection {
  background: rgba(148, 163, 184, 0.2);
  color: inherit;
  text-decoration: none;
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
</style>
