<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Services;
use App\Models\Category;
use Illuminate\Support\Facades\File;
class ServicesController extends Controller
{
    public function index(Request $request){
        $category = Category::get();
        $services = Services::query();
        
        if ($request->filled('name'))
            $services->where('title', 'like', '%' . $request->input('name') . '%');

        $services = $services->select(['*'])
            ->orderByDesc('id')
            ->with('category')
            ->paginate(10);
        return Inertia::render('Services/Index', [
            'services' => $services,
            'category'=>$category,
            'filters' => $request->only(['name']),
        ]);
    }

    public function create(Request $request): \Inertia\Response
    {
        $category = Category::get();
        return Inertia::render('Services/Create',[
            'category'=>$category,
        ]);
    }

    public function store(Request $request)
    {
        Services::query()->create($this->validateItem($request, 'create', -1));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم الاضافة بنجاح']);
        return redirect('/admin/services');
    }


    public function edit($category)
    {
        $service = Services::find($category);
        $category = Category::get();
        return Inertia::render('Services/Edit', [
            'service' => $service,
            'category'=>$category,
        ]);
    }

    public function update(Request $request, $category){
        $arr = $this->validateItem($request, 'update', -1);
        $service = Services::find($category);
        if ($request->hasFile('icon')){
            $this->deleteImage($service->icon_url);
        }
        if($arr['icon'] == "" || $arr['icon'] == null){
            $arr['icon'] = $service->icon;
        }
        $service->update($arr);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'تم التعديل بنجاح']);
        return redirect('/admin/services');
    }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'title_ar'        => "required",
            'disc_ar'         => '',
            'title_en'        => "required",
            'category_id'     => 'required',
            'disc_en'         => '',
            'icon'            => '',
        ];
        $res = $request->validate($validate_arr);

        if ($request->hasFile('icon')) {
            $res['icon'] = $this->saveFile($request->icon,'assets/services');
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
        $service = Services::find($serviceId);
        if($service->icon != null){
            $this->deleteImage($service->icon_url);
        }
        $service->delete();
        return back();
    }
}
