<template>
    <Head title="Settings" />
    <Layout :prv_page="[{'name': 'Settings'}]">
        <form @submit.prevent="submit" class="settings-page">
            <header class="settings-hero">
                <div>
                    <span class="settings-hero__eyebrow">Website CMS</span>
                    <h1 class="settings-hero__title">Site Settings</h1>
                    <p class="settings-hero__desc">
                        Manage contact details, homepage content, and about page copy from one place.
                    </p>
                </div>
                <button
                    type="submit"
                    class="settings-save-btn"
                    :disabled="form.processing"
                >
                    <span v-if="form.processing" class="settings-save-btn__spinner"></span>
                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                </button>
            </header>

            <div class="settings-layout">
                <aside class="settings-nav">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        type="button"
                        class="settings-nav__item"
                        :class="{ 'settings-nav__item--active': activeTab === tab.id }"
                        @click="activeTab = tab.id"
                    >
                        <span class="settings-nav__icon">{{ tab.icon }}</span>
                        <span>
                            <strong>{{ tab.label }}</strong>
                            <small>{{ tab.hint }}</small>
                        </span>
                    </button>
                </aside>

                <div class="settings-content">
                    <!-- Branding -->
                    <section v-show="activeTab === 'branding'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Site Logo</h2>
                            <p>Used in the website header, footer, and admin dashboard.</p>
                        </div>
                        <div class="settings-subsection">
                            <div class="settings-upload">
                                <div v-if="logoPreview" class="settings-upload__preview settings-upload__preview--logo">
                                    <img :src="logoPreview" alt="Logo preview">
                                </div>
                                <label class="settings-upload__dropzone">
                                    <input type="file" accept="image/*" hidden @change="onLogoChange">
                                    <span class="settings-upload__icon">+</span>
                                    <strong>Upload site logo</strong>
                                    <small>PNG or JPG with transparent background — recommended 400×120px</small>
                                </label>
                            </div>
                        </div>
                    </section>

                    <!-- Contact -->
                    <section v-show="activeTab === 'contact'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Contact Information</h2>
                            <p>Displayed in the footer and contact page.</p>
                        </div>
                        <div class="settings-grid">
                            <div class="settings-field">
                                <label>Phone</label>
                                <input type="text" class="form-control settings-input" v-model="form.phone" placeholder="+201282499021">
                            </div>
                            <div class="settings-field">
                                <label>Secondary Phone</label>
                                <input type="text" class="form-control settings-input" v-model="form.phone_secondary">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Email</label>
                                <input type="email" class="form-control settings-input" v-model="form.email" placeholder="info@example.com">
                            </div>
                            <div class="settings-field">
                                <label>Facebook URL</label>
                                <input type="url" class="form-control settings-input" v-model="form.social_facebook" placeholder="https://facebook.com/...">
                            </div>
                            <div class="settings-field">
                                <label>LinkedIn URL</label>
                                <input type="url" class="form-control settings-input" v-model="form.social_linkedin" placeholder="https://linkedin.com/...">
                            </div>
                        </div>
                    </section>

                    <!-- Hero -->
                    <section v-show="activeTab === 'hero'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Homepage Hero</h2>
                            <p>Main banner at the top of the homepage.</p>
                        </div>
                        <div class="settings-grid">
                            <div class="settings-field">
                                <label>Loading Message</label>
                                <input type="text" class="form-control settings-input" v-model="form.home_loading_message">
                            </div>
                            <div class="settings-field">
                                <label>Eyebrow Text</label>
                                <input type="text" class="form-control settings-input" v-model="form.hero_eyebrow">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Hero Tagline</label>
                                <input type="text" class="form-control settings-input" v-model="form.hero_tagline">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Hero Subtitle</label>
                                <textarea rows="3" class="form-control settings-input" v-model="form.intro_en"></textarea>
                            </div>
                        </div>

                        <div class="settings-subsection">
                            <h3>Hero Badges</h3>
                            <div class="settings-mini-grid">
                                <div class="settings-mini-card">
                                    <span class="settings-mini-card__badge">Badge 1</span>
                                    <div class="settings-field">
                                        <label>Label</label>
                                        <input type="text" class="form-control settings-input" v-model="form.hero_badge_1_label">
                                    </div>
                                    <div class="settings-field">
                                        <label>Value</label>
                                        <input type="text" class="form-control settings-input" v-model="form.hero_badge_1_value">
                                    </div>
                                </div>
                                <div class="settings-mini-card">
                                    <span class="settings-mini-card__badge">Badge 2</span>
                                    <div class="settings-field">
                                        <label>Label</label>
                                        <input type="text" class="form-control settings-input" v-model="form.hero_badge_2_label">
                                    </div>
                                    <div class="settings-field">
                                        <label>Value</label>
                                        <input type="text" class="form-control settings-input" v-model="form.hero_badge_2_value">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="settings-subsection">
                            <h3>Hero Image</h3>
                            <div class="settings-upload">
                                <div v-if="heroPreview" class="settings-upload__preview">
                                    <img :src="heroPreview" alt="Hero preview">
                                </div>
                                <label class="settings-upload__dropzone">
                                    <input type="file" accept="image/*" hidden @change="onHeroImageChange">
                                    <span class="settings-upload__icon">+</span>
                                    <strong>Upload hero image</strong>
                                    <small>JPG, PNG or WebP — recommended 1200×1200px</small>
                                </label>
                            </div>
                        </div>
                    </section>

                    <!-- Story -->
                    <section v-show="activeTab === 'story'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Story Section</h2>
                            <p>Intro block below the hero on the homepage.</p>
                        </div>
                        <div class="settings-grid">
                            <div class="settings-field">
                                <label>Eyebrow</label>
                                <input type="text" class="form-control settings-input" v-model="form.story_eyebrow">
                            </div>
                            <div class="settings-field">
                                <label>Primary Button</label>
                                <input type="text" class="form-control settings-input" v-model="form.story_btn_primary">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Section Heading</label>
                                <input type="text" class="form-control settings-input" v-model="form.story_heading">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Story Text</label>
                                <textarea rows="5" class="form-control settings-input" v-model="form.home_about_excerpt"></textarea>
                            </div>
                            <div class="settings-field">
                                <label>Secondary Button</label>
                                <input type="text" class="form-control settings-input" v-model="form.story_btn_secondary">
                            </div>
                        </div>
                    </section>

                    <!-- Pillars -->
                    <section v-show="activeTab === 'pillars'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Pillars & Trust</h2>
                            <p>Why El-Khadiga section with trust indicators and value pillars.</p>
                        </div>
                        <div class="settings-grid">
                            <div class="settings-field">
                                <label>Section Eyebrow</label>
                                <input type="text" class="form-control settings-input" v-model="form.pillars_eyebrow">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Section Heading</label>
                                <input type="text" class="form-control settings-input" v-model="form.pillars_heading">
                            </div>
                        </div>

                        <div class="settings-subsection">
                            <h3>Trust Strip</h3>
                            <div class="settings-mini-grid settings-mini-grid--three">
                                <div
                                    v-for="index in 3"
                                    :key="`trust-${index}`"
                                    class="settings-mini-card"
                                >
                                    <span class="settings-mini-card__badge">#{{ index }}</span>
                                    <div class="settings-field">
                                        <label>Value</label>
                                        <input type="text" class="form-control settings-input" v-model="form[`trust_${index}_value`]">
                                    </div>
                                    <div class="settings-field">
                                        <label>Label</label>
                                        <input type="text" class="form-control settings-input" v-model="form[`trust_${index}_label`]">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="settings-subsection">
                            <h3>Value Pillars</h3>
                            <div class="settings-stack">
                                <div
                                    v-for="index in 3"
                                    :key="`pillar-${index}`"
                                    class="settings-pillar-card"
                                >
                                    <div class="settings-pillar-card__head">
                                        <span>Pillar {{ index }}</span>
                                    </div>
                                    <div class="settings-field">
                                        <label>Title</label>
                                        <input type="text" class="form-control settings-input" v-model="form[`pillar_${index}_title`]">
                                    </div>
                                    <div class="settings-field">
                                        <label>Description</label>
                                        <textarea rows="3" class="form-control settings-input" v-model="form[`pillar_${index}_description`]"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Featured -->
                    <section v-show="activeTab === 'featured'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>Featured Products</h2>
                            <p>Section copy on the homepage. Products are selected from the Products admin.</p>
                        </div>
                        <div class="settings-notice">
                            <strong>Tip:</strong> Mark products as "Featured on Home" from
                            <a href="/admin/products">Products</a> to control what appears here.
                        </div>
                        <div class="settings-grid">
                            <div class="settings-field">
                                <label>Section Eyebrow</label>
                                <input type="text" class="form-control settings-input" v-model="form.featured_eyebrow">
                            </div>
                            <div class="settings-field">
                                <label>Stats Label</label>
                                <input type="text" class="form-control settings-input" v-model="form.featured_stats_label">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Section Heading</label>
                                <input type="text" class="form-control settings-input" v-model="form.featured_heading">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Intro Text</label>
                                <textarea rows="3" class="form-control settings-input" v-model="form.featured_intro"></textarea>
                            </div>
                            <div class="settings-field">
                                <label>Catalog Link Text</label>
                                <input type="text" class="form-control settings-input" v-model="form.featured_link_text">
                            </div>
                            <div class="settings-field">
                                <label>Button Text</label>
                                <input type="text" class="form-control settings-input" v-model="form.featured_btn_text">
                            </div>
                        </div>
                    </section>

                    <!-- About -->
                    <section v-show="activeTab === 'about'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>About Page</h2>
                            <p>Long-form content for the About Us page.</p>
                        </div>
                        <div class="settings-stack">
                            <div class="settings-field">
                                <label>About Us</label>
                                <textarea rows="8" class="form-control settings-input" v-model="form.about_us_en"></textarea>
                            </div>
                            <div class="settings-field">
                                <label>Mission</label>
                                <textarea rows="4" class="form-control settings-input" v-model="form.mission"></textarea>
                            </div>
                            <div class="settings-field">
                                <label>Vision</label>
                                <textarea rows="4" class="form-control settings-input" v-model="form.vision"></textarea>
                            </div>
                            <div class="settings-field">
                                <label>Goal</label>
                                <textarea rows="4" class="form-control settings-input" v-model="form.goal"></textarea>
                            </div>
                        </div>
                    </section>

                    <!-- SEO -->
                    <section v-show="activeTab === 'seo'" class="settings-panel">
                        <div class="settings-panel__head">
                            <h2>SEO Settings</h2>
                            <p>Control search engine titles, descriptions, and social sharing previews.</p>
                        </div>

                        <div class="settings-grid">
                            <div class="settings-field settings-field--full">
                                <label>Default Site Title</label>
                                <input type="text" class="form-control settings-input" v-model="form.seo_site_title" placeholder="El-Khadiga for Export">
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Default Meta Description</label>
                                <textarea rows="3" class="form-control settings-input" v-model="form.seo_meta_description"></textarea>
                            </div>
                            <div class="settings-field settings-field--full">
                                <label>Meta Keywords</label>
                                <input type="text" class="form-control settings-input" v-model="form.seo_meta_keywords" placeholder="frozen fruits, IQF, Egypt export">
                            </div>
                        </div>

                        <div class="settings-subsection">
                            <h3>Social Share Image (Open Graph)</h3>
                            <div class="settings-upload">
                                <div v-if="ogPreview" class="settings-upload__preview">
                                    <img :src="ogPreview" alt="OG image preview">
                                </div>
                                <label class="settings-upload__dropzone">
                                    <input type="file" accept="image/*" hidden @change="onOgImageChange">
                                    <span class="settings-upload__icon">+</span>
                                    <strong>Upload OG image</strong>
                                    <small>Used when pages are shared on social media — recommended 1200×630px</small>
                                </label>
                            </div>
                        </div>

                        <div
                            v-for="page in seoPages"
                            :key="page.key"
                            class="settings-subsection"
                        >
                            <h3>{{ page.label }} Page</h3>
                            <div class="settings-grid">
                                <div class="settings-field settings-field--full">
                                    <label>Page Title</label>
                                    <input type="text" class="form-control settings-input" v-model="form[page.titleField]">
                                </div>
                                <div class="settings-field settings-field--full">
                                    <label>Meta Description</label>
                                    <textarea rows="3" class="form-control settings-input" v-model="form[page.descriptionField]"></textarea>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <footer class="settings-footer">
                <span>Changes apply to the public website after saving.</span>
                <button type="submit" class="settings-save-btn settings-save-btn--sm" :disabled="form.processing">
                    {{ form.processing ? 'Saving...' : 'Save Changes' }}
                </button>
            </footer>
        </form>
    </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';

const props = defineProps({
    settings: Object,
});

const activeTab = ref('branding');

const tabs = [
    { id: 'branding', label: 'Logo', hint: 'Site branding', icon: 'L' },
    { id: 'contact', label: 'Contact', hint: 'Phone, email & social', icon: 'C' },
    { id: 'hero', label: 'Hero', hint: 'Banner & image', icon: 'H' },
    { id: 'story', label: 'Story', hint: 'Who we are block', icon: 'S' },
    { id: 'pillars', label: 'Pillars', hint: 'Trust & values', icon: 'P' },
    { id: 'featured', label: 'Featured', hint: 'Products section', icon: 'F' },
    { id: 'about', label: 'About', hint: 'About page copy', icon: 'A' },
    { id: 'seo', label: 'SEO', hint: 'Search & social', icon: 'M' },
];

const seoPages = [
    { key: 'home', label: 'Home', titleField: 'seo_home_title', descriptionField: 'seo_home_description' },
    { key: 'about', label: 'About', titleField: 'seo_about_title', descriptionField: 'seo_about_description' },
    { key: 'products', label: 'Products', titleField: 'seo_products_title', descriptionField: 'seo_products_description' },
    { key: 'contact', label: 'Contact', titleField: 'seo_contact_title', descriptionField: 'seo_contact_description' },
];

const pillars = props.settings.home_pillars || [{}, {}, {}];
const trustItems = props.settings.home_trust_items || [{}, {}, {}];
const heroPreview = ref(props.settings.hero_image_url || '');
const logoPreview = ref(props.settings.site_logo_url || '/images/logo.png');
const ogPreview = ref(props.settings.seo_og_image_url || '');

const form = useForm({
    phone: props.settings.phone || '',
    email: props.settings.email || '',
    phone_secondary: props.settings.phone_secondary || '',
    social_facebook: props.settings.social_facebook || '',
    social_linkedin: props.settings.social_linkedin || '',
    hero_tagline: props.settings.hero_tagline || '',
    intro_en: props.settings.intro_en || '',
    about_us_en: props.settings.about_us_en || '',
    mission: props.settings.mission || '',
    vision: props.settings.vision || '',
    goal: props.settings.goal || '',
    home_loading_message: props.settings.home_loading_message || '',
    hero_eyebrow: props.settings.hero_eyebrow || '',
    hero_badge_1_label: props.settings.hero_badge_1_label || '',
    hero_badge_1_value: props.settings.hero_badge_1_value || '',
    hero_badge_2_label: props.settings.hero_badge_2_label || '',
    hero_badge_2_value: props.settings.hero_badge_2_value || '',
    home_about_excerpt: props.settings.home_about_excerpt || '',
    story_eyebrow: props.settings.story_eyebrow || '',
    story_heading: props.settings.story_heading || '',
    story_btn_primary: props.settings.story_btn_primary || '',
    story_btn_secondary: props.settings.story_btn_secondary || '',
    pillars_eyebrow: props.settings.pillars_eyebrow || '',
    pillars_heading: props.settings.pillars_heading || '',
    featured_eyebrow: props.settings.featured_eyebrow || '',
    featured_heading: props.settings.featured_heading || '',
    featured_intro: props.settings.featured_intro || '',
    featured_stats_label: props.settings.featured_stats_label || '',
    featured_link_text: props.settings.featured_link_text || '',
    featured_btn_text: props.settings.featured_btn_text || '',
    pillar_1_title: pillars[0]?.title || '',
    pillar_1_description: pillars[0]?.description || '',
    pillar_2_title: pillars[1]?.title || '',
    pillar_2_description: pillars[1]?.description || '',
    pillar_3_title: pillars[2]?.title || '',
    pillar_3_description: pillars[2]?.description || '',
    trust_1_value: trustItems[0]?.value || '',
    trust_1_label: trustItems[0]?.label || '',
    trust_2_value: trustItems[1]?.value || '',
    trust_2_label: trustItems[1]?.label || '',
    trust_3_value: trustItems[2]?.value || '',
    trust_3_label: trustItems[2]?.label || '',
    hero_image: null,
    site_logo: null,
    seo_og_image: null,
    seo_site_title: props.settings.seo_site_title || '',
    seo_meta_description: props.settings.seo_meta_description || '',
    seo_meta_keywords: props.settings.seo_meta_keywords || '',
    seo_home_title: props.settings.seo_home_title || '',
    seo_home_description: props.settings.seo_home_description || '',
    seo_about_title: props.settings.seo_about_title || '',
    seo_about_description: props.settings.seo_about_description || '',
    seo_products_title: props.settings.seo_products_title || '',
    seo_products_description: props.settings.seo_products_description || '',
    seo_contact_title: props.settings.seo_contact_title || '',
    seo_contact_description: props.settings.seo_contact_description || '',
});

const onOgImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    form.seo_og_image = file;
    ogPreview.value = URL.createObjectURL(file);
};

const onLogoChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    form.site_logo = file;
    logoPreview.value = URL.createObjectURL(file);
};

const onHeroImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    form.hero_image = file;
    heroPreview.value = URL.createObjectURL(file);
};

const submit = () => {
    form.post('/admin/settings/update', {
        forceFormData: true,
        preserveScroll: true,
    });
};
</script>

<style scoped>
.settings-page {
    --settings-primary: #A91E2C;
    --settings-primary-dark: #8E1824;
    --settings-secondary: #5A8F3C;
    --settings-bg: #f4f6f4;
    --settings-surface: #ffffff;
    --settings-border: #e6ebe6;
    --settings-text: #1a1a1a;
    --settings-muted: #6b7280;
    --settings-radius: 16px;
    --settings-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);
    padding-bottom: 5rem;
}

.settings-hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.75rem;
    padding: 1.75rem 2rem;
    border: 1px solid var(--settings-border);
    border-radius: 20px;
    background:
        radial-gradient(circle at 100% 0%, rgba(169, 30, 44, 0.08), transparent 40%),
        radial-gradient(circle at 0% 100%, rgba(90, 143, 60, 0.1), transparent 35%),
        var(--settings-surface);
    box-shadow: var(--settings-shadow);
}

.settings-hero__eyebrow {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: var(--settings-secondary);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.settings-hero__title {
    margin: 0;
    color: var(--settings-text);
    font-size: 1.85rem;
    font-weight: 800;
    letter-spacing: -0.03em;
}

.settings-hero__desc {
    max-width: 520px;
    margin: 0.5rem 0 0;
    color: var(--settings-muted);
    font-size: 0.95rem;
    line-height: 1.6;
}

.settings-save-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 148px;
    min-height: 48px;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--settings-primary), var(--settings-primary-dark));
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(169, 30, 44, 0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    flex-shrink: 0;
}

.settings-save-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(169, 30, 44, 0.34);
}

.settings-save-btn:disabled {
    opacity: 0.72;
    cursor: wait;
}

.settings-save-btn--sm {
    min-width: 120px;
    min-height: 42px;
    font-size: 0.85rem;
}

.settings-save-btn__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.settings-layout {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 1.25rem;
    align-items: start;
}

.settings-nav {
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding: 0.75rem;
    border: 1px solid var(--settings-border);
    border-radius: 18px;
    background: var(--settings-surface);
    box-shadow: var(--settings-shadow);
}

.settings-nav__item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    width: 100%;
    padding: 0.85rem 0.9rem;
    border: 1px solid transparent;
    border-radius: 12px;
    background: transparent;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.settings-nav__item:hover {
    background: #f8faf8;
    border-color: var(--settings-border);
}

.settings-nav__item--active {
    background: linear-gradient(135deg, rgba(169, 30, 44, 0.08), rgba(90, 143, 60, 0.08));
    border-color: rgba(169, 30, 44, 0.18);
}

.settings-nav__item--active strong {
    color: var(--settings-primary);
}

.settings-nav__icon {
    display: grid;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    place-items: center;
    border-radius: 10px;
    background: #f0f4ef;
    color: var(--settings-secondary);
    font-size: 0.9rem;
    font-weight: 800;
}

.settings-nav__item strong {
    display: block;
    color: var(--settings-text);
    font-size: 0.88rem;
    line-height: 1.2;
}

.settings-nav__item small {
    display: block;
    margin-top: 0.15rem;
    color: var(--settings-muted);
    font-size: 0.72rem;
    line-height: 1.3;
}

.settings-content {
    min-width: 0;
}

.settings-panel {
    padding: 1.75rem;
    border: 1px solid var(--settings-border);
    border-radius: 20px;
    background: var(--settings-surface);
    box-shadow: var(--settings-shadow);
    animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

.settings-panel__head {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--settings-border);
}

.settings-panel__head h2 {
    margin: 0;
    color: var(--settings-text);
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.02em;
}

.settings-panel__head p {
    margin: 0.35rem 0 0;
    color: var(--settings-muted);
    font-size: 0.9rem;
}

.settings-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.25rem;
}

.settings-stack {
    display: grid;
    gap: 1rem;
}

.settings-field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.settings-field--full {
    grid-column: 1 / -1;
}

.settings-field label {
    color: var(--settings-text);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.settings-input {
    border: 1px solid var(--settings-border) !important;
    border-radius: 12px !important;
    padding: 0.7rem 0.9rem !important;
    font-size: 0.92rem !important;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.settings-input:focus {
    border-color: rgba(90, 143, 60, 0.55) !important;
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12) !important;
}

.settings-subsection {
    margin-top: 1.75rem;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--settings-border);
}

.settings-subsection h3 {
    margin: 0 0 1rem;
    color: var(--settings-text);
    font-size: 1rem;
    font-weight: 800;
}

.settings-mini-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.settings-mini-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.settings-mini-card,
.settings-pillar-card {
    padding: 1rem;
    border: 1px solid var(--settings-border);
    border-radius: 14px;
    background: #fafcfa;
}

.settings-mini-card__badge,
.settings-pillar-card__head span {
    display: inline-flex;
    margin-bottom: 0.75rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    background: rgba(169, 30, 44, 0.1);
    color: var(--settings-primary);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.settings-pillar-card__head {
    margin-bottom: 0.25rem;
}

.settings-upload {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
    align-items: stretch;
}

.settings-upload__preview {
    overflow: hidden;
    border: 1px solid var(--settings-border);
    border-radius: 14px;
    background: #f8faf8;
}

.settings-upload__preview img {
    width: 100%;
    height: 100%;
    min-height: 160px;
    object-fit: cover;
}

.settings-upload__preview--logo img {
    min-height: 120px;
    object-fit: contain;
    padding: 1rem;
}

.settings-upload__dropzone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-height: 160px;
    padding: 1.25rem;
    border: 2px dashed #cfd8cf;
    border-radius: 14px;
    background: #f8faf8;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
}

.settings-upload__dropzone:hover {
    border-color: var(--settings-secondary);
    background: #f2f7f0;
}

.settings-upload__icon {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border-radius: 12px;
    background: rgba(90, 143, 60, 0.12);
    color: var(--settings-secondary);
    font-size: 1.4rem;
    font-weight: 300;
}

.settings-upload__dropzone strong {
    color: var(--settings-text);
    font-size: 0.92rem;
}

.settings-upload__dropzone small {
    color: var(--settings-muted);
    font-size: 0.78rem;
}

.settings-notice {
    margin-bottom: 1.25rem;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(90, 143, 60, 0.2);
    border-radius: 12px;
    background: rgba(90, 143, 60, 0.08);
    color: #3d5c2c;
    font-size: 0.88rem;
    line-height: 1.5;
}

.settings-notice a {
    color: var(--settings-primary);
    font-weight: 700;
    text-decoration: none;
}

.settings-notice a:hover {
    text-decoration: underline;
}

.settings-footer {
    position: fixed;
    right: 1.5rem;
    bottom: 1.25rem;
    left: calc(250px + 1.5rem);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.85rem 1.25rem;
    border: 1px solid var(--settings-border);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.settings-footer span {
    color: var(--settings-muted);
    font-size: 0.85rem;
}

@media (max-width: 1100px) {
    .settings-layout {
        grid-template-columns: 1fr;
    }

    .settings-nav {
        position: static;
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 0.5rem;
    }

    .settings-nav__item {
        min-width: 180px;
        flex-shrink: 0;
    }

    .settings-footer {
        left: 1rem;
        right: 1rem;
    }
}

@media (max-width: 768px) {
    .settings-hero {
        flex-direction: column;
        padding: 1.25rem;
    }

    .settings-save-btn {
        width: 100%;
    }

    .settings-grid,
    .settings-mini-grid,
    .settings-mini-grid--three {
        grid-template-columns: 1fr;
    }

    .settings-upload {
        grid-template-columns: 1fr;
    }

    .settings-footer {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }

    .settings-footer .settings-save-btn {
        width: 100%;
    }
}
</style>
