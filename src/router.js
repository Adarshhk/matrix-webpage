import { createRouter, createWebHistory } from 'vue-router'
import Home from './home/Home.vue';
import Scalper from './scalper/src/Scalper.vue';
import Trader from './traders/src/Trader.vue';
import Screener from './screener2/Screener.vue';
import Investor from './investor/src/Investor.vue';
import Webhook from './webhook/Webhook.vue';
import Blogs from './blogs/Blogs.vue';
import About from './aboutus/About.vue';
import Indicators from './indicators/Indicators.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/scalper', component: Scalper },
  { path: '/trader', component: Trader },
  { path: '/screener', component: Screener },
  { path: '/investor', component: Investor },
  { path : '/webhook' , component : Webhook},
  { path : '/about' , component : About},
  { path : '/blogs' , component : Blogs},
  { path : '/indicator' , component : Indicators}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
})

export default router;