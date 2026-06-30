<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use App\Models\Shop;
use App\Models\Services;
use App\Models\Additionals;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {

        $servicesCount= Services::query()->count();
        $additionalsCount= Additionals::query()->count();
        $additionals = Additionals::query()->select(['*'])
            ->orderByDesc('id')
            ->limit(5)
            ->get();
        $services = Services::query()->select(['*'])
            ->orderByDesc('id')
            ->limit(5)
            ->get();
        return Inertia::render('Dashboard/Index', [
            'services' => $services,
            'servicesCount' => $servicesCount,
            'additionals' => $additionals,
            'additionalsCount' => $additionalsCount,
        ]);

    }
}
