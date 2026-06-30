<template>
  <div class="page-loader" role="status" aria-live="polite">
    <div class="page-loader__card">
      <div class="page-loader__frost" aria-hidden="true">
        <span
          v-for="crystal in crystals"
          :key="crystal.id"
          class="page-loader__crystal"
          :style="{
            top: crystal.top,
            left: crystal.left,
            animationDelay: crystal.delay,
            width: crystal.size,
            height: crystal.size,
          }"
        />
      </div>

      <div class="page-loader__brand">
        <svg class="page-loader__sprout" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            class="page-loader__leaf page-loader__leaf--1"
            d="M30 45 C30 30 22 20 14 14 C20 26 24 36 26 45 Z"
            fill="var(--color-secondary)"
          />
          <path
            class="page-loader__leaf page-loader__leaf--2"
            d="M30 45 C30 28 38 16 46 10 C40 24 36 36 38 45 Z"
            fill="var(--color-secondary-dark)"
          />
          <line
            x1="30" y1="45" x2="30" y2="54"
            stroke="var(--color-secondary-dark)"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <div class="page-loader__titles">
          <span class="page-loader__name">El-Khadiga</span>
          <span class="page-loader__subtitle">For Export</span>
        </div>
      </div>

      <p class="page-loader__message">{{ message }}</p>

      <div class="page-loader__track" aria-hidden="true">
        <div class="page-loader__fill" />
      </div>

      <p class="page-loader__hint">IQF Fruits &amp; Vegetables</p>
    </div>

    <span class="page-loader__sr-only">Loading, please wait</span>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Frozen Fresh for the World',
  },
});

const crystals = [
  { id: 1, top: '8%', left: '12%', delay: '0s', size: '10px' },
  { id: 2, top: '18%', left: '78%', delay: '0.4s', size: '8px' },
  { id: 3, top: '72%', left: '8%', delay: '0.8s', size: '9px' },
  { id: 4, top: '80%', left: '82%', delay: '1.2s', size: '7px' },
  { id: 5, top: '42%', left: '4%', delay: '0.6s', size: '6px' },
  { id: 6, top: '50%', left: '90%', delay: '1s', size: '8px' },
];
</script>

<style scoped>
.page-loader {
  text-align: center;
}

.page-loader__card {
  position: relative;
  padding: 2.5rem 2.75rem;
  min-width: 280px;
  background: var(--color-bg-white);
  border-radius: 8px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.page-loader__card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(90, 143, 60, 0.04) 0%,
    rgba(169, 30, 44, 0.04) 100%
  );
  pointer-events: none;
}

.page-loader__frost {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.page-loader__crystal {
  position: absolute;
  background: linear-gradient(135deg, #e8f4fc 0%, #d4e8f7 100%);
  border: 1px solid rgba(180, 210, 230, 0.5);
  border-radius: 2px;
  transform: rotate(45deg);
  opacity: 0;
  animation: frost 2.4s ease-in-out infinite;
}

.page-loader__brand {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.page-loader__sprout {
  width: 72px;
  height: 72px;
  animation: breathe 2s ease-in-out infinite;
}

.page-loader__leaf {
  transform-origin: 30px 45px;
}

.page-loader__leaf--1 {
  animation: sway 1.6s ease-in-out infinite;
}

.page-loader__leaf--2 {
  animation: sway 1.6s ease-in-out infinite reverse;
}

.page-loader__titles {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.page-loader__name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
}

.page-loader__subtitle {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
}

.page-loader__message {
  position: relative;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.page-loader__track {
  position: relative;
  height: 3px;
  background: var(--color-section);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 0.875rem;
}

.page-loader__fill {
  position: absolute;
  inset: 0;
  width: 40%;
  border-radius: 99px;
  background: linear-gradient(
    90deg,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  animation: slide 1.4s ease-in-out infinite;
}

.page-loader__hint {
  position: relative;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-secondary-dark);
  opacity: 0.85;
}

.page-loader__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

@keyframes sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(7deg); }
}

@keyframes frost {
  0%, 100% { opacity: 0; transform: rotate(45deg) scale(0.8); }
  50% { opacity: 0.7; transform: rotate(45deg) scale(1); }
}

@keyframes slide {
  0% { left: -40%; }
  100% { left: 100%; }
}
</style>
