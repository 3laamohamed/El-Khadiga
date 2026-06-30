<template>
  <div>
    <div v-if="loading" class="loading-overlay">
      <LoadingSpinner message="Loading our story" />
    </div>

    <template v-else>
      <section class="about-hero">
        <div class="about-hero__orb about-hero__orb--red"></div>
        <div class="about-hero__orb about-hero__orb--green"></div>

        <div class="container about-hero__grid">
          <ScrollReveal>
            <div class="about-hero__content">
              <span class="eyebrow">About El-Khadiga</span>
              <h1>Frozen IQF produce built for global supply chains.</h1>
              <p>
                From Egyptian farms to international markets, we focus on clean sourcing,
                reliable freezing, and export-ready quality for fruits and vegetables.
              </p>
              <div class="about-hero__actions">
                <router-link to="/products" class="btn btn-primary">Explore Products</router-link>
                <router-link to="/contact" class="btn btn-ghost">Start Export Inquiry</router-link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="hero-card" aria-label="Export quality highlights">
              <div class="hero-card__top">
                <span>IQF Export Standard</span>
                <strong>Egyptian origin</strong>
              </div>
              <div class="hero-card__visual">
                <div class="hero-card__ring"></div>
                <div class="hero-card__plate">
                  <span class="hero-card__line"></span>
                  <span class="hero-card__line hero-card__line--short"></span>
                  <span class="hero-card__line"></span>
                </div>
              </div>
              <div class="hero-card__meta">
                <div>
                  <span>Cold Chain</span>
                  <strong>Controlled</strong>
                </div>
                <div>
                  <span>Markets</span>
                  <strong>Global</strong>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="story-section">
        <div class="container">
          <ScrollReveal>
            <div class="story-panel">
              <div class="story-panel__label">Our Story</div>
              <p class="about-text">{{ data.about }}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="proof-section">
        <div class="container">
          <ScrollReveal>
            <div class="proof-grid">
              <div v-for="point in proofPoints" :key="point.label" class="proof-card">
                <strong>{{ point.value }}</strong>
                <span>{{ point.label }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="mvg-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">What Drives Us</span>
            <h2>Quality, trust, and long-term export partnerships.</h2>
          </div>

          <div class="mvg-grid">
            <ScrollReveal v-for="item in mvgItems" :key="item.label">
              <article class="mvg-card">
                <span class="mvg-card__number">{{ item.number }}</span>
                <h3>{{ item.label }}</h3>
                <p>{{ item.text }}</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section class="process-section">
        <div class="container process-grid">
          <div class="section-heading section-heading--sticky">
            <span class="eyebrow">How We Work</span>
            <h2>A simple process designed for consistent export quality.</h2>
          </div>

          <div class="process-list">
            <ScrollReveal v-for="step in processSteps" :key="step.title">
              <article class="process-step">
                <span>{{ step.number }}</span>
                <div>
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <ScrollReveal>
            <div class="cta-panel">
              <span class="eyebrow">Ready To Source?</span>
              <h2>Let's prepare your next frozen produce shipment.</h2>
              <router-link to="/contact" class="btn btn-primary">Contact Our Team</router-link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getAbout } from '../api';
import ScrollReveal from '../components/ScrollReveal.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const loading = ref(true);
const data = ref({ about: '', mission: '', vision: '', goal: '' });

const mvgItems = computed(() => [
  { number: '01', label: 'Mission', text: data.value.mission },
  { number: '02', label: 'Vision', text: data.value.vision },
  { number: '03', label: 'Goal', text: data.value.goal },
]);

const proofPoints = [
  { value: 'IQF', label: 'Frozen produce expertise' },
  { value: 'B2B', label: 'Built for importers and distributors' },
  { value: 'EG', label: 'Sourced from Egyptian agriculture' },
  { value: '24/7', label: 'Export-focused communication' },
];

const processSteps = [
  {
    number: '01',
    title: 'Selective Sourcing',
    description: 'We focus on produce that matches export expectations for freshness, sizing, and consistency.',
  },
  {
    number: '02',
    title: 'IQF Handling',
    description: 'Fast freezing keeps color, texture, and natural flavor ready for commercial kitchens and retail packs.',
  },
  {
    number: '03',
    title: 'Export Preparation',
    description: 'Orders are prepared with clear communication around product details, packing, and shipping needs.',
  },
];

onMounted(async () => {
  try {
    const { data: res } = await getAbout();
    data.value = res.data;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.about-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(5rem, 8vw, 8rem) 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(169, 30, 44, 0.2), transparent 28rem),
    radial-gradient(circle at 88% 10%, rgba(90, 143, 60, 0.2), transparent 26rem),
    linear-gradient(135deg, #111713 0%, #1f2d22 62%, #243827 100%);
}

.about-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 120px;
  background: linear-gradient(180deg, transparent, rgba(250, 250, 250, 0.96));
  pointer-events: none;
}

.about-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

.about-hero__content {
  max-width: 680px;
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

.about-hero h1 {
  max-width: 760px;
  color: var(--color-bg-white);
  font-size: clamp(2.6rem, 7vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.about-hero__content p {
  max-width: 620px;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-bg-white);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(14px);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.about-hero__orb {
  position: absolute;
  width: 18rem;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.42;
}

.about-hero__orb--red {
  right: 43%;
  bottom: -5rem;
  background: var(--color-primary);
}

.about-hero__orb--green {
  right: -6rem;
  top: 4rem;
  background: var(--color-secondary);
}

.hero-card {
  position: relative;
  min-height: 520px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 34px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.58)),
    linear-gradient(135deg, rgba(169, 30, 44, 0.18), rgba(90, 143, 60, 0.14));
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
}

.hero-card__top,
.hero-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.hero-card__top {
  padding: 1rem 1rem 0;
}

.hero-card span {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-card strong {
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  text-transform: uppercase;
}

.hero-card__visual {
  position: relative;
  display: grid;
  min-height: 350px;
  place-items: center;
}

.hero-card__ring {
  width: min(82%, 330px);
  aspect-ratio: 1;
  border: 34px solid rgba(90, 143, 60, 0.14);
  border-right-color: rgba(169, 30, 44, 0.74);
  border-bottom-color: rgba(169, 30, 44, 0.3);
  border-radius: 999px;
  transform: rotate(-24deg);
}

.hero-card__plate {
  position: absolute;
  display: grid;
  gap: 0.8rem;
  width: min(64%, 260px);
  padding: 2rem;
  border-radius: 26px;
  background: rgba(26, 26, 26, 0.86);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
}

.hero-card__line {
  display: block;
  height: 13px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-secondary), rgba(255, 255, 255, 0.58));
}

.hero-card__line--short {
  width: 64%;
  background: linear-gradient(90deg, var(--color-primary), rgba(255, 255, 255, 0.5));
}

.hero-card__meta {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  left: 1.25rem;
  padding: 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.74);
}

.story-section {
  padding: 5rem 0 2rem;
}

.story-panel {
  position: relative;
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  padding: clamp(2rem, 5vw, 4rem);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 32px;
  background: var(--color-bg-white);
  box-shadow: var(--shadow-card);
}

.story-panel::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 38%;
  height: 100%;
  border-radius: 0 32px 32px 0;
  background: linear-gradient(135deg, transparent, rgba(90, 143, 60, 0.08));
  pointer-events: none;
}

.story-panel__label {
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.about-text {
  position: relative;
  color: var(--color-text);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.9;
}

.proof-section {
  padding: 2rem 0 5rem;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.proof-card {
  padding: 1.5rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 24px;
  background: linear-gradient(180deg, #ffffff, #f7f7f2);
}

.proof-card strong {
  display: block;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
}

.proof-card span {
  display: block;
  margin-top: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.mvg-section {
  padding: 5rem 0;
  background:
    radial-gradient(circle at top left, rgba(169, 30, 44, 0.1), transparent 26rem),
    linear-gradient(180deg, #172019, #101410);
}

.section-heading {
  max-width: 680px;
  margin-bottom: 2.5rem;
}

.section-heading h2 {
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.mvg-section .section-heading h2 {
  color: var(--color-bg-white);
}

.mvg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.mvg-card {
  min-height: 320px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  transition: transform var(--transition), border-color var(--transition), background var(--transition);
}

.mvg-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.1);
}

.mvg-card__number {
  display: inline-flex;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.42);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 800;
}

.mvg-card h3 {
  color: var(--color-bg-white);
  font-size: 1.35rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.mvg-card p {
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.8;
}

.process-section {
  padding: 6rem 0;
  background: var(--color-bg-white);
}

.process-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.section-heading--sticky {
  position: sticky;
  top: 120px;
}

.process-list {
  display: grid;
  gap: 1rem;
}

.process-step {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 1.25rem;
  padding: 1.5rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 26px;
  background: #fbfbf8;
}

.process-step > span {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 18px;
  background: var(--color-primary);
  color: var(--color-bg-white);
  font-family: var(--font-heading);
  font-weight: 800;
}

.process-step h3 {
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 1.2rem;
}

.process-step p {
  color: var(--color-text-muted);
  line-height: 1.75;
}

.cta-section {
  padding: 0 0 6rem;
}

.cta-panel {
  display: grid;
  justify-items: center;
  padding: clamp(2.5rem, 6vw, 5rem);
  border-radius: 34px;
  text-align: center;
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), transparent 24rem),
    linear-gradient(135deg, var(--color-primary), #5f1119);
  box-shadow: 0 28px 80px rgba(169, 30, 44, 0.26);
}

.cta-panel .eyebrow,
.cta-panel h2 {
  color: var(--color-bg-white);
}

.cta-panel h2 {
  max-width: 720px;
  margin-bottom: 2rem;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.cta-panel .btn-primary {
  background: var(--color-bg-white);
  color: var(--color-primary);
}

@media (max-width: 980px) {
  .about-hero {
    background:
      radial-gradient(circle at 12% 20%, rgba(169, 30, 44, 0.2), transparent 24rem),
      linear-gradient(160deg, #111713 0%, #1f2d22 72%, #243827 100%);
  }

  .about-hero__grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-card {
    min-height: 460px;
  }

  .proof-grid,
  .mvg-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-heading--sticky {
    position: static;
  }
}

@media (max-width: 640px) {
  .about-hero {
    padding: 4rem 0 3rem;
  }

  .about-hero h1 {
    font-size: clamp(2.3rem, 15vw, 4rem);
  }

  .about-hero__actions,
  .about-hero__actions .btn,
  .cta-panel .btn {
    width: 100%;
  }

  .hero-card {
    min-height: 380px;
    border-radius: 26px;
  }

  .hero-card__visual {
    min-height: 260px;
  }

  .story-panel,
  .process-step {
    grid-template-columns: 1fr;
  }

  .proof-grid,
  .mvg-grid {
    grid-template-columns: 1fr;
  }

  .mvg-card {
    min-height: auto;
  }
}
</style>
