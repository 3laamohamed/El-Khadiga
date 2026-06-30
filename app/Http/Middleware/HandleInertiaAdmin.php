<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaAdmin extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'Admin/app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'user' => [
                'name' => auth('web')->check() ? auth()->user()->name : '',
                'image' => auth('web')->check() ? auth()->user()->image : '',
                'email' => auth('web')->check() ? auth()->user()->email : '',
//                'permission' => Session::get('permission'),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('user_message'),
                'additional_data' => fn () => $request->session()->get('additional_data'),
            ],
        ]);
    }

}
