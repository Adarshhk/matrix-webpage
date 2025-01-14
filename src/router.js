import { createRouter, createWebHistory } from 'vue-router'
import Home from './home/Home.vue';
import Scalper from './scalper/src/Scalper.vue';
import Trader from './traders/src/Trader.vue';
import Screener from './screener/src/Screener.vue';
import Investor from './investor/src/Investor.vue';
import Webhook from './webhook/Webhook.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/scalper', component: Scalper },
  { path: '/trader', component: Trader },
  { path: '/screener', component: Screener },
  { path: '/investor', component: Investor },
  { path : '/webhook' , component : Webhook}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;