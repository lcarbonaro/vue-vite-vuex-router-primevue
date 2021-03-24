import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router);
app.use(store);

app.use(PrimeVue);
app.component('Button',Button);
app.component('InputText',InputText);

app.mount('#app');
