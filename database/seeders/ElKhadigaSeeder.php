<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Setting;
use App\Support\HomepageDefaults;
use App\Support\SeoDefaults;
use Illuminate\Database\Seeder;

class ElKhadigaSeeder extends Seeder
{
    public function run(): void
    {
        $aboutUs = "El-Khadiga for export, a company that was founded to serve the increasing demand on natural and healthy products in the international food markets, where the company specializes in manufacturing and freezing fruits and vegetables, while focusing on the utilization of the fresh crops that are planted in the Egyptian fertile soils, the company provides its products from our own farms that are carefully cared for and void of any use of harmful substances, that's why the crops are collected as soon as possible after the harvest to maintain their fresh taste and nutritional values. The company always seeks to reach the highest safety and quality food standards in its services, where we follow strict measures to guarantee the safety of our products and maintain their quality at manufacturing and freezing, thanks to our sustainable and innovative vision we seek to expand our business and serve healthy and natural products to international markets, which participates towards spreading the awareness about healthy nutrition and gaining the customers' satisfaction all around the world.";

        $intro = "Specializing in manufacturing and freezing premium fruits and vegetables from our own Egyptian farms for international export markets.";

        $homepage = HomepageDefaults::settings();

        Setting::query()->updateOrCreate(
            ['id' => 1],
            array_merge($homepage, SeoDefaults::settings(), [
                'phone' => '+201282499021',
                'phone_secondary' => '+201093368120',
                'email' => 'Elkhadigaforexport@gmail.com',
                'about_us_en' => $aboutUs,
                'intro_en' => $intro,
                'home_about_excerpt' => $intro,
                'hero_tagline' => 'Fruit & Vegetables, Frozen Fresh for the World',
                'site_logo' => 'logo.png',
                'mission' => 'The company strives to gain the customers satisfaction by presenting high quality products and exceptional customer services, while listening to their notes and serving their needs professionally, as we walk toward spreading awareness about a healthy lifestyle and the importance of natural nutrition',
                'vision' => 'We aspire to become a leading company that products of the highest quality in the international food markets, by committing to the highest food safety and quality standards in our products and services from harvesting to manufacturing and distribution.',
                'goal' => 'Aiming to develop new techniques and innovations in the fields of manufacturing and freezing, to improve the quality of our products, and extend their expiry date and nutritional values, in addition to expanding our presence in new markets around the world and establishing strategic partnerships with our partners.',
            ])
        );

        $fruits = Category::query()->updateOrCreate(
            ['slug' => 'fruits'],
            [
                'title_en' => 'Fruits',
                'title_ar' => 'فواكه',
                'icon' => 'fruits.png',
            ]
        );

        $vegetables = Category::query()->updateOrCreate(
            ['slug' => 'vegetables'],
            [
                'title_en' => 'Vegetables',
                'title_ar' => 'خضروات',
                'icon' => 'vegetables.png',
            ]
        );

        $fruitPacks = ['400 gm / 800 gm', '1 kg x 10 Bags', '2.5 kg x 4 Bags'];
        $fruitCartons = ['Carton 8 kg', 'Carton 10 kg'];
        $fruitContainer = '2600 cartons per 40 feet (Unpalletized)';
        $shelfLife = '18 months from manufacture date';

        $vegPacksLarge = ['1 Kg x 10', '2.5 Kg x 4'];
        $vegPacksMixed = ['400 gm / 800 gm', '1 Kg x 10', '2.5 x 4'];
        $vegCartons = ['Carton: 8 Kg', 'Carton: 10 Kg'];

        $products = [
            [
                'category_id' => $fruits->id,
                'name' => 'Strawberry',
                'slug' => 'strawberry',
                'description' => 'Whole sorted frozen Strawberry packed in plastic bag & carton.',
                'image' => 'strawberry.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'category_id' => $fruits->id,
                'name' => 'Mango',
                'slug' => 'mango',
                'description' => 'Whole sorted frozen Mango packed in plastic bag & carton.',
                'image' => 'mango.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'category_id' => $fruits->id,
                'name' => 'Pomegranate Kernels',
                'slug' => 'pomegranate-kernels',
                'description' => 'Dark red color / High Brix level. Pomegranate kernels packed in plastic bag & carton.',
                'image' => 'pomegranate-kernels.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'category_id' => $fruits->id,
                'name' => 'Apricot',
                'slug' => 'apricot',
                'description' => 'Whole sorted frozen Apricot packed in plastic bag & carton.',
                'image' => 'apricot.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 4,
            ],
            [
                'category_id' => $fruits->id,
                'name' => 'Fig',
                'slug' => 'fig',
                'description' => 'Whole sorted frozen Fig packed in plastic bag & carton.',
                'image' => 'fig.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 5,
            ],
            [
                'category_id' => $fruits->id,
                'name' => 'Guava',
                'slug' => 'guava',
                'description' => 'Whole sorted frozen Guava packed in plastic bag & carton.',
                'image' => 'guava.jpg',
                'pack_sizes' => $fruitPacks,
                'carton_weights' => $fruitCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => true,
                'sort_order' => 6,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Broccoli',
                'slug' => 'broccoli',
                'description' => 'Frozen Broccoli packed into plastic Bags & cartons.',
                'image' => 'broccoli.jpg',
                'pack_sizes' => $vegPacksLarge,
                'carton_weights' => $vegCartons,
                'container_capacity' => '1700 cartons per 40 feet (Unpalletized)',
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 7,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Cauliflower',
                'slug' => 'cauliflower',
                'description' => 'Whole frozen Cauliflower packed into plastic Bags & cartons.',
                'image' => 'cauliflower.jpg',
                'pack_sizes' => $vegPacksLarge,
                'carton_weights' => $vegCartons,
                'container_capacity' => '1700 cartons per 40 feet (Unpalletized)',
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 8,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Green Beans',
                'slug' => 'green-beans',
                'description' => 'Frozen Green Beans packed into plastic Bags & cartons.',
                'image' => 'green-beans.jpg',
                'pack_sizes' => $vegPacksMixed,
                'carton_weights' => $vegCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 9,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Carrot',
                'slug' => 'carrot',
                'description' => 'Whole sorted frozen Carrot packed in plastic bag & carton.',
                'image' => 'carrot.jpg',
                'pack_sizes' => $vegPacksMixed,
                'carton_weights' => $vegCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 10,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Green Peas',
                'slug' => 'green-peas',
                'description' => 'Frozen peas packed into plastic Bags & cartons.',
                'image' => 'green-peas.jpg',
                'pack_sizes' => $vegPacksMixed,
                'carton_weights' => $vegCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 11,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'Sweet Corn',
                'slug' => 'sweet-corn',
                'description' => 'Frozen Sweet Corn packed into plastic Bags & cartons.',
                'image' => 'sweet-corn.jpg',
                'pack_sizes' => $vegPacksMixed,
                'carton_weights' => $vegCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 12,
            ],
            [
                'category_id' => $vegetables->id,
                'name' => 'French Fries',
                'slug' => 'french-fries',
                'description' => 'Frozen French Fries packed into plastic Bags & cartons.',
                'image' => 'french-fries.jpg',
                'pack_sizes' => ['1 Kg x 10', '2.5 x 4'],
                'carton_weights' => $vegCartons,
                'container_capacity' => $fruitContainer,
                'shelf_life' => $shelfLife,
                'is_featured' => false,
                'sort_order' => 13,
            ],
        ];

        foreach ($products as $product) {
            Product::query()->updateOrCreate(
                ['slug' => $product['slug']],
                $product
            );
        }
    }
}
