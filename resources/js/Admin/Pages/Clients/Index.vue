<template>
    <Head title="العملاء"/>
    <Layout :prv_page="[
        {'name' : 'العملاء'}
        ]">
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">العملاء</h3>
            </div>
            <div class="card-toolbar">
                <button type="button" id="btn-search" class="nav-link btn btn-sm  me-2" style="background-color: #115da6 ;color: #ffffff"  @click="toggle_search">بحث</button>
                <Link class="nav-link btn btn-sm  me-2"  style="background-color: #115da6 ;color: #ffffff" href="/admin/clients/create">إضافة</Link>
            </div>
        </div>
        <div class="card-body border-top p-9">
            <div id="search-box" style="display: none">
                <div class="row g-8 mb-8 align-items-end">
                    <div class="col-lg-3">
                        <label class="fs-6 form-label fw-bolder text-dark">الاسم</label>
                        <input type="text" class="form-control form-control-solid" v-model="name">
                    </div>
                    <div class="col-lg-3">
                        <button type="button" class="btn w-100 btn-icon  " style="background-color: #115da6 ;color: #ffffff"  @click="do_search">
                            <i class="las la-search fs-2 me-2"></i> بحث
                        </button>
                    </div>
                </div>
                <div class="separator separator-dashed mt-9 mb-6"></div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-rounded table-row-bordered border gy-3 gs-3">
                    <thead>
                    <tr class="fw-bolder fs-6 text-gray-800 border-bottom-2 border-gray-200 bg-light">
                        <th class="p-5 text-center border">#</th>
                        <th class="p-5 text-center border">ايقون</th>
                        <th class="p-5 text-center border">###</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in services.data" :key="item.id" :class="{'table-active': index % 2 !== 0 }">
                        <td class="text-center border">{{ ++index}}</td>
                        <td class="text-center border"><img :src="item.icon_url ?? '/assets/media/logos/01.png'" style="max-width: 75px;border-radius: 5px;"></td>
                        <td class="text-center border">
                            <!-- <Link :href="`/admin/services/${item.id}/edit`"  >
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#115da6" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "/>
                                        <path style="color:#73e14e" d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#115da6" fill-rule="nonzero" opacity="0.3"/>
                                    </g>
                                </svg>
                            </Link> -->
                            <Link   @click="delete_shop(item.id)" >
                                <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z" fill="#115da6" fill-rule="nonzero"/>
                                        <path d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#115da6" opacity="0.3"/>
                                    </g>
                                </svg>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Pagination :links="services.links" />
        </div>
    </div>
    </Layout>

</template>

<script setup>
import Pagination from "../../Shared/Pagination";
import {Inertia} from "@inertiajs/inertia";
import {ref, useAttrs} from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import Layout from "../../Shared/Layout";

const attrs = useAttrs();



let props = defineProps({
    services: Object,
    filters: Object,
});
let form = useForm({

});

let name = ref(props.filters.name);

let toggle_search = function () {
    $('#search-box').toggle(1000);
    let v_button = $('#btn-search');
    v_button.text() ===  'بحث' ? v_button.text('اخفاء الفلاتر') : v_button.text('بحث');
}

let do_search = function () {
    Inertia.get('/admin/services', {
        name: name.value,
    }, {
        preserveState: true,
        replace: true,
        preserveScroll: true,
    });
}


let delete_shop = (id) => {
    console.log(id)
    Swal.fire({
        title: 'هل أنت متأكد من الحذف؟',
        text:  "لا يمكن التراجع عن هذه العملية!",
        icon: 'warning',
        iconColor: '#115da6',
        showCancelButton: true,
        confirmButtonColor: '#115da6',
        cancelButtonColor: '#72808b',
        cancelButtonText: 'الغاء',
        confirmButtonText: 'موافق',
        backdrop: 'static',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            form.delete('/admin/clients/'+ id , { preserveState: true,
                replace: true,
                preserveScroll: true,})

        }
    });
}

</script>

<style scoped>

</style>
