<template>
    <Head title="Change Password" />
    <Layout :prv_page="[{ name: 'Change Password' }]">
        <div class="account-page">
            <header class="account-hero">
                <div class="account-hero__main">
                    <span class="account-hero__eyebrow">Security</span>
                    <h1 class="account-hero__title">Change Password</h1>
                    <p class="account-hero__desc">
                        Choose a strong password to keep your admin account secure.
                    </p>
                </div>
                <Link href="/admin/profile" class="account-btn account-btn--ghost">
                    <span v-html="icons.user"></span>
                    Back to Profile
                </Link>
            </header>

            <div class="account-layout account-layout--password">
                <form @submit.prevent="submit" class="account-card account-card--form">
                    <div class="account-form-head">
                        <h2>Update Password</h2>
                        <p>Enter your current password, then choose a new one.</p>
                    </div>

                    <div class="account-fields">
                        <div class="account-field">
                            <label for="old-password">Current Password</label>
                            <div class="account-input-wrap">
                                <input
                                    id="old-password"
                                    v-model="form.old_password"
                                    :type="showOld ? 'text' : 'password'"
                                    class="account-input"
                                    placeholder="Enter current password"
                                    required
                                    autocomplete="current-password"
                                />
                                <button
                                    type="button"
                                    class="account-toggle"
                                    :aria-label="showOld ? 'Hide password' : 'Show password'"
                                    @click="showOld = !showOld"
                                >
                                    <span v-html="showOld ? icons.eyeOff : icons.eye"></span>
                                </button>
                            </div>
                            <div v-if="form.errors.old_password" class="account-error">{{ form.errors.old_password }}</div>
                        </div>

                        <div class="account-field">
                            <label for="new-password">New Password</label>
                            <div class="account-input-wrap">
                                <input
                                    id="new-password"
                                    v-model="form.new_password"
                                    :type="showNew ? 'text' : 'password'"
                                    class="account-input"
                                    placeholder="Enter new password"
                                    required
                                    autocomplete="new-password"
                                />
                                <button
                                    type="button"
                                    class="account-toggle"
                                    :aria-label="showNew ? 'Hide password' : 'Show password'"
                                    @click="showNew = !showNew"
                                >
                                    <span v-html="showNew ? icons.eyeOff : icons.eye"></span>
                                </button>
                            </div>
                            <div v-if="form.errors.new_password" class="account-error">{{ form.errors.new_password }}</div>
                        </div>

                        <div class="account-field">
                            <label for="confirm-password">Confirm New Password</label>
                            <div class="account-input-wrap">
                                <input
                                    id="confirm-password"
                                    v-model="form.new_password_confirmation"
                                    :type="showConfirm ? 'text' : 'password'"
                                    class="account-input"
                                    placeholder="Confirm new password"
                                    required
                                    autocomplete="new-password"
                                />
                                <button
                                    type="button"
                                    class="account-toggle"
                                    :aria-label="showConfirm ? 'Hide password' : 'Show password'"
                                    @click="showConfirm = !showConfirm"
                                >
                                    <span v-html="showConfirm ? icons.eyeOff : icons.eye"></span>
                                </button>
                            </div>
                            <div v-if="form.errors.new_password_confirmation" class="account-error">
                                {{ form.errors.new_password_confirmation }}
                            </div>
                        </div>
                    </div>

                    <footer class="account-footer">
                        <Link href="/admin/profile" class="account-btn account-btn--ghost">Cancel</Link>
                        <button type="submit" class="account-btn account-btn--primary" :disabled="form.processing">
                            {{ form.processing ? 'Updating...' : 'Update Password' }}
                        </button>
                    </footer>
                </form>

                <aside class="account-card account-card--tips">
                    <div class="account-tips__icon" v-html="icons.shield"></div>
                    <h2>Password Tips</h2>
                    <ul>
                        <li>Use at least 8 characters</li>
                        <li>Mix letters, numbers, and symbols</li>
                        <li>Avoid common words or personal info</li>
                        <li>Do not reuse passwords from other sites</li>
                    </ul>
                </aside>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const icons = {
    user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M5 20C5.8 16.7 8.6 15 12 15C15.4 15 18.2 16.7 19 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>`,
    eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 3L21 21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10.6 10.6C10.2 11 10 11.5 10 12C10 13.1 10.9 14 12 14C12.5 14 13 13.8 13.4 13.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6.7 6.7C4.6 8.1 3.2 10 2.5 12C3.7 15.3 7.2 18 12 18C13.8 18 15.4 17.5 16.8 16.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.9 5.1C10.6 5 11.3 5 12 5C16.8 5 20.3 7.7 21.5 11C21.1 12.1 20.4 13.1 19.5 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    shield: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3L20 7V12C20 16.4 16.9 19.7 12 21C7.1 19.7 4 16.4 4 12V7L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
};

const showOld = ref(false);
const showNew = ref(false);
const showConfirm = ref(false);

const form = useForm({
    old_password: '',
    new_password: '',
    new_password_confirmation: '',
    status: 1,
});

const submit = () => {
    form.post('/admin/change-password');
};
</script>

<style scoped>
.account-page {
    --ac-primary: #A91E2C;
    --ac-primary-dark: #8E1824;
    --ac-secondary: #5A8F3C;
    --ac-border: #e6ebe6;
    --ac-text: #1a1a1a;
    --ac-muted: #6b7280;
    --ac-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.account-hero,
.account-card {
    border: 1px solid var(--ac-border);
    border-radius: 16px;
    background: #fff;
    box-shadow: var(--ac-shadow);
}

.account-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1.5rem 1.75rem;
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.1), transparent 42%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.08), transparent 40%),
        #fff;
}

.account-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.35rem;
    color: var(--ac-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.account-hero__title {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--ac-text);
}

.account-hero__desc {
    margin: 0.4rem 0 0;
    max-width: 34rem;
    color: var(--ac-muted);
    font-size: 0.9rem;
    line-height: 1.6;
}

.account-layout--password {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 1rem;
    align-items: start;
}

.account-card--form {
    padding: 1.5rem 1.75rem 1.25rem;
}

.account-form-head {
    margin-bottom: 1.25rem;
}

.account-form-head h2 {
    margin: 0 0 0.25rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--ac-text);
}

.account-form-head p {
    margin: 0;
    color: var(--ac-muted);
    font-size: 0.86rem;
}

.account-fields {
    display: grid;
    gap: 1rem;
}

.account-field label {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ac-text);
}

.account-input-wrap {
    position: relative;
}

.account-input {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 2.75rem 0.7rem 0.95rem;
    border: 1px solid var(--ac-border);
    border-radius: 12px;
    background: #fafbfa;
    font-size: 0.92rem;
    color: var(--ac-text);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.account-input:focus {
    outline: none;
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.account-toggle {
    position: absolute;
    top: 50%;
    right: 0.65rem;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--ac-muted);
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

.account-toggle:hover {
    background: #f0f3f0;
    color: var(--ac-text);
}

.account-error {
    margin-top: 0.35rem;
    color: var(--ac-primary);
    font-size: 0.8rem;
}

.account-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.65rem;
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--ac-border);
}

.account-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    padding: 0.72rem 1.15rem;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    white-space: nowrap;
}

.account-btn--primary {
    background: linear-gradient(135deg, var(--ac-primary), var(--ac-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.2);
}

.account-btn--primary:hover:not(:disabled) {
    transform: translateY(-1px);
    color: #fff;
}

.account-btn--primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.account-btn--ghost {
    background: #fff;
    border: 1px solid var(--ac-border);
    color: var(--ac-text);
}

.account-btn--ghost:hover {
    background: #f7f9f7;
    color: var(--ac-text);
}

.account-card--tips {
    padding: 1.5rem;
}

.account-tips__icon {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    margin-bottom: 1rem;
    border-radius: 14px;
    background: rgba(90, 143, 60, 0.1);
    color: var(--ac-secondary);
}

.account-card--tips h2 {
    margin: 0 0 0.85rem;
    font-size: 1rem;
    font-weight: 800;
    color: var(--ac-text);
}

.account-card--tips ul {
    margin: 0;
    padding-left: 1.1rem;
    color: var(--ac-muted);
    font-size: 0.86rem;
    line-height: 1.7;
}

.account-card--tips li + li {
    margin-top: 0.35rem;
}

@media (max-width: 900px) {
    .account-hero {
        flex-direction: column;
        align-items: stretch;
    }

    .account-layout--password {
        grid-template-columns: 1fr;
    }
}
</style>
