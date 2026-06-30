<template>
  <footer class="footer">
    <div class="footer__glow footer__glow--red"></div>
    <div class="footer__glow footer__glow--green"></div>

    <div class="container">
      <div class="footer__cta">
        <div>
          <span class="footer__eyebrow">Export With Confidence</span>
          <h2>Ready to source Egyptian frozen produce?</h2>
        </div>
        <router-link to="/contact" class="footer__cta-link">Start Inquiry</router-link>
      </div>

      <div class="footer__inner">
        <div class="footer__brand">
          <router-link to="/" class="footer__logo-link">
            <img :src="info.logo_url || '/images/logo.png'" alt="El-Khadiga for Export" class="footer__logo" />
          </router-link>
          <p>Premium IQF frozen fruits and vegetables prepared for international B2B export.</p>
          <div class="footer__badges">
            <span>IQF</span>
            <span>Egyptian Origin</span>
            <span>B2B Export</span>
          </div>
        </div>

        <nav class="footer__column" aria-label="Footer navigation">
          <h3>Company</h3>
          <div class="footer__links">
            <router-link v-for="link in links" :key="link.to" :to="link.to">
              {{ link.label }}
            </router-link>
          </div>
        </nav>

        <div class="footer__column">
          <h3>Contact</h3>
          <div class="footer__contact-list">
            <a v-if="info.email" :href="`mailto:${info.email}`">{{ info.email }}</a>
            <a v-if="info.phone" :href="`tel:${cleanPhone(info.phone)}`">{{ info.phone }}</a>
            <a v-if="info.phone_secondary" :href="`tel:${cleanPhone(info.phone_secondary)}`">
              {{ info.phone_secondary }}
            </a>
          </div>
        </div>
      </div>

      <div class="footer__copy">
        <span>&copy; {{ year }} El-Khadiga for Export. All rights reserved.</span>
        <a
          class="footer__developer"
          href="https://wa.me/201044445330"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Arkan
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getContactInfo } from '../api';

const year = new Date().getFullYear();
const info = ref({ email: '', phone: '', phone_secondary: '', logo_url: '/images/logo.png' });

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

const cleanPhone = (phone = '') => String(phone).replace(/\s+/g, '');

onMounted(async () => {
  try {
    const { data: res } = await getContactInfo();
    info.value = res.data || info.value;
  } catch (error) {
    info.value = info.value;
  }
});
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 12%, rgba(169, 30, 44, 0.22), transparent 28rem),
    radial-gradient(circle at 90% 18%, rgba(90, 143, 60, 0.18), transparent 28rem),
    linear-gradient(180deg, #141b16, #090c0a);
  color: var(--color-bg-white);
  padding: 5rem 0 1.5rem;
}

.footer__glow {
  position: absolute;
  width: 18rem;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(30px);
  opacity: 0.3;
}

.footer__glow--red {
  left: -6rem;
  bottom: 5rem;
  background: var(--color-primary);
}

.footer__glow--green {
  top: 3rem;
  right: -7rem;
  background: var(--color-secondary);
}

.footer .container {
  position: relative;
  z-index: 1;
}

.footer__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: clamp(1.75rem, 4vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(16px);
}

.footer__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.8rem;
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.footer__eyebrow::before {
  content: '';
  width: 34px;
  height: 2px;
  background: currentColor;
}

.footer__cta h2 {
  max-width: 720px;
  color: var(--color-bg-white);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.footer__cta-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0.9rem 1.5rem;
  border-radius: 18px;
  background: var(--color-bg-white);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform var(--transition), box-shadow var(--transition);
}

.footer__cta-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
}

.footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(180px, 0.7fr) minmax(220px, 0.8fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  padding: 2rem 0 2.5rem;
}

.footer__logo-link {
  display: inline-block;
  margin-bottom: 1.25rem;
}

.footer__logo {
  height: 96px;
  width: auto;
  display: block;
}

.footer__brand p {
  max-width: 420px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.98rem;
  line-height: 1.75;
}

.footer__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.4rem;
}

.footer__badges span {
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer__column h3 {
  margin-bottom: 1rem;
  color: var(--color-bg-white);
  font-size: 0.84rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer__links a,
.footer__contact-list a {
  width: fit-content;
  color: rgba(255, 255, 255, 0.68);
  font-family: var(--font-heading);
  font-size: 0.84rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color var(--transition), transform var(--transition);
}

.footer__links a:hover,
.footer__contact-list a:hover {
  color: var(--color-secondary);
  transform: translateX(4px);
}

.footer__contact-list {
  display: grid;
  gap: 0.85rem;
}

.footer__contact-list a {
  text-transform: none;
  letter-spacing: 0;
  line-height: 1.5;
}

.footer__copy {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.8rem;
}

.footer__copy span {
  color: rgba(255, 255, 255, 0.5);
}

.footer__developer {
  color: var(--color-secondary);
  font-weight: 700;
  transition: color 300ms ease;
}

.footer__developer:hover {
  color: var(--color-bg-white);
}

@media (max-width: 900px) {
  .footer__cta {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer__inner {
    grid-template-columns: 1fr;
  }

  .footer__copy {
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer {
    padding-top: 3.5rem;
  }

  .footer__cta-link {
    width: 100%;
  }

  .footer__logo {
    height: 78px;
  }

  .footer__links a,
  .footer__contact-list a {
    width: auto;
  }

  .footer__column,
  .footer__brand {
    text-align: center;
  }

  .footer__badges,
  .footer__links {
    justify-content: center;
    align-items: center;
  }

  .footer__contact-list {
    justify-items: center;
  }
}
</style>
