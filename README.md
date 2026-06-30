# El-Khadiga for Export

B2B corporate website for an Egyptian frozen IQF fruits & vegetables export company.

## Stack

- **Backend:** Laravel 10 REST API
- **Frontend:** Vue 3 SPA with Vue Router
- **Admin:** Inertia.js + Vue 3 at `/admin`
- **Database:** MySQL

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate

# Configure DB in .env, then:
php artisan migrate --path=database/migrations/2025_06_30_000001_extend_settings_table.php
php artisan migrate --path=database/migrations/2025_06_30_000002_create_products_table.php
php artisan migrate --path=database/migrations/2025_06_30_000003_create_contact_submissions_table.php
php artisan migrate --path=database/migrations/2025_06_30_000004_add_slug_to_categories_table.php
php artisan migrate --path=database/migrations/2025_06_30_000005_add_homepage_fields_to_settings.php
php artisan db:seed --class=ElKhadigaSeeder

npm install
npm run dev   # or npm run production

php artisan serve
```

## URLs

| URL | Description |
|-----|-------------|
| `/` | Public website (Vue SPA) |
| `/about` | About Us |
| `/products` | Product catalog with category filter |
| `/contact` | Contact form |
| `/admin/login` | Admin panel |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/home` | Hero, intro, pillars, featured products |
| GET | `/api/about` | About, mission, vision, goal |
| GET | `/api/categories` | Fruits & Vegetables |
| GET | `/api/products?category=fruits` | Products (optional category filter) |
| GET | `/api/products/{slug}` | Single product |
| GET | `/api/contact-info` | Email & phone numbers |
| POST | `/api/contact` | Contact form submission |

## Images

Placeholder images are generated via `php scripts/create-placeholders.php`. Replace files in `public/images/` with final photography.

## Default Admin

Seeded via `CreateAdminUserSeeder` — check `database/seeders/CreateAdminUserSeeder.php` for credentials.

## Contact (from brochure)

- Email: Elkhadigaforexport@gmail.com
- Phone: +201282499021, +201093368120
