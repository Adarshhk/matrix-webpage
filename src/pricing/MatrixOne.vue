<template>

<div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
           
          <div>
            
            <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">{{ onePricing.title }}</h3>
            <p class="text-gray-400 text-[16px] mb-4">
              {{ onePricing.description }}
            </p>

            <div class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              
              <span class="text-[#dfdfdf] text-xs ml-1">{{ onePricing.tag }}</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold text-[#dfdfdf]">₹{{ matrixOne.offer_price }}</span>
              <span class="text-gray-400 ml-2 text-sm">/ Month</span>
            </div>
        
            <button :disabled="purchased" :class="['w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all' , purchased ? 'bg-[#ffffff44] text-[#ffffff]' : '']">
              {{ purchased ? 'Purchased' : 'Buy Now' }}
            </button>
          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Featured Products
            </h3>
              <!-- {{ matrixOne.description }} -->
            <ul class="space-y-4 ">
              <li v-if="matrixOne.description" v-for="(feature, i) in JSON.parse(matrixOne.description)" class="flex items-center gap-3">
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
            <div class="flex flex-wrap gap-4">
              
                <img v-if="includes('webhook')" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="includes('signal')" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="includes('manual_trade')" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="includes('screener')" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="includes('indicator')" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="includes('algo_trading')" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

            </div>
          </div>
        </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import usePricingStore from '../store/pricing';
import useProductsStore from '../store/subscription';
import { computed } from 'vue';


const pricingStore = usePricingStore();
const subscriptionStore = useProductsStore();
const {isPurchased} = subscriptionStore
const { matrixOne , onePricing , selectedPriceType } = storeToRefs(pricingStore);

const includes = (prod) => {
    return onePricing.value.products.includes(prod);
}



const purchased = computed(() => {
  return isPurchased(onePricing.value.product_id)
})

</script>