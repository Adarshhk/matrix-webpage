import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'swiper/css';

import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import Vue3Marquee from 'vue3-marquee'
import router from './router';


const pinia = createPinia();

createApp(App).use(pinia).use(router).use(Vue3Marquee).mount('#app')
