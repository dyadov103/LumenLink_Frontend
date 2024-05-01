import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Chart from 'primevue/chart';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue);
app.component('Chart', Chart);
app.mount('#app')