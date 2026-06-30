<template>
    <Head title="Categories" />
    <Layout :prv_page="[{ name: 'Categories' }]">
        <div class="categories-page">
            <header class="categories-hero">
                <div>
                    <span class="categories-hero__eyebrow">Catalog Structure</span>
                    <h1 class="categories-hero__title">Categories</h1>
                    <p class="categories-hero__desc">
                        Organize products into Fruits, Vegetables, and other export groups.
                    </p>
                </div>
                <Link href="/admin/category/create" class="categories-btn categories-btn--primary">
                    <span v-html="icons.plus"></span>
                    Add Category
                </Link>
            </header>

            <div class="categories-stats">
                <div class="categories-stat">
                    <span class="categories-stat__label">Total Categories</span>
                    <strong>{{ category.total ?? category.data.length }}</strong>
                </div>
                <div class="categories-stat">
                    <span class="categories-stat__label">With Icons</span>
                    <strong>{{ withIconCount }}</strong>
                </div>
                <div class="categories-stat">
                    <span class="categories-stat__label">Current Page</span>
                    <strong>{{ category.data.length }}</strong>
                </div>
            </div>

            <section class="categories-panel">
                <div class="categories-toolbar">
                    <div class="categories-search">
                        <span class="categories-search__icon" v-html="icons.search"></span>
                        <input
                            v-model="name"
                            type="text"
                            class="categories-search__input"
                            placeholder="Search by English or Arabic title..."
                            @keyup.enter="applyFilters"
                        />
                    </div>
                    <button type="button" class="categories-btn categories-btn--ghost" @click="applyFilters">
                        Search
                    </button>
                    <button
                        v-if="name"
                        type="button"
                        class="categories-btn categories-btn--ghost"
                        @click="clearFilters"
                    >
                        Clear
                    </button>
                </div>

                <div v-if="category.data.length" class="categories-table-wrap">
                    <table class="categories-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Slug</th>
                                <th>Icon</th>
                                <th class="categories-table__actions-head">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in category.data" :key="item.id">
                                <td>
                                    <div class="categories-cell">
                                        <div class="categories-thumb">
                                            <img
                                                v-if="item.icon_url"
                                                :src="item.icon_url"
                                                :alt="item.title_en"
                                            />
                                            <span v-else class="categories-thumb__placeholder" v-html="icons.grid"></span>
                                        </div>
                                        <div>
                                            <strong>{{ item.title_en }}</strong>
                                            <small>{{ item.title_ar }}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <code class="categories-slug">{{ item.slug || '—' }}</code>
                                </td>
                                <td>
                                    <span
                                        class="categories-badge"
                                        :class="item.icon_url ? 'categories-badge--yes' : 'categories-badge--no'"
                                    >
                                        {{ item.icon_url ? 'Uploaded' : 'Missing' }}
                                    </span>
                                </td>
                                <td>
                                    <div class="categories-actions">
                                        <Link
                                            :href="`/admin/category/${item.id}/edit`"
                                            class="categories-action categories-action--edit"
                                            title="Edit category"
                                        >
                                            <span v-html="icons.edit"></span>
                                        </Link>
                                        <button
                                            type="button"
                                            class="categories-action categories-action--delete"
                                            title="Delete category"
                                            @click="deleteCategory(item.id)"
                                        >
                                            <span v-html="icons.trash"></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="categories-empty">
                    <div class="categories-empty__icon" v-html="icons.grid"></div>
                    <h3>No categories found</h3>
                    <p>{{ name ? 'Try a different search term.' : 'Create your first category to group products.' }}</p>
                    <Link href="/admin/category/create" class="categories-btn categories-btn--primary">
                        Add Category
                    </Link>
                </div>

                <div v-if="category.data.length" class="categories-pagination">
                    <Pagination :links="category.links" />
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
    grid: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.6"/></svg>`,
};

const props = defineProps({
    category: Object,
    filters: Object,
});

const form = useForm({});
const name = ref(props.filters?.name || '');

const withIconCount = computed(() =>
    props.category.data.filter((item) => item.icon_url).length
);

const applyFilters = () => {
    Inertia.get('/admin/category', {
        name: name.value || undefined,
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
    });
};

const clearFilters = () => {
    name.value = '';
    applyFilters();
};

const deleteCategory = (id) => {
    Swal.fire({
        title: 'Delete this category?',
        text: 'Products in this category may be affected.',
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
            form.delete(`/admin/category/${id}`, {
                preserveScroll: true,
            });
        }
    });
};
</script>

<style scoped>
.categories-page {
    --c-primary: #A91E2C;
    --c-primary-dark: #8E1824;
    --c-secondary: #5A8F3C;
    --c-surface: #ffffff;
    --c-border: #e6ebe6;
    --c-text: #1a1a1a;
    --c-muted: #6b7280;
    --c-radius: 16px;
    --c-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 2rem;
}

.categories-hero,
.categories-panel,
.categories-stat {
    border: 1px solid var(--c-border);
    background: var(--c-surface);
    box-shadow: var(--c-shadow);
}

.categories-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1rem;
    padding: 1.75rem 1.85rem;
    border-radius: var(--c-radius);
    background:
        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),
        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),
        var(--c-surface);
}

.categories-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.45rem;
    color: var(--c-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.categories-hero__title {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--c-text);
}

.categories-hero__desc {
    margin: 0.45rem 0 0;
    max-width: 34rem;
    color: var(--c-muted);
    font-size: 0.92rem;
    line-height: 1.6;
}

.categories-btn {
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
    white-space: nowrap;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.categories-btn--primary {
    background: linear-gradient(135deg, var(--c-primary), var(--c-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);
}

.categories-btn--primary:hover {
    transform: translateY(-1px);
    color: #fff;
}

.categories-btn--ghost {
    background: #fff;
    border: 1px solid var(--c-border);
    color: var(--c-text);
}

.categories-btn--ghost:hover {
    background: #f7f9f7;
}

.categories-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin-bottom: 1rem;
}

.categories-stat {
    padding: 1rem 1.15rem;
    border-radius: 14px;
}

.categories-stat__label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--c-muted);
    font-size: 0.76rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.categories-stat strong {
    font-size: 1.45rem;
    font-weight: 800;
    color: var(--c-text);
}

.categories-panel {
    padding: 1.25rem;
    border-radius: var(--c-radius);
}

.categories-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
}

.categories-search {
    position: relative;
    flex: 1 1 280px;
}

.categories-search__icon {
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);
    color: var(--c-muted);
}

.categories-search__input {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 0.95rem 0.7rem 2.5rem;
    border: 1px solid var(--c-border);
    border-radius: 12px;
    background: #fafbfa;
    font-size: 0.9rem;
}

.categories-search__input:focus {
    outline: none;
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.categories-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--c-border);
    border-radius: 14px;
}

.categories-table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
}

.categories-table thead {
    background: #f7f9f7;
}

.categories-table th {
    padding: 0.9rem 1rem;
    color: var(--c-muted);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid var(--c-border);
}

.categories-table td {
    padding: 1rem;
    border-bottom: 1px solid #eef2ee;
    vertical-align: middle;
}

.categories-table tbody tr:hover {
    background: #fcfdfc;
}

.categories-table tbody tr:last-child td {
    border-bottom: none;
}

.categories-table__actions-head {
    text-align: right;
}

.categories-cell {
    display: flex;
    align-items: center;
    gap: 0.85rem;
}

.categories-cell strong {
    display: block;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--c-text);
}

.categories-cell small {
    display: block;
    margin-top: 0.15rem;
    color: var(--c-muted);
    font-size: 0.8rem;
}

.categories-thumb {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    overflow: hidden;
    background: #f3f5f3;
    border: 1px solid var(--c-border);
    flex-shrink: 0;
}

.categories-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.categories-thumb__placeholder {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: #9ca3af;
}

.categories-slug {
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    background: #f3f4f6;
    color: #374151;
    font-size: 0.8rem;
}

.categories-badge {
    display: inline-flex;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
}

.categories-badge--yes {
    background: rgba(90, 143, 60, 0.12);
    color: var(--c-secondary);
}

.categories-badge--no {
    background: #f3f4f6;
    color: #6b7280;
}

.categories-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.45rem;
}

.categories-action {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--c-border);
    border-radius: 10px;
    background: #fff;
    color: var(--c-muted);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.categories-action--edit:hover {
    background: rgba(90, 143, 60, 0.08);
    border-color: rgba(90, 143, 60, 0.35);
    color: var(--c-secondary);
}

.categories-action--delete:hover {
    background: rgba(169, 30, 44, 0.08);
    border-color: rgba(169, 30, 44, 0.35);
    color: var(--c-primary);
}

.categories-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.65rem;
    padding: 3.5rem 1.5rem;
    text-align: center;
}

.categories-empty__icon {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: #f3f5f3;
    color: #9ca3af;
}

.categories-empty h3 {
    margin: 0.25rem 0 0;
    font-size: 1.15rem;
    font-weight: 800;
}

.categories-empty p {
    margin: 0;
    color: var(--c-muted);
}

.categories-pagination {
    margin-top: 1.25rem;
}

@media (max-width: 900px) {
    .categories-hero {
        flex-direction: column;
    }

    .categories-stats {
        grid-template-columns: 1fr;
    }
}
</style>
