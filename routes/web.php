<?php

use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactSubmissionController;
use App\Http\Controllers\Admin\SettingController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {
    Route::get('/login', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'login'])->name('admin.login');
    Route::post('/login', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'postLogin']);
});

Route::group(['middleware' => ['auth:web'], 'prefix' => 'admin'], function () {
    Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.home');
    Route::get('/logout', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'logout'])->name('admin.logout');

    Route::get('/change-password', [\App\Http\Controllers\Admin\UserController::class, 'changePassword'])->name('admin.changePassword');
    Route::post('/change-password', [\App\Http\Controllers\Admin\UserController::class, 'updatePassword'])->name('admin.updatePassword');
    Route::get('/profile', [\App\Http\Controllers\Admin\UserController::class, 'profile'])->name('admin.profile');
    Route::put('/change-profile', [\App\Http\Controllers\Admin\UserController::class, 'changeProfile'])->name('admin.changeProfile');

    Route::get('/category', [CategoryController::class, 'index']);
    Route::get('/category/create', [CategoryController::class, 'create']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::get('/category/{id}/edit', [CategoryController::class, 'edit']);
    Route::post('/category/{id}', [CategoryController::class, 'update']);
    Route::delete('/category/{item}', [CategoryController::class, 'delete']);

    Route::get('/products', [ProductsController::class, 'index']);
    Route::get('/products/create', [ProductsController::class, 'create']);
    Route::post('/products', [ProductsController::class, 'store']);
    Route::get('/products/{id}/edit', [ProductsController::class, 'edit']);
    Route::post('/products/{id}', [ProductsController::class, 'update']);
    Route::delete('/products/{item}', [ProductsController::class, 'delete']);

    Route::get('/settings', [SettingController::class, 'edit']);
    Route::post('/settings/update', [SettingController::class, 'update']);

    Route::get('/messages', [ContactSubmissionController::class, 'index']);
    Route::get('/messages/{id}', [ContactSubmissionController::class, 'show']);
    Route::post('/messages/{id}/unread', [ContactSubmissionController::class, 'markUnread']);
    Route::delete('/messages/{id}', [ContactSubmissionController::class, 'destroy']);
});

Route::get('/{any?}', function () {
    return view('website');
})->where('any', '^(?!admin|api).*$');
