<template>
    <Head title="اعدادات النظام " />
    <Layout :prv_page="[
        {'name' : 'اعدادات النظام'},
        ]">
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">اعدادات النظام</h3>
            </div>
        </div>
        <form @submit.prevent="submit" class="form">
            <div class="card-body border-top p-9">
                <div class="row g-8 mb-8">
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> رقم الهاتف </label>
                        <input type="text" class="form-control" v-model="form.phone">
                        <div v-if="form.errors.phone" v-text="form.errors.phone" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  البريد الإلكتروني </label>
                        <input type="text" class="form-control" v-model="form.email">
                        <div v-if="form.errors.email" v-text="form.errors.email" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-12">
                            <label class="fs-6 form-label fw-bolder text-dark required">الشعار</label>
                            <input type="file" class="form-control" @change="onFileChangeLogo" />
                            <div v-if="form.errors.icon" v-text="form.errors.icon" class="text-danger text-xs mt-1"></div>
                            <div v-if="form.icon">
                                <img :src="form.icon_url" style="width: 80px;border-radius: 5px;">
                            </div>
                            <div v-else>
                                <img :src="form.icon" style="width: 80px;border-radius: 5px;">
                            </div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> من نحن بالعربية </label>
                        <textarea rows="6"  class="form-control"    v-model="form.about_us_ar"></textarea>
                         <div v-if="form.errors.about_us_ar" v-text="form.errors.about_us_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark"> من نحن بالانجليزية </label>
                        <textarea rows="6"  class="form-control"    v-model="form.about_us_en"></textarea>
                         <div v-if="form.errors.about_us_en" v-text="form.errors.about_us_en" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  المقدمة بالعربية</label>
                        <textarea rows="6" class="form-control"  v-model="form.intro_ar"></textarea>
                        <div v-if="form.errors.intro_ar" v-text="form.errors.intro_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">  المقدمة بالانجليزية</label>
                        <textarea rows="6" class="form-control"  v-model="form.intro_en"></textarea>
                        <div v-if="form.errors.intro_en" v-text="form.errors.intro_en" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">الشروط والاحكام بالعربية</label>
                        <textarea rows="6"  class="form-control"    v-model="form.terms_conditions_ar"></textarea>
                        <div v-if="form.errors.terms_conditions_ar" v-text="form.errors.terms_conditions_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">الشروط والاحكام بالانجليزية</label>
                        <textarea rows="6"  class="form-control"    v-model="form.terms_conditions_en"></textarea>
                        <div v-if="form.errors.terms_conditions_en" v-text="form.errors.terms_conditions_en" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">سياسة الخصوصية بالعربية</label>
                        <textarea rows="6"  class="form-control"    v-model="form.privacy_policy_ar"></textarea>
                        <div v-if="form.errors.privacy_policy_ar" v-text="form.errors.privacy_policy_ar" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="col-lg-6">
                        <label class="fs-6 form-label fw-bolder text-dark">سياسة الخصوصية بالانجليزية</label>
                        <textarea rows="6"  class="form-control"  v-model="form.privacy_policy_en"></textarea>
                        <div v-if="form.errors.privacy_policy_en" v-text="form.errors.privacy_policy_en" class="text-danger text-xs mt-1"></div>
                    </div>
                 </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn  w-20"   style="background-color: #115da6 ;color: #ffffff" :disabled="form.processing" >
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
    settings: Object,


});

let onFileChangeLogo = (e) => {
    form.icon = e.target.files[0];
    form.icon_url = URL.createObjectURL(form.icon);
}

let form = useForm({

    terms_conditions_ar: props.settings.terms_conditions_ar,
    privacy_policy_ar: props.settings.privacy_policy_ar,
    about_us_ar: props.settings.about_us_ar,
    intro_ar:props.settings.intro_ar,
    terms_conditions_en: props.settings.terms_conditions_en,
    privacy_policy_en: props.settings.privacy_policy_en,
    about_us_en: props.settings.about_us_en,
    intro_en:props.settings.intro_en,
    phone:props.settings.phone,
    email:props.settings.email,
    icon:props.settings.icon,
    icon_url:props.settings.icon_url,
});



let submit = () => {
    form.post('/admin/settings/update');
}

let att_form = useForm({
    file: null,
});



</script>

<style scoped>

</style>
