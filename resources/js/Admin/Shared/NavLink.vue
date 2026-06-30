<template>

    <div class="menu-item">
        <Link class="menu-link" :class="active ? 'active' : ''" :href="href">
            <span class="menu-icon" v-if="has_icon">
                <span class="svg-icon svg-icon-2">
                    <slot />
                </span>
            </span>
            <span class="menu-bullet" v-if="!has_icon">
                <span class="bullet bullet-dot"></span>
            </span>
            <span class="menu-title">{{ text }}</span>
        </Link>
    </div>

</template>

<script>

export default {
    components: {

    },
    props: {
        active: Boolean,
        href: String,
        text: String,
        has_icon: Boolean,
    },

};

</script>
