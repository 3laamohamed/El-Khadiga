<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::query()->whereNotNull('slug')->get();
        $products = Product::query()
            ->with('category')
            ->when($request->filled('name'), fn ($q) => $q->where('name', 'like', '%' . $request->input('name') . '%'))
            ->when($request->filled('category_id'), fn ($q) => $q->where('category_id', $request->input('category_id')))
            ->orderBy('sort_order')
            ->paginate(10);

        return Inertia::render('Products/Index', [
            'products' => $products,
            'categories' => $categories,
            'filters' => $request->only(['name', 'category_id']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Create', [
            'categories' => Category::query()->whereNotNull('slug')->get(),
        ]);
    }

    public function store(Request $request)
    {
        Product::query()->create($this->validateItem($request));
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Product added successfully']);
        return redirect('/admin/products');
    }

    public function edit($id)
    {
        return Inertia::render('Products/Edit', [
            'product' => Product::findOrFail($id),
            'categories' => Category::query()->whereNotNull('slug')->get(),
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $data = $this->validateItem($request, $product);

        if (!$request->hasFile('image')) {
            unset($data['image']);
        }

        $product->update($data);
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Product updated successfully']);
        return redirect('/admin/products');
    }

    public function delete(Product $item)
    {
        if ($item->image) {
            File::delete(public_path('images/products/' . $item->image));
        }
        $item->delete();
        session()->flash('user_message', ['type' => 'success', 'msg' => 'Product deleted successfully']);
        return redirect('/admin/products');
    }

    protected function validateItem(Request $request, ?Product $existing = null): array
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'pack_sizes' => 'nullable|string',
            'carton_weights' => 'nullable|string',
            'container_capacity' => 'nullable|string|max:255',
            'shelf_life' => 'nullable|string|max:255',
            'is_featured' => 'boolean',
            'sort_order' => 'integer',
            'image' => $existing ? 'nullable|image' : 'nullable|image',
        ]);

        $slug = $existing?->slug ?? Str::slug($validated['name']);

        $data = [
            'name' => $validated['name'],
            'slug' => $slug,
            'category_id' => $validated['category_id'],
            'description' => $validated['description'] ?? '',
            'pack_sizes' => $this->linesToArray($validated['pack_sizes'] ?? ''),
            'carton_weights' => $this->linesToArray($validated['carton_weights'] ?? ''),
            'container_capacity' => $validated['container_capacity'] ?? '',
            'shelf_life' => $validated['shelf_life'] ?? '',
            'is_featured' => $request->boolean('is_featured'),
            'sort_order' => $validated['sort_order'] ?? 0,
        ];

        if ($request->hasFile('image')) {
            if ($existing?->image) {
                File::delete(public_path('images/products/' . $existing->image));
            }
            $data['image'] = $this->saveFile($request->file('image'));
        }

        return $data;
    }

    protected function linesToArray(string $text): array
    {
        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $text))));
    }

    protected function saveFile($photo): string
    {
        $dir = public_path('images/products');
        if (!File::isDirectory($dir)) {
            File::makeDirectory($dir, 0755, true);
        }
        $fileName = time() . '_' . Str::random(6) . '.' . $photo->getClientOriginalExtension();
        $photo->move($dir, $fileName);
        return $fileName;
    }
}
