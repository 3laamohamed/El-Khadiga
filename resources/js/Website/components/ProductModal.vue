<template>
  <div class="modal-overlay product-modal-overlay" @click.self="emit('close')">
    <section class="modal-content product-modal" role="dialog" aria-modal="true" :aria-label="`${product.name} details`">
      <button type="button" class="product-modal__close" aria-label="Close product details" @click="emit('close')">
        <span></span>
        <span></span>
      </button>

      <div class="product-modal__media">
        <img
          :src="imageSrc"
          :alt="product.name"
          class="product-modal__image"
        />
        <div class="product-modal__media-overlay">
          <span>{{ product.category?.name || 'IQF Product' }}</span>
          <strong>{{ product.name }}</strong>
        </div>
      </div>

      <div class="product-modal__content">
        <span class="product-modal__eyebrow">Product Details</span>
        <h2>{{ product.name }}</h2>
        <p class="modal-desc">{{ product.description }}</p>

        <div class="spec-grid">
          <article v-for="spec in specs" :key="spec.label" class="spec-card">
            <strong>{{ spec.label }}</strong>
            <div class="spec-card__values">
              <span v-for="value in spec.values" :key="value">{{ value }}</span>
            </div>
          </article>
        </div>

        <div class="product-modal__footer">
          <router-link to="/contact" class="btn btn-primary" @click="emit('close')">Request Quote</router-link>
          <button type="button" class="product-modal__secondary" @click="emit('close')">Back To Products</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits(['close']);

const imageSrc = computed(() => props.product.image_url || `/images/products/${props.product.slug}.jpg`);

const specs = computed(() => {
  const items = [];

  if (props.product.pack_sizes?.length) {
    items.push({ label: 'Pack Size', values: props.product.pack_sizes });
  }

  if (props.product.carton_weights?.length) {
    items.push({ label: 'Carton Weights', values: props.product.carton_weights });
  }

  if (props.product.container_capacity) {
    items.push({ label: 'Container Capacity', values: [props.product.container_capacity] });
  }

  if (props.product.shelf_life) {
    items.push({ label: 'Product Validity', values: [props.product.shelf_life] });
  }

  return items;
});

const handleKeydown = (event) => {
  if (event.key === 'Escape') emit('close');
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.product-modal-overlay {
  padding: 1.25rem;
  background:
    radial-gradient(circle at 18% 12%, rgba(169, 30, 44, 0.26), transparent 26rem),
    rgba(8, 12, 9, 0.78);
  backdrop-filter: blur(14px);
}

.product-modal {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(300px, 0.92fr) minmax(0, 1.08fr);
  max-width: 1120px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 34px;
  background: var(--color-bg-white);
  box-shadow: 0 34px 120px rgba(0, 0, 0, 0.36);
}

.product-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  cursor: pointer;
  transition: transform var(--transition), background var(--transition);
}

.product-modal__close:hover {
  transform: translateY(-2px);
  background: var(--color-bg-white);
}

.product-modal__close span {
  grid-area: 1 / 1;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--color-text);
}

.product-modal__close span:first-child {
  transform: rotate(45deg);
}

.product-modal__close span:last-child {
  transform: rotate(-45deg);
}

.product-modal__media {
  position: relative;
  min-height: 620px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(90, 143, 60, 0.2), transparent 18rem),
    #e9ece3;
}

.product-modal__image {
  width: 100%;
  height: 100%;
  min-height: 620px;
  object-fit: cover;
}

.product-modal__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 32%, rgba(0, 0, 0, 0.68));
}

.product-modal__media-overlay {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 1;
  padding: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
}

.product-modal__media-overlay span,
.product-modal__eyebrow {
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.product-modal__media-overlay strong {
  display: block;
  margin-top: 0.55rem;
  color: var(--color-bg-white);
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.product-modal__content {
  padding: clamp(2rem, 4vw, 3.5rem);
  overflow-y: auto;
}

.product-modal__content h2 {
  margin-top: 0.85rem;
  color: var(--color-text);
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.modal-desc {
  color: var(--color-text-muted);
  margin: 1.25rem 0 2rem;
  font-size: 1rem;
  line-height: 1.8;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.spec-card {
  padding: 1rem;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 20px;
  background: #fbfbf8;
}

.spec-card strong {
  display: block;
  color: var(--color-primary);
  font-size: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
}

.spec-card__values {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.spec-card__values span {
  display: inline-flex;
  padding: 0.45rem 0.62rem;
  border-radius: 999px;
  background: rgba(90, 143, 60, 0.1);
  color: var(--color-secondary-dark);
  font-size: 0.84rem;
  font-weight: 700;
}

.product-modal__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.product-modal__secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.875rem 1.5rem;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 4px;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background var(--transition), transform var(--transition);
}

.product-modal__secondary:hover {
  background: rgba(26, 26, 26, 0.06);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .product-modal {
    grid-template-columns: 1fr;
    max-height: 92vh;
    overflow-y: auto;
  }

  .product-modal__media,
  .product-modal__image {
    min-height: 360px;
  }

  .product-modal__content {
    overflow: visible;
  }
}

@media (max-width: 620px) {
  .product-modal-overlay {
    align-items: flex-end;
    padding: 0.75rem;
  }

  .product-modal {
    border-radius: 26px;
  }

  .product-modal__media,
  .product-modal__image {
    min-height: 300px;
  }

  .spec-grid {
    grid-template-columns: 1fr;
  }

  .product-modal__footer,
  .product-modal__footer .btn,
  .product-modal__secondary {
    width: 100%;
  }
}
</style>
