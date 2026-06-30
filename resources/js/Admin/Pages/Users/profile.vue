<template>
    <Head title="الملف الشخصي" />
    <Layout :prv_page="[
        {'name' : 'الملف الشخصي'},
        ]">

    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">الملف الشخصي</h3>
            </div>
        </div>
        <form @submit.prevent="submit" class="form">
            <div class="card-body border-top p-9">
                <div class="row g-8 mb-8">
                    <div class="col-lg-12">
                        <label class="fs-6 form-label fw-bolder text-dark">الاسم</label>
                        <input type="text" class="form-control" v-model="form.name" required>
                        <div v-if="form.errors.name" v-text="form.errors.name" class="text-danger text-xs mt-1"></div>

                    </div>
                    <div class="col-lg-12">
                        <label class="fs-6 form-label fw-bolder text-dark">البريد الالكتروني </label>
                        <input type="text" class="form-control" v-model="form.email" required>
                        <div v-if="form.errors.email" v-text="form.errors.email" class="text-danger text-xs mt-1"></div>

                    </div>
                    <div class="col-lg-12">
                        <label class="fs-6 form-label fw-bolder text-dark">رقم الجوال</label>
                        <input type="text" class="form-control" v-model="form.mobile" required>
                        <div v-if="form.errors.mobile" v-text="form.errors.mobile" class="text-danger text-xs mt-1"></div>

                    </div>


                </div>
            </div>



            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn   w-30"   style="background-color: #115da6 ;color: #ffffff" :disabled="form.processing">
                 حفظ التعديلات
                </button>
            </div>
        </form>
    </div>
    </Layout>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import {useAttrs} from "vue";
import Layout from "../../Shared/Layout";


const attrs = useAttrs();

let props = defineProps({
    user: Object,
});

let form = useForm({
    name: props.user.name,
    user_name: props.user.user_name,
    email: props.user.email,
    mobile: props.user.mobile,
});


let submit = () => {
    form.put('/admin/change-profile/');
}


</script>

<style scoped>

</style>
