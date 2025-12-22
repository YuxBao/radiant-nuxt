<template>
    <footer class="app-footer">
        <div class="footer-container">
            <p class="footer-text">
                © {{ currentYear }} Radiant Theme. Built with Nuxt 4
            </p>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
    background: rgba(255, 255, 255, 0.4);
    color: #94a3b8;
    padding: 2rem 0;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
}

.footer-text {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.01em;
}

@media (max-width: 768px) {
    .footer-container {
        padding: 0 1rem;
    }

    .footer-text {
        font-size: 0.85rem;
    }
}
</style>
