<template>
    <Head :title="`Message from ${message.name}`" />
    <Layout :prv_page="[{ name: 'Messages', link: '/admin/messages' }, { name: message.name }]">
        <div class="message-page">
            <header class="message-hero">
                <div class="message-hero__main">
                    <Link href="/admin/messages" class="message-back">
                        <span v-html="icons.back"></span>
                        Back to inbox
                    </Link>
                    <div class="message-hero__head">
                        <div class="message-avatar">{{ initials(message.name) }}</div>
                        <div>
                            <h1 class="message-hero__title">{{ message.name }}</h1>
                            <a :href="`mailto:${message.email}`" class="message-hero__email">{{ message.email }}</a>
                        </div>
                    </div>
                    <div class="message-meta">
                        <span class="message-meta__item">
                            <span v-html="icons.calendar"></span>
                            Received {{ formatDate(message.created_at) }}
                        </span>
                        <span
                            class="message-badge"
                            :class="message.read_at ? 'message-badge--read' : 'message-badge--unread'"
                        >
                            {{ message.read_at ? 'Read' : 'Unread' }}
                        </span>
                    </div>
                </div>
                <div class="message-hero__actions">
                    <a :href="replyUrl" class="message-btn message-btn--primary">
                        <span v-html="icons.reply"></span>
                        Reply via Email
                    </a>
                    <button
                        v-if="message.read_at"
                        type="button"
                        class="message-btn message-btn--ghost"
                        @click="markUnread"
                    >
                        Mark Unread
                    </button>
                    <button type="button" class="message-btn message-btn--danger" @click="deleteMessage">
                        Delete
                    </button>
                </div>
            </header>

            <section class="message-panel">
                <h2 class="message-panel__title">Message</h2>
                <div class="message-body">{{ message.message }}</div>
            </section>

            <section class="message-info">
                <div class="message-info__card">
                    <span class="message-info__label">Sender</span>
                    <strong>{{ message.name }}</strong>
                </div>
                <div class="message-info__card">
                    <span class="message-info__label">Email</span>
                    <a :href="`mailto:${message.email}`">{{ message.email }}</a>
                </div>
                <div class="message-info__card">
                    <span class="message-info__label">Email delivery</span>
                    <strong>{{ contactEmail }}</strong>
                </div>
            </section>
        </div>
    </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const icons = {
    back: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    reply: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 8L4 14L10 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 14H14C17.3137 14 20 16.6863 20 20V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    calendar: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 3V7M16 3V7M3 11H21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};

const props = defineProps({
    message: Object,
    contactEmail: {
        type: String,
        default: 'info@elkhadiga.com',
    },
});

const form = useForm({});

const initials = (name) => {
    if (!name) return '?';
    return name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
};

const formatDate = (value) => {
    if (!value) return '—';
    return new Date(value).toLocaleString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const replyUrl = computed(() => {
    const subject = encodeURIComponent('Re: Your message to El Khadiga for Export');
    const body = encodeURIComponent(`Hi ${props.message.name},\n\n`);
    return `mailto:${props.message.email}?subject=${subject}&body=${body}`;
});

const markUnread = () => {
    form.post(`/admin/messages/${props.message.id}/unread`, {
        preserveScroll: true,
    });
};

const deleteMessage = () => {
    Swal.fire({
        title: 'Delete this message?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        iconColor: '#A91E2C',
        showCancelButton: true,
        confirmButtonColor: '#A91E2C',
        cancelButtonColor: '#6b7280',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete',
        backdrop: 'static',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            form.delete(`/admin/messages/${props.message.id}`);
        }
    });
};
</script>

<style scoped>
.message-page {
    --msg-primary: #A91E2C;
    --msg-primary-dark: #8E1824;
    --msg-secondary: #5A8F3C;
    --msg-surface: #ffffff;
    --msg-border: #e6ebe6;
    --msg-text: #1a1a1a;
    --msg-muted: #6b7280;
    --msg-radius: 16px;
    --msg-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.message-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1rem;
    padding: 1.75rem 1.85rem;
    border-radius: var(--msg-radius);
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),
        var(--msg-surface);
    border: 1px solid var(--msg-border);
    box-shadow: var(--msg-shadow);
}

.message-back {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-bottom: 1rem;
    color: var(--msg-muted);
    font-size: 0.84rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;
}

.message-back:hover {
    color: var(--msg-secondary);
}

.message-hero__head {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.85rem;
}

.message-avatar {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--msg-primary), var(--msg-primary-dark));
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
    flex-shrink: 0;
}

.message-hero__title {
    margin: 0;
    color: var(--msg-text);
    font-size: 1.5rem;
    font-weight: 800;
}

.message-hero__email {
    display: inline-block;
    margin-top: 0.2rem;
    color: var(--msg-secondary);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
}

.message-hero__email:hover {
    color: var(--msg-primary);
}

.message-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
}

.message-meta__item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--msg-muted);
    font-size: 0.84rem;
    font-weight: 600;
}

.message-badge {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
}

.message-badge--unread {
    background: rgba(169, 30, 44, 0.1);
    color: var(--msg-primary);
}

.message-badge--read {
    background: #f3f4f6;
    color: #6b7280;
}

.message-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    flex-shrink: 0;
}

.message-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    padding: 0.72rem 1.15rem;
    border: none;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    white-space: nowrap;
}

.message-btn--primary {
    background: linear-gradient(135deg, var(--msg-primary), var(--msg-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);
}

.message-btn--primary:hover {
    transform: translateY(-1px);
    color: #fff;
}

.message-btn--ghost {
    background: #fff;
    border: 1px solid var(--msg-border);
    color: var(--msg-text);
}

.message-btn--ghost:hover {
    background: #f7f9f7;
}

.message-btn--danger {
    background: #fff;
    border: 1px solid rgba(169, 30, 44, 0.25);
    color: var(--msg-primary);
}

.message-btn--danger:hover {
    background: rgba(169, 30, 44, 0.06);
}

.message-panel {
    margin-bottom: 1rem;
    padding: 1.5rem 1.75rem;
    border-radius: var(--msg-radius);
    background: var(--msg-surface);
    border: 1px solid var(--msg-border);
    box-shadow: var(--msg-shadow);
}

.message-panel__title {
    margin: 0 0 1rem;
    color: var(--msg-muted);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.message-body {
    color: var(--msg-text);
    font-size: 1rem;
    line-height: 1.75;
    white-space: pre-wrap;
    word-break: break-word;
}

.message-info {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
}

.message-info__card {
    padding: 1rem 1.15rem;
    border-radius: 14px;
    background: var(--msg-surface);
    border: 1px solid var(--msg-border);
}

.message-info__label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--msg-muted);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.message-info__card strong,
.message-info__card a {
    color: var(--msg-text);
    font-size: 0.92rem;
    font-weight: 700;
    text-decoration: none;
}

.message-info__card a:hover {
    color: var(--msg-secondary);
}

@media (max-width: 900px) {
    .message-hero {
        flex-direction: column;
        align-items: stretch;
    }

    .message-info {
        grid-template-columns: 1fr;
    }
}
</style>
