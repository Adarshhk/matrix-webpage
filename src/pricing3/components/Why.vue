<template>
  <div class="min-h-screen mt-24 font-openSans  overflow-x-hidden ">


    <!-- <Breadcrumb :items="[{
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Pricing',
      disabled: false,
      href: '/pricing'
    },
    ]" /> -->

    <div class=" py-20 ">


      <div class="font-CabinetGrotesk">
        <div class="grid-background hidden lg:block ">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
        </div>
        <div class="text-white">
          <h1 class="font-extrabold text-[35px] md:text-[47px] text-center leading-tight">Choose the Plan That Fits Your <br />
            Trading
            Goals</h1>


          <div class="flex items-center justify-center gap-4 mt-4 ">
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="sm-text text-center text-[#dfdfdf]">Reach us 24x7</p>
            </div>
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="sm-text text-center text-[#dfdfdf]">Secure & Fast Execution</p>
            </div>
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="sm-text text-center text-[#dfdfdf]">Customizable Plans</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1360px] mx-auto lg:px-4 relative">
      <!-- Matrix Toggle -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-[22px] w-full max-w-fit">
        <div class=" rounded-full p-1 inline-flex">
          <button v-for="plan in ['Matrix ONE', 'Matrix EDGE', 'Matrix ALGO']" :key="plan" :class="[
            'px-6 py-2 font-openSans text-[16px] rounded-full transition-all whitespace-nowrap text-sm md:text-base',
            selectedPlan === plan ? 'bg-[#00B852] text-white' : 'text-gray-400',
          ]" @click="changeActive(plan)">
            {{ plan }}
          </button>
        </div>
      </div>

      <!-- Header Section -->
      <div class="pt-16">
        <div class="flex justify-between items-start">
          <!-- <img src="/src/assets/img/matrix-one.png" alt="Matrix Logo" class="h-8 md:h-12" /> -->
          <!-- <img src="/src/assets/svg/savemore.svg" alt="Save up to 24%" class="w-24 md:w-36 hidden md:flex" /> -->
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">

          <img v-if="selectedPlan === 'Matrix ONE'" src="/src/assets/img/matrix-one.png" alt="Matrix Logo"
            class="h-8 md:h-12" />
          <img v-if="selectedPlan === 'Matrix ALGO'" src="/src/assets/img/ALGO.png" alt="Matrix Logo"
            class="h-8 md:h-12" />
          <img v-if="selectedPlan === 'Matrix EDGE'" src="/src/assets/img/EDGE.png" alt="Matrix Logo"
            class="h-8 md:h-12" />
            
            <div class="bg-[#1d2125] rounded-full inline-flex z-30">
              <button 
                v-for="period in getBillingPeriods(selectedPlan)" 
                :key="period" 
                :disabled="selectedPlan === 'Matrix ONE'" 
                :class="[
                  'capitalize px-4 font-openSans text-[16px] md:px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm md:text-base min-w-[80px] md:min-w-[80px]',
                  billingPeriod === period ? 'bg-[#00B852] text-[#dfdfdf]' : 'text-gray-400'
                ]" 
                @click="setBillingPeriod(period)"
              >
                {{ billingPeriodLabels[period] || period }}
              </button>
            </div>
        </div>
        
      </div>

      <!-- Matrix ONE Layout -->
      <div v-if="selectedPlan === 'Matrix ONE'" class="mt-12">
        <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div>
            <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">
              <!-- Freebie -->
              {{ findProductDesc(matrixOneData) }}
              {{ matrixOneData?.product_name }}
            </h3>
            <p class="text-gray-400 text-[16px] mb-4">
              For Pro Traders: Full-Power, High-Performance Trading.
            </p>

            <!-- <div v-if="matrixOneData?.timely_price && matrixOneData?.timely_price[billingPeriod]" class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              <span  class="text-[#00B852] text-xs">Get {{ findPercentage(matrixOneData?.timely_price[billingPeriod]?.offer_price, matrixOneData?.timely_price[billingPeriod]?.price) }}% off</span>
              <span class="text-[#dfdfdf] text-xs ml-1">when billed Yearly</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span v-if="billingPeriod && matrixOneData?.timely_price && matrixOneData?.timely_price[billingPeriod]" class="text-4xl font-bold text-[#dfdfdf]">
                ₹{{ matrixOneData?.timely_price[billingPeriod]?.price }}
              </span>
              <span v-else class="text-4xl font-bold text-[#dfdfdf]">₹ _</span>

              <span class="text-gray-400 ml-2 text-sm">/ Month</span>
            </div> -->

            <!-- Only show Yearly price -->
            <div v-if="matrixOneData?.timely_price?.yearly" class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              <span class="text-[#00B852] text-xs">
                Get {{ findPercentage(matrixOneData?.timely_price.yearly?.offer_price, matrixOneData?.timely_price.yearly?.price) }}% off
              </span>
              <span class="text-[#dfdfdf] text-xs ml-1">when billed Yearly</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span v-if="matrixOneData?.timely_price?.yearly?.price" class="flex items-center gap-2">
                    <span class="text-[14px] font-semibold line-through text-white">
                      ₹{{ matrixOneData?.timely_price?.yearly?.price.toLocaleString("en-IN") }}
                    </span>
                    <span class="text-4xl font-bold text-[#dfdfdf]">₹{{ matrixOneData?.timely_price?.yearly?.offer_price.toLocaleString("en-IN") }}</span>
                  </span>
              <span v-else class="text-4xl font-bold text-[#dfdfdf]">₹ _</span>
              <span class="text-gray-400 ml-2 text-sm">/ Year</span>
            </div>

            <div class="">
              <button 
              v-if="isPurchased(matrixOneData.product_id)"  
              class="w-[60%] py-2 rounded-lg mb-8 bg-gray-500 text-[#272727] cursor-not-allowed">
             Already Purchased
            </button>

            <button v-else @click="AddtoCart(matrixOneData)" class="w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all">
              Buy Now
            </button>
            </div>
          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              What's in it
            </h3>

            <ul v-if="productDescData[matrixOneData?.product_id]" class="space-y-4 ">
              <!-- features.column1 -->
              <li v-for="(feature, i) in productDescData[matrixOneData?.product_id]" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
          </div>

          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Products Included
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li v-for="(feature, i) in features.column2" :key="i" class="">
                <img v-if="i == 0" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 1" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 2" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 3" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 4" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 5" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Default Layout for EDGE  -->
      <div v-if="selectedPlan === 'Matrix EDGE'" class="mt-12 ">
        <div class="bg-[#1d2125] rounded-lg p-4 xl:p-6 gap-2 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div class="">
            <div class="">
              <h3 class="text-white text-[20px] font-bold mb-4">
                Featured Products
              </h3>
            </div>

            <!-- plan list -->
            <div class="flex flex-col justify-evenly gap-4 cursor-pointer">
              <div v-if="Object.keys(matrixEdgeData).length" v-for="(category, index) in Object.keys(matrixEdgeData)" 
                :key="index" 
                @click="(category === 'signals' || category === 'manual') ? null : changePlan(category, findCheapestProduct(matrixEdgeData[category].items))"
                class="relative flex justify-between items-end gap-3 rounded py-2 px-4 pt-8 border transition-all duration-100 min-h-[80px]"
                :class="[
                  (category === 'signals' || category === 'manual') ? 'cursor-not-allowed opacity-50' : '',
                  matrixEdgeData[category].is_recommended 
                    ? activePlan.name === category 
                      ? 'border-[#FFEB00] bg-[#FFEB0022]' 
                      : 'border-[#ffffff22]' 
                    : activePlan.name === category 
                      ? '' 
                      : 'border-[#ffffff22]']"
              >
                
                <!-- Category Name & Recommendation Badge -->
                <div class="flex items-center gap-2">
                  <div class="flex flex-col items-start">
                    <h3 class="capitalize text-white md-text xl:text-[20px] font-bold">{{ category }}</h3>
                    <div v-if="matrixEdgeData[category].is_recommended" class="bg-[#FFEB00] top-0 left-2 rounded-b absolute px-2">
                      <span class="text-xs uppercase font-extrabold">Top Selling</span>
                    </div>
                  </div>
                </div>

                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[14px] text-[#ffffff55] font-bold">Starting from</p>
                  <p class="md-text xl:text-[22px] font-bold text-white">
                    <span v-if="category === 'indicator'">₹3,000</span>
                    <span v-else-if="category === 'signals' || category === 'manual'">Coming Soon</span>
                    <span v-else-if="category === 'screener'">Free</span>
                    <!-- <span v-else class="text-white">₹{{ findCheapestProduct(matrixEdgeData[category].items)?.offer_price || 'N/A' }}</span> -->
                    <span v-else class="text-white">
                    <span v-if="findCheapestProduct(matrixEdgeData[category].items)">
                      
                      <!-- Show "Product not available" if price is 0 -->
                      <span class="md-text xl:text-[22px]" v-if="Number(findCheapestProduct(matrixEdgeData[category].items)?.price) === 0">
                        Product not available
                      </span>

                      <!-- Show only the price if offer_price is missing -->
                      <span v-else-if="!findCheapestProduct(matrixEdgeData[category].items)?.offer_price">
                        ₹{{ findCheapestProduct(matrixEdgeData[category].items)?.price }}
                      </span>

                      <!-- Show Original & Offer Price Side by Side -->
                      <span v-else class="flex items-center gap-2">
                        <span class="text-[14px] font-semibold line-through">
                          ₹{{ findCheapestProduct(matrixEdgeData[category].items)?.price }}
                        </span>
                        ₹{{ findCheapestProduct(matrixEdgeData[category].items)?.offer_price }}
                      </span>

                    </span>
                  </span>

                  </p>
                </div>
              </div>
            </div>



          </div>

          <div class="col-span-2 lg:px-4 lg:border-l border-[#ffffff22] mx-2">
            <SignalPlan v-if="activePlan.name === 'signals'" :data="categorizeBy(matrixEdgeData[activePlan.name].items, 'title', 'is_recommended')" :billingPeriod="billingPeriod" :addToCart="AddtoCart" />
            <ScreenerPlan :data="matrixEdgeData[activePlan.name].items" v-else-if="activePlan.name === 'screener'" />
            <WebhookPlan v-else-if="activePlan.name === 'webhook' || activePlan.name === 'manual'" :data="matrixEdgeData[activePlan.name].items" :billingPeriod="billingPeriod" :addToCart="AddtoCart"  />
            <IndicatorPlan :data="matrixEdgeData[activePlan.name].items" v-else-if="activePlan.name === 'indicator'"/>
            <WebhookPlan v-else :data="matrixEdgeData[activePlan.name].items" :billingPeriod="billingPeriod" :addToCart="AddtoCart"  />
          </div>


        </div>
      </div>

      <!-- Default Layout for ALGO -->

      <div v-if="selectedPlan === 'Matrix ALGO'" class="mt-12 ">
        <div class="bg-[#1d2125] rounded-lg p-4 xl:p-6 gap-2 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div class="">
            <div class="">
              <h3 class="text-white text-[20px] font-bold mb-4">
                Featured Products
              </h3>
            </div>

            <!-- plan list -->
            <div class="flex flex-col justify-evenly gap-4 ">


            <div v-if="matrixAlgoData.length" v-for="(category, index) in matrixAlgoData" 
                :key="index" 
                @click="changeMatrixAlgoPlans(category)"
                class="relative flex justify-between items-end gap-3 rounded p-2 pt-8 border cursor-pointer"
                :class="[
                  category.is_recommended 
                    ? (matrixActivePlan.product_name === category.product_name 
                        ? 'border-[#FFEB00] bg-[#FFEB0022]' 
                        : 'border-[#ffffff22]') 
                    : (matrixActivePlan.product_name === category.product_name ? '' : 'border-[#ffffff22]'), 
                  isPlanAvailable(category) === 'no-plans' ? 'hidden' : '' 
                ]">
              
              <!-- Radio div and Indicator Section -->
              <div class="flex items-center gap-2">
                <div class="flex flex-col items-start">
                  <h3 class="text-white md-text xl:text-[20px] font-bold">{{ category.product_name }}</h3>
                  <div v-if="category.is_recommended" class="bg-[#FFEB00] top-0 left-2 rounded-b absolute px-2">
                    <span class="text-xs uppercase font-extrabold">Top Selling</span>
                  </div>
                </div>
              </div>

              <!-- Pricing Section -->
              <div v-if="category.timely_price && category.timely_price[billingPeriod]" 
                class="flex flex-col items-end">
                
                <p class="text-[14px] text-[#ffffff55] font-bold">Starting From</p>
                
                <p class="md:md-text xl:text-[22px] font-bold text-white">
                  <!-- Show "Product not available" if price is <= 0 -->
                  <span v-if="!category.timely_price[billingPeriod].price || category.timely_price[billingPeriod].price <= 0">
                    Product not available
                  </span>

                  <!-- Show only the price if offer_price is missing or <= 0 -->
                  <span v-else-if="!category.timely_price[billingPeriod].offer_price || category.timely_price[billingPeriod].offer_price <= 0">
                    ₹{{ category.timely_price[billingPeriod].price.toLocaleString("en-IN") }}
                  </span>

                  <!-- Show Original & Offer Price Side by Side -->
                  <span v-else class="flex items-center gap-2">
                    <span class="text-[14px] font-semibold line-through">
                      ₹{{ category.timely_price[billingPeriod].price.toLocaleString("en-IN") }}
                    </span>
                    <span class="text-white">
                      ₹{{ category.timely_price[billingPeriod].offer_price.toLocaleString("en-IN") }}
                    </span>
                  </span>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div class="col-span-2 px-4 lg:border-l border-[#ffffff22] mx-2">

            <div class="w-full my-4">
              <h3 class="text-white text-xl font-bold mb-4">
                  Whats For You
              </h3>

              <ul v-if="productDescData[matrixAlgoProduct?.product_id]" class="space-y-4">
              <!-- features.column1 -->
              <li v-for="(feature, i) in productDescData[matrixAlgoProduct?.product_id]" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
              <div>
              <!-- Already Purchased Button -->
              <button 
                v-if="isPurchased(matrixActivePlan.product_id)"  
                class="text-[#ffffff66] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150 cursor-not-allowed">
                Already Purchased
              </button>

              <!-- Add to Cart Button (Disabled if product is not available) -->
              <button 
                v-else 
                @click="addMatrixAlgoProduct(matrixActivePlan)"
                :disabled="!matrixActivePlan.timely_price || !matrixActivePlan.timely_price[billingPeriod] || matrixActivePlan.timely_price[billingPeriod].price <= 0"
                class="text-[#272727] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 transition-all duration-150"
                :class="{
                  'cursor-not-allowed opacity-50 bg-gray-500': !matrixActivePlan.timely_price || !matrixActivePlan.timely_price[billingPeriod] || matrixActivePlan.timely_price[billingPeriod].price <= 0, 
                  'hover:bg-[#ffffff11]': matrixActivePlan.timely_price && matrixActivePlan.timely_price[billingPeriod] && matrixActivePlan.timely_price[billingPeriod].price > 0
                }"
              >
                <img src="/src/assets/svg/add.svg" alt="" class="w-4">
                <p class="font-openSans text-white">Add To Cart</p>
              </button>
            </div>

              <hr class="border-[#ffffff22] my-8" />

                <div v-if="matrixAlgoProduct.product_name === 'Evaluation' || matrixAlgoProduct.product_name === 'Elite'" class="">
                <h3 class="text-white text-xl font-bold mb-4">
                    Free For You*
                </h3>
                <ul class="flex flex-wrap gap-4">
                    <li>
                        <Tippy content_title="Screener with partail access"
                            content_desc="Note : This is a premium feature, you will get partial access."
                            class="bg-[#272b2f] text-white p-2 rounded-lg">
                            <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                        </Tippy>
                    </li>
                    <li>
                        <Tippy content_title="Indicator with partail access"
                            content_desc="Note : This is a premium feature, you will get partial access."
                            class="bg-[#272b2f] text-white p-2 rounded-lg">
                            <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                        </Tippy>
                    </li>
                    <li v-if="matrixAlgoProduct.product_name === 'Elite'">
                        <Tippy content_title="Webhook with partail access"
                            content_desc="Note : This is a premium feature, you will get partial access."
                            class="bg-[#272b2f] text-white p-2 rounded-lg">
                            <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                        </Tippy>
                    </li>
                </ul>
              </div>
            </div>
            <!-- <Essential v-if="activePlan.name === 'essential'" />
            <Evaluation v-if="activePlan.name === 'evaluation'" />
            <HNI v-if="activePlan.name === 'hni'" /> -->
            <Elite v-if="activePlan.name === 'elite'" />
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed, watchEffect } from "vue";

import SignalPlan from "./Plans/SignalPlan.vue";
import Elite from "./Plans/Elite.vue";
import ScreenerPlan from "./Plans/ScreenerPlan.vue";
import WebhookPlan from "./Plans/WebhookPlan.vue";
import IndicatorPlan from "./Plans/IndicatorPlan.vue";
import useProductsStore from '../../store/subscription';
import Tippy from '../components/Tippy.vue';

import { useStrategiesStore } from '../../store/strategies';
const strategiesStore = useStrategiesStore();
const subscriptionStore = useProductsStore()

const { products, billingPeriod } = storeToRefs(strategiesStore);
const {subscription} = storeToRefs(subscriptionStore)
const {isPurchased} = subscriptionStore


const props = defineProps({
  addToCart: Function,
  cart: Array,
  isInCart: Function,
  setBillingPeriod: Function,
  removeFromCart: Function
})


const allSelectedProduct = ref([])  

const productDescData = ref({})
const selectedPlan = ref("Matrix ONE");
const categories = ref([])

const activePlan = ref({ name: 'webhook', price: 0 });

const changePlan = (name, price) => {

  activePlan.value.name = name;
  activePlan.value.price = price;
}


const features = {
  column1: [
    { text: "20,000+ of PNG & SVG graphics", active: true },
    { text: "Switch or cancel anytime", active: true },
    { text: "Scalable plans for beginners to pros", active: true },
    { text: "Advanced analytics tools", active: false },
    { text: "Custom integrations", active: false },
    { text: "Priority support", active: false },
  ],
  column2: [
    { text: "Real-time market data", active: true },
    { text: "Multi-device sync", active: true },
    { text: "API access", active: true },
    { text: "White-label solutions", active: false },
    { text: "Dedicated account manager", active: false },
    { text: "Custom reporting", active: false },
  ],
};


const AddtoCart = (item) => { 
  props.addToCart(item)
}

const changeActive = (plan) => {
  selectedPlan.value = plan

  if (selectedPlan.value === 'Matrix ALGO') {
    activePlan.value.name = 'essential'
  }
  else if (selectedPlan.value === 'Matrix EDGE') {
    activePlan.value.name = 'screener' // Set screener as default for Matrix EDGE
  }
  else {
    activePlan.value.name = 'signals'
  }
}


function categorizeBy(data=[], categoryKey='', recommendationKey='') {
  if(!data || data.length === 0) {
    return {}
  }
  const categorized = {};

  for (const item of data) {
    const categoryName = item[categoryKey];
    const isRecommended = item[recommendationKey] || false;

    if (!categorized[categoryName]) {
      categorized[categoryName] = {
        items: [], 
        is_recommended: isRecommended 
      };
    }

    categorized[categoryName].items.push(item);
  }

  const sortedCategories = Object.entries(categorized).sort(([, a], [, b]) => {
        const aRecommended = a.is_recommended || false;
        const bRecommended = b.is_recommended || false;
        return bRecommended - aRecommended; // Sort true before false
      }).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});


  return sortedCategories;
}

// 🔹 CHANGED: Function to check if a plan is available
const isPlanAvailable = (category) => {
  if (!category?.timely_price) return 'no-plans';

  const prices = [
    category.timely_price.monthly?.offer_price,
    category.timely_price.quarterly?.offer_price,
    category.timely_price.half_yearly?.offer_price,
    category.timely_price.yearly?.offer_price,
    category.timely_price.lifetime?.offer_price
  ];

  if (prices.every(price => price === "" || price === undefined)) return 'no-plans';
  if (prices.some(price => price === 0)) return 'free'; // ✅ Fix: Show "Free" when any offer_price is 0

  return 'available';
};

const billingPeriodLabels = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  half_yearly: "Half Yearly",
  yearly: "Yearly",
};

const getBillingPeriods = (plan) => {
  if (plan === "Matrix ONE" || plan === 'Matrix ALGO') {
    return ["yearly"];
  } else if (plan === "Matrix ALGO" || plan === "Matrix EDGE") {
    return ["quarterly","half_yearly", "yearly"];
  }
  return ["monthly", "quarterly", "half_yearly", "yearly"]; // Default fallback
};



// function findCheapestProduct(data=[]) {
//   if (!data || data.length === 0 || !billingPeriod.value) {
//     return 0; 
//   }

//   let cheapestProduct = data.reduce((cheapest, current) => {
//     let currentTimelyPrice = current['timely_price'][billingPeriod.value] || {}
//     let cheapestTimelyPrice = cheapest['timely_price'][billingPeriod.value] || {}
//     if (currentTimelyPrice.offer_price === undefined) {
//         return cheapest;
//     }
//     return currentTimelyPrice.offer_price < cheapestTimelyPrice.offer_price ? current : cheapest;
//   });

//   let offerPriceData = cheapestProduct.timely_price[billingPeriod.value] || 0
//   if(!offerPriceData.offer_price) {
//     return offerPriceData.price
//   }
//   return offerPriceData.offer_price || 0
// }

function findCheapestProduct(data = []) {
  if (!data || data.length === 0 || !billingPeriod.value) {
    return { price: 0, offer_price: 0 }; 
  }

  let cheapestProduct = data.reduce((cheapest, current) => {
    let currentTimelyPrice = current.timely_price?.[billingPeriod.value] || {};
    let cheapestTimelyPrice = cheapest.timely_price?.[billingPeriod.value] || {};
    
    if (currentTimelyPrice.offer_price === undefined) {
      return cheapest;
    }

    return currentTimelyPrice.offer_price < cheapestTimelyPrice.offer_price ? current : cheapest;
  });

  let offerPriceData = cheapestProduct.timely_price?.[billingPeriod.value] || {};
  
  return {
    price: offerPriceData.price || 0,
    offer_price: offerPriceData.offer_price || 0
  };
}




watchEffect(() => { 
  let data = products.value || []
  if(data.length) {
    let temp = data.filter(item => item.base_category_name === selectedPlan.value) || []
    categories.value = temp
  }
})

const matrixAlgoProduct = ref({})
const matrixActivePlan = ref({})

// 🔹 CHANGED: Updated function to track plan selection
const changeMatrixAlgoPlans = (category) => {
  findProductDesc(category);
  matrixAlgoProduct.value = category;
  matrixActivePlan.value = category;
};

// 🔹 CHANGED: Now updates categories dynamically
watchEffect(() => {
  let data = products.value || [];
  if (data.length) {
    let temp = data.filter(item => item.base_category_name === selectedPlan.value) || [];
    categories.value = temp;
  }
});

const matrixOneData = computed(() => {
  let data = categories.value || []
  // console.log("print data", data)
  if(data.length) {
    return data[0] || {}
  }
  return {}
})


const matrixEdgeData = computed(() => {
  let data = categories.value || []
  let groupedData = categorizeBy(data, "category_name", "category_is_recommended")
  
  // Only set default activePlan if it's not Matrix EDGE or if activePlan.name is not already set
  if(data.length && data[0].base_category_name === selectedPlan.value && 
     selectedPlan.value !== 'Matrix EDGE') {
    activePlan.value.name = Object.keys(groupedData)[0]
  }
  
  return groupedData || {}
})


// 🔹 CHANGED: Sort plans by recommendation priority
const matrixAlgoData = computed(() => {
  let data = categories.value || [];
  data.sort((a, b) => b.is_recommended - a.is_recommended);
  if (data.length && data[0].base_category_name === selectedPlan.value) {
    matrixAlgoProduct.value = data[0];
    matrixActivePlan.value = data[0];
    findProductDesc(data[0]);
  }
  return data || [];
});


const previousSelectedData  =ref({})

// 🔹 CHANGED: Ensure only one plan is selected at a time
const addMatrixAlgoProduct = (item) => {
  // Check if any Matrix ALGO product exists in the cart
  const existingMatrixAlgoProduct = props.cart.find(
    (cartItem) => matrixAlgoData.value.some((algoItem) => algoItem.product_id === cartItem.product_id)
  );

  // If an existing Matrix ALGO product is found, remove it
  if (existingMatrixAlgoProduct) {
    props.removeFromCart(existingMatrixAlgoProduct);
  }

  // Add the new Matrix ALGO product to the cart
  props.addToCart(item);

  // Update the active plan
  matrixActivePlan.value = item;
};



// 🔹 CHANGED: Parse product descriptions safely
const findProductDesc = (data = {}) => {
  try {
    let parsedData = JSON.parse(data.description || '[]');
    parsedData = typeof parsedData === 'object' ? parsedData : {};
    productDescData.value[data.product_id] = parsedData;
  } catch (e) {
    productDescData.value[data.product_id] = {};
  }
};

const findPercentage  = (offerPrice=0, price=0) => {
    if(offerPrice && price) {
        let percentage = (((price - offerPrice) / price) * 100)
        return percentage ? percentage.toFixed(2) : 0
    }
    return 0
}


// const isPurchased = (planName) => {
//   const subscriptions = subscriptionStore.subscriptions || []; // Default to empty array

//   return Array.isArray(subscriptions) && subscriptions.some(sub => {
//     const baseCategory = (sub.category_name || "").trim().toLowerCase(); // Convert to lowercase
//     const paymentStatus = (sub.payment_status || "").toUpperCase(); // Convert to uppercase

//     return baseCategory === planName.toLowerCase() && paymentStatus === "COMPLETE";
//   });
// };


</script>

<style>
.grid-background {
  display: none;
  /* Default: hide the grid on all screen sizes */
}

@media (min-width: 1024px) {

  /* Tailwind's lg breakpoint */
  .grid-background {
    display: flex;
    /* Show the grid only on large screens */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    pointer-events: none;
    /* Ensures the grid does not block interactions */
    z-index: -1;
    /* Sends the grid to the background */
  }

  .grid-image {
    width: 26rem;
    object-fit: contain;
    opacity: 1;
    /* Adjust opacity to make it less intrusive */
  }
}


body {
  overflow-x: hidden;
}

.min-h-screen {
  overflow-x: hidden;
}

/* Add padding for mobile scrolling */
@media (max-width: 768px) {

  /* Add gap between cards on mobile */
  .grid-cols-1>div {
    margin-bottom: 16px;
  }

  /* Remove hover effect on mobile */
  .hover\:scale-105 {
    transform: none !important;
    transition: none !important;
  }



  /* Fix scrolling container on mobile */
  .overflow-y-auto {
    max-height: none;
    overflow: visible;
    padding: 0;
  }
}

/* Maintain hover effects only on desktop */
@media (min-width: 769px) {
  .transition-transform:hover {
    transform: scale(1.05);
  }
}

.transition-all {
  transition: all 0.3s ease;
}

.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Improve card spacing */
.grid-cols-1>div,
.sm\:grid-cols-2>div,
.lg\:grid-cols-4>div {
  margin-bottom: 24px;
}

/* Add better touch targets on mobile */
@media (max-width: 640px) {

  .px-4,
  .py-2 {
    padding: 12px 16px;
  }

  /* Improve spacing between sections */
  .mt-12 {
    margin-top: 2rem;
  }

  /* Better spacing for feature lists */
  .space-y-4>* {
    margin-bottom: 1rem;
  }
}
</style>
