<template>
    <Head title="حجز الموعد"/>
    <!--begin::Head-->
    <head>
        <base href="../../../">
        <meta charset="utf-8"/>
        <meta name="description"
              content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free."/>
        <meta name="keywords"
              content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title"
              content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme"/>
        <meta property="og:url" content="https://keenthemes.com/metronic"/>
        <meta property="og:site_name" content="Keenthemes | Metronic"/>
        <link rel="canonical" href="https://preview.keenthemes.com/metronic8"/>
        <link rel="shortcut icon" href="/assets/media/logos/favicon.ico"/>
        <!--begin::Fonts-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
        <!--end::Fonts-->
        <!--begin::Global Stylesheets Bundle(used by all pages)-->
        <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
        <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
        <!--end::Global Stylesheets Bundle-->


    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <body id="kt_body" class="bg-light" style="height: 100%;">
    <!--begin::Main-->
    <!--begin::Root-->

    <div class="d-flex flex-column flex-root" style="height: 100%;">
        <!--begin::Authentication - Sign-in -->
        <div style="height: 100%;"
             class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">

            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
                 style="margin-top: auto !important;margin-bottom: auto !important;">

                <div class="alert alert-danger">
                    <h1 class="text-center">
                        حدث خطأ في عملية تأكيد الحجز
                    </h1>
                </div>
            </div>

            <!--end::Content-->

        </div>
        <!--end::Authentication - Sign-in-->
    </div>


    </body>

</template>
<script>
export default {
    layout: [],


    data() {
        return {
            form: {
                reservation_time: ''
            }
        };
    },
    watch: {
        "$page.props.flash.message": {
            handler() {
                if (this.$page.props.flash.message) {
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toastr-top-left p-5",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    let msg = this.$page.props.flash.message.msg;
                    if (this.$page.props.flash.message.type === 'success')
                        toastr.success(msg);
                    else if (this.$page.props.flash.message.type === 'warning')
                        toastr.warning(msg);
                    else if (this.$page.props.flash.message.type === 'error')
                        toastr.error(msg);
                    else
                        toastr.info(msg);
                }
            },
            deep: true,
        },


        'form.reservation_time'(newValue) {
            // Triggered whenever the reservation_time changes
            if (newValue) {
                this.divideTimeIntoQuarters();
            }
        }
    },
    methods: {
        divideTimeIntoQuarters() {
            const timeParts = this.form.reservation_time.split(':'); // Split the time by colon
            const hours = parseInt(timeParts[0]); // Get the hours as an integer
            const minutes = parseInt(timeParts[1]); // Get the minutes as an integer

            // Calculate the number of quarter-hours from midnight
            const totalQuarters = (hours * 4) + Math.floor(minutes / 15);

            // Calculate the new time with quarters of an hour
            const newHours = Math.floor(totalQuarters / 4); // Get the new hours
            const newMinutes = (totalQuarters % 4) * 15; // Get the new minutes

            // Update the reservation_time with the new time format
            this.form.reservation_time = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        }
    }


}
</script>
<script setup>
import {Inertia} from "@inertiajs/inertia";
import {ref, useAttrs} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";


const attrs = useAttrs();


</script>

<style>
#app {
    height: 100% !important;
}


</style>
