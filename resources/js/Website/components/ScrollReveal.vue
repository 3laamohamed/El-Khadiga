<template>
  <div ref="el" class="scroll-reveal" :class="{ 'is-visible': visible }">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const el = ref(null);
const visible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  if (el.value) observer.observe(el.value);
});

onUnmounted(() => observer?.disconnect());
</script>
