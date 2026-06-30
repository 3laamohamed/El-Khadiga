<template>
    <div data-kt-menu-trigger="click" class="menu-item menu-accordion" :class="active ? 'hover show' : ''">
        <span class="menu-link">
            <span class="menu-icon">
                <span class="svg-icon svg-icon-2">
                    <slot name="SvgIcon" />
                </span>
            </span>
            <span class="menu-title">{{ text }}</span>
            <span class="menu-arrow"></span>
        </span>
        <!--end:Menu link-->
        <!--begin:Menu sub-->
        <div class="menu-sub menu-sub-accordion " :class="active ? 'show' : ''">
            <slot name="items" />
        </div>
        <!--end:Menu sub-->
    </div>
</template>

<script>
export default {
    name: "NavMenu",
    props: {
        active: Boolean,
        text: String,
    },
}
</script>

<style scoped>

</style>
