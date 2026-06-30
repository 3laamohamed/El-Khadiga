import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import CloseModal from './Shared/CloseModal';
import Layout from "./Shared/Layout";
import Select2 from 'vue3-select2-component';
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        // if(page.layout === undefined) {
        //     page.layout = Layout;
        // }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use( CKEditor )
            .component('VueDatePicker', VueDatePicker)
            .component('Link', Link)
            .component('Head', Head)
            .component('CloseModal', CloseModal)
            .component('Select2', Select2)
            .mount(el)
    },
    //title: title => "EasyFood - " + title
});

InertiaProgress.init({
    color: '#115da6',
    showSpinner: true,
});
