<template>

  <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
    <!-- Pricing Card -->

    <div>

      <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">{{ matrixOne.title }}</h3>
      <p class="text-gray-400 text-[16px] mb-4">
        {{ matrixOne.description }}
      </p>

      <div class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">

        <span  v-if="matrixOne.tag" class="text-[#dfdfdf] text-xs ml-1">{{ matrixOne.tag }}</span>
        <span  class="text-[#dfdfdf] text-xs ml-1">One Plan For All</span>
        
      </div>

      <div class="flex items-baseline mb-6">
        <span class="text-4xl font-bold text-[#dfdfdf]">₹{{ matrixOne.offer_price }}</span>
        <span class="text-gray-400 ml-2 text-sm">/ Month</span>
      </div>

      <button @click="addToCart({name : matrixOne.title , id : matrixOne.product_id , price: matrixOne.offer_price})" :disabled="purchased"
        :class="['w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all', purchased ? 'bg-[#ffffff44] text-[#ffffff]' : '']">
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
        <li v-if="parsedDescription" v-for="(feature, i) in JSON.parse(matrixOne.description)"
          class="flex items-center gap-3">
          <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
          <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
          <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
            {{ feature.text }}
          </span>

        </li>
        <li else 
          class="flex items-center gap-3">
          <img src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
          
          <span class="text-[16px] font-openSans text-white" >
            {{ matrixOne.description }}
          </span>

        </li>
      </ul>
    </div>

    <div class="md:border-l border-[#2C2C2C] md:pl-6">
      <h3 class="text-white text-xl font-bold mb-4">
        Products Included
      </h3>
      <ul class="flex flex-wrap gap-4">
        <li>
          <Tippy content_title="Webhook with partail access"
            content_desc="Note : This is a premium feature, you will get partial access."
            class="bg-[#272b2f] text-white p-2 rounded-lg">
            <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
          </Tippy>
        </li>
        <li>
          <Tippy content_title="Signals with partail access"
            content_desc="Note : This is a premium feature, you will get partial access."
            class="bg-[#272b2f] text-white p-2 rounded-lg">
            <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
          </Tippy>
        </li>
        <li>
          <Tippy content_title="Manual Trading with partail access" class="bg-[#272b2f] text-white p-2 rounded-lg">
            <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
          </Tippy>
        </li>
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

        <li>
          <Tippy content_title="Algo Trading with partail access"
            content_desc="Note : This is a premium feature, you will get partial access."
            class="bg-[#272b2f] text-white p-2 rounded-lg">
            <img src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />
          </Tippy>
        </li>

      </ul>
    </div>
  </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import usePricingStore from '../store/pricing';
import useProductsStore from '../store/subscription';
import Tippy from '/src/component/Tippy.vue'
import { computed } from 'vue';
import useCartStore from '../store/cart';


const pricingStore = usePricingStore();
const subscriptionStore = useProductsStore();
const { isPurchased } = subscriptionStore
const cartStore = useCartStore();
const { addToCart } = cartStore;
const { matrixOne} = storeToRefs(pricingStore);

const parsedDescription = computed(() => {
  try {
    return matrixOne.value.description ? JSON.parse(matrixOne.description) : null;
  } catch (error) {
    return null;
  }
})

const purchased = computed(() => {
  return isPurchased(matrixOne.value.product_id)
})

</script>