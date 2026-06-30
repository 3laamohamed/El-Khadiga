<template>
    <!-- <Head title="حجز الموعد"/> -->
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
        <link rel="icon" href="/assets/media/logos/cover.png"/>
        <!-- <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> -->
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
    <body id="kt_body" class="bg-light">
    <!--begin::Main-->
    <!--begin::Root-->

    <div class="d-flex flex-column flex-root">
        <!--begin::Authentication - Sign-in -->
        <div
            class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
            <!--begin::Content-->
            <!--            <div  class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20" style="max-width: 100%; overflow-x: auto;">-->
            <!--                &lt;!&ndash;begin::Logo&ndash;&gt;-->
            <!--                <div class="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-8 mb-n5 mb-lg-n13" style="width: 800px; height: 150px; background-image: url('/assets/media/logos/cover.png')">-->
            <!--                </div>-->
            <!--                &lt;!&ndash;end::Wrapper&ndash;&gt;-->
            <!--            </div>-->

            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form @submit.prevent="submit" class="form">
                    <input class="d-none" type="text" v-model="form.casher_id">
                    <div class="text-center mb-2">
                        <div class="logo2">
                            <div>
                                <img :src="'/assets/media/logos/01.png'" alt="logo">
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-2">
                        <div class="logo">
                            <div>
                                <img :src="shop.logo_url ?? '/assets/media/logos/01.png'" alt="logo">
                            </div>
                        </div>
                    </div>

                    <div class="fv-row mb-2">
                        <!--                            <label class="form-label fs-6 fw-bolder text-dark">اسم صاحب الحجز </label>-->
                        <input class="form-control form-control-lg form-control-solid" placeholder="الاسم" type="text"
                               v-model="form.name" autocomplete="off"/>
                        <div v-if="form.errors.name" v-text="form.errors.name" class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="fv-row mb-2">
                        <div class="d-flex flex-stack mb-2">
                            <!--                                <label class="form-label fw-bolder text-dark fs-6 mb-0">رقم صاحب الحجز </label>-->
                        </div>
                        <input class="form-control form-control-lg form-control-solid" placeholder="رقم الجوال"
                               type="tel" style="text-align: right" v-model="form.mobile" autocomplete="off"/>
                        <div v-if="form.errors.mobile" v-text="form.errors.mobile"
                             class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="fv-row mb-2">
                        <div class="d-flex flex-stack mb-2">
                            <!--                                <label class="form-label fw-bolder text-dark fs-6 mb-0">عددالاشخاص</label>-->
                        </div>
                        <input class="form-control form-control-lg form-control-solid" placeholder="عدد الاشخاص"
                               type="number" v-model="form.count_people" autocomplete="off"/>
                        <div v-if="form.errors.count_people" v-text="form.errors.count_people"
                             class="text-danger text-xs mt-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="fv-row mb-2">
                                <div class="d-flex flex-stack mb-2">
                                    <!--                                <label class="form-label fw-bolder text-dark fs-6 mb-0">تاريخ الحجز </label>-->
                                </div>
<!--                                <input class="form-control form-control-lg form-control-solid  " id="datepicker" type="text"-->
<!--                                       placeholder="اختر التاريخ" style="width: 100%;"   v-model="form.reservation_date"-->
<!--                                       />-->
                                <VueDatePicker
                                    input-class-name="form-control form-control-lg form-control-solid vue-date-picker-custom"
                                    :enable-time-picker="false"
                                    v-model="form.reservation_date"
                                    :min-date="new Date()"
                                    model-type="yyyy.MM.dd"
                                    placeholder="تاريخ الحجز"
                                    auto-apply></VueDatePicker>

                                <div v-if="form.errors.reservation_date" v-text="form.errors.reservation_date"
                                     class="text-danger text-xs mt-1"></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="fv-row mb-2">
                                <div class="d-flex flex-stack mb-2">
                                </div>
                                <select v-if="appointmentsTimes"
                                        class="form-control form-control-lg form-control-solid form-control m-bootstrap-select m-bootstrap-select--solid m_selectpicker"
                                        v-model="form.reservation_time"
                                        @focus="openTimePicker"
                                        data-live-search="true"
                                        data-size="5"
                                        data-width="100%">
                                    <option value="" disabled>اختر الوقت..</option>
                                    <option v-for="time in appointmentsTimes" :value="time" :key="time">{{
                                            time
                                        }}
                                    </option>
                                </select>
                                <input v-if="!appointmentsTimes"
                                       class="form-control form-control-lg form-control-solid  " disabled type="text"
                                       placeholder="الوقت" autocomplete="off"/>
                                <div v-if="form.errors.reservation_time" v-text="form.errors.reservation_time"
                                     class="text-danger text-xs mt-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div v-if="typeOccasions.length > 0" class="col-lg-6">
                            <div class="fv-row mb-2">
                                <div class="d-flex flex-stack mb-2">
                                </div>
                                <select class="form-control form-control-lg form-control-solid"
                                        v-model="form.type_occasion_id">
                                    <option value="" disabled>اختر المناسبة..</option>
                                    <option v-for="type_occasion in typeOccasions" :key="type_occasion.id" :value="type_occasion.id">
                                        {{ type_occasion.title }}
                                    </option>
                                </select>
                                <div v-if="form.errors.reservation_time" v-text="form.errors.reservation_time"
                                     class="text-danger text-xs mt-1"></div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="fv-row mb-2">
                                <div class="d-flex flex-stack mb-2">
                                </div>
                                <select class="form-control form-control-lg form-control-solid"
                                        v-model="form.service_id">
                                    <option value="" disabled>اختر {{ category }} ..</option>
                                    <option v-for="service in services" :key="service.id" :value="service.id">
                                        {{service.title}} |  {{ service.table_type == 2 ? '' : service.table_type == 1 ? 'داخلية' : 'خارجية'}}
                                    </option>
                                </select>
                                <div v-if="form.errors.reservation_time" v-text="form.errors.reservation_time"
                                     class="text-danger text-xs mt-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fv-row mb-2">
                        <div class="d-flex flex-stack mb-2">
                        </div>
                        <textarea class="form-control form-control-lg form-control-solid" placeholder="الملاحظات"
                                  v-model="form.notes"></textarea>
                        <div v-if="form.errors.notes" v-text="form.errors.notes" class="text-danger text-xs mt-1"></div>
                    </div>
                    <h6><b style="color: red">تنويه:</b>


                    </h6>
                    <ul>
                        <li>
                            <h6>
                                في حال عدم الحضور خلال
                                <b style="color:#115da6 ">{{ shopSetting.reservation_period }} دقائق</b>
                                يعتبر الحجز ملغي
                            </h6>
                        </li>
                        <li v-if="shopSetting.payment_method == 2">
                            <h6>
                                لا يوجد دفع عند الحجز
                            </h6>
                        </li>
                        <li v-if="shopSetting.payment_method == 0">
                            <h6>
                                يتم احتساب الدفع بقيمة
                                {{ shopSetting.payment_value }}
                                ريال
                                لكل شخص
                            </h6>
                        </li>
                        <li v-if="shopSetting.payment_method == 1">
                            <h6>
                                قيمة الحجز ثابتة وتساوي
                                {{ shopSetting.payment_value }}
                                ريال
                            </h6>
                        </li>
                    </ul>


                    <!--end::Input group-->
                    <!--begin::Actions-->
                    <div class="text-center">
                        <!--begin::Submit button-->
                        <button v-if="shopSetting.payment_method == 2" type="submit" class="btn btn-lg  w-100 mb-5"
                                style="background-color: #115da6 ; color: #ffffff" :disabled="form.processing">
                            <span class="indicator-label">تأكيد الحجز</span>
                            <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                        <button v-if="shopSetting.payment_method == 0" type="submit"
                                :class="['btn','btn-lg','w-100','mb-5',form.count_people == 0 ? 'disabled' : '']"
                                :disabled="form.count_people == 0 ? true : (form.processing ? true : false)"
                                style="background-color: #115da6 ; color: #ffffff" >
                            <span class="indicator-label">ادفع
                            <span>{{ shopSetting.payment_value * form.count_people }}</span>
                                ريال
                            </span>
                            <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                        <button v-if="shopSetting.payment_method == 1" type="submit" class="btn btn-lg  w-100 mb-5"
                                style="background-color: #115da6 ; color: #ffffff" :disabled="form.processing">
                            <span class="indicator-label">ادفع
                            <span>{{ shopSetting.payment_value }}</span>
                                ريال
                            </span>
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

let props = defineProps({
    shop: Object,
    typeOccasions: Object,
    services : Object,
    empId    : Object,
    appointmentsTimes: Object,
    shopSetting: Object,
    mobile: String,
    name: String,
    category:String
});


let form = useForm({
    shop_id: props.shop.id,
    name: props.name,
    mobile: props.mobile,
    count_people: '',
    reservation_time: '',
    reservation_date: '',
    notes: '',
    type_occasion_id: '',
    table_type: '',
    service_id : '',
    casher_id : props.empId
});


let submit = () => {
    form.post('/website/form', {
        onSuccess: (response) => {
            console.log(response)
            // window.location = response
        },
    });
}


const showTimePicker = ref(false);

const quarterHours = Array.from({length: 96}, (_, index) => {
    const hours = Math.floor(index / 4);
    const minutes = (index % 4) * 15;
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return timeString;
});

const openTimePicker = () => {
    showTimePicker.value = true;
};

const selectTime = (time) => {
    form.data.reservation_time = time;
    showTimePicker.value = false;
};


</script>

<style scoped>
input[type="number"] {
    direction: rtl;
}

.logo2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 2rem;
}

.logo2 div {
    width: 100px;
    height: 100px;
}

.logo2 div img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}


.logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}

.logo div {
    width: 100px;
    height: 100px;
}

.logo div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}
input [type= 'date']::after{
    color: #fff;
    content: attr(placeholder);
}

</style>
