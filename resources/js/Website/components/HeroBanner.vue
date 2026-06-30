<template>
  <section class="hero">
    <div class="hero__glow hero__glow--red"></div>
    <div class="hero__glow hero__glow--green"></div>

    <div class="container hero__grid">
      <div class="hero__content">
        <span v-if="eyebrow" class="hero__eyebrow">{{ eyebrow }}</span>
        <h1 class="hero__title">{{ tagline }}</h1>
        <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
        <slot />
      </div>

      <div class="hero__visual" aria-label="Frozen export highlights">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="El-Khadiga frozen export"
          class="hero__image"
        />
        <template v-else>
          <div class="hero__badge hero__badge--top">
            <span>{{ badge1Label }}</span>
            <strong>{{ badge1Value }}</strong>
          </div>
          <div class="hero__orb">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="hero__badge hero__badge--bottom">
            <span>{{ badge2Label }}</span>
            <strong>{{ badge2Value }}</strong>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  tagline: { type: String, default: 'Fruit & Vegetables, Frozen Fresh for the World' },
  subtitle: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  badge1Label: { type: String, default: 'Cold Chain' },
  badge1Value: { type: String, default: 'Controlled' },
  badge2Label: { type: String, default: 'Products' },
  badge2Value: { type: String, default: 'Fruits & Vegetables' },
  imageUrl: { type: String, default: '' },
});
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 96px);
  padding: clamp(5rem, 9vw, 8rem) 0;
  background:
    radial-gradient(circle at 12% 18%, rgba(169, 30, 44, 0.28), transparent 28rem),
    radial-gradient(circle at 82% 14%, rgba(90, 143, 60, 0.24), transparent 30rem),
    linear-gradient(135deg, #111713 0%, #1f2d22 64%, #243827 100%);
}

.hero::before {
  content: '';
  position: absolute;
  right: -12rem;
  bottom: -16rem;
  width: min(58vw, 760px);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.56);
  border-radius: 999px;
  box-shadow: inset 0 0 0 78px rgba(255, 255, 255, 0.18);
}

.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  gap: clamp(2.5rem, 7vw, 5.5rem);
  align-items: center;
}

.hero__content {
  max-width: 800px;
}

.hero__eyebrow {
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

.hero__eyebrow::before {
  content: '';
  width: 34px;
  height: 2px;
  background: currentColor;
}

.hero__title {
  max-width: 820px;
  color: var(--color-bg-white);
  font-size: clamp(2.8rem, 7vw, 6rem);
  line-height: 0.94;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}

.hero__subtitle {
  max-width: 660px;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}

.hero__glow {
  position: absolute;
  width: 20rem;
  aspect-ratio: 1;
  border-radius: 999px;
  filter: blur(28px);
  opacity: 0.38;
}

.hero__glow--red {
  left: 4rem;
  bottom: -9rem;
  background: var(--color-primary);
}

.hero__glow--green {
  top: -7rem;
  right: 17%;
  background: var(--color-secondary);
}

.hero__visual {
  position: relative;
  display: grid;
  min-height: 560px;
  place-items: center;
}

.hero__image {
  width: min(100%, 520px);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.28);
}

.hero__orb {
  position: relative;
  display: grid;
  width: min(82%, 390px);
  aspect-ratio: 1;
  place-items: center;
  border-radius: 999px;
  background:
    radial-gradient(circle at 36% 30%, rgba(255, 255, 255, 0.88), transparent 0.35rem),
    linear-gradient(135deg, rgba(169, 30, 44, 0.88), rgba(90, 143, 60, 0.78));
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.24);
}

.hero__orb::before {
  content: '';
  position: absolute;
  inset: 2.1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: inherit;
}

.hero__orb span {
  position: absolute;
  display: block;
  width: 52%;
  height: 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
}

.hero__orb span:nth-child(1) {
  transform: translateY(-42px) rotate(-12deg);
}

.hero__orb span:nth-child(2) {
  width: 62%;
}

.hero__orb span:nth-child(3) {
  width: 42%;
  transform: translateY(42px) rotate(12deg);
}

.hero__badge {
  position: absolute;
  z-index: 1;
  min-width: 210px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.46);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(14px);
}

.hero__badge--top {
  top: 5.5rem;
  right: 0;
}

.hero__badge--bottom {
  bottom: 5rem;
  left: 0;
}

.hero__badge span {
  display: block;
  color: var(--color-text-muted);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__badge strong {
  display: block;
  margin-top: 0.35rem;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 1rem;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .hero {
    min-height: auto;
    background:
      radial-gradient(circle at 12% 18%, rgba(169, 30, 44, 0.28), transparent 24rem),
      linear-gradient(160deg, #111713 0%, #1f2d22 72%, #243827 100%);
  }

  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 440px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 4rem 0;
  }

  .hero__title {
    font-size: clamp(2.4rem, 15vw, 4rem);
  }

  .hero__visual {
    min-height: 360px;
  }

  .hero__badge {
    min-width: 180px;
  }
}
</style>
