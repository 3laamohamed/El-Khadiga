<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
class CategoryController extends Controller
{
    public function index(Request $request){
        $categories = Category::query();
        
        if ($request->filled('name')) {
            $search = $request->input('name');
            $categories->where(function ($query) use ($search) {
                $query->where('title_en', 'like', '%' . $search . '%')
                    ->orWhere('title_ar', 'like', '%' . $search . '%');
            });
        }

        $categories = $categories->select(['*'])
            ->orderByDesc('id')
            ->paginate(10);
        return Inertia::render('Category/Index', [
            'category' => $categories,
            'filters' => $request->only(['name']),
        ]);
    }

    public function create(Request $request): \Inertia\Response
    {
        return Inertia::render('Category/Create');
    }

    public function store(Request $request)
    {
        Category::query()->create($this->validateItem($request, 'create', -1));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Category added successfully']);
        return redirect('/admin/category');
    }


    public function edit($category)
    {
        $service = Category::find($category);
        return Inertia::render('Category/Edit', [
            'category' => $service,
        ]);
    }

    public function update(Request $request, $category){
        $arr = $this->validateItem($request, 'update', -1);
        $Category = Category::find($category);
        if ($request->hasFile('icon')){
            $this->deleteImage($Category->icon_url);
        }
        if($arr['icon'] == "" || $arr['icon'] == null){
            $arr['icon'] = $Category->icon;
        }
        $Category->update($arr);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Category updated successfully']);
        return redirect('/admin/category');
    }

    protected function validateItem(Request $request, $form_name, $item_id): array
    {
        $validate_arr = [
            'title_ar'        => "required",
            'title_en'        => "required",
            'icon'            => '',
        ];
        $res = $request->validate($validate_arr);
        $res['slug'] = Str::slug($res['title_en']);

        if ($request->hasFile('icon')) {
            $res['icon'] = $this->saveFile($request->icon,'assets/category');
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

    public function delete($categoryId)
    {
        $Category = Category::find($categoryId);
        if($Category->icon != null){
            $this->deleteImage($Category->icon_url);
        }
        $Category->delete();
        return back();
    }
}
