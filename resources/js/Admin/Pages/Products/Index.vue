<template>
    <Head title="Products" />
    <Layout :prv_page="[{ name: 'Products' }]">
        <div class="products-page">
            <header class="products-hero">
                <div>
                    <span class="products-hero__eyebrow">Catalog Management</span>
                    <h1 class="products-hero__title">Products</h1>
                    <p class="products-hero__desc">
                        Manage your IQF product catalog, images, and homepage featured items.
                    </p>
                </div>
                <Link href="/admin/products/create" class="products-btn products-btn--primary">
                    <span v-html="icons.plus"></span>
                    Add Product
                </Link>
            </header>

            <div class="products-stats">
                <div class="products-stat">
                    <span class="products-stat__label">Total Products</span>
                    <strong>{{ products.total ?? products.data.length }}</strong>
                </div>
                <div class="products-stat">
                    <span class="products-stat__label">Featured on Home</span>
                    <strong>{{ featuredCount }}</strong>
                </div>
                <div class="products-stat">
                    <span class="products-stat__label">Categories</span>
                    <strong>{{ categories.length }}</strong>
                </div>
            </div>

            <section class="products-panel">
                <div class="products-toolbar">
                    <div class="products-search">
                        <span class="products-search__icon" v-html="icons.search"></span>
                        <input
                            v-model="name"
                            type="text"
                            class="products-search__input"
                            placeholder="Search by product name..."
                            @keyup.enter="applyFilters"
                        />
                    </div>
                    <select v-model="categoryId" class="products-select" @change="applyFilters">
                        <option value="">All categories</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.title_en }}
                        </option>
                    </select>
                    <button type="button" class="products-btn products-btn--ghost" @click="applyFilters">
                        Search
                    </button>
                    <button
                        v-if="hasFilters"
                        type="button"
                        class="products-btn products-btn--ghost"
                        @click="clearFilters"
                    >
                        Clear
                    </button>
                </div>

                <div v-if="products.data.length" class="products-table-wrap">
                    <table class="products-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Order</th>
                                <th>Featured</th>
                                <th class="products-table__actions-head">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in products.data" :key="item.id">
                                <td>
                                    <div class="products-cell-product">
                                        <div class="products-thumb">
                                            <img
                                                v-if="item.image_url"
                                                :src="item.image_url"
                                                :alt="item.name"
                                            />
                                            <span v-else class="products-thumb__placeholder" v-html="icons.box"></span>
                                        </div>
                                        <div>
                                            <strong>{{ item.name }}</strong>
                                            <small v-if="item.description">{{ excerpt(item.description) }}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="products-chip">{{ item.category?.title_en || '—' }}</span>
                                </td>
                                <td>
                                    <span class="products-order">#{{ item.sort_order ?? 0 }}</span>
                                </td>
                                <td>
                                    <span
                                        class="products-badge"
                                        :class="item.is_featured ? 'products-badge--featured' : 'products-badge--default'"
                                    >
                                        {{ item.is_featured ? 'Featured' : 'Standard' }}
                                    </span>
                                </td>
                                <td>
                                    <div class="products-actions">
                                        <Link
                                            :href="`/admin/products/${item.id}/edit`"
                                            class="products-action products-action--edit"
                                            title="Edit product"
                                        >
                                            <span v-html="icons.edit"></span>
                                        </Link>
                                        <button
                                            type="button"
                                            class="products-action products-action--delete"
                                            title="Delete product"
                                            @click="deleteProduct(item.id)"
                                        >
                                            <span v-html="icons.trash"></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="products-empty">
                    <div class="products-empty__icon" v-html="icons.box"></div>
                    <h3>No products found</h3>
                    <p>{{ hasFilters ? 'Try adjusting your search or filters.' : 'Start by adding your first product to the catalog.' }}</p>
                    <Link href="/admin/products/create" class="products-btn products-btn--primary">
                        Add Product
                    </Link>
                </div>

                <div v-if="products.data.length" class="products-pagination">
                    <Pagination :links="products.links" />
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
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20L17 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    edit: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5V6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20H4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M10 11V17M14 11V17M6 7L7 19H17L18 7M9 7V4H15V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    box: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7.5L12 3.5L20 7.5L12 11.5L4 7.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12L12 16L20 12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 16.5L12 20.5L20 16.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
};

const props = defineProps({
    products: Object,
    categories: Array,
    filters: Object,
});

const form = useForm({});
const name = ref(props.filters?.name || '');
const categoryId = ref(props.filters?.category_id || '');

const featuredCount = computed(() =>
    props.products.data.filter((item) => item.is_featured).length
);

const hasFilters = computed(() => Boolean(name.value || categoryId.value));

const excerpt = (text, limit = 72) => {
    if (!text) return '';
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

const applyFilters = () => {
    Inertia.get('/admin/products', {
        name: name.value || undefined,
        category_id: categoryId.value || undefined,
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
    });
};

const clearFilters = () => {
    name.value = '';
    categoryId.value = '';
    applyFilters();
};

const deleteProduct = (id) => {
    Swal.fire({
        title: 'Delete this product?',
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
            form.delete(`/admin/products/${id}`, {
                preserveScroll: true,
            });
        }
    });
};
</script>

<style scoped>
.products-page {
    --p-primary: #A91E2C;
    --p-primary-dark: #8E1824;
    --p-secondary: #5A8F3C;
    --p-bg: #f4f6f4;
    --p-surface: #ffffff;
    --p-border: #e6ebe6;
    --p-text: #1a1a1a;
    --p-muted: #6b7280;
    --p-radius: 16px;
    --p-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.products-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
    padding: 1.75rem 1.85rem;
    border-radius: var(--p-radius);
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),
        var(--p-surface);
    border: 1px solid var(--p-border);
    box-shadow: var(--p-shadow);
}

.products-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.45rem;
    color: var(--p-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.products-hero__title {
    margin: 0;
    color: var(--p-text);
    font-size: 1.75rem;
    font-weight: 800;
}

.products-hero__desc {
    margin: 0.45rem 0 0;
    max-width: 36rem;
    color: var(--p-muted);
    font-size: 0.92rem;
    line-height: 1.6;
}

.products-btn {
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

.products-btn--primary {
    background: linear-gradient(135deg, var(--p-primary), var(--p-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);
}

.products-btn--primary:hover {
    transform: translateY(-1px);
    color: #fff;
    box-shadow: 0 10px 24px rgba(169, 30, 44, 0.28);
}

.products-btn--ghost {
    background: #fff;
    border: 1px solid var(--p-border);
    color: var(--p-text);
}

.products-btn--ghost:hover {
    background: #f7f9f7;
}

.products-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin-bottom: 1rem;
}

.products-stat {
    padding: 1rem 1.15rem;
    border-radius: 14px;
    background: var(--p-surface);
    border: 1px solid var(--p-border);
}

.products-stat__label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--p-muted);
    font-size: 0.76rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.products-stat strong {
    color: var(--p-text);
    font-size: 1.45rem;
    font-weight: 800;
    line-height: 1;
}

.products-panel {
    padding: 1.25rem;
    border-radius: var(--p-radius);
    background: var(--p-surface);
    border: 1px solid var(--p-border);
    box-shadow: var(--p-shadow);
}

.products-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
}

.products-search {
    position: relative;
    flex: 1 1 260px;
}

.products-search__icon {
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);
    color: var(--p-muted);
    pointer-events: none;
}

.products-search__input,
.products-select {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 0.95rem;
    border: 1px solid var(--p-border);
    border-radius: 12px;
    background: #fafbfa;
    color: var(--p-text);
    font-size: 0.9rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.products-search__input {
    padding-left: 2.5rem;
}

.products-search__input:focus,
.products-select:focus {
    outline: none;
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.products-select {
    flex: 0 1 220px;
    cursor: pointer;
}

.products-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--p-border);
    border-radius: 14px;
}

.products-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 760px;
}

.products-table thead {
    background: #f7f9f7;
}

.products-table th {
    padding: 0.9rem 1rem;
    color: var(--p-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid var(--p-border);
}

.products-table td {
    padding: 1rem;
    border-bottom: 1px solid #eef2ee;
    vertical-align: middle;
}

.products-table tbody tr:hover {
    background: #fcfdfc;
}

.products-table tbody tr:last-child td {
    border-bottom: none;
}

.products-table__actions-head {
    text-align: right;
}

.products-cell-product {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    min-width: 240px;
}

.products-cell-product strong {
    display: block;
    color: var(--p-text);
    font-size: 0.92rem;
    font-weight: 700;
}

.products-cell-product small {
    display: block;
    margin-top: 0.15rem;
    color: var(--p-muted);
    font-size: 0.78rem;
    line-height: 1.4;
}

.products-thumb {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    overflow: hidden;
    background: #f3f5f3;
    border: 1px solid var(--p-border);
    flex-shrink: 0;
}

.products-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.products-thumb__placeholder {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: #9ca3af;
}

.products-chip {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: rgba(90, 143, 60, 0.1);
    color: var(--p-secondary);
    font-size: 0.78rem;
    font-weight: 700;
}

.products-order {
    color: var(--p-muted);
    font-size: 0.86rem;
    font-weight: 600;
}

.products-badge {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
}

.products-badge--featured {
    background: rgba(169, 30, 44, 0.1);
    color: var(--p-primary);
}

.products-badge--default {
    background: #f3f4f6;
    color: #6b7280;
}

.products-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.45rem;
}

.products-action {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--p-border);
    border-radius: 10px;
    background: #fff;
    color: var(--p-muted);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.products-action--edit:hover {
    border-color: rgba(90, 143, 60, 0.35);
    background: rgba(90, 143, 60, 0.08);
    color: var(--p-secondary);
}

.products-action--delete:hover {
    border-color: rgba(169, 30, 44, 0.35);
    background: rgba(169, 30, 44, 0.08);
    color: var(--p-primary);
}

.products-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 3.5rem 1.5rem;
    text-align: center;
}

.products-empty__icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: #f3f5f3;
    color: #9ca3af;
}

.products-empty h3 {
    margin: 0.25rem 0 0;
    color: var(--p-text);
    font-size: 1.15rem;
    font-weight: 800;
}

.products-empty p {
    margin: 0;
    color: var(--p-muted);
    font-size: 0.9rem;
}

.products-pagination {
    margin-top: 1.25rem;
}

@media (max-width: 900px) {
    .products-hero {
        flex-direction: column;
        align-items: stretch;
    }

    .products-stats {
        grid-template-columns: 1fr;
    }

    .products-select {
        flex: 1 1 100%;
    }
}
</style>
