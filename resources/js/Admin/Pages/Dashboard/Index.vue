<template>
    <Head title="Dashboard" />
    <Layout :prv_page="[{ name: 'Dashboard' }]">
        <div class="dashboard-page">
            <header class="dashboard-hero">
                <div class="dashboard-hero__content">
                    <span class="dashboard-hero__eyebrow">Admin Overview</span>
                    <h1 class="dashboard-hero__title">{{ greeting }}, {{ firstName }}</h1>
                    <p class="dashboard-hero__desc">
                        Manage your IQF export catalog, featured homepage products, and site settings from one place.
                    </p>
                </div>
                <div class="dashboard-hero__actions">
                    <a href="/" target="_blank" rel="noopener noreferrer" class="dashboard-btn dashboard-btn--ghost">
                        <span v-html="icons.external"></span>
                        View Website
                    </a>
                    <Link href="/admin/products/create" class="dashboard-btn dashboard-btn--primary">
                        <span v-html="icons.plus"></span>
                        Add Product
                    </Link>
                </div>
            </header>

            <div class="dashboard-stats">
                <Link href="/admin/category" class="dashboard-stat dashboard-stat--categories">
                    <div class="dashboard-stat__icon" v-html="icons.grid"></div>
                    <div class="dashboard-stat__body">
                        <span class="dashboard-stat__label">Categories</span>
                        <strong>{{ categoriesCount }}</strong>
                        <small>{{ categoriesWithIcons }} with icons</small>
                    </div>
                    <span class="dashboard-stat__arrow" v-html="icons.arrow"></span>
                </Link>

                <Link href="/admin/products" class="dashboard-stat dashboard-stat--products">
                    <div class="dashboard-stat__icon" v-html="icons.box"></div>
                    <div class="dashboard-stat__body">
                        <span class="dashboard-stat__label">Products</span>
                        <strong>{{ productsCount }}</strong>
                        <small>{{ standardCount }} standard items</small>
                    </div>
                    <span class="dashboard-stat__arrow" v-html="icons.arrow"></span>
                </Link>

                <Link href="/admin/products" class="dashboard-stat dashboard-stat--featured">
                    <div class="dashboard-stat__icon" v-html="icons.star"></div>
                    <div class="dashboard-stat__body">
                        <span class="dashboard-stat__label">Featured</span>
                        <strong>{{ featuredCount }}</strong>
                        <small>shown on homepage</small>
                    </div>
                    <span class="dashboard-stat__arrow" v-html="icons.arrow"></span>
                </Link>

                <Link href="/admin/messages" class="dashboard-stat dashboard-stat--messages">
                    <div class="dashboard-stat__icon" v-html="icons.mail"></div>
                    <div class="dashboard-stat__body">
                        <span class="dashboard-stat__label">Messages</span>
                        <strong>{{ unreadMessagesCount }}</strong>
                        <small>unread inquiries</small>
                    </div>
                    <span class="dashboard-stat__arrow" v-html="icons.arrow"></span>
                </Link>
            </div>

            <section class="dashboard-quick">
                <h2 class="dashboard-quick__title">Quick Actions</h2>
                <div class="dashboard-quick__grid">
                    <Link href="/admin/category/create" class="dashboard-quick__item">
                        <span class="dashboard-quick__icon" v-html="icons.grid"></span>
                        <span>New Category</span>
                    </Link>
                    <Link href="/admin/products/create" class="dashboard-quick__item">
                        <span class="dashboard-quick__icon" v-html="icons.box"></span>
                        <span>New Product</span>
                    </Link>
                    <Link href="/admin/messages" class="dashboard-quick__item">
                        <span class="dashboard-quick__icon" v-html="icons.mail"></span>
                        <span>View Messages</span>
                    </Link>
                    <Link href="/admin/settings" class="dashboard-quick__item">
                        <span class="dashboard-quick__icon" v-html="icons.settings"></span>
                        <span>Site Settings</span>
                    </Link>
                </div>
            </section>

            <section v-if="recentMessages.length" class="dashboard-panel dashboard-panel--full">
                <div class="dashboard-panel__head">
                    <div>
                        <h2 class="dashboard-panel__title">Recent Messages</h2>
                        <p class="dashboard-panel__subtitle">Latest contact form submissions</p>
                    </div>
                    <Link href="/admin/messages" class="dashboard-link">View inbox</Link>
                </div>

                <div class="dashboard-table-wrap">
                    <table class="dashboard-table">
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th class="dashboard-table__actions-head"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in recentMessages"
                                :key="item.id"
                                :class="{ 'dashboard-row--unread': !item.read_at }"
                            >
                                <td>
                                    <div class="dashboard-cell">
                                        <strong>{{ item.name }}</strong>
                                        <small>{{ item.email }}</small>
                                    </div>
                                </td>
                                <td>
                                    <span class="dashboard-message-preview">{{ excerpt(item.message) }}</span>
                                </td>
                                <td>
                                    <span
                                        class="dashboard-badge"
                                        :class="item.read_at ? 'dashboard-badge--default' : 'dashboard-badge--featured'"
                                    >
                                        {{ item.read_at ? 'Read' : 'Unread' }}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        :href="`/admin/messages/${item.id}`"
                                        class="dashboard-action"
                                        title="View message"
                                    >
                                        <span v-html="icons.edit"></span>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div class="dashboard-panels">
                <section class="dashboard-panel">
                    <div class="dashboard-panel__head">
                        <div>
                            <h2 class="dashboard-panel__title">Recent Products</h2>
                            <p class="dashboard-panel__subtitle">Latest additions to your catalog</p>
                        </div>
                        <Link href="/admin/products" class="dashboard-link">View all</Link>
                    </div>

                    <div v-if="recentProducts.length" class="dashboard-table-wrap">
                        <table class="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Featured</th>
                                    <th class="dashboard-table__actions-head"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in recentProducts" :key="item.id">
                                    <td>
                                        <div class="dashboard-cell">
                                            <div class="dashboard-thumb">
                                                <img
                                                    v-if="item.image_url"
                                                    :src="item.image_url"
                                                    :alt="item.name"
                                                />
                                                <span v-else class="dashboard-thumb__placeholder" v-html="icons.box"></span>
                                            </div>
                                            <strong>{{ item.name }}</strong>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="dashboard-chip">{{ item.category?.title_en || '—' }}</span>
                                    </td>
                                    <td>
                                        <span
                                            class="dashboard-badge"
                                            :class="item.is_featured ? 'dashboard-badge--featured' : 'dashboard-badge--default'"
                                        >
                                            {{ item.is_featured ? 'Featured' : 'Standard' }}
                                        </span>
                                    </td>
                                    <td>
                                        <Link
                                            :href="`/admin/products/${item.id}/edit`"
                                            class="dashboard-action"
                                            title="Edit product"
                                        >
                                            <span v-html="icons.edit"></span>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-else class="dashboard-empty">
                        <div class="dashboard-empty__icon" v-html="icons.box"></div>
                        <h3>No products yet</h3>
                        <p>Start building your export catalog.</p>
                        <Link href="/admin/products/create" class="dashboard-btn dashboard-btn--primary">
                            Add Product
                        </Link>
                    </div>
                </section>

                <section class="dashboard-panel">
                    <div class="dashboard-panel__head">
                        <div>
                            <h2 class="dashboard-panel__title">Recent Categories</h2>
                            <p class="dashboard-panel__subtitle">Product groups and navigation</p>
                        </div>
                        <Link href="/admin/category" class="dashboard-link">View all</Link>
                    </div>

                    <div v-if="recentCategories.length" class="dashboard-table-wrap">
                        <table class="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Products</th>
                                    <th class="dashboard-table__actions-head"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in recentCategories" :key="item.id">
                                    <td>
                                        <div class="dashboard-cell">
                                            <div class="dashboard-thumb dashboard-thumb--round">
                                                <img
                                                    v-if="item.icon_url"
                                                    :src="item.icon_url"
                                                    :alt="item.title_en"
                                                />
                                                <span v-else class="dashboard-thumb__placeholder" v-html="icons.grid"></span>
                                            </div>
                                            <div>
                                                <strong>{{ item.title_en }}</strong>
                                                <small>{{ item.title_ar }}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="dashboard-count">{{ item.products_count ?? 0 }}</span>
                                    </td>
                                    <td>
                                        <Link
                                            :href="`/admin/category/${item.id}/edit`"
                                            class="dashboard-action"
                                            title="Edit category"
                                        >
                                            <span v-html="icons.edit"></span>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-else class="dashboard-empty">
                        <div class="dashboard-empty__icon" v-html="icons.grid"></div>
                        <h3>No categories yet</h3>
                        <p>Create your first product group.</p>
                        <Link href="/admin/category/create" class="dashboard-btn dashboard-btn--primary">
                            Add Category
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const icons = {
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 5H19V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 14L19 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M19 14V19C19 19.5523 18.5523 20 18 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5H10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    edit: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5V6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20H4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    box: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7.5L12 3.5L20 7.5L12 11.5L4 7.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12L12 16L20 12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 16.5L12 20.5L20 16.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    grid: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/></svg>`,
    star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3.5L14.8 9.2L21 10.1L16.5 14.4L17.6 20.6L12 17.6L6.4 20.6L7.5 14.4L3 10.1L9.2 9.2L12 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    settings: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    mail: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
};

const props = defineProps({
    categoriesCount: Number,
    productsCount: Number,
    featuredCount: Number,
    categoriesWithIcons: Number,
    unreadMessagesCount: Number,
    recentProducts: Array,
    recentCategories: Array,
    recentMessages: Array,
});

const page = usePage();

const firstName = computed(() => {
    const name = page.props.value?.user?.name || 'Admin';
    return name.split(' ')[0];
});

const greeting = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
});

const standardCount = computed(() =>
    Math.max(0, (props.productsCount || 0) - (props.featuredCount || 0))
);

const excerpt = (text, limit = 72) => {
    if (!text) return '';
    const normalized = text.replace(/\s+/g, ' ').trim();
    return normalized.length > limit ? `${normalized.slice(0, limit)}...` : normalized;
};
</script>

<style scoped>
.dashboard-page {
    --d-primary: #A91E2C;
    --d-primary-dark: #8E1824;
    --d-secondary: #5A8F3C;
    --d-surface: #ffffff;
    --d-border: #e6ebe6;
    --d-text: #1a1a1a;
    --d-muted: #6b7280;
    --d-radius: 16px;
    --d-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.dashboard-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
    padding: 1.85rem 2rem;
    border-radius: var(--d-radius);
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.14), transparent 45%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.12), transparent 42%),
        var(--d-surface);
    border: 1px solid var(--d-border);
    box-shadow: var(--d-shadow);
}

.dashboard-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.45rem;
    color: var(--d-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.dashboard-hero__title {
    margin: 0;
    color: var(--d-text);
    font-size: 1.85rem;
    font-weight: 800;
    line-height: 1.2;
}

.dashboard-hero__desc {
    margin: 0.55rem 0 0;
    max-width: 38rem;
    color: var(--d-muted);
    font-size: 0.92rem;
    line-height: 1.65;
}

.dashboard-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    flex-shrink: 0;
}

.dashboard-btn {
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

.dashboard-btn--primary {
    background: linear-gradient(135deg, var(--d-primary), var(--d-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);
}

.dashboard-btn--primary:hover {
    transform: translateY(-1px);
    color: #fff;
    box-shadow: 0 10px 24px rgba(169, 30, 44, 0.28);
}

.dashboard-btn--ghost {
    background: #fff;
    border: 1px solid var(--d-border);
    color: var(--d-text);
}

.dashboard-btn--ghost:hover {
    background: #f7f9f7;
    color: var(--d-text);
}

.dashboard-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.9rem;
    margin-bottom: 1rem;
}

.dashboard-stat {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 1.1rem 1.15rem;
    border-radius: 14px;
    background: var(--d-surface);
    border: 1px solid var(--d-border);
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.dashboard-stat:hover {
    transform: translateY(-2px);
    box-shadow: var(--d-shadow);
    border-color: rgba(90, 143, 60, 0.25);
}

.dashboard-stat__icon {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 12px;
    flex-shrink: 0;
}

.dashboard-stat--categories .dashboard-stat__icon {
    background: rgba(90, 143, 60, 0.12);
    color: var(--d-secondary);
}

.dashboard-stat--products .dashboard-stat__icon {
    background: rgba(169, 30, 44, 0.1);
    color: var(--d-primary);
}

.dashboard-stat--featured .dashboard-stat__icon {
    background: rgba(234, 179, 8, 0.14);
    color: #b45309;
}

.dashboard-stat--settings .dashboard-stat__icon {
    background: #f3f4f6;
    color: #4b5563;
}

.dashboard-stat--messages .dashboard-stat__icon {
    background: rgba(59, 130, 246, 0.12);
    color: #2563eb;
}

.dashboard-panel--full {
    margin-bottom: 1rem;
}

.dashboard-row--unread {
    background: rgba(169, 30, 44, 0.03);
}

.dashboard-message-preview {
    color: var(--d-muted);
    font-size: 0.84rem;
    line-height: 1.45;
}

.dashboard-cell small {
    display: block;
    margin-top: 0.1rem;
    color: var(--d-muted);
    font-size: 0.76rem;
    font-weight: 500;
}

.dashboard-stat__body {
    flex: 1;
    min-width: 0;
}

.dashboard-stat__label {
    display: block;
    margin-bottom: 0.2rem;
    color: var(--d-muted);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.dashboard-stat__body strong {
    display: block;
    color: var(--d-text);
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
}

.dashboard-stat__body small {
    display: block;
    margin-top: 0.2rem;
    color: var(--d-muted);
    font-size: 0.76rem;
}

.dashboard-stat__arrow {
    color: #c4cbc4;
    flex-shrink: 0;
    transition: color 0.2s ease, transform 0.2s ease;
}

.dashboard-stat:hover .dashboard-stat__arrow {
    color: var(--d-secondary);
    transform: translateX(2px);
}

.dashboard-quick {
    margin-bottom: 1rem;
    padding: 1.15rem 1.25rem;
    border-radius: var(--d-radius);
    background: var(--d-surface);
    border: 1px solid var(--d-border);
}

.dashboard-quick__title {
    margin: 0 0 0.85rem;
    color: var(--d-text);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.dashboard-quick__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.65rem;
}

.dashboard-quick__item {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    background: #f7f9f7;
    border: 1px solid transparent;
    color: var(--d-text);
    font-size: 0.86rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.dashboard-quick__item:hover {
    background: #fff;
    border-color: rgba(90, 143, 60, 0.3);
    color: var(--d-secondary);
}

.dashboard-quick__icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: #fff;
    color: var(--d-muted);
    flex-shrink: 0;
}

.dashboard-quick__item:hover .dashboard-quick__icon {
    color: var(--d-secondary);
}

.dashboard-panels {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.dashboard-panel {
    padding: 1.25rem;
    border-radius: var(--d-radius);
    background: var(--d-surface);
    border: 1px solid var(--d-border);
    box-shadow: var(--d-shadow);
}

.dashboard-panel__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.1rem;
}

.dashboard-panel__title {
    margin: 0;
    color: var(--d-text);
    font-size: 1.05rem;
    font-weight: 800;
}

.dashboard-panel__subtitle {
    margin: 0.25rem 0 0;
    color: var(--d-muted);
    font-size: 0.82rem;
}

.dashboard-link {
    color: var(--d-secondary);
    font-size: 0.84rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
}

.dashboard-link:hover {
    color: var(--d-primary);
}

.dashboard-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--d-border);
    border-radius: 14px;
}

.dashboard-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 320px;
}

.dashboard-table thead {
    background: #f7f9f7;
}

.dashboard-table th {
    padding: 0.75rem 0.9rem;
    color: var(--d-muted);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid var(--d-border);
}

.dashboard-table td {
    padding: 0.85rem 0.9rem;
    border-bottom: 1px solid #eef2ee;
    vertical-align: middle;
}

.dashboard-table tbody tr:hover {
    background: #fcfdfc;
}

.dashboard-table tbody tr:last-child td {
    border-bottom: none;
}

.dashboard-table__actions-head {
    width: 48px;
    text-align: right;
}

.dashboard-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
}

.dashboard-cell strong {
    display: block;
    color: var(--d-text);
    font-size: 0.88rem;
    font-weight: 700;
}

.dashboard-cell small {
    display: block;
    margin-top: 0.1rem;
    color: var(--d-muted);
    font-size: 0.76rem;
}

.dashboard-thumb {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    overflow: hidden;
    background: #f3f5f3;
    border: 1px solid var(--d-border);
    flex-shrink: 0;
}

.dashboard-thumb--round {
    border-radius: 50%;
}

.dashboard-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dashboard-thumb__placeholder {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: #9ca3af;
}

.dashboard-chip {
    display: inline-flex;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    background: rgba(90, 143, 60, 0.1);
    color: var(--d-secondary);
    font-size: 0.76rem;
    font-weight: 700;
}

.dashboard-badge {
    display: inline-flex;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    font-size: 0.74rem;
    font-weight: 700;
}

.dashboard-badge--featured {
    background: rgba(169, 30, 44, 0.1);
    color: var(--d-primary);
}

.dashboard-badge--default {
    background: #f3f4f6;
    color: #6b7280;
}

.dashboard-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    padding: 0 0.5rem;
    border-radius: 8px;
    background: #f3f5f3;
    color: var(--d-text);
    font-size: 0.82rem;
    font-weight: 700;
}

.dashboard-action {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin-left: auto;
    border: 1px solid var(--d-border);
    border-radius: 10px;
    background: #fff;
    color: var(--d-muted);
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.dashboard-action:hover {
    border-color: rgba(90, 143, 60, 0.35);
    background: rgba(90, 143, 60, 0.08);
    color: var(--d-secondary);
}

.dashboard-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    padding: 2.5rem 1.25rem;
    text-align: center;
}

.dashboard-empty__icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: #f3f5f3;
    color: #9ca3af;
}

.dashboard-empty h3 {
    margin: 0.2rem 0 0;
    color: var(--d-text);
    font-size: 1rem;
    font-weight: 800;
}

.dashboard-empty p {
    margin: 0 0 0.5rem;
    color: var(--d-muted);
    font-size: 0.86rem;
}

@media (max-width: 1100px) {
    .dashboard-stats,
    .dashboard-quick__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 900px) {
    .dashboard-hero {
        flex-direction: column;
        align-items: stretch;
    }

    .dashboard-panels {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .dashboard-stats,
    .dashboard-quick__grid {
        grid-template-columns: 1fr;
    }

    .dashboard-hero__title {
        font-size: 1.5rem;
    }
}
</style>
