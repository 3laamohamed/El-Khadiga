<?php

use App\Http\Controllers\Api\PublicSiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/seo', [PublicSiteController::class, 'seo']);
Route::get('/home', [PublicSiteController::class, 'home']);
Route::get('/about', [PublicSiteController::class, 'about']);
Route::get('/categories', [PublicSiteController::class, 'categories']);
Route::get('/products', [PublicSiteController::class, 'products']);
Route::get('/products/{slug}', [PublicSiteController::class, 'product']);
Route::get('/contact-info', [PublicSiteController::class, 'contactInfo']);
Route::post('/contact', [PublicSiteController::class, 'contact']);
