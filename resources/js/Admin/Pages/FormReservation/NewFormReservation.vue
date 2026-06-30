<template>

  <!-- <Head title="حجز الموعد" /> -->
  <!--begin::Head-->

  <head>
    <base href="../../../" />
    <meta charset="utf-8" />
    <meta name="description"
      content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
    <meta name="keywords"
      content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title"
      content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme" />
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
    <link href="/assets/css/newFormReservations.css" rel="stylesheet" type="text/css" />
    <!--end::Global Stylesheets Bundle-->
  </head>

  <body id="kt_body">
    <header>

      <div class="logo-left">
        <img src="/assets/success/new_logo.png" alt="Right Logo" />
      </div>
    </header>
    <section class="form-container">
      <div class="form">
        <div class="header-section">
          <div class="flex-col" style="margin-bottom: 0">
            <p class="title">تفاصيل الحجز</p>
            <p class="description">قم بملئ التفاصيل لتأكيد الحجز</p>
          </div>
          <div class="logo-right">
            <img style="border-radius: 50%; width: 50px; height: 50px;"
              :src="shop.logo_url ?? '/assets/media/logos/01.png'" alt="Left Logo" />
          </div>
        </div>
        <form class="flex-col-2" id="rooms-form">
          <input required class="form-field" v-model="form.name" autocomplete="off" type="text" placeholder="الأسم" />
          <div v-if="form.errors.name" v-text="form.errors.name" class="text-danger text-xs mt-1"></div>

          <div class="form-group">

            <input required v-model="form.mobile" autocomplete="off" class="form-field" type="text"
              placeholder="رقم الهاتف" />

            <span>966+</span>
            <div v-if="form.errors.mobile" v-text="form.errors.mobile" class="text-danger text-xs mt-1"></div>
          </div>

          <input required class="form-field" v-model="form.count_people" style autocomplete="off" type="text"
            placeholder="عدد الأشخاص" />
          <div v-if="form.errors.count_people" v-text="form.errors.count_people" class="text-danger text-xs mt-1">
          </div>
          <div class="flex">
            <VueDatePicker input-class-name="form-control form-control-lg form-control-solid vue-date-picker-custom"
              :enable-time-picker="false" v-model="form.reservation_date" :min-date="new Date()" model-type="yyyy.MM.dd"
              :placeholder="new Date().toISOString().substr(0, 10)" auto-apply>
            </VueDatePicker>
            <div v-if="form.errors.reservation_date" v-text="form.errors.reservation_date"
              class="text-danger text-xs mt-1"></div>
            <!-- <select v-if="appointmentsTimes"
              class="form-control form-control-lg d-none form-control-solid form-control m-bootstrap-select m-bootstrap-select--solid m_selectpicker"
              v-model="form.reservation_time" @focus="openTimePicker" data-live-search="true" data-size="5"
              data-width="100%">
              <option value="" disabled>اختر الوقت..</option>
              <option v-for="time in appointmentsTimes" :value="time" :key="time">
                {{ time }}
              </option>
            </select> -->
          </div>
          <button @click.prevent="getData()" class="rooms-button"> بـــحـــث </button>
          <div class="info-con">
            <div class="item">
              <img style="border-radius: 50%; width: 12px" src="/assets/success/impoortant.svg" alt="Left Logo" />
              <p class="impoortant">تنوية هام</p>
            </div>
            <div class="item">
              <img style="border-radius: 50%; width: 12px" src="/assets/success/error.svg" alt="Left Logo" />
              <p class="error">
                في حالة عدم الحضور خلال 10 دقائق يعتبر الحجز
                ملغي
              </p>
            </div>
            <div class="item">
              <img style="border-radius: 50%; width: 12px" src="/assets/success/error.svg" alt="Left Logo" />
              <p v-if="shopSetting.payment_method != 2" class="error">يوجد دفع عند الحجز</p>
              <p v-else class="error">لايوجد دفع عند الحجز</p>
            </div>
          </div>
        </form>
      </div>
      <img :src="shop.cover != null ? shop.cover_url : '/assets/success/card-image-3.png'"
        class="reservation-image caverImage" />

    </section>
    <section id="rooms-section">
      <div>
        <div class="flex-col">
          <h4 class="title">اختار الغرفة المناسبة</h4>
          <p class="description">
            من بين المزيد من الخيارات يمكنك اختيار الغرفة المناسبة
          </p>
        </div>
      </div>
      <div class="flex-wrap"
        :style="[form.getDataServices.length > 2 ? { 'justify-content': 'flex-start' } : { 'justify-content': 'center' }]">

        <div v-for="service in form.getDataServices" :key="service.id" class="card">
          <div :style="[service.initialCounter > 0 ? { 'width': '80px' } : { 'width': '10px', 'padding': '0px 20px' }]"
            class="container">
            <div class="counter">
              <button v-if="service.initialCounter > 0" class="decrement-btn"
                @click.prevent="service.initialCounter > 0 ? service.initialCounter-- : false, checkPaymentShow() ,totalAmount -=service.price">-</button>
              <div v-if="service.initialCounter > 0" class="counter-value">{{ service.initialCounter }}</div>
              <button class="increment-btn" @click.prevent="service.initialCounter++, paymentShow() ,totalAmount +=service.price">+</button>
            </div>
          </div>

          <swiper grab-cursor update-on-window-resize :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
            @swiper="init">>
            <swiper-slide v-for="img in service.media" :key="img.name">
              <img class="card-image" :src="`/services/uploads/${img.name}`" />
            </swiper-slide>
            ...
          </swiper>

          <div class="info-container">
            <div class="info-section">
              <p class="info-title">{{ service.disc }} </p>
              <p class="info-price"> {{ service.price }} ريال</p>
            </div>
            <div class="detail-section">
              <div class="item-container">
                <img src="/assets/success/profile.svg" />
                <p>{{ service.count_people }}</p>
              </div>
              <div class="item-container">
                <img src="/assets/success/dimentions.svg" />
                <p>{{ service.area }}</p>
              </div>
              <div class="item-container">
                <img src="/assets/success/cigerites.svg" />
                <p>{{ service.adv }}</p>
              </div>
              <div class="item-container">
                <img src="/assets/success/time.svg" />
                <p>وقت الدخول : 05:22 م</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="form-container" id="note-section">
      <div>
        <div class="flex-col">
          <h4 class="title">معلومات اضافية</h4>
        </div>
      </div>
      <div class="payment-form mx-auto">
        <form class="grid">
          <select class="form-control form-control-lg form-control-solid" v-model="form.type_occasion_id">
            <option value="" disabled>اختر المناسبة..</option>
            <option v-for="type_occasion in typeOccasions" :key="type_occasion.id" :value="type_occasion.id">
              {{ type_occasion.title }}
            </option>
          </select>
          <div v-if="form.errors.reservation_time" v-text="form.errors.reservation_time"
            class="text-danger text-xs mt-1"></div>
          <textarea style="width: 100%" class="form-field" v-model="form.notes" rows="2" cols="50"
            placeholder="الملاحظات"></textarea>
        </form>
      </div>
    </section>

      <button id="payment-button" class="rooms-button" @click="showPayment()" style="
                    display: none;
                    margin-top: 2rem;
                    align-items: center;
                    justify-content: center;
                    margin: 10px auto;
                    width: 50%;
                ">
        اكمال الدفع
      </button>
    </section>
    <section class="form-container" id="payment-section">
      <div>
        <div class="flex-col">
          <h4 class="title">أختار وسيلة الدفع</h4>
        </div>
      </div>
      <!-- <p class="title">أختار وسيلة الدفع</p> -->
      <div class="payment-form mx-auto">
        <form class="grid">
          <div class="grid" style="flex-wrap: nowrap;">
            <label v-if="shopSetting.payment_method != 1" class="cardSelect">
              <input name="payment" v-model="form.paymenttype" value="6" class="radio" type="radio" />
              <div class="payment-details" aria-hidden="true">
                <span class="payment-type">
                  <img src="/assets/success/mada-logo.png" alt="Right Logo" />
                </span>
              </div>
            </label>
            <label v-if="shopSetting.payment_method != 1" class="cardSelect">
              <input v-model="form.paymenttype" required value="14" name="payment" class="radio" type="radio" />
              <div class="payment-details" aria-hidden="true">
                <span class="payment-type">
                  <img src="/assets/success/stc-logo.png" alt="Right Logo" />
                </span>
              </div>
            </label>
            <label v-if="shopSetting.payment_method != 1" class="cardSelect">
              <input required v-model="form.paymenttype" value="11" name="payment" class="radio" type="radio" />
              <div class="payment-details" aria-hidden="true">
                <span class="payment-type">
                  <img src="/assets/success/apple-pay-logo 1.png" alt="Right Logo" />
                </span>
              </div>
            </label>
          </div>
          <div class="invoice">الفاتورة</div>
          <div class="table-responsive w-100 table-show">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">الغرفة</th>
                  <th scope="col">العدد</th>
                  <th scope="col">السعر</th>
                  <th scope="col">الاجمالي</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="row in form.getDataServices" :key="row.id">
                <tr  v-if="row.initialCounter > 0">
                  <td scope="row">{{ row.disc }}</td>
                  <td>{{ row.initialCounter }}</td>
                  <td>{{ row.price }} ريال</td>
                  <td>{{row.price * row.initialCounter }} ريال</td>
                </tr>
              </template>
              </tbody>
              <tfoot>
                <tr>
                  <td>الاجمالي</td>
                  <td>{{ paymenCounter }}</td>
                  <td>--</td>
                  <td>{{totalAmount}} ريال</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button @click.prevent="submit()" style="width: 100%;margin-top:4px" class="rooms-button">
            تأكيد الحجز
          </button>
        </form>
      </div>
    </section>
    <footer>
      <h3>جميع الحقوق محفوظة ل <span>أميال سمارت</span></h3>
    </footer>
    <!-- <script src="counter.js"></script> -->
  </body>
</template>

<script>
export default {
  layout: [],
  data() {
    return {
      form: {
        reservation_time: "",
      },
    };
  },
  watch: {
    "$page.props.flash.message": {
      handler() {
        if (this.$page.props.flash.message) {
          toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toastr-top-left p-5",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          };
          let msg = this.$page.props.flash.message.msg;
          if (this.$page.props.flash.message.type === "success")
            toastr.success(msg);
          else if (this.$page.props.flash.message.type === "warning")
            toastr.warning(msg);
          else if (this.$page.props.flash.message.type === "error")
            toastr.error(msg);
          else toastr.info(msg);
        }
      },
      deep: true,
    },

    "form.reservation_time"(newValue) {
      // Triggered whenever the reservation_time changes
      if (newValue) {
        this.divideTimeIntoQuarters();
      }
    },
  },
  methods: {
    divideTimeIntoQuarters() {
      const timeParts = this.form.reservation_time.split(":"); // Split the time by colon
      const hours = parseInt(timeParts[0]); // Get the hours as an integer
      const minutes = parseInt(timeParts[1]); // Get the minutes as an integer

      // Calculate the number of quarter-hours from midnight
      const totalQuarters = hours * 4 + Math.floor(minutes / 15);

      // Calculate the new time with quarters of an hour
      const newHours = Math.floor(totalQuarters / 4); // Get the new hours
      const newMinutes = (totalQuarters % 4) * 15; // Get the new minutes

      // Update the reservation_time with the new time format
      this.form.reservation_time = `${newHours
        .toString()
        .padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}`;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { ref, useAttrs } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';


const attrs = useAttrs();

let props = defineProps({
  shop: Object,
  typeOccasions: Object,
  services: Object,
  empId: Object,
  appointmentsTimes: Object,
  shopSetting: Object,
  mobile: String,
  name: String,
  category: String,
});
let form = useForm({
  shop_id: props.shop.id,
  name: props.name,
  mobile: props.mobile,
  count_people: "1",
  reservation_time: "",
  reservation_date: new Date().toISOString().substr(0, 10),
  notes: "",
  type_occasion_id: "",
  table_type: "",
  service_id: "",
  casher_id: props.empId,
  getDataServices: [],
  paymenttype: "6"
});
let paymenCounter = 0;
let totalAmount = 0;
let getData = () => {
  console.log(form.reservation_date)
  axios.post('website/getData', { 'shopId': props.shop.id, 'people': form.count_people }).then((res) => {
    form.getDataServices = res.data.services;
    var section = document.getElementById("rooms-section");
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  })
};
let showPayment = () => {
  var section = document.getElementById("payment-section");
  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
}
let paymentShow = () => {
  paymenCounter++;
  let paymentButton = document.getElementById("payment-button");
  paymentButton.style.display = "flex";
}

let checkPaymentShow = () => {
  paymenCounter > 0 ? paymenCounter-- : false;
  if (paymenCounter == 0) {
    let paymentButton = document.getElementById("payment-button");
    paymentButton.style.display = "none";
  }
}

let submit = () => {
  form.post("/website/newForm", {
    onSuccess: (response) => {
      console.log(response);
      // window.location = response
    },
  });
};

const showTimePicker = ref(false);

const quarterHours = Array.from({ length: 96 }, (_, index) => {
  const hours = Math.floor(index / 4);
  const minutes = (index % 4) * 15;
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
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

<style>
#app {
  z-index: 0 !important;
}
</style>

<style scoped>
* {
  direction: rtl;
  font-family: "Somar", sans-serif !important;
}

/****************************************************/

.grid {
  display: flex;
  flex-wrap: wrap;
  grid-gap: var(--card-padding);
  width: 400px;
  margin: 0 auto;
  padding: 0;
}

.cardSelect {
  background-color: #fff;
  border-radius: var(--card-radius);
  position: relative;
}

.radio {
  font-size: inherit;
  margin: 0;
  position: absolute;
  opacity: 1;
  right: calc(var(--card-padding) + var(--radio-border-width));
  top: calc(var(--card-padding) + var(--radio-border-width));
}

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  .radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    height: var(--radio-size);
    outline: 1px solid rgba(0, 0, 0, 0.137);
    transition: background 0.2s ease-out, border-color 0.2s ease-out;
    width: var(--radio-size);
  }

  .radio::after {
    border: var(--radio-border-width) solid #fff;
    border-top: 0;
    border-left: 0;
    content: "";
    display: block;
    height: 0.75rem;
    left: 24%;
    position: absolute;
    top: 50%;
    transform: rotate(45deg) translate(-50%, -59%);
    width: 0.325rem;
  }

  .radio:checked {
    background: var(--color-green);
    opacity: 1;
    outline: none;
  }

  .cardSelect:hover .radio {
    border-color: var(--color-dark-gray);
  }

  .cardSelect:hover .radio:checked {
    border-color: var(--primary-dark-color);
  }
}

.payment-details {
  border: var(--radio-border-width) solid var(--color-gray);
  border-radius: var(--card-radius);
  cursor: pointer;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 100px;
  flex-direction: column;
  padding: var(--card-padding);
  transition: border-color 0.2s ease-out;
}

.reservation-image {
  width: 320px;
  height: 530px;
  object-fit: cover;
  border-radius: 40px;
}

.cardSelect:hover .payment-details {
  border-color: var(--color-dark-gray);
}

.radio:checked~.payment-details {
  border-color: var(--primary-dark-color);
  opacity: 1;
}

.radio:focus~.payment-details {
  box-shadow: 0 0 0 2px var(--color-dark-gray);
}

.radio:disabled~.payment-details {
  color: var(--color-dark-gray);
  cursor: default;
}

.radio:disabled~.payment-details .payment-type {
  color: var(--color-dark-gray);
}

.cardSelect:hover .radio:disabled~.payment-details {
  border-color: var(--color-gray);
  box-shadow: none;
}

.cardSelect:hover .radio:disabled {
  border-color: var(--color-gray);
}

.payment-type {
  color: var(--color-green);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1em;
}

.slash {
  font-weight: normal;
}

.payment-cycle {
  font-size: 2rem;
  font-variant: none;
  border-bottom: none;
  cursor: inherit;
  text-decoration: none;
}

.hidden-visually {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.form-field {
  display: block;

  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
}

.form-field::placeholder {
  color: var(--input-placeholder);
}

.form-field:focus {
  outline: none;
  border-color: var(--input-border-focus);
}

.form-group {
  position: relative;
  display: flex;
  width: 100%;
}

.form-group>span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}

.form-group>span:not(:first-child):not(:last-child),
.form-group .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.form-group>span:first-child,
.form-group .form-field:first-child {
  border-radius: 0px 6px 6px 0px;
}

.form-group>span:last-child,
.form-group .form-field:last-child {
  border-radius: 6px 0px 0px 6px;
}

.form-group>span:not(:first-child) {
  margin-left: -1px;
}

.form-group .form-field {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}

.form-group>span {
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: var(--group-color);
  border: 1px solid var(--group-border);
  border-right: 0px;
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}

.form-group:focus-within>span {
  border-color: var(--group-border-focus);
}

input {
  direction: rtl;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 80px;
}


.logo-left,
.logo-right {
  max-width: 100px;
}

.logo-left img,
.logo-right img {
  width: 100%;
  height: auto;
}

section {
  margin-top: 4rem;
  padding: 10px;
  padding: 20px 80px;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 350px;
  padding: 30px;
  border-radius: 10px;
}

.payment-form {
  max-width: 500px;
  background-color: white;
  padding: 30px 10px;
  border-radius: 10px;
  margin-top: 2rem;
  border: 1px solid #083a6933;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.flex {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.title {
  font-weight: 800;
  font-size: 20px;
  line-height: 15px;
  color: var(--primary-color);
}

.description {
  font-size: 12px;
  line-height: 15px;
  font-weight: 300;
  color: var(--description-color);
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5rem;
}

.flex-col-2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rooms-button {
  background-color: var(--primary-color);
  color: white;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
  border: none;
}

.impoortant {
  font-size: 10px;
  font-weight: 600;
  color: var(--primary-dark-color);
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.error {
  color: #ff6c6c;
  font-size: 8px;
}

.info-con {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #083a6933;
  background-color: #f3f3f34f;
}

.card {
  cursor: pointer;
  position: relative;
  max-width: 320px;
  min-width: 320px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  background: white;
}

.card img {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.card-image {
  height: 194px;
  width: 100%;
}

.info-container {
  padding: 10px 30px;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.info-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
}

.item-container img {
  width: 12px;
  border-radius: 0 !important;
}

.info-title {
  font-weight: 700;
  font-size: 16px;
  color: var(--text-color);
}

.info-price {
  font-weight: 600;
  color: var(--primary-color);
}

.detail-section {
  display: grid;
  grid-template-columns: repeat(2, auto);
}

.item-container {
  padding: 10px 0px;
  display: flex;
  gap: 5px;
}

.item-container p {
  font-size: 12px;
  font-weight: 400;
  color: var(--info-color);
}

footer {
  color: white;
  text-align: center;
  margin-top: 40px;

  margin-bottom: 20px;
  width: 100%;
}

footer h3 {
  font-weight: 600;
  color: var(--primary-dark-color);
}

footer span {
  color: var(--primary-color);
  font-weight: 700;
}

.flex-wrap {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

input,
select {
  padding: 10px;
  border-radius: 10px;
}

textarea {
  resize: none;
  margin-bottom: 4px;
}

.container {
  position: absolute;
  left: 10px;
  z-index: 10;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 33px;
}

#rooms-section {
  display: none;
}

#payment-section {
  display: none;
  align-items: center;
  justify-content: center;
}

#note-section {
  display: block;
  align-items: center !important;
  justify-content: center !important;
}

.counter {
  width: 20px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.increment-btn,
.decrement-btn {
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 1000;
  -webkit-border-radius: 50%;
  background-color: white;
  border: 2px solid white;
  color: #115da6;
}

.counter-value {
  height: 20px;
  width: 10px;
  font-weight: 600;
  border-radius: 10px;
  color: #115da6;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 100%;
}

.swiper-wrapper {
  cursor: grab;
}

#app {
  z-index: 999;
}

.table-show {
  border: 1px solid rgb(214, 214, 214);
  padding: 1rem;
  border-radius: 0.625rem;
}

.table-show tr {
  border-bottom: 1px solid rgb(214, 214, 214)
}
.table-show tfoot tr {
  color : rgb(44, 41, 106) !important;
  font-weight: 900 !important;
  border-top: 1px solid rgb(214, 214, 214)
}

.invoice{
  margin: inherit;
  margin-top: 10px;
  color: rgb(117, 117, 117);
  font-size: 1.5rem;
}

.table-show tbody td,
.table-show tfoot tr,
.table-show thead th {
  color: rgb(117, 117, 117);
  padding: 1.5rem 0.5rem;
  font-weight: 700;
}


@media (max-width: 820px){
  .table-responsive .table{
    width: 100% !important;
  }
  .payment-form {
    max-width: 380px;
  }
}
@media only screen and (max-width: 600px) {
  body {
    position: relative;
    z-index: -1;
  }
  .payment-form {
    max-width: 400px;
  }
  .table-responsive .table{
    width: 100%;
  }
  .flex-wrap {
    justify-content: center !important;
  }

  .reservation-image {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 101%;
    border-radius: 0;
    height: 280px;
    object-fit: cover;
  }

  header {
    justify-content: center;
  }

  .logo-right>img {
    width: 100px !important;
    height: 100px !important;
  }

  .header-section {
    flex-direction: column-reverse;
    gap: 15px;
    text-align: center;
  }

  section {
    padding: 0px;
  }

  .form {
    width: 100%;
    background: white;
    margin-top: 125px;
    border-radius: 24px;
  }

  .flex-col {
    width: 100%;
    text-align: center;
  }


  .grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: var(--card-padding);
    width: 100%;
    padding: 0;
  }

  .cardSelect {
    width: 100%;
  }

  header {
    padding: 15px;
  }

  .logo-left img,
  .logo-right img {
    width: 80%;
    height: auto;
  }
}

@media only screen and (max-width: 450px) {
  .card {
    width: 98%;
    max-width: 98%;
    min-width: 98%;
  }
  .table-responsive .table{
    width: 100%;
  }
  .swiper-wrapper {
    cursor: grab;
    width: 98%;
  }

  .card-image {
    width: 100%;
  }

  .swiper {
    widows: 102%;
  }

  .flex-wrap {
    margin: 1rem;
    width: 100%;

  }
}
</style>