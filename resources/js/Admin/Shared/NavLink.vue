<template>
    <div class="admin-nav-item">
        <Link
            class="admin-nav-link"
            :class="{ 'admin-nav-link--active': active }"
            :href="href"
        >
            <span class="admin-nav-link__icon" v-if="icon" v-html="icon"></span>
            <span class="admin-nav-link__text">{{ text }}</span>
            <span v-if="badge" class="admin-nav-link__badge">{{ badge }}</span>
            <span class="admin-nav-link__indicator" aria-hidden="true"></span>
        </Link>
    </div>
</template>

<script>
export default {
    props: {
        active: Boolean,
        href: String,
        text: String,
        icon: String,
        badge: [String, Number],
    },
};
</script>

<style>
#kt_aside.admin-sidebar .admin-nav-item {
    margin-bottom: 0.35rem;
}

#kt_aside.admin-sidebar .admin-nav-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.78rem 0.9rem;
    border-radius: 12px;
    color: #374151;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

#kt_aside.admin-sidebar .admin-nav-link:hover {
    background: #f7f9f7;
    color: #1a1a1a;
}

#kt_aside.admin-sidebar .admin-nav-link__icon {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: #f3f5f3;
    color: #5A8F3C;
    flex-shrink: 0;
    transition: background 0.2s ease, color 0.2s ease;
}

#kt_aside.admin-sidebar .admin-nav-link__text {
    flex: 1;
}

#kt_aside.admin-sidebar .admin-nav-link__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    padding: 0 0.45rem;
    border-radius: 999px;
    background: #A91E2C;
    color: #fff;
    font-size: 0.68rem;
    font-weight: 800;
    line-height: 1;
}

#kt_aside.admin-sidebar .admin-nav-link__indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: transparent;
    flex-shrink: 0;
}

#kt_aside.admin-sidebar .admin-nav-link--active {
    background: rgba(169, 30, 44, 0.08);
    color: #A91E2C;
}

#kt_aside.admin-sidebar .admin-nav-link--active .admin-nav-link__icon {
    background: linear-gradient(135deg, #A91E2C, #c42838);
    color: #fff;
}

#kt_aside.admin-sidebar .admin-nav-link--active .admin-nav-link__indicator {
    background: #A91E2C;
}
</style>
