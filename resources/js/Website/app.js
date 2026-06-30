import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initSeo } from './composables/useSeo';
import '../../css/website.css';

const app = createApp(App);

app.use(router);
initSeo(router);
app.mount('#app');
