<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Sliders;
use Illuminate\Support\Facades\File;

class SlidersController extends Controller
{
    public function index(Request $request){
        $categories = Sliders::query();
        
        if ($request->filled('name'))
            $categories->where('title', 'like', '%' . $request->input('name') . '%');

        $categories = $categories->select(['*'])
            ->orderByDesc('id')
            ->paginate(10);
        return Inertia::render('Sliders/Index', [
            'services' => $categories,
            'filters' => $request->only(['name']),
        ]);
    }

    public function create(Request $request): \Inertia\Response
    {
        return Inertia::render('Sliders/Create');
    }

    public function store(Request $request)
    {
        Sliders::query()->create($this->validateItem($request, 'create', -1));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
        return redirect('/admin/sliders');
    }


    public function edit($category)
    {
        $service = Sliders::find($category);
        return Inertia::render('Sliders/Edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, $category){
        $arr = $this->validateItem($request, 'update', -1);
        $service = Sliders::find($category);
        if ($request->hasFile('icon')){
            $this->deleteImage($service->icon_url);
        }
        if($arr['icon'] == "" || $arr['icon'] == null){
            $arr['icon'] = $service->icon;
        }
        $service->update($arr);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم التعديل بنجاح']);
        return redirect('/admin/sliders');
    }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'title_en'        => "required",
            'title_ar'        => "required",
            'disc_en'         => 'required',
            'disc_ar'         => 'required',
            'icon'            => '',
        ];

        $res = $request->validate($validate_arr);

        if ($request->hasFile('icon')) {
            $res['icon'] = $this->saveFile($request->icon,'assets/sliders');
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
        $service = Sliders::find($serviceId);
        if($service->icon != null){
            $this->deleteImage($service->icon_url);
        }
        $service->delete();
        return back();
    }
}
