<template>
  <div>
    <div v-if="loading" class="loading-overlay">
      <LoadingSpinner :message="data.loading_message" />
    </div>

    <template v-else>
      <HeroBanner
        :tagline="data.hero_tagline"
        :subtitle="data.intro"
        :eyebrow="data.hero_eyebrow"
        :badge1-label="data.hero_badge_1_label"
        :badge1-value="data.hero_badge_1_value"
        :badge2-label="data.hero_badge_2_label"
        :badge2-value="data.hero_badge_2_value"
        :image-url="data.hero_image_url"
      />

      <section class="home-story">
        <div class="container">
          <ScrollReveal>
            <div class="story-grid">
              <div class="story-heading">
                <span class="eyebrow">{{ data.story_eyebrow }}</span>
                <h2>{{ data.story_heading }}</h2>
              </div>

              <div class="story-card">
                <p class="intro-text">{{ data.about_excerpt }}</p>
                <div class="story-actions">
                  <router-link to="/about" class="btn btn-primary">{{ data.story_btn_primary }}</router-link>
                  <router-link to="/contact" class="btn btn-soft">{{ data.story_btn_secondary }}</router-link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="pillars-section">
        <div class="container">
          <ScrollReveal>
            <div class="pillars-heading">
              <span class="eyebrow">{{ data.pillars_eyebrow }}</span>
              <h2>{{ data.pillars_heading }}</h2>
            </div>

            <div class="trust-strip">
              <div v-for="item in data.trust_items" :key="item.label">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </div>
            </div>

            <div class="pillars-grid">
              <article v-for="(pillar, index) in data.pillars" :key="pillar.title" class="pillar-card">
                <span class="pillar-card__number">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3>{{ pillar.title }}</h3>
                <p>{{ pillar.description }}</p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="section featured-section">
        <div class="container">
          <ScrollReveal>
            <div class="featured-panel">
              <div class="featured-heading">
                <div>
                  <span class="eyebrow">{{ data.featured_eyebrow }}</span>
                  <h2>{{ data.featured_heading }}</h2>
                </div>

                <div class="featured-stats">
                  <strong>{{ data.featured_products.length }}</strong>
                  <span>{{ data.featured_stats_label }}</span>
                </div>
              </div>

              <div class="featured-intro">
                <p>{{ data.featured_intro }}</p>
                <router-link to="/products" class="featured-link">{{ data.featured_link_text }}</router-link>
              </div>

              <div class="product-grid featured-grid">
                <ProductCard
                  v-for="product in data.featured_products"
                  :key="product.id"
                  :product="product"
                  @select="openProduct"
                />
              </div>
            </div>

            <div class="featured-actions">
              <router-link to="/products" class="btn btn-primary">{{ data.featured_btn_text }}</router-link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProductModal v-if="selectedProduct" :product="selectedProduct" @close="selectedProduct = null" />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getHome } from '../api';
import HeroBanner from '../components/HeroBanner.vue';
import ProductCard from '../components/ProductCard.vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import ProductModal from '../components/ProductModal.vue';

const loading = ref(true);
const selectedProduct = ref(null);
const data = ref({
  loading_message: '',
  hero_tagline: '',
  intro: '',
  hero_eyebrow: '',
  hero_badge_1_label: '',
  hero_badge_1_value: '',
  hero_badge_2_label: '',
  hero_badge_2_value: '',
  hero_image_url: '',
  story_eyebrow: '',
  story_heading: '',
  about_excerpt: '',
  story_btn_primary: '',
  story_btn_secondary: '',
  pillars_eyebrow: '',
  pillars_heading: '',
  trust_items: [],
  pillars: [],
  featured_eyebrow: '',
  featured_heading: '',
  featured_intro: '',
  featured_stats_label: '',
  featured_link_text: '',
  featured_btn_text: '',
  featured_products: [],
});

const openProduct = (product) => {
  selectedProduct.value = product;
};

onMounted(async () => {
  try {
    const { data: res } = await getHome();
    data.value = res.data;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.home-story {
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  background:
    radial-gradient(circle at 8% 20%, rgba(90, 143, 60, 0.1), transparent 24rem),
    linear-gradient(180deg, #fafafa, #f3f1ec);
}

.story-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.86fr) minmax(0, 1.14fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
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

.story-heading h2,
.pillars-heading h2 {
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.story-card {
  position: relative;
  overflow: hidden;
  padding: clamp(1.6rem, 4vw, 3rem);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.08);
}

.story-card::after {
  content: '';
  position: absolute;
  right: -4rem;
  bottom: -5rem;
  width: 14rem;
  aspect-ratio: 1;
  border-radius: 999px;
  background: rgba(169, 30, 44, 0.08);
}

.intro-text {
  position: relative;
  color: var(--color-text);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  line-height: 1.85;
}

.story-actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.8rem;
}

.btn-soft {
  background: rgba(169, 30, 44, 0.08);
  color: var(--color-primary);
  border: 1px solid rgba(169, 30, 44, 0.16);
}

.btn-soft:hover {
  background: rgba(169, 30, 44, 0.13);
  transform: translateY(-2px);
}

.pillars-section {
  padding: 6rem 0;
  background:
    radial-gradient(circle at top left, rgba(169, 30, 44, 0.12), transparent 26rem),
    linear-gradient(180deg, #172019, #101410);
}

.pillars-heading {
  max-width: 760px;
  margin-bottom: 2rem;
}

.pillars-heading h2 {
  color: var(--color-bg-white);
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.trust-strip div {
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.07);
}

.trust-strip strong {
  display: block;
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
}

.trust-strip span {
  display: block;
  margin-top: 0.55rem;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.pillar-card {
  min-height: 280px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  transition: transform var(--transition), background var(--transition), border-color var(--transition);
}

.pillar-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.1);
}

.pillar-card__number {
  display: inline-flex;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--font-heading);
  font-weight: 800;
}

.pillar-card h3 {
  color: var(--color-bg-white);
  text-transform: uppercase;
  font-size: 1.12rem;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.pillar-card p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  line-height: 1.75;
}

.featured-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 92% 12%, rgba(169, 30, 44, 0.1), transparent 24rem),
    linear-gradient(180deg, #fbfbf8, #ffffff);
}

.featured-panel {
  position: relative;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 36px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.8)),
    radial-gradient(circle at top right, rgba(90, 143, 60, 0.12), transparent 24rem);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.08);
}

.featured-panel::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 36%;
  height: 100%;
  border-radius: 0 36px 36px 0;
  background: linear-gradient(135deg, transparent, rgba(169, 30, 44, 0.06));
  pointer-events: none;
}

.featured-heading,
.featured-intro,
.featured-grid {
  position: relative;
}

.featured-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.25rem;
}

.featured-heading h2 {
  max-width: 760px;
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.featured-stats {
  min-width: 150px;
  padding: 1.25rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.76);
  text-align: center;
}

.featured-stats strong {
  display: block;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 2.5rem;
  line-height: 1;
}

.featured-stats span {
  display: block;
  margin-top: 0.45rem;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.featured-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(26, 26, 26, 0.08);
}

.featured-intro p {
  max-width: 620px;
  color: var(--color-text-muted);
  line-height: 1.75;
}

.featured-link {
  flex: 0 0 auto;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color var(--transition), transform var(--transition);
}

.featured-link:hover {
  color: var(--color-primary-dark);
  transform: translateX(4px);
}

.featured-grid {
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
}

.featured-actions {
  text-align: center;
  margin-top: 2.5rem;
}

@media (max-width: 900px) {
  .story-grid {
    grid-template-columns: 1fr;
  }

  .trust-strip {
    grid-template-columns: 1fr;
  }

  .featured-heading,
  .featured-intro {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .home-story,
  .pillars-section {
    padding: 4rem 0;
  }

  .story-actions,
  .story-actions .btn {
    width: 100%;
  }

  .featured-panel {
    padding: 1rem;
    border-radius: 28px;
  }

  .featured-stats,
  .featured-link,
  .featured-actions .btn {
    width: 100%;
  }

  .featured-stats {
    text-align: left;
  }
}
</style>
