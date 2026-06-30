<template>
    <Head title="إضافة خدمة" />
    <Layout :prv_page="[
        {'name' : 'الخدمات',  'link' : '/admin/services'},
        {'name' : 'إضافة خدمة'},
        ]">
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">إضافة خدمة</h3>
            </div>
        </div>
        <form @submit.prevent="submit" class="form">
            <div class="card-body border-top p-9">
                <div class="row g-8 mb-8">
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  العنوان بالعربية </label>
                        <input type="text" class="form-control" v-model="form.title_ar">
                        <div v-if="form.errors.title_ar" v-text="form.errors.title_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  العنوان بالانجليزية </label>
                        <input type="text" class="form-control" v-model="form.title_en">
                        <div v-if="form.errors.title_en" v-text="form.errors.title_en" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> الوصف بالعربية </label>
                        <textarea rows="4" class="form-control"    v-model="form.disc_ar"></textarea>
                         <div v-if="form.errors.disc_ar" v-text="form.errors.disc_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> الوصف بالانجليزية </label>
                        <textarea rows="4" class="form-control"  v-model="form.disc_en"></textarea>
                         <div v-if="form.errors.disc_en" v-text="form.errors.disc_en" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  الفئات </label>
                        <select class="form-control"  v-model="form.category_id">
                            <option v-for="item in category" :key="item.id" :value="item.id"> {{ item.title_ar }} </option>
                        </select>
                         <div v-if="form.errors.category_id" v-text="form.errors.category_id" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bolder text-dark required">الايقون</label>
                            <input type="file" class="form-control" @change="onFileChangeLogo" />
                            <div v-if="form.errors.icon" v-text="form.errors.icon" class="text-danger text-xs mt-1"></div>
                            <div v-if="form.icon">
                                <img :src="form.logo_url" style="width: 80px;border-radius: 5px;">
                            </div>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn w-20 mx-2"
                        style="background-color: #115da6 ;color: #ffffff"
                        :disabled="form.processing" >
                    حفظ التغييرات
                </button>

            </div>
        </form>
    </div>
    </Layout>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import {onMounted, ref, useAttrs} from "vue";
import Layout from "../../Shared/Layout";

const attrs = useAttrs();
let props = defineProps({
    category: Object,
});

let form = useForm({
    icon: '',
    title_en:'',
    category_id:'',
    disc_en:'',
    title_ar:'',
    disc_ar:'',
    logo_url: '/uploads/shop/',
});

let onFileChangeLogo = (e) => {
    form.icon = e.target.files[0];
    form.logo_url = URL.createObjectURL(form.icon);
}

let submit = () => {
    form.post('/admin/services');
}
</script>