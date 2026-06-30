<template>
    <Head title="Change Password" />
    <Layout :prv_page="[{ name: 'Change Password' }]">
    <div class="card mb-5 mb-xl-10">
        <div class="card-header border-0 cursor-pointer">
            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">Change Password</h3>
            </div>
        </div>
        <form @submit.prevent="submit" class="form">
            <div class="card-body border-top p-9">
                <div class="row g-8 mb-8">
                    <label class="fs-6 form-label fw-bolder text-dark">Current Password</label>
                    <input type="password" class="form-control" v-model="form.old_password" required>
                    <div v-if="form.errors.old_password" v-text="form.errors.old_password" class="text-danger text-xs mt-1"></div>
                </div>
                <div class="row g-8 mb-8">
                    <label class="fs-6 form-label fw-bolder text-dark">New Password</label>
                    <input type="password" class="form-control" v-model="form.new_password" required>
                    <div v-if="form.errors.new_password" v-text="form.errors.new_password" class="text-danger text-xs mt-1"></div>
                </div>
                <div class="row g-8 mb-8">
                    <label class="fs-6 form-label fw-bolder text-dark">Confirm New Password</label>
                    <input type="password" class="form-control" v-model="form.new_password_confirmation" required>
                    <div v-if="form.errors.new_password_confirmation" v-text="form.errors.new_password_confirmation" class="text-danger text-xs mt-1"></div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn w-30" style="background-color: #115da6; color: #ffffff" :disabled="form.processing">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    </Layout>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import Layout from "../../Shared/Layout";

let form = useForm({
    old_password: '',
    new_password: '',
    new_password_confirmation: '',
    status: 1,
});

let submit = () => {
    form.post('/admin/change-password');
};
</script>
