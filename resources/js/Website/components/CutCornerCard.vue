<template>
  <div class="cut-corner" :class="[`cut-corner--${variant}`]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'light' },
});
</script>

<style scoped>
.cut-corner {
  padding: 2.5rem;
  max-width: 640px;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
}

.cut-corner--light {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-card);
}

.cut-corner--dark {
  background: rgba(26, 26, 26, 0.75);
  backdrop-filter: blur(8px);
  border-left: 4px solid var(--color-secondary);
}
</style>
