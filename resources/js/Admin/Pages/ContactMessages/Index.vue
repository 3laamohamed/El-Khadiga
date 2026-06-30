<template>
    <Head title="Contact Messages" />
    <Layout :prv_page="[{ name: 'Messages' }]">
        <div class="messages-page">
            <header class="messages-hero">
                <div>
                    <span class="messages-hero__eyebrow">Inbox</span>
                    <h1 class="messages-hero__title">Contact Messages</h1>
                    <p class="messages-hero__desc">
                        Messages sent from the website contact form. New submissions are also emailed to
                        <strong>{{ contactEmail }}</strong>.
                    </p>
                </div>
            </header>

            <div class="messages-stats">
                <button
                    type="button"
                    class="messages-stat"
                    :class="{ 'messages-stat--active': !status }"
                    @click="setStatus('')"
                >
                    <span class="messages-stat__label">Total</span>
                    <strong>{{ stats.total }}</strong>
                </button>
                <button
                    type="button"
                    class="messages-stat messages-stat--unread"
                    :class="{ 'messages-stat--active': status === 'unread' }"
                    @click="setStatus('unread')"
                >
                    <span class="messages-stat__label">Unread</span>
                    <strong>{{ stats.unread }}</strong>
                </button>
                <button
                    type="button"
                    class="messages-stat"
                    :class="{ 'messages-stat--active': status === 'read' }"
                    @click="setStatus('read')"
                >
                    <span class="messages-stat__label">Read</span>
                    <strong>{{ stats.read }}</strong>
                </button>
            </div>

            <section class="messages-panel">
                <div class="messages-toolbar">
                    <div class="messages-search">
                        <span class="messages-search__icon" v-html="icons.search"></span>
                        <input
                            v-model="q"
                            type="text"
                            class="messages-search__input"
                            placeholder="Search by name, email, or message..."
                            @keyup.enter="applyFilters"
                        />
                    </div>
                    <button type="button" class="messages-btn messages-btn--ghost" @click="applyFilters">
                        Search
                    </button>
                    <button
                        v-if="hasFilters"
                        type="button"
                        class="messages-btn messages-btn--ghost"
                        @click="clearFilters"
                    >
                        Clear
                    </button>
                </div>

                <div v-if="messages.data.length" class="messages-table-wrap">
                    <table class="messages-table">
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th class="messages-table__actions-head">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in messages.data"
                                :key="item.id"
                                :class="{ 'messages-table__row--unread': !item.read_at }"
                            >
                                <td>
                                    <div class="messages-cell">
                                        <div
                                            class="messages-avatar"
                                            :class="{ 'messages-avatar--unread': !item.read_at }"
                                        >
                                            {{ initials(item.name) }}
                                        </div>
                                        <div>
                                            <strong>{{ item.name }}</strong>
                                            <small>{{ item.email }}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="messages-preview">{{ excerpt(item.message) }}</p>
                                </td>
                                <td>
                                    <span class="messages-date">{{ formatDate(item.created_at) }}</span>
                                </td>
                                <td>
                                    <span
                                        class="messages-badge"
                                        :class="item.read_at ? 'messages-badge--read' : 'messages-badge--unread'"
                                    >
                                        {{ item.read_at ? 'Read' : 'Unread' }}
                                    </span>
                                </td>
                                <td>
                                    <div class="messages-actions">
                                        <Link
                                            :href="`/admin/messages/${item.id}`"
                                            class="messages-action messages-action--view"
                                            title="View message"
                                        >
                                            <span v-html="icons.eye"></span>
                                        </Link>
                                        <button
                                            type="button"
                                            class="messages-action messages-action--delete"
                                            title="Delete message"
                                            @click="deleteMessage(item.id)"
                                        >
                                            <span v-html="icons.trash"></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="messages-empty">
                    <div class="messages-empty__icon" v-html="icons.mail"></div>
                    <h3>No messages found</h3>
                    <p>{{ hasFilters ? 'Try adjusting your search or filters.' : 'Contact form submissions will appear here.' }}</p>
                </div>

                <div v-if="messages.data.length" class="messages-pagination">
                    <Pagination :links="messages.links" />
                </div>
            </section>
        </div>
    </Layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';
import Pagination from '../../Shared/Pagination';
import Layout from '../../Shared/Layout';

const icons = {
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L17 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M10 11V17M14 11V17M6 7L7 19H17L18 7M9 7V4H15V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    mail: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
};

const props = defineProps({
    messages: Object,
    stats: Object,
    filters: Object,
    contactEmail: {
        type: String,
        default: 'info@elkhadiga.com',
    },
});

const form = useForm({});
const q = ref(props.filters?.q || '');
const status = ref(props.filters?.status || '');

const hasFilters = computed(() => Boolean(q.value || status.value));

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

const excerpt = (text, limit = 90) => {
    if (!text) return '';
    const normalized = text.replace(/\s+/g, ' ').trim();
    return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
};

const formatDate = (value) => {
    if (!value) return '—';
    return new Date(value).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const applyFilters = () => {
    Inertia.get('/admin/messages', {
        q: q.value || undefined,
        status: status.value || undefined,
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
    });
};

const setStatus = (value) => {
    status.value = value;
    applyFilters();
};

const clearFilters = () => {
    q.value = '';
    status.value = '';
    applyFilters();
};

const deleteMessage = (id) => {
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
            form.delete(`/admin/messages/${id}`, {
                preserveScroll: true,
            });
        }
    });
};
</script>

<style scoped>
.messages-page {
    --m-primary: #A91E2C;
    --m-primary-dark: #8E1824;
    --m-secondary: #5A8F3C;
    --m-surface: #ffffff;
    --m-border: #e6ebe6;
    --m-text: #1a1a1a;
    --m-muted: #6b7280;
    --m-radius: 16px;
    --m-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.messages-hero {
    margin-bottom: 1.25rem;
    padding: 1.75rem 1.85rem;
    border-radius: var(--m-radius);
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),
        var(--m-surface);
    border: 1px solid var(--m-border);
    box-shadow: var(--m-shadow);
}

.messages-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.45rem;
    color: var(--m-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.messages-hero__title {
    margin: 0;
    color: var(--m-text);
    font-size: 1.75rem;
    font-weight: 800;
}

.messages-hero__desc {
    margin: 0.45rem 0 0;
    max-width: 40rem;
    color: var(--m-muted);
    font-size: 0.92rem;
    line-height: 1.6;
}

.messages-hero__desc strong {
    color: var(--m-text);
}

.messages-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin-bottom: 1rem;
}

.messages-stat {
    padding: 1rem 1.15rem;
    border-radius: 14px;
    background: var(--m-surface);
    border: 1px solid var(--m-border);
    text-align: left;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.messages-stat:hover {
    transform: translateY(-1px);
    box-shadow: var(--m-shadow);
}

.messages-stat--active {
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.1);
}

.messages-stat--unread.messages-stat--active {
    border-color: rgba(169, 30, 44, 0.4);
    box-shadow: 0 0 0 3px rgba(169, 30, 44, 0.1);
}

.messages-stat__label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--m-muted);
    font-size: 0.76rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.messages-stat strong {
    color: var(--m-text);
    font-size: 1.45rem;
    font-weight: 800;
    line-height: 1;
}

.messages-panel {
    padding: 1.25rem;
    border-radius: var(--m-radius);
    background: var(--m-surface);
    border: 1px solid var(--m-border);
    box-shadow: var(--m-shadow);
}

.messages-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
}

.messages-search {
    position: relative;
    flex: 1 1 260px;
}

.messages-search__icon {
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);
    color: var(--m-muted);
    pointer-events: none;
}

.messages-search__input {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 0.95rem 0.7rem 2.5rem;
    border: 1px solid var(--m-border);
    border-radius: 12px;
    background: #fafbfa;
    color: var(--m-text);
    font-size: 0.9rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.messages-search__input:focus {
    outline: none;
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.messages-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    padding: 0.72rem 1.15rem;
    border: none;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;
    white-space: nowrap;
}

.messages-btn--ghost {
    background: #fff;
    border: 1px solid var(--m-border);
    color: var(--m-text);
}

.messages-btn--ghost:hover {
    background: #f7f9f7;
}

.messages-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--m-border);
    border-radius: 14px;
}

.messages-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 820px;
}

.messages-table thead {
    background: #f7f9f7;
}

.messages-table th {
    padding: 0.9rem 1rem;
    color: var(--m-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid var(--m-border);
}

.messages-table td {
    padding: 1rem;
    border-bottom: 1px solid #eef2ee;
    vertical-align: middle;
}

.messages-table tbody tr:hover {
    background: #fcfdfc;
}

.messages-table__row--unread {
    background: rgba(169, 30, 44, 0.03);
}

.messages-table tbody tr:last-child td {
    border-bottom: none;
}

.messages-table__actions-head {
    text-align: right;
}

.messages-cell {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    min-width: 200px;
}

.messages-avatar {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: #f3f5f3;
    color: var(--m-muted);
    font-size: 0.78rem;
    font-weight: 800;
    flex-shrink: 0;
}

.messages-avatar--unread {
    background: linear-gradient(135deg, var(--m-primary), var(--m-primary-dark));
    color: #fff;
}

.messages-cell strong {
    display: block;
    color: var(--m-text);
    font-size: 0.92rem;
    font-weight: 700;
}

.messages-cell small {
    display: block;
    margin-top: 0.15rem;
    color: var(--m-muted);
    font-size: 0.78rem;
}

.messages-preview {
    margin: 0;
    max-width: 320px;
    color: var(--m-muted);
    font-size: 0.86rem;
    line-height: 1.5;
}

.messages-date {
    color: var(--m-muted);
    font-size: 0.82rem;
    font-weight: 600;
    white-space: nowrap;
}

.messages-badge {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
}

.messages-badge--unread {
    background: rgba(169, 30, 44, 0.1);
    color: var(--m-primary);
}

.messages-badge--read {
    background: #f3f4f6;
    color: #6b7280;
}

.messages-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.45rem;
}

.messages-action {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--m-border);
    border-radius: 10px;
    background: #fff;
    color: var(--m-muted);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.messages-action--view:hover {
    border-color: rgba(90, 143, 60, 0.35);
    background: rgba(90, 143, 60, 0.08);
    color: var(--m-secondary);
}

.messages-action--delete:hover {
    border-color: rgba(169, 30, 44, 0.35);
    background: rgba(169, 30, 44, 0.08);
    color: var(--m-primary);
}

.messages-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 3.5rem 1.5rem;
    text-align: center;
}

.messages-empty__icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: #f3f5f3;
    color: #9ca3af;
}

.messages-empty h3 {
    margin: 0.25rem 0 0;
    color: var(--m-text);
    font-size: 1.15rem;
    font-weight: 800;
}

.messages-empty p {
    margin: 0;
    color: var(--m-muted);
    font-size: 0.9rem;
}

.messages-pagination {
    margin-top: 1.25rem;
}

@media (max-width: 900px) {
    .messages-stats {
        grid-template-columns: 1fr;
    }
}
</style>
