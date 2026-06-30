<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <router-link to="/" class="navbar__logo">
        <img :src="logoSrc" alt="El-Khadiga for Export" />
      </router-link>

      <button class="navbar__toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <nav class="navbar__nav" :class="{ 'navbar__nav--open': menuOpen }">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { getContactInfo } from '../api';

const scrolled = ref(false);
const menuOpen = ref(false);
const logoSrc = ref('/images/logo.png');

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

const onScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(async () => {
  window.addEventListener('scroll', onScroll);

  try {
    const { data: res } = await getContactInfo();
    if (res.data?.logo_url) {
      logoSrc.value = res.data.logo_url;
    }
  } catch (error) {
    // keep default logo
  }
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-bg-white);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: box-shadow 300ms ease;
}

.navbar--scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 112px;
}

.navbar__logo img {
  height: 96px;
  width: auto;
}

.navbar__nav {
  display: flex;
  gap: 2rem;
}

.navbar__link {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text);
  position: relative;
  padding-bottom: 4px;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 300ms ease;
}

.navbar__link:hover::after,
.navbar__link.router-link-active::after {
  width: 100%;
}

.navbar__link.router-link-active {
  color: var(--color-primary);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: 300ms ease;
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__nav {
    position: fixed;
    top: 96px;
    left: 0;
    right: 0;
    background: var(--color-bg-white);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 300ms ease, opacity 300ms ease;
  }

  .navbar__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__inner {
    height: 96px;
  }

  .navbar__logo img {
    height: 78px;
  }
}
</style>
