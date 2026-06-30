<template>
    <Head title="تسجيل الدخول" />
    <!--begin::Head-->
    <head><base href="../../../">
        <meta charset="utf-8" />
        <meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
        <meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme" />
        <meta property="og:url" content="https://keenthemes.com/metronic" />
        <meta property="og:site_name" content="Keenthemes | Metronic" />
        <link rel="canonical" href="https://preview.keenthemes.com/metronic8" />
        <link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />
        <!--begin::Fonts-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
        <!--end::Fonts-->
        <!--begin::Global Stylesheets Bundle(used by all pages)-->
        <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/icons/icomoon/styles.min.css')}}" rel="stylesheet" type="text/css">

        <!--end::Global Stylesheets Bundle-->
    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <body id="kt_body" class="bg-light">
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Authentication - Sign-in -->
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" >
            <!--begin::Content-->
            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <!--begin::Logo-->

                <!--end::Logo-->
                <!--begin::Wrapper-->
                <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <!--begin::Form-->
                    <form @submit.prevent="submit" class="form">
                        <!--begin::Heading-->
                        <div class="text-center mb-10">
                            <!--begin::Title-->
<!--                            <h1 class="text-dark mb-3">تسجيل الدخول </h1>-->
                            <div class="logo">
                                <div>
                                    <img   src="/assets/media/logos/01.png" alt="logo">
                                </div>
                            </div>

                            <!--end::Title-->
                            <div v-if="form.errors.login" v-text="form.errors.login" class="text-danger text-xs mt-1"></div>
                            <!--begin::Link-->
                            <!--end::Link-->
                        </div>



                        <!--begin::Heading-->
                        <!--begin::Input group-->
                        <div class="fv-row mb-10">
                            <!--begin::Label-->
                            <label class="form-label fs-6 fw-bolder text-dark">البريد الالكتروني</label>
                            <!--end::Label-->
                            <!--begin::Input-->
                            <input class="form-control form-control-lg form-control-solid" type="text" v-model="form.email"  autocomplete="off" />
                            <div v-if="form.errors.email" v-text="form.errors.email" class="text-danger text-xs mt-1"></div>
                            <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="fv-row mb-10">
                            <!--begin::Wrapper-->
                            <div class="d-flex flex-stack mb-2">
                                <!--begin::Label-->
                                <label class="form-label fw-bolder text-dark fs-6 mb-0">كلمة المرور</label>
                                <!--end::Label-->
                                <!--begin::Link-->
                                <!--end::Link-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Input-->
<!--                            <input class="form-control form-control-lg form-control-solid" type="password" v-model="form.password" autocomplete="off" />-->
                            <div class="input-group">
                                <input id="passwordInput"  class="form-control form-control-lg form-control-solid" type="password" v-model="form.password" autocomplete="off" />
                                <div class="input-group-append">
                                    <button class="btn " style="background-color: #115da6"  id="showPasswordBtn" type="button">
                                        <i class="icon-eye fs-3 " style="color: #ffffff"></i>
                                    </button>
                                </div>
                            </div>

                         <div v-if="form.errors.password" v-text="form.errors.password" class="text-danger text-xs mt-1"></div>
                            <!--end::Input-->

                        </div>



                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="text-center">
                            <!--begin::Submit button-->
                            <button type="submit"  class="btn btn-lg  w-100 mb-5" style="background-color: #115da6 ;color: #ffffff">
                                <span class="indicator-label">تسجيل الدخول</span>
                                <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                            <!--begin::Title-->
                            <!--end::Title-->
                            <!--begin::Link-->

                            <!--end::Submit button-->

                        </div>
                        <!--end::Actions-->
                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->

        </div>
        <!--end::Authentication - Sign-in-->
    </div>


    </body>

</template>
<script>



export default {
    name: "login",
    layout: [],
}
</script>
<script setup>
import {Inertia} from "@inertiajs/inertia";
import {ref, useAttrs} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";


const attrs = useAttrs();

let props = defineProps({

});

let form = useForm({
    email: '',
    password: '',
});


let submit = () => {
    form.post('/admin/login');
}




$(document).ready(function() {
    $('#showPasswordBtn').on('click', function() {
        var passwordInput = $('#passwordInput');
        var passwordFieldType = passwordInput.attr('type');

        if (passwordFieldType === 'password') {
            passwordInput.attr('type', 'text');
            $('#showPasswordBtn').html('                                        <i class="icon-eye-blocked fs-3s " style="color: #ffffff"></i>\n');
        } else {
            passwordInput.attr('type', 'password');
            $('#showPasswordBtn').html('                                        <i class="icon-eye fs-3 " style="color: #ffffff"></i>\n');
        }
    });
});
</script>

<style scoped>
.logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}
.logo div {
    width: 100%;
    height: 250px;
}
.logo div img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

</style>
