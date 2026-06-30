<template>
    <div
        id="kt_aside"
        class="aside admin-sidebar"
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'280px', '300px': '280px'}"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
        <nav class="admin-sidebar__nav">
            <span class="admin-sidebar__section">Main Menu</span>

            <NavLink
                href="/admin/dashboard"
                text="Dashboard"
                :active="['Dashboard/Index'].includes($page.component)"
                :icon="icons.dashboard"
            />
            <NavLink
                href="/admin/category"
                text="Categories"
                :active="['Category/Index', 'Category/Edit', 'Category/Create'].includes($page.component)"
                :icon="icons.categories"
            />
            <NavLink
                href="/admin/products"
                text="Products"
                :active="['Products/Index', 'Products/Edit', 'Products/Create'].includes($page.component)"
                :icon="icons.products"
            />
            <NavLink
                href="/admin/messages"
                text="Messages"
                :active="['ContactMessages/Index', 'ContactMessages/Show'].includes($page.component)"
                :icon="icons.messages"
                :badge="unreadBadge"
            />
            <NavLink
                href="/admin/settings"
                text="Settings"
                :active="['Settings/Edit'].includes($page.component)"
                :icon="icons.settings"
            />
        </nav>

        <div class="admin-sidebar__bottom">
            <a href="/" target="_blank" rel="noopener noreferrer" class="admin-sidebar__website">
                <span v-html="icons.external"></span>
                View Website
            </a>

            <div class="admin-sidebar__user">
                <div class="admin-sidebar__avatar">{{ userInitials }}</div>
                <div class="admin-sidebar__user-meta">
                    <strong>{{ $page.props.user.name }}</strong>
                    <span>{{ $page.props.user.email }}</span>
                </div>
                <div class="admin-sidebar__user-menu">
                    <button
                        type="button"
                        class="admin-sidebar__menu-btn"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="top-end"
                        aria-label="Account menu"
                    >
                        <span v-html="icons.dots"></span>
                    </button>
                    <div
                        class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg fw-semibold py-3 fs-6 w-200px"
                        data-kt-menu="true"
                    >
                        <div class="menu-item px-3">
                            <Link href="/admin/profile" class="menu-link px-3">Profile</Link>
                        </div>
                        <div class="menu-item px-3">
                            <Link href="/admin/change-password" class="menu-link px-3">Password</Link>
                        </div>
                        <div class="menu-item px-3">
                            <a href="/admin/logout" class="menu-link px-3 text-danger">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavLink from './NavLink';

const icons = {
    dashboard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 21V12H15V21" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    categories: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>`,
    products: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5L12 3.5L20 7.5L12 11.5L4 7.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M4 12L12 16L20 12" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M4 16.5L12 20.5L20 16.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    messages: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5H19V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 14L19 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M19 14V19C19 19.5523 18.5523 20 18 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5H10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    dots: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="6" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="18" r="1.5" fill="currentColor"/></svg>`,
};

export default {
    components: { NavLink },
    data() {
        return { icons };
    },
    computed: {
        userInitials() {
            const name = this.$page.props.user?.name || 'A';
            return name
                .split(' ')
                .filter(Boolean)
                .map((part) => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();
        },
        unreadBadge() {
            const count = this.$page.props.unread_messages_count || 0;
            return count > 0 ? count : null;
        },
    },
};
</script>

<style>
#kt_aside.admin-sidebar {
    --sb-primary: #A91E2C;
    --sb-secondary: #5A8F3C;
    --sb-bg: #ffffff;
    --sb-border: #e8ece8;
    --sb-text: #1a1a1a;
    --sb-muted: #6b7280;
    --sb-hover: #f7f9f7;
    --sb-active-bg: rgba(169, 30, 44, 0.08);
    background: var(--sb-bg) !important;
    border-right: 1px solid var(--sb-border);
    box-shadow: 4px 0 28px rgba(26, 26, 26, 0.05);
    width: 280px;
    min-width: 280px;
}

@media (min-width: 992px) {
    #kt_aside.admin-sidebar {
        width: 280px !important;
    }

    [data-kt-aside-minimize='on'] #kt_aside.admin-sidebar {
        left: -280px !important;
    }
}

#kt_aside.admin-sidebar .admin-sidebar__nav {
    flex: 1;
    padding: 1rem 0.9rem 1.25rem;
    overflow-y: auto;
}

#kt_aside.admin-sidebar .admin-sidebar__section {
    display: block;
    margin: 0 0.55rem 0.75rem;
    color: var(--sb-muted);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

#kt_aside.admin-sidebar .admin-sidebar__bottom {
    margin-top: auto;
    padding: 0.9rem;
    border-top: 1px solid var(--sb-border);
    background: #fafbfa;
}

#kt_aside.admin-sidebar .admin-sidebar__website {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    width: 100%;
    margin-bottom: 0.85rem;
    padding: 0.65rem 0.9rem;
    border: 1px solid var(--sb-border);
    border-radius: 10px;
    background: #fff;
    color: var(--sb-secondary);
    font-size: 0.84rem;
    font-weight: 600;
    text-decoration: none;
    transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}

#kt_aside.admin-sidebar .admin-sidebar__website:hover {
    border-color: rgba(90, 143, 60, 0.35);
    background: rgba(90, 143, 60, 0.06);
    color: #4a7832;
}

#kt_aside.admin-sidebar .admin-sidebar__user {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.75rem;
    border-radius: 12px;
    background: #fff;
    border: 1px solid var(--sb-border);
}

#kt_aside.admin-sidebar .admin-sidebar__avatar {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--sb-primary), #c42838);
    color: #fff;
    font-size: 0.82rem;
    font-weight: 700;
    flex-shrink: 0;
}

#kt_aside.admin-sidebar .admin-sidebar__user-meta {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
}

#kt_aside.admin-sidebar .admin-sidebar__user-meta strong {
    color: var(--sb-text);
    font-size: 0.84rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#kt_aside.admin-sidebar .admin-sidebar__user-meta span {
    color: var(--sb-muted);
    font-size: 0.72rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#kt_aside.admin-sidebar .admin-sidebar__menu-btn {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--sb-muted);
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

#kt_aside.admin-sidebar .admin-sidebar__menu-btn:hover {
    background: var(--sb-hover);
    color: var(--sb-text);
}
</style>
