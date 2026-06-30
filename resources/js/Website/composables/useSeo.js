import { getSeo } from '../api';

let seoCache = null;

function setMeta(attr, name, content) {
    if (!content) return;

    let element = document.querySelector(`meta[${attr}="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

export async function loadSeo() {
    if (seoCache) {
        return seoCache;
    }

    try {
        const { data: response } = await getSeo();
        seoCache = response.data || null;
    } catch (error) {
        seoCache = null;
    }

    return seoCache;
}

export function applySeo(routeName) {
    if (!seoCache) {
        return;
    }

    const page = seoCache.pages?.[routeName] || {};
    const title = page.title || seoCache.site_title || document.title;
    const description = page.description || seoCache.meta_description || '';

    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', seoCache.meta_keywords);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');

    if (seoCache.og_image_url) {
        setMeta('property', 'og:image', seoCache.og_image_url);
    }
}

export function initSeo(router) {
    loadSeo().then(() => {
        applySeo(router.currentRoute.value.name);
    });

    router.afterEach((to) => {
        applySeo(to.name);
    });
}
