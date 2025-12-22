<template>
    <header class="app-header">
        <nav class="nav-container">
            <!-- Logo -->
            <div class="logo">
                <NuxtLink to="/" class="logo-link">
                    <span class="logo-text">Radiant</span>
                </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="nav-links desktop-nav">
                <NuxtLink to="/" class="nav-link" active-class="active">
                    Home
                </NuxtLink>
                <NuxtLink to="/posts" class="nav-link" active-class="active">
                    Articles
                </NuxtLink>
                <NuxtLink to="/about" class="nav-link" active-class="active">
                    About
                </NuxtLink>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
                <span class="hamburger" :class="{ 'open': mobileMenuOpen }"></span>
            </button>
        </nav>

        <!-- Mobile Navigation -->
        <transition name="slide">
            <div v-if="mobileMenuOpen" class="mobile-nav">
                <NuxtLink to="/" class="nav-link" active-class="active" @click="closeMobileMenu">
                    首页
                </NuxtLink>
                <NuxtLink to="/posts" class="nav-link" active-class="active" @click="closeMobileMenu">
                    文章
                </NuxtLink>
                <NuxtLink to="/about" class="nav-link" active-class="active" @click="closeMobileMenu">
                    关于
                </NuxtLink>
            </div>
        </transition>
    </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}

// 监听路由变化，关闭移动菜单
const route = useRoute()
watch(() => route.path, () => {
    closeMobileMenu()
})
</script>

<style scoped>
.app-header {
    background: rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo */
.logo {
    flex-shrink: 0;
}

.logo-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 500;
    color: #334155;
    letter-spacing: -0.02em;
    transform: scale(1);
    transition: all 0.2s ease;
}

.logo-link:hover .logo-text {
    color: #64748b;
}

/* Desktop Navigation */
.desktop-nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    position: relative;
}

.nav-link:hover {
    color: #334155;
    background: rgba(255, 255, 255, 0.5);
}

.nav-link.active {
    color: #0f172a;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.nav-link:hover {
    color: #111827;
    background: #f9fafb;
}

.nav-link.active {
    color: #111827;
    background: #f3f4f6;
    font-weight: 500;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
}

.hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: #111827;
    position: relative;
    transition: all 0.2s ease;
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #111827;
    transition: all 0.2s ease;
}

.hamburger::before {
    top: -8px;
}

.hamburger::after {
    top: 8px;
}

.hamburger.open {
    background: transparent;
}

.hamburger.open::before {
    transform: rotate(45deg);
    top: 0;
}

.hamburger.open::after {
    transform: rotate(-45deg);
    top: 0;
}

/* Mobile Navigation */
.mobile-nav {
    display: none;
    flex-direction: column;
    background: #ffffff;
    padding: 1rem;
    gap: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.mobile-nav .nav-link {
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
    overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
    opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }

    .mobile-menu-toggle {
        display: block;
    }

    .mobile-nav {
        display: flex;
    }

    .nav-container {
        padding: 1rem;
    }

    .logo-text {
        font-size: 1.25rem;
    }
}

/* Add smooth scroll behavior */
:global(html) {
    scroll-behavior: smooth;
}
</style>
