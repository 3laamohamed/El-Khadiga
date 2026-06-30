<template>
  <div>
    <div v-if="loading" class="loading-overlay">
      <LoadingSpinner message="Loading contact details" />
    </div>

    <template v-else>
      <section class="contact-hero">
        <div class="contact-hero__glow contact-hero__glow--red"></div>
        <div class="contact-hero__glow contact-hero__glow--green"></div>

        <div class="container contact-hero__grid">
          <ScrollReveal>
            <div class="contact-hero__content">
              <span class="eyebrow">Contact El-Khadiga</span>
              <h1>Let's talk about your next frozen produce shipment.</h1>
              <p>
                Send your inquiry, product list, or export requirements. Our team will
                respond with the details you need to move forward confidently.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="contact-snapshot">
              <span class="contact-snapshot__label">Export Desk</span>
              <strong>Fast commercial response</strong>
              <p>Frozen IQF fruits and vegetables from Egypt to international markets.</p>
              <div class="contact-snapshot__status">
                <span></span>
                Available for B2B inquiries
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="contact-main">
        <div class="container contact-grid">
          <ScrollReveal>
            <aside class="contact-panel">
              <span class="eyebrow">Reach Us Directly</span>
              <h2>Choose the easiest channel for your team.</h2>

              <div class="contact-card-list">
                <a
                  v-for="card in contactCards"
                  :key="card.label"
                  class="contact-card"
                  :href="card.href"
                >
                  <span class="contact-card__icon" aria-hidden="true">{{ card.initial }}</span>
                  <span>
                    <strong>{{ card.label }}</strong>
                    <small>{{ card.value }}</small>
                  </span>
                </a>
              </div>

              <div class="response-card">
                <strong>What to include</strong>
                <p>Product type, target quantity, destination market, packaging needs, and timeline.</p>
              </div>
            </aside>
          </ScrollReveal>

          <ScrollReveal>
            <div class="form-panel">
              <span class="form-panel__badge">Inquiry Form</span>
              <h2>Send a message</h2>
              <p>Tell us what you are sourcing and we will get back to you with the next steps.</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="export-section">
        <div class="container">
          <ScrollReveal>
            <div class="export-panel">
              <div>
                <span class="eyebrow">Global Supply</span>
                <h2>Premium Egyptian frozen produce, prepared for international buyers.</h2>
              </div>
              <router-link to="/products" class="btn btn-primary">View Product Range</router-link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getContactInfo } from '../api';
import ContactForm from '../components/ContactForm.vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const loading = ref(true);
const info = ref({ email: '', phone: '', phone_secondary: '' });

const cleanPhone = (phone = '') => String(phone).replace(/\s+/g, '');

const contactCards = computed(() => [
  {
    label: 'Email',
    value: info.value.email,
    href: `mailto:${info.value.email}`,
    initial: 'E',
  },
  {
    label: 'Phone',
    value: info.value.phone,
    href: `tel:${cleanPhone(info.value.phone)}`,
    initial: 'P',
  },
  ...(info.value.phone_secondary ? [{
    label: 'Alt Phone',
    value: info.value.phone_secondary,
    href: `tel:${cleanPhone(info.value.phone_secondary)}`,
    initial: 'A',
  }] : []),
].filter((card) => card.value));

onMounted(async () => {
  try {
    const { data: res } = await getContactInfo();
    info.value = res.data;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.contact-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(5rem, 9vw, 8rem) 0 clamp(4rem, 7vw, 6rem);
  background:
    linear-gradient(135deg, rgba(15, 21, 17, 0.96), rgba(31, 45, 34, 0.92)),
    radial-gradient(circle at 20% 10%, rgba(169, 30, 44, 0.32), transparent 28rem);
}

.contact-hero::after {
  content: '';
  position: absolute;
  right: -12%;
  bottom: -28%;
  width: min(60vw, 760px);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  box-shadow: inset 0 0 0 72px rgba(255, 255, 255, 0.035);
}

.contact-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

.contact-hero__content {
  max-width: 760px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: '';
  width: 34px;
  height: 2px;
  background: currentColor;
}

.contact-hero h1 {
  color: var(--color-bg-white);
  font-size: clamp(2.6rem, 7vw, 5.5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.contact-hero__content p {
  max-width: 620px;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
}

.contact-hero__glow {
  position: absolute;
  width: 20rem;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(28px);
  opacity: 0.36;
}

.contact-hero__glow--red {
  left: 3rem;
  bottom: -8rem;
  background: var(--color-primary);
}

.contact-hero__glow--green {
  top: -7rem;
  right: 18%;
  background: var(--color-secondary);
}

.contact-snapshot {
  position: relative;
  overflow: hidden;
  padding: clamp(2rem, 5vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(18px);
}

.contact-snapshot::before {
  content: '';
  position: absolute;
  top: -40%;
  right: -25%;
  width: 280px;
  aspect-ratio: 1;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}

.contact-snapshot__label {
  display: inline-flex;
  margin-bottom: 5rem;
  color: rgba(255, 255, 255, 0.66);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-snapshot strong {
  display: block;
  max-width: 360px;
  color: var(--color-bg-white);
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  line-height: 1.05;
}

.contact-snapshot p {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
}

.contact-snapshot__status {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 2rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-bg-white);
  font-size: 0.9rem;
  font-weight: 700;
}

.contact-snapshot__status span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--color-secondary);
  box-shadow: 0 0 0 6px rgba(90, 143, 60, 0.18);
}

.contact-main {
  padding: 6rem 0;
  background:
    radial-gradient(circle at 8% 14%, rgba(90, 143, 60, 0.1), transparent 24rem),
    linear-gradient(180deg, #fafafa, #f2f2ee);
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.contact-panel,
.form-panel {
  background: var(--color-bg-white);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.08);
}

.contact-panel {
  position: sticky;
  top: 120px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 30px;
}

.contact-panel h2 {
  margin-bottom: 2rem;
  color: var(--color-text);
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.contact-card-list {
  display: grid;
  gap: 0.85rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 74px;
  padding: 1rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 22px;
  background: #fbfbf8;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.contact-card:hover {
  transform: translateY(-3px);
  border-color: rgba(169, 30, 44, 0.2);
  box-shadow: var(--shadow-card);
}

.contact-card__icon {
  display: grid;
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  place-items: center;
  border-radius: 16px;
  background: rgba(169, 30, 44, 0.1);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-weight: 800;
}

.contact-card strong {
  display: block;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-card small {
  display: block;
  margin-top: 0.2rem;
  color: var(--color-text);
  font-size: 0.95rem;
  word-break: break-word;
}

.response-card {
  margin-top: 1rem;
  padding: 1.25rem;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(90, 143, 60, 0.12), rgba(169, 30, 44, 0.08));
}

.response-card strong {
  display: block;
  margin-bottom: 0.4rem;
  color: var(--color-text);
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.response-card p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.form-panel {
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 34px;
}

.form-panel::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 38%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(169, 30, 44, 0.06));
  pointer-events: none;
}

.form-panel__badge {
  position: relative;
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(90, 143, 60, 0.12);
  color: var(--color-secondary-dark);
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.form-panel h2 {
  position: relative;
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.form-panel > p {
  position: relative;
  max-width: 560px;
  margin: 1rem 0 2rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

.export-section {
  padding: 0 0 6rem;
  background: #f2f2ee;
}

.export-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.16), transparent 24rem),
    linear-gradient(135deg, #151c17, #263a2b);
}

.export-panel h2 {
  max-width: 760px;
  color: var(--color-bg-white);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.export-panel .btn-primary {
  flex: 0 0 auto;
}

@media (max-width: 980px) {
  .contact-hero__grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-panel {
    position: static;
  }

  .export-panel {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .contact-hero {
    padding: 4rem 0;
  }

  .contact-hero h1 {
    font-size: clamp(2.3rem, 15vw, 4rem);
  }

  .contact-snapshot__label {
    margin-bottom: 3rem;
  }

  .contact-card {
    align-items: flex-start;
  }

  .export-panel .btn,
  .form-panel :deep(.contact-form__submit) {
    width: 100%;
  }
}
</style>
