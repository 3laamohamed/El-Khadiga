<?php

namespace App\Http\Controllers\Admin\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function login(): \Inertia\Response
    {
        return Inertia::render('Auth/login');
    }


    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function postLogin(Request $request)
    {

        //check , store , update
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',

        ]);
        $user = User::where('email', request()->input('email'))->first();
        if($user &&  auth()->attempt(['email' => request()->input('email'), 'password' => request()->input('password')]))
        {
            return redirect(route('admin.home'));
        }
        else
        {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'login' => ['Invalid email or password.'],
            ]);
        }

    }





    public function logout(Request $request)
    {
        $gaurd = $this->getGaurd();
        $gaurd->logout();

        $request ->session()->invalidate();
        $request ->session()->regenerateToken();


        return Inertia::location("/admin/login");
    }



    private function getGaurd()
    {
        return auth('web');
    }

    public function sendActivateEmailClient($user) {
        $user = User::query()->where('id', '=',$user->id)->first();
        SendActivateEmail::dispatchSync(
            session()->get('locale') ,
            'كود التحقق لتسجيل الدخول',
            $user);
    }

}
