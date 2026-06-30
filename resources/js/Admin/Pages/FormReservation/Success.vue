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
        <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/> -->
        <!--end::Fonts-->
        <!--begin::Global Stylesheets Bundle(used by all pages)-->
        <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
        <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
        <!--end::Global Stylesheets Bundle-->


    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <body id="kt_body" class="bg-light" style="height: 95vh;">
    <!--begin::Main-->
    <!--begin::Root-->

    <div class="congrats-screen">
      <h1 class="congrats-title">!تهانينا لك</h1>
      <h6 class="congrats-description">{{ returnMessage }} </h6>
      <img src="/assets/success/verificationIcon.png" alt="verification-icon" />
      <div class="collection">
        <div class="top-image-container">
          <img src="/assets/success/Subtract-top.png" />
          <div class="first-row">
            <div class="reservation-people">
              <p class="reservation-people-title">عدد الاشخاص:</p>
              <p class="reservation-people-number">{{ reservations.count_people }}</p>
            </div>
            <div class="reservation-table">
              <p class="reservation-table-title">رقم {{category}}:</p>
              <p class="reservation-table-number">{{ tables_ids }}</p>
            </div>
          </div>
        </div>
        <div class="top-image-container">
          <img src="/assets/success/Subtract-bottom.png" />
          <div class="second-row">
            <div class="reservation-time">
              <p class="reservation-time-title">وقت الحجز:</p>
              <p class="reservation-time-description">{{ get_time_with_arabic_am_pm(reservations.reservation_time) }}</p>
            </div>
            <div class="reservation-date">
              <p class="reservation-date-title">تاريخ الحجز:</p>
              <p class="reservation-date-description">{{ get_day_name_from_date_string(reservations.reservation_date) }} {{ reservations.reservation_date }}</p>
            </div>
          </div>
        </div>
        <div class="reservation">
          <div class="reservation-circle">
            <p class="reservation-title">رقم الحجز</p>
            <p class="reservation-number">{{ reservations.id }}</p>
          </div>
        </div>
      </div>

      <p class="info">يرجي حفظ الشاشة وتقديمها لموظف الحجز</p>
      <img class="logo" src="/assets/success/bookingLogo.png" alt="booking-logo" />
    </div>

    <!-- <div class="d-flex flex-column flex-root" style="height: 100%;">
        <div style="height: 100%;"
             class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto" style="margin-top: auto !important;margin-bottom: auto !important;">
                    <div class="row text-center">
                        <h1 style="    text-align: center;padding: 10px;">
                            👏 تهانينا لك
                            {{ client }}
                            !
                        </h1>
                        <h1 style="    text-align: center;padding: 10px;">
                            تم تأكيد حجزك بنجاح
                        </h1>
                        <img :src="'/assets/media/success-check.png'" style="width: 75px;margin: 15px auto;" alt="">

                        <h3 style="color: #667085">رقم الحجز: {{ reservations.id }}</h3>
                        <h3 style="color: #667085">الخدمة : {{ tables_ids }}</h3>
                        <h3 style="color: #667085">عدد الاشخاص: {{ reservations.count_people }}</h3>
                        <h3 style="color: #667085">{{ get_day_name_from_date_string(reservations.reservation_date) }} {{ reservations.reservation_date }} </h3>
                        <h3 style="color: #667085">{{ get_time_with_arabic_am_pm(reservations.reservation_time) }}</h3>
                        <h3 style="color: #667085;font-size: 12px;padding-top: 16px;">
                            يرجى حفظ الشاشة وتقديمها لموظف الاستقبال
                        </h3>
                    </div>
            </div>
        </div>
    </div> -->


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
        get_day_name_from_date_string(dateString) {
            const date = new Date(dateString);

            const options = {weekday: 'long', timeZone: 'UTC', timeZoneName: 'short'};
            const formatter = new Intl.DateTimeFormat('ar-SA', options);
            const parts = formatter.formatToParts(date);

            let arabicDayName = '';

            for (const part of parts) {
                if (part.type === 'weekday') {
                    arabicDayName = part.value;
                    break;
                }
            }
            return arabicDayName;
        },
        get_time_with_arabic_am_pm(timeString) {

            const arabicTranslations = {
                am: 'صباحاً',
                pm: 'مساءاً'
            };

            return timeString.replace(/am|pm/gi, match => {
                return arabicTranslations[match.toLowerCase()];
            });
        }
    }


}
</script>
<script setup>
import {Inertia} from "@inertiajs/inertia";
import {ref, useAttrs} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";

let props = defineProps({
    reservations: Object,
    client: String,
    tables_ids: String,
    category : String,
    returnMessage:String,
});

const attrs = useAttrs();


</script>

<style>
@font-face {
  font-family: "Somar";
  src: url("/assets/success/alfont_com_SomarGX.ttf");
}
* {
  font-family: "Somar", sans-serif;
}

*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a,
button {
  cursor: revert;
}

ol,
ul,
menu {
  list-style: none;
}

img {
  max-inline-size: 100%;
  max-block-size: 100%;
}

table {
  border-collapse: collapse;
}

input,
textarea {
  -webkit-user-select: auto;
}

textarea {
  white-space: revert;
}

meter {
  -webkit-appearance: revert;
  appearance: revert;
}

:where(pre) {
  all: revert;
}

::placeholder {
  color: unset;
}

::marker {
  content: initial;
}

:where([hidden]) {
  display: none;
}

:where([contenteditable]:not([contenteditable="false"])) {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
  -webkit-user-select: auto;
}
:where([draggable="true"]) {
  -webkit-user-drag: element;
}

:where(dialog:modal) {
  all: revert;
}

:root {
  --primary-color: #115da6;
  --secondary-color: #013363;
  --light-color: #a5a5a5;
}

.congrats-screen {
  background-color: #f4f8fb;
  padding-top: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.congrats-title {
  font-weight: 700;
  font-size: 32px;
  color: var(--primary-color);
  line-height: 40px;
  text-align: center;
}

.congrats-description {
  font-size: 16px;
  color: var(--light-color);
  line-height: 40px;
}

.reservation {
  padding: 15px;
  padding-top: 60px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.collection {
  display: flex;
  flex-direction: column;
  position: relative;
}

.reservation {
  position: absolute;
  width: 100%;
}

.reservation-circle {
  background: #f8fcff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.reservation-title {
  font-size: 14px;
  color: var(--secondary-color);
}

.reservation-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary-color);
}

.reservation-people {
  display: flex;
  flex-direction: column;
}

.reservation-table {
  display: flex;
  flex-direction: column;
}

.first-row {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  text-align: right;
}

.second-row {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  text-align: right;
}

.top-image-container {
  position: relative;
}

.reservation-people-title,
.reservation-table-title {
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  color: var(--secondary-color);
  text-align :center;
}
.reservation-people-number,
.reservation-table-number {
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: var(--primary-color);
}

.info {
  color: var(--light-color);
  font-size: 14px;
  margin: 20px 0px;
}

.reservation-time-title,
.reservation-date-title {
  color: white;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
}

.reservation-time-description,
.reservation-date-description {
  color: white;
  font-size: 14px;
  font-weight: 700;
}

.logo {
  margin-top: 15px;
  margin-bottom: 20px;
}

</style>
