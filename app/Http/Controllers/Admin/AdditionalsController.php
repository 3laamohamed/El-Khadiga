<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Additionals;
use Illuminate\Support\Facades\File;
class AdditionalsController extends Controller
{
    public function index(Request $request){
        $additionals = Additionals::query();
        
        if ($request->filled('name'))
            $additionals->where('title', 'like', '%' . $request->input('name') . '%');

        $additionals = $additionals->select(['*'])
            ->orderByDesc('id')
            ->paginate(10);
        return Inertia::render('Additionals/Index', [
            'additionals' => $additionals,
            'filters' => $request->only(['name']),
        ]);
    }

    public function create(Request $request): \Inertia\Response
    {
        return Inertia::render('Additionals/Create');
    }

    public function store(Request $request)
    {
        Additionals::query()->create($this->validateItem($request, 'create', -1));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
        return redirect('/admin/additionals');
    }


    public function edit($category)
    {
        $service = Additionals::find($category);
        return Inertia::render('Additionals/Edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, $category){
        $arr = $this->validateItem($request, 'update', -1);
        $service = Additionals::find($category);
        if ($request->hasFile('icon')){
            $this->deleteImage($service->icon_url);
        }
        if($arr['icon'] == "" || $arr['icon'] == null){
            $arr['icon'] = $service->icon;
        }
        if ($request->hasFile('cover')){
            $this->deleteImage($service->cover_url);
        }
        if($arr['cover'] == "" || $arr['cover'] == null){
            $arr['cover'] = $service->cover;
        }
        $service->update($arr);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم التعديل بنجاح']);
        return redirect('/admin/additionals');
    }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'title_en'        => "required",
            'disc_en'         => '',
            'title_ar'        => "required",
            'disc_ar'         => '',
            'icon'            => '',
            'cover'           => '',
        ];

        $res = $request->validate($validate_arr);

        if ($request->hasFile('icon')) {
            $res['icon'] = $this->saveFile($request->icon,'assets/additionals');
        }
        if ($request->hasFile('cover')) {
            $res['cover'] = $this->saveFile($request->cover,'assets/additionals');
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

    public function delete($additionalId)
    {
        $additional = Additionals::find($additionalId);
        if($additional->icon != null){
            $this->deleteImage($additional->icon_url);
        }
        if($additional->cover != null){
            $this->deleteImage($additional->cover_url);
        }
        $additional->delete();
        return back();
    }
}
