<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function profile(): \Inertia\Response
    {
        $user =  User::findOrFail(auth()->id());
        return Inertia::render('Users/profile', [
            'user' => $user,
        ]);
    }

    public function changeProfile(Request $request) {

        $validate_arr = [
            'name' => 'required',
            'email' => 'required|email',
            'mobile' => '' ,
        ];

        $item = auth()->user();
        $item->update($request->validate($validate_arr));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Profile updated successfully']);
        return redirect('/admin/profile');
    }


    public function changePassword() {

        return Inertia::render('Users/password');
    }

    public function updatePassword(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validate_arr = [
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ];
       $request->validate($validate_arr);
        #Match The Old Password
        if(!Hash::check($request->old_password, auth()->user()->password)){
            session()->flash('user_message', ['type' => 'error', 'msg' => 'Current password is incorrect']);
            return redirect()->back();
        }

        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Password updated successfully']);
        return redirect()->back();
    }

}
