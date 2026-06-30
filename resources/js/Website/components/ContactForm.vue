<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div v-if="success" class="form-success">{{ success }}</div>

    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" v-model="form.name" type="text" required placeholder="Your name" />
      <div v-if="errors.name" class="form-error">{{ errors.name[0] }}</div>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" required placeholder="your@email.com" />
      <div v-if="errors.email" class="form-error">{{ errors.email[0] }}</div>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="5" required placeholder="How can we help you?"></textarea>
      <div v-if="errors.message" class="form-error">{{ errors.message[0] }}</div>
    </div>

    <button type="submit" class="btn btn-primary contact-form__submit" :disabled="loading">
      <span v-if="loading" class="contact-form__dots" aria-hidden="true">
        <span /><span /><span />
      </span>
      {{ loading ? 'Sending your inquiry' : 'Send Message' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { submitContact } from '../api';

const form = reactive({ name: '', email: '', message: '' });
const errors = ref({});
const success = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  errors.value = {};
  success.value = '';

  try {
    const { data } = await submitContact(form);
    success.value = data.message;
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (err) {
    if (err.response?.status === 422) {
      errors.value = err.response.data.errors || {};
    } else {
      errors.value = { message: ['Something went wrong. Please try again.'] };
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-form {
  position: relative;
  display: grid;
  gap: 1.1rem;
}

.form-group {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  margin-bottom: 0.55rem;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.form-group input,
.form-group textarea {
  width: 100%;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 18px;
  background: #fbfbf8;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color var(--transition), box-shadow var(--transition), background var(--transition);
}

.form-group input {
  min-height: 58px;
  padding: 0 1rem;
}

.form-group textarea {
  min-height: 160px;
  padding: 1rem;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(85, 85, 85, 0.64);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(90, 143, 60, 0.65);
  background: var(--color-bg-white);
  box-shadow: 0 0 0 4px rgba(90, 143, 60, 0.12);
}

.form-error {
  margin-top: 0.45rem;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 600;
}

.form-success {
  border: 1px solid rgba(90, 143, 60, 0.18);
  border-radius: 18px;
  background: rgba(90, 143, 60, 0.1);
  color: var(--color-secondary-dark);
  font-weight: 700;
}

.contact-form__submit {
  gap: 0.65rem;
  min-height: 56px;
  margin-top: 0.25rem;
  border-radius: 18px;
}

.contact-form__submit:disabled {
  opacity: 0.85;
  cursor: wait;
}

.contact-form__dots {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}

.contact-form__dots span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation: dot-bounce 1s ease-in-out infinite;
}

.contact-form__dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.contact-form__dots span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes dot-bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(-4px); opacity: 1; }
}
</style>
