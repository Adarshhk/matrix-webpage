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
import ManualTrade from './manualtrade/ManualTrade.vue';
import Contact from './component/Contact.vue';
import AlgoTrading from './algotrading/AlgoTrading.vue';
import Pricing from './pricing3/Pricing.vue';
import BlogDetails from './blog details/BlogDetails.vue';
import Signals from './signals/Signals.vue';
import Webinar from './webinar/Webinar.vue';
import Demo from './demo/Demo.vue';
import IndicatorDetails from './indicatordetails/IndicatorDetails.vue';
import TermsLayout from './termsandcondition/termsandcondition/TermsLayout.vue';
import Disclosure from './termsandcondition/termsandcondition/disclosure/Disclosure.vue';
import TermsandCondition from './termsandcondition/termsandcondition/t&c/TermsandCondition.vue';
import ComplainBoard from './component/ComplainBoard.vue';
import Disclaimer from './termsandcondition/termsandcondition/disclaimer/Disclaimer.vue';
import RefundPolicy from './termsandcondition/termsandcondition/refundpolicy/RefundPolicy.vue';
import PrivacyPolicy from './termsandcondition/termsandcondition/privacypolicy/PrivacyPolicy.vue';

import InvestorCharter from './termsandcondition/termsandcondition/InvestorCharter.vue';
import HomeLayout from './HomeLayout.vue';
import Main from './matrix-one/Main.vue';

const routes = [
  {path : '/' , component : HomeLayout , 
    children : [
      { path: '/', component: Home },
      { path: '/scalper', component: Scalper },
      { path: '/trader', component: Trader },
      { path: '/screener', component: Screener },
      { path: '/investor', component: Investor },
      { path: '/webhook', component: Webhook },
      { path: '/about', component: About },
      { path: '/blogs', component: Blogs },
      { path: '/indicator', component: Indicators },
      { path: '/manualtrade', component: ManualTrade },
      { path: '/contact', component: Contact },
      { path: '/algo-trading', component: AlgoTrading },
      { path: '/pricing', component: Pricing },
      { path: '/blog-details/:id', component: BlogDetails },
      { path: '/signals', component: Signals },
      { path: '/webinar', component: Webinar },
      { path: '/demo', component: Demo },
      { path: '/indicator-details/:id', component: IndicatorDetails },
      { path: '/complain-board', component: ComplainBoard },
      {
        path: '/terms',
        component: TermsLayout,
        children: [
          { path: 'disclosure', component: Disclosure },
          { path: 't&c', component: TermsandCondition },
          { path: 'disclaimer', component: Disclaimer },
          { path: 'refund-policy', component: RefundPolicy },
          { path: 'privacy-policy', component: PrivacyPolicy },
          { path: 'investor-charter', component: InvestorCharter },
        ]
      },
    ]
  },
  {
    path : '/matrix-one' , component : Main
  }
  
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