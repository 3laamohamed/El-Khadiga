<template>
    <Head title="تعديل خدمة" />
    <Layout :prv_page="[
        {'name' : 'الخدمات',  'link' : '/admin/services'},
        {'name' : 'تعديل خدمة'},
        ]">
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">تعديل خدمة</h3>
            </div>
        </div>
        <form @submit.prevent="submit" class="form">
            <div class="card-body border-top p-9">
                <div class="row g-8 mb-8">
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> العنوان </label>
                        <input type="text" class="form-control" v-model="form.title">
                        <div v-if="form.errors.title" v-text="form.errors.title" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                            <label class="fs-6 form-label fw-bolder text-dark required">الايقون</label>
                            <input type="file" class="form-control" @change="onFileChangeLogo" />
                            <div v-if="form.errors.icon" v-text="form.errors.icon" class="text-danger text-xs mt-1"></div>
                            <!-- <img :src="props.service.icon_url" style="width: 80px;border-radius: 5px;"> -->
                            <div v-if="form.icon">
                                <img :src="form.logo_url" style="width: 80px;border-radius: 5px;">
                            </div>
                            <div v-else>
                                <img :src="props.service.icon_url" style="width: 80px;border-radius: 5px;">
                            </div>
                    </div>
                    <div class="col-lg-12">
                        <label class="fs-6 form-label fw-bolder text-dark"> الوصف </label>
                        <textarea class="form-control"    v-model="form.disc"></textarea>
                         <div v-if="form.errors.disc" v-text="form.errors.disc" class="text-danger text-xs mt-1"></div>
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
    service: Object,
});

let form = useForm({
    title: props.service.title,
    disc: props.service.disc,
    logo_url: '',
    icon:''
});

let onFileChangeLogo = (e) => {
    form.icon = e.target.files[0];
    form.logo_url = URL.createObjectURL(form.icon);
}

let submit = () => {
    form.post('/admin/services/' + props.service.id);
}
</script>

<style scoped>

</style>
