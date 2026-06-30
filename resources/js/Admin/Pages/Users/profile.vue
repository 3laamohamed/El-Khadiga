<template>
    <Head title="Profile" />
    <Layout :prv_page="[{ name: 'Profile' }]">
        <div class="account-page">
            <header class="account-hero">
                <div class="account-hero__main">
                    <span class="account-hero__eyebrow">Account</span>
                    <h1 class="account-hero__title">Profile Settings</h1>
                    <p class="account-hero__desc">
                        Update your personal details used across the admin dashboard.
                    </p>
                </div>
                <Link href="/admin/change-password" class="account-btn account-btn--ghost">
                    <span v-html="icons.lock"></span>
                    Change Password
                </Link>
            </header>

            <div class="account-layout">
                <aside class="account-card account-card--profile">
                    <div class="account-avatar">{{ initials }}</div>
                    <h2>{{ form.name || user.name }}</h2>
                    <p>{{ form.email || user.email }}</p>
                    <span class="account-role">Administrator</span>
                    <div class="account-meta">
                        <div>
                            <span>Mobile</span>
                            <strong>{{ form.mobile || '—' }}</strong>
                        </div>
                    </div>
                </aside>

                <form @submit.prevent="submit" class="account-card account-card--form">
                    <div class="account-form-head">
                        <h2>Personal Information</h2>
                        <p>Keep your contact details up to date for account recovery and notifications.</p>
                    </div>

                    <div class="account-fields">
                        <div class="account-field">
                            <label for="profile-name">Full Name</label>
                            <input
                                id="profile-name"
                                v-model="form.name"
                                type="text"
                                class="account-input"
                                placeholder="Your full name"
                                required
                            />
                            <div v-if="form.errors.name" class="account-error">{{ form.errors.name }}</div>
                        </div>

                        <div class="account-field">
                            <label for="profile-email">Email Address</label>
                            <input
                                id="profile-email"
                                v-model="form.email"
                                type="email"
                                class="account-input"
                                placeholder="you@company.com"
                                required
                            />
                            <div v-if="form.errors.email" class="account-error">{{ form.errors.email }}</div>
                        </div>

                        <div class="account-field">
                            <label for="profile-mobile">Mobile Number</label>
                            <input
                                id="profile-mobile"
                                v-model="form.mobile"
                                type="text"
                                class="account-input"
                                placeholder="+20 ..."
                            />
                            <div v-if="form.errors.mobile" class="account-error">{{ form.errors.mobile }}</div>
                        </div>
                    </div>

                    <footer class="account-footer">
                        <Link href="/admin/dashboard" class="account-btn account-btn--ghost">Cancel</Link>
                        <button type="submit" class="account-btn account-btn--primary" :disabled="form.processing">
                            {{ form.processing ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const icons = {
    lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

const props = defineProps({
    user: Object,
});

const form = useForm({
    name: props.user.name,
    user_name: props.user.user_name,
    email: props.user.email,
    mobile: props.user.mobile,
});

const initials = computed(() => {
    const name = form.name || props.user?.name || 'A';
    return name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
});

const submit = () => {
    form.put('/admin/change-profile/');
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

.account-layout {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
}

.account-card--profile {
    padding: 1.75rem 1.5rem;
    text-align: center;
}

.account-avatar {
    display: grid;
    place-items: center;
    width: 88px;
    height: 88px;
    margin: 0 auto 1rem;
    border-radius: 20px;
    background: linear-gradient(135deg, var(--ac-primary), #c42838);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 800;
}

.account-card--profile h2 {
    margin: 0;
    color: var(--ac-text);
    font-size: 1.15rem;
    font-weight: 800;
}

.account-card--profile > p {
    margin: 0.35rem 0 0.85rem;
    color: var(--ac-muted);
    font-size: 0.86rem;
    word-break: break-word;
}

.account-role {
    display: inline-flex;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(90, 143, 60, 0.1);
    color: var(--ac-secondary);
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.account-meta {
    margin-top: 1.25rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--ac-border);
    text-align: left;
}

.account-meta span {
    display: block;
    margin-bottom: 0.2rem;
    color: var(--ac-muted);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.account-meta strong {
    color: var(--ac-text);
    font-size: 0.9rem;
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

.account-input {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 0.95rem;
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

@media (max-width: 900px) {
    .account-hero {
        flex-direction: column;
        align-items: stretch;
    }

    .account-layout {
        grid-template-columns: 1fr;
    }
}
</style>
