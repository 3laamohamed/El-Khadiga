<template>
    <div class="m-3">
        <ul class="pagination pagination-outline">
            <li class="page-item" v-for="link in links" :class="{ 'disabled': !link.url, 'active': link.active }">
                <Link :href="link.url" class="page-link" v-html="link.label"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        links: Array
    },
}
</script>

<style scoped>

</style>
