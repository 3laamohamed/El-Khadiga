<template>
  <article
    class="product-card"
    role="button"
    tabindex="0"
    @click="$emit('select', product)"
    @keydown.enter.prevent="$emit('select', product)"
    @keydown.space.prevent="$emit('select', product)"
  >
    <div class="product-card__image-wrap">
      <img
        :src="product.image_url || fallbackImage"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <span class="product-card__category">{{ product.category?.name || 'IQF Product' }}</span>
    </div>
    <div class="product-card__body">
      <div class="product-card__heading">
        <h3>{{ product.name }}</h3>
        <span>View</span>
      </div>
      <p class="product-card__desc">{{ truncatedDesc }}</p>
      <div class="product-card__meta">
        <span v-if="product.pack_sizes?.length">{{ product.pack_sizes.length }} pack options</span>
        <span v-if="product.shelf_life">{{ product.shelf_life }}</span>
      </div>
      <button type="button" class="product-card__btn" @click.stop="$emit('select', product)">
        View Details
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: { type: Object, required: true },
});

defineEmits(['select']);

const fallbackImage = computed(() => `/images/products/${props.product.slug}.jpg`);

const truncatedDesc = computed(() => {
  const text = props.product.description || '';
  return text.length > 100 ? text.slice(0, 100) + '...' : text;
});
</script>

<style scoped>
.product-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(26, 26, 26, 0.08);
  border-radius: 30px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86)),
    linear-gradient(135deg, rgba(169, 30, 44, 0.08), rgba(90, 143, 60, 0.08));
  overflow: hidden;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.product-card:focus-visible {
  outline: 3px solid rgba(90, 143, 60, 0.45);
  outline-offset: 4px;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: rgba(169, 30, 44, 0.2);
  box-shadow: 0 26px 80px rgba(0, 0, 0, 0.14);
}

.product-card__image-wrap {
  position: relative;
  height: 250px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(90, 143, 60, 0.18), transparent 18rem),
    #e9ece3;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.product-card__image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 44%, rgba(0, 0, 0, 0.44));
}

.product-card:hover .product-card__image {
  transform: scale(1.07);
}

.product-card__category {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 1;
  display: inline-flex;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
}

.product-card__body {
  padding: 1.4rem;
}

.product-card__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.product-card__heading h3 {
  color: var(--color-text);
  font-size: 1.35rem;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.product-card__heading span {
  display: grid;
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  place-items: center;
  border-radius: 16px;
  background: rgba(169, 30, 44, 0.1);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-card__desc {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
}

.product-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.product-card__meta span {
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  background: rgba(90, 143, 60, 0.1);
  color: var(--color-secondary-dark);
  font-size: 0.72rem;
  font-weight: 800;
}

.product-card__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  width: 100%;
  margin-top: 1.25rem;
  border: 1px solid rgba(169, 30, 44, 0.18);
  border-radius: 16px;
  background: rgba(169, 30, 44, 0.08);
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background var(--transition), color var(--transition), border-color var(--transition);
}

.product-card__btn:hover {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--color-bg-white);
}
</style>
