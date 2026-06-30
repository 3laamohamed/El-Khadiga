<template>
  <div class="chevron-banner">
    <span class="chevron-banner__arrow"></span>
    <span class="chevron-banner__text">{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<style scoped>
.chevron-banner {
  display: inline-flex;
  align-items: stretch;
  margin-bottom: 1rem;
}

.chevron-banner__arrow {
  width: 0;
  height: 0;
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
  border-left: 16px solid var(--color-primary-dark);
  align-self: center;
  margin-right: -1px;
}

.chevron-banner__text {
  background: var(--color-primary);
  color: var(--color-bg-white);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.75rem 1.5rem;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%);
}
</style>
