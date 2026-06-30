<?php

use App\Http\Controllers\Api\WebSiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/contactUs', [WebSiteController::class, 'contactUs']);
Route::get('/sliders', [WebSiteController::class, 'sliders']);
Route::get('/about', [WebSiteController::class, 'about']);
Route::get('/services', [WebSiteController::class, 'services']);
Route::get('/additionals', [WebSiteController::class, 'additionals']);
Route::get('/clients', [WebSiteController::class, 'clients']);
