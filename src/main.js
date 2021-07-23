import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/arya-blue/theme.css';  //saga-blue for light; arya- or vela-blue for dark 
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
