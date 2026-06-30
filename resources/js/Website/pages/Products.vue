<template>
  <div>
    <div v-if="loading" class="loading-overlay">
      <LoadingSpinner :message="loadingMessage" />
    </div>

    <template v-else>
      <section class="products-hero">
        <div class="products-hero__glow products-hero__glow--red"></div>
        <div class="products-hero__glow products-hero__glow--green"></div>

        <div class="container products-hero__grid">
          <ScrollReveal>
            <div class="products-hero__content">
              <span class="eyebrow">IQF Product Range</span>
              <h1>Premium frozen fruits and vegetables for export.</h1>
              <p>
                Browse commercial-grade IQF products prepared for importers,
                distributors, food service, and retail supply chains.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="products-summary">
              <span class="products-summary__label">Current Selection</span>
              <strong>{{ activeCategoryName }}</strong>
              <p>{{ filteredProducts.length }} products available for inquiry.</p>
              <div class="products-summary__chips">
                <span>IQF</span>
                <span>Export Ready</span>
                <span>Egyptian Origin</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section class="products-section">
        <div class="container">
          <ScrollReveal>
            <div class="products-toolbar">
              <div>
                <span class="eyebrow">Catalog</span>
                <h2>Choose a category</h2>
              </div>

              <div class="category-tabs" role="tablist" aria-label="Product categories">
                <button
                  v-for="cat in categories"
                  :key="cat.slug"
                  type="button"
                  class="category-tab"
                  :class="{ active: activeCategory === cat.slug }"
                  :aria-selected="activeCategory === cat.slug"
                  :disabled="categoryLoading"
                  @click="filterCategory(cat.slug)"
                >
                  <img
                    v-if="cat.icon_url"
                    :src="cat.icon_url"
                    :alt="cat.name"
                    class="category-tab__icon"
                  />
                  <span>{{ cat.name }}</span>
                  <small>{{ cat.products_count || 0 }}</small>
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="products-results" :class="{ 'products-results--loading': categoryLoading }">
              <div v-if="categoryLoading" class="products-inline-loader" role="status">
                Updating products
              </div>

              <div v-if="filteredProducts.length" class="product-grid products-grid">
                <ProductCard
                  v-for="product in filteredProducts"
                  :key="product.id"
                  :product="product"
                  @select="openProduct"
                />
              </div>

              <div v-else class="empty-products">
                <h3>No products found</h3>
                <p>Please choose another category or contact us for custom export requirements.</p>
                <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProductModal v-if="selectedProduct" :product="selectedProduct" @close="selectedProduct = null" />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getProducts, getCategories } from '../api';
import ProductCard from '../components/ProductCard.vue';
import ProductModal from '../components/ProductModal.vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const loading = ref(true);
const products = ref([]);
const categories = ref([]);
const activeCategory = ref('fruits');
const categoryLoading = ref(false);
const selectedProduct = ref(null);
const productCache = ref({});

const filteredProducts = computed(() => products.value);

const activeCategoryName = computed(() => {
  return categories.value.find((cat) => cat.slug === activeCategory.value)?.name || 'Products';
});

const loadingMessage = computed(() => {
  if (activeCategory.value === 'vegetables') return 'Loading fresh vegetables';
  if (activeCategory.value === 'fruits') return 'Loading fresh fruits';
  return 'Harvesting our products';
});

const filterCategory = async (slug) => {
  if (slug === activeCategory.value || categoryLoading.value) return;

  activeCategory.value = slug;

  if (productCache.value[slug]) {
    products.value = productCache.value[slug];
    return;
  }

  categoryLoading.value = true;
  try {
    const { data: res } = await getProducts(slug);
    products.value = res.data || [];
    productCache.value = {
      ...productCache.value,
      [slug]: products.value,
    };
  } finally {
    categoryLoading.value = false;
  }
};

const openProduct = (product) => {
  selectedProduct.value = product;
};

onMounted(async () => {
  try {
    const [catRes, prodRes] = await Promise.all([
      getCategories(),
      getProducts('fruits'),
    ]);
    categories.value = catRes.data.data || [];
    products.value = prodRes.data.data || [];
    productCache.value = {
      fruits: products.value,
    };
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.products-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(5rem, 9vw, 8rem) 0 clamp(4rem, 7vw, 6rem);
  background:
    radial-gradient(circle at 12% 18%, rgba(169, 30, 44, 0.28), transparent 28rem),
    radial-gradient(circle at 82% 12%, rgba(90, 143, 60, 0.24), transparent 30rem),
    linear-gradient(135deg, #111713 0%, #1d2b20 64%, #243827 100%);
}

.products-hero::after {
  content: none;
}

.products-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

.products-hero__content {
  max-width: 760px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  background: rgba(7, 12, 9, 0.42);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(12px);
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

.products-hero h1 {
  max-width: 820px;
  color: var(--color-bg-white);
  font-size: clamp(2.6rem, 7vw, 5.6rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.products-hero__content p {
  max-width: 620px;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}

.products-hero__glow {
  position: absolute;
  width: 20rem;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(28px);
  opacity: 0.38;
}

.products-hero__glow--red {
  left: 4rem;
  bottom: -9rem;
  background: var(--color-primary);
}

.products-hero__glow--green {
  top: -7rem;
  right: 17%;
  background: var(--color-secondary);
}

.products-summary {
  padding: clamp(2rem, 5vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 34px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.68)),
    linear-gradient(135deg, rgba(169, 30, 44, 0.16), rgba(90, 143, 60, 0.14));
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(18px);
}

.products-summary__label {
  color: var(--color-text-muted);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.products-summary strong {
  display: block;
  margin-top: 4rem;
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.products-summary p {
  margin-top: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.products-summary__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 2rem;
}

.products-summary__chips span {
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  background: rgba(90, 143, 60, 0.1);
  color: var(--color-secondary-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.products-section {
  padding: 5.5rem 0 6rem;
  background:
    radial-gradient(circle at 8% 14%, rgba(90, 143, 60, 0.1), transparent 24rem),
    linear-gradient(180deg, #fafafa, #f2f2ee);
}

.products-toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.products-toolbar h2 {
  color: var(--color-text);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.category-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 52px;
  padding: 0.7rem 0.85rem 0.7rem 1.15rem;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--color-text);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform var(--transition), border-color var(--transition), background var(--transition), color var(--transition);
}

.category-tab__icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(26, 26, 26, 0.08);
}

.category-tab.active .category-tab__icon {
  border-color: rgba(255, 255, 255, 0.85);
}

.category-tab small {
  display: grid;
  min-width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 999px;
  background: rgba(26, 26, 26, 0.08);
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.category-tab:hover {
  transform: translateY(-2px);
  border-color: rgba(169, 30, 44, 0.22);
}

.category-tab:disabled {
  cursor: wait;
  opacity: 0.72;
}

.category-tab.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg-white);
}

.category-tab.active small {
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-bg-white);
}

.products-grid {
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
}

.products-results {
  position: relative;
  min-height: 260px;
}

.products-results--loading .products-grid {
  opacity: 0.55;
  transform: translateY(6px);
  pointer-events: none;
}

.products-grid {
  transition: opacity 220ms ease, transform 220ms ease;
}

.products-inline-loader {
  position: absolute;
  top: -1.2rem;
  right: 0;
  z-index: 2;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(90, 143, 60, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: var(--color-secondary-dark);
  box-shadow: var(--shadow-card);
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
}

.products-inline-loader::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.5rem;
  border-radius: 999px;
  background: var(--color-secondary);
  animation: loader-pulse 900ms ease-in-out infinite;
}

@keyframes loader-pulse {
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.85);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.empty-products {
  display: grid;
  justify-items: center;
  padding: 4rem 1.5rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 30px;
  background: var(--color-bg-white);
  text-align: center;
}

.empty-products h3 {
  color: var(--color-primary);
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}

.empty-products p {
  max-width: 520px;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

@media (max-width: 980px) {
  .products-hero {
    background:
      radial-gradient(circle at 12% 18%, rgba(169, 30, 44, 0.28), transparent 24rem),
      linear-gradient(160deg, #111713 0%, #1d2b20 72%, #243827 100%);
  }

  .products-hero__grid {
    grid-template-columns: 1fr;
  }

  .products-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .category-tabs {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .products-hero {
    padding: 4rem 0;
  }

  .products-hero h1 {
    font-size: clamp(2.3rem, 15vw, 4rem);
  }

  .products-summary strong {
    margin-top: 3rem;
  }

  .category-tabs,
  .category-tab {
    width: 100%;
  }

  .category-tab {
    justify-content: space-between;
  }
}
</style>
