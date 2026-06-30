<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ContactSubmission;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $categoriesCount = Category::query()->count();
        $productsCount = Product::query()->count();
        $featuredCount = Product::query()->where('is_featured', true)->count();
        $categoriesWithIcons = Category::query()
            ->whereNotNull('icon')
            ->where('icon', '!=', '')
            ->count();

        $recentProducts = Product::query()
            ->with('category')
            ->orderByDesc('id')
            ->limit(6)
            ->get();

        $recentCategories = Category::query()
            ->withCount('products')
            ->orderByDesc('id')
            ->limit(6)
            ->get();

        $unreadMessagesCount = ContactSubmission::query()->whereNull('read_at')->count();
        $recentMessages = ContactSubmission::query()
            ->orderByDesc('id')
            ->limit(5)
            ->get();

        return Inertia::render('Dashboard/Index', [
            'categoriesCount' => $categoriesCount,
            'productsCount' => $productsCount,
            'featuredCount' => $featuredCount,
            'categoriesWithIcons' => $categoriesWithIcons,
            'unreadMessagesCount' => $unreadMessagesCount,
            'recentProducts' => $recentProducts,
            'recentCategories' => $recentCategories,
            'recentMessages' => $recentMessages,
        ]);
    }
}
