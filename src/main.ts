// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './output.css'
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
