<?php

use App\Http\Controllers\Admin\ReservationController;
use App\Http\Controllers\Admin\ClientsController;
use App\Http\Controllers\Admin\ServicesController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\AdditionalsController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SlidersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('admin/login');
});

Route::group(['prefix' => 'admin'], function () {
Route::get('/login', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'login'])->name('admin.login');
Route::post('/login', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'postLogin']);
});

Route::group(['middleware' => ['auth:web'],'prefix' => 'admin'], function () {

    Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.home');

    Route::get('/logout', [\App\Http\Controllers\Admin\Auth\LoginController::class, 'logout'])->name('admin.logout');
    ################################## profile ######################################
    Route::get('/change-password', [\App\Http\Controllers\Admin\UserController::class, 'changePassword'])->name('admin.changePassword');
    Route::post('/change-password', [\App\Http\Controllers\Admin\UserController::class, 'updatePassword'])->name('admin.updatePassword');
    Route::get('/profile', [\App\Http\Controllers\Admin\UserController::class, 'profile'])->name('admin.profile');
    Route::put('/change-profile', [\App\Http\Controllers\Admin\UserController::class, 'changeProfile'])->name('admin.changeProfile');
    ################################## end profile ######################################

    #################################### sliders services ############################
    Route::get('/sliders', [SlidersController::class, 'index']);
    Route::get('/sliders/create', [SlidersController::class, 'create']);
    Route::post('/sliders', [SlidersController::class, 'store']);
    Route::get('/sliders/{id}/edit', [SlidersController::class, 'edit']);
    Route::post('/sliders/{id}', [SlidersController::class, 'update']);
    Route::delete('/sliders/{item}', [SlidersController::class, 'delete']);
    #################################### End sliders   ###############################


    #################################### start category ###############################
        Route::get('/category', [CategoryController::class, 'index']);
        Route::get('/category/create', [CategoryController::class, 'create']);
        Route::post('/category', [CategoryController::class, 'store']);
        Route::get('/category/{id}/edit', [CategoryController::class, 'edit']);
        Route::post('/category/{id}', [CategoryController::class, 'update']);
        Route::delete('/category/{item}', [CategoryController::class, 'delete']);
    #################################### End category   ###############################

    #################################### start services ###############################
        Route::get('/services', [ServicesController::class, 'index']);
        Route::get('/services/create', [ServicesController::class, 'create']);
        Route::post('/services', [ServicesController::class, 'store']);
        Route::get('/services/{id}/edit', [ServicesController::class, 'edit']);
        Route::post('/services/{id}', [ServicesController::class, 'update']);
        Route::delete('/services/{item}', [ServicesController::class, 'delete']);
    #################################### End services   ###############################

        #################################### start additionals ###############################
        Route::get('/additionals', [AdditionalsController::class, 'index']);
        Route::get('/additionals/create', [AdditionalsController::class, 'create']);
        Route::post('/additionals', [AdditionalsController::class, 'store']);
        Route::get('/additionals/{id}/edit', [AdditionalsController::class, 'edit']);
        Route::post('/additionals/{id}', [AdditionalsController::class, 'update']);
        Route::delete('/additionals/{item}', [AdditionalsController::class, 'delete']);
    #################################### End additionals   ###############################

    #################################### start additionals ###############################
        Route::get('/clients', [ClientsController::class, 'index']);
        Route::get('/clients/create', [ClientsController::class, 'create']);
        Route::post('/clients', [ClientsController::class, 'store']);
        Route::get('/clients/{id}/edit', [ClientsController::class, 'edit']);
        Route::post('/clients/{id}', [ClientsController::class, 'update']);
        Route::delete('/clients/{item}', [ClientsController::class, 'delete']);
    #################################### End additionals   ###############################

    ################################### Setting ######################################
        Route::get('/settings', [SettingController::class, 'edit']);
        Route::post('/settings/update', [SettingController::class, 'update']);
    ################################## end Setting ######################################

});

Route::group(['prefix' => 'website'], function () {
    Route::get('/form/callback/success/{reservation?}', [\App\Http\Controllers\Website\FormController::class, 'success'])->name('success.callback.payment');
    Route::get('/form/callback/fail', [\App\Http\Controllers\Website\FormController::class, 'fail'])->name('fail.callback.payment');
    Route::get('/form/{slug?}', [\App\Http\Controllers\Website\FormController::class, 'createForm'])->name('website.create.form');
    Route::post('/form', [\App\Http\Controllers\Website\FormController::class, 'storeForm'])->name('website.store.form');
    Route::post('/newForm', [\App\Http\Controllers\Website\FormController::class, 'storeNewForm'])->name('website.store.new.form');
    Route::post('/getData', [\App\Http\Controllers\Website\FormController::class, 'getData']);
    Route::post('/checkStore', [\App\Http\Controllers\Website\FormController::class, 'checkStore']);
});