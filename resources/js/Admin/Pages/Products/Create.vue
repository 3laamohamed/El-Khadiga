<template>
    <Head title="Add Product" />
    <Layout :prv_page="[{ name: 'Products', link: '/admin/products' }, { name: 'Add' }]">
        <div class="card mb-5 mb-xl-10">
            <div class="card-header border-0">
                <div class="card-title m-0"><h3 class="fw-bolder m-0">Add Product</h3></div>
            </div>
            <form @submit.prevent="submit" class="form">
                <div class="card-body border-top p-9">
                    <div class="row g-8 mb-8">
                        <div class="col-lg-6">
                            <label class="form-label fw-bolder">Name</label>
                            <input type="text" class="form-control" v-model="form.name">
                            <div v-if="form.errors.name" class="text-danger text-xs mt-1">{{ form.errors.name }}</div>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-bolder">Category</label>
                            <select class="form-control" v-model="form.category_id">
                                <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title_en }}</option>
                            </select>
                        </div>
                        <div class="col-lg-12">
                            <label class="form-label fw-bolder">Description</label>
                            <textarea rows="3" class="form-control" v-model="form.description"></textarea>
                        </div>
                        <div class="col-lg-6">
                            <ListFieldInput
                                v-model="form.pack_sizes"
                                label="Pack Sizes"
                                placeholder="e.g. 400 gm / 800 gm"
                                add-label="Add pack size"
                            />
                        </div>
                        <div class="col-lg-6">
                            <ListFieldInput
                                v-model="form.carton_weights"
                                label="Carton Weights"
                                placeholder="e.g. Carton 8 kg"
                                add-label="Add carton weight"
                            />
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-bolder">Container Capacity</label>
                            <input type="text" class="form-control" v-model="form.container_capacity" placeholder="e.g. 2600 cartons per 40 feet">
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-bolder">Shelf Life</label>
                            <input type="text" class="form-control" v-model="form.shelf_life">
                        </div>
                        <div class="col-lg-3">
                            <label class="form-label fw-bolder">Sort Order</label>
                            <input type="number" class="form-control" v-model="form.sort_order">
                        </div>
                        <div class="col-lg-3 d-flex align-items-end">
                            <label class="form-check">
                                <input type="checkbox" class="form-check-input" v-model="form.is_featured">
                                <span class="form-check-label">Featured on Home</span>
                            </label>
                        </div>
                        <div class="col-lg-6">
                            <label class="form-label fw-bolder">Product Image</label>
                            <input type="file" class="form-control" @change="onFileChange">
                        </div>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                    <button type="submit" class="btn" style="background-color: #5A8F3C; color: #fff" :disabled="form.processing">Save</button>
                </div>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import Layout from '../../Shared/Layout';
import ListFieldInput from '../../Shared/ListFieldInput.vue';

const props = defineProps({ categories: Array });

const form = useForm({
    name: '',
    category_id: props.categories[0]?.id ?? '',
    description: '',
    pack_sizes: '',
    carton_weights: '',
    container_capacity: '',
    shelf_life: '18 months from manufacture date',
    sort_order: 0,
    is_featured: false,
    image: null,
});

const onFileChange = (e) => {
    form.image = e.target.files[0];
};

const submit = () => {
    form.post('/admin/products');
};
</script>
