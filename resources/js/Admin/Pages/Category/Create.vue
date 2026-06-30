<template>
    <Head title="Add Category" />
    <Layout :prv_page="[{ name: 'Categories', link: '/admin/category' }, { name: 'Add Category' }]">
        <div class="category-form-page">
            <header class="category-form-hero">
                <div>
                    <span class="category-form-hero__eyebrow">New Category</span>
                    <h1 class="category-form-hero__title">Add Category</h1>
                    <p class="category-form-hero__desc">Create a product group with Arabic and English titles plus an icon.</p>
                </div>
                <Link href="/admin/category" class="category-form-btn category-form-btn--ghost">Back to list</Link>
            </header>

            <form @submit.prevent="submit" class="category-form-panel">
                <div class="category-form-grid">
                    <div class="category-form-field">
                        <label>English Title</label>
                        <input type="text" class="category-form-input" v-model="form.title_en" placeholder="e.g. Fruits">
                        <div v-if="form.errors.title_en" class="category-form-error">{{ form.errors.title_en }}</div>
                    </div>
                    <div class="category-form-field">
                        <label>Arabic Title</label>
                        <input type="text" class="category-form-input" v-model="form.title_ar" placeholder="e.g. فواكه" dir="rtl">
                        <div v-if="form.errors.title_ar" class="category-form-error">{{ form.errors.title_ar }}</div>
                    </div>
                </div>

                <div class="category-form-section">
                    <h3>Category Icon</h3>
                    <p>Used on the website products filter and category cards.</p>
                    <div class="category-form-upload">
                        <div v-if="previewUrl" class="category-form-upload__preview">
                            <img :src="previewUrl" alt="Icon preview">
                        </div>
                        <label class="category-form-upload__dropzone">
                            <input type="file" accept="image/*" hidden @change="onFileChange">
                            <span class="category-form-upload__plus">+</span>
                            <strong>Upload icon image</strong>
                            <small>PNG, JPG or WebP — square recommended</small>
                        </label>
                    </div>
                    <div v-if="form.errors.icon" class="category-form-error">{{ form.errors.icon }}</div>
                </div>

                <footer class="category-form-footer">
                    <Link href="/admin/category" class="category-form-btn category-form-btn--ghost">Cancel</Link>
                    <button type="submit" class="category-form-btn category-form-btn--primary" :disabled="form.processing">
                        {{ form.processing ? 'Saving...' : 'Save Category' }}
                    </button>
                </footer>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const form = useForm({
    icon: '',
    title_en: '',
    title_ar: '',
});

const previewUrl = ref('');

const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    form.icon = file;
    previewUrl.value = URL.createObjectURL(file);
};

const submit = () => {
    form.post('/admin/category');
};
</script>

<style scoped>
.category-form-page {
    --cf-primary: #A91E2C;
    --cf-primary-dark: #8E1824;
    --cf-secondary: #5A8F3C;
    --cf-border: #e6ebe6;
    --cf-text: #1a1a1a;
    --cf-muted: #6b7280;
    padding-bottom: 2rem;
}

.category-form-hero,
.category-form-panel {
    border: 1px solid var(--cf-border);
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
}

.category-form-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1.5rem 1.75rem;
}

.category-form-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.35rem;
    color: var(--cf-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.category-form-hero__title {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 800;
}

.category-form-hero__desc {
    margin: 0.4rem 0 0;
    color: var(--cf-muted);
    font-size: 0.9rem;
}

.category-form-panel {
    padding: 1.5rem 1.75rem 1.25rem;
}

.category-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.category-form-field label {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--cf-text);
}

.category-form-input {
    width: 100%;
    min-height: 46px;
    padding: 0.7rem 0.95rem;
    border: 1px solid var(--cf-border);
    border-radius: 12px;
    background: #fafbfa;
    font-size: 0.92rem;
}

.category-form-input:focus {
    outline: none;
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.category-form-section h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    font-weight: 800;
}

.category-form-section p {
    margin: 0 0 1rem;
    color: var(--cf-muted);
    font-size: 0.86rem;
}

.category-form-upload {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1rem;
    align-items: stretch;
}

.category-form-upload__preview {
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid var(--cf-border);
    border-radius: 14px;
    background: #f8faf8;
}

.category-form-upload__preview img {
    width: 100%;
    height: 100%;
    min-height: 140px;
    object-fit: contain;
    padding: 0.75rem;
}

.category-form-upload__dropzone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-height: 140px;
    padding: 1rem;
    border: 2px dashed #cfd8cf;
    border-radius: 14px;
    background: #fafbfa;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
}

.category-form-upload__dropzone:hover {
    border-color: rgba(90, 143, 60, 0.45);
    background: rgba(90, 143, 60, 0.04);
}

.category-form-upload__plus {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(90, 143, 60, 0.12);
    color: var(--cf-secondary);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
}

.category-form-upload__dropzone strong {
    color: var(--cf-text);
    font-size: 0.9rem;
}

.category-form-upload__dropzone small {
    color: var(--cf-muted);
    font-size: 0.78rem;
}

.category-form-error {
    margin-top: 0.35rem;
    color: var(--cf-primary);
    font-size: 0.8rem;
}

.category-form-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.65rem;
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--cf-border);
}

.category-form-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.72rem 1.15rem;
    border-radius: 12px;
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.category-form-btn--primary {
    background: linear-gradient(135deg, var(--cf-primary), var(--cf-primary-dark));
    color: #fff;
    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.2);
}

.category-form-btn--primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.category-form-btn--ghost {
    background: #fff;
    border: 1px solid var(--cf-border);
    color: var(--cf-text);
}

@media (max-width: 768px) {
    .category-form-hero {
        flex-direction: column;
    }

    .category-form-grid,
    .category-form-upload {
        grid-template-columns: 1fr;
    }
}
</style>
