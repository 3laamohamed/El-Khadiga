<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Clients;
use Illuminate\Support\Facades\File;
class ClientsController extends Controller
{
    public function index(Request $request){
        $Clients = Clients::query();
        
        if ($request->filled('name'))
            $Clients->where('title', 'like', '%' . $request->input('name') . '%');

        $Clients = $Clients->select(['*'])
            ->orderByDesc('id')
            ->paginate(10);
        return Inertia::render('Clients/Index', [
            'services' => $Clients,
            'filters' => $request->only(['name']),
        ]);
    }

    public function create(Request $request): \Inertia\Response
    {
        return Inertia::render('Clients/Create');
    }

    public function store(Request $request)
    {
        Clients::query()->create($this->validateItem($request, 'create', -1));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
        return redirect('/admin/clients');
    }


    public function edit($category)
    {
        $service = Services::find($category);
        return Inertia::render('Clients/Edit', [
            'service' => $service,
        ]);
    }

    // public function update(Request $request, $category){
    //     $arr = $this->validateItem($request, 'update', -1);
    //     $service = Clients::find($category);
    //     if ($request->hasFile('icon')){
    //         $this->deleteImage($service->icon_url);
    //     }
    //     if($arr['icon'] == "" || $arr['icon'] == null){
    //         $arr['icon'] = $service->icon;
    //     }
    //     $service->update($arr);
    //     session()->flash('user_message', ['type' => 'success', 'msg' => 'تم التعديل بنجاح']);
    //     return redirect('/admin/clients');
    // }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'icon'   => 'required',
        ];

        $res = $request->validate($validate_arr);

        if ($request->hasFile('icon')) {
            $res['icon'] = $this->saveFile($request->icon,'assets/clients');
        }
        return $res;
    }

    public static function saveFile($photo , $path){
        $file = $photo -> getClientOriginalExtension();
        $no_rand = rand(10,1000);
        $file_name = time() . $no_rand .  '.' . $file;
        $photo -> move($path , $file_name);
        return $file_name;
    }

    public static function deleteImage($iamge){
        File::delete(trim($iamge, url('')));
    }

    public function delete($serviceId)
    {
        $service = Clients::find($serviceId);
        if($service->icon != null){
            $this->deleteImage($service->icon_url);
        }
        $service->delete();
        return back();
    }
}
