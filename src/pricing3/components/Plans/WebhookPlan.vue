<template>

    <div class="">
        <h3 class="text-white text-[18px] xl:text-xl font-CabinetGrotesk font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="grid  grid-cols-1 lg:grid-cols-3 overflow-x-auto gap-4">

            <div v-if="webhookData.length" v-for="(item, index) in webhookData" :key="index" @click="toggleActive(item)"
                class="relative flex justify-between items-end gap-3 rounded p-2 border font-CabinetGrotesk cursor-pointer "
                :class="[ item.product_id === active.product_id ? 'border-[#dfdfdf]' : 'border-[#ffffff22]'] ">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">
                    {{ findProductDesc(item) }}
                    <div class="flex flex-col items-start mt-8">
                        <!-- <h3 class=" text-white md-text xl:text-[20px] font-bold">{{ item.max_webhook_strategies > 100 ? 'Unlimited' : `Upto  ${item.max_webhook_strategies}` }} Strategies</h3> -->
                         <p class=" text-white md-text xl:text-[19px] font-CabinetGrotesk font-bold">{{ item.title }}</p>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div>
                    </div>
                </div>
                <!-- Pricing Section -->
                <div v-if="item.timely_price[billingPeriod].price" class="flex flex-col text-center">
                    <p class="text-[#ffffff55] text-[12px] font-semibold">Start With</p>
                    <p class="text-[20px] font-bold text-white leading-tight">
                        {{ item.timely_price[billingPeriod].offer_price.toLocaleString("en-IN") ? `₹${item.timely_price[billingPeriod].offer_price.toLocaleString("en-IN")}` : `₹${item.timely_price[billingPeriod].price.toLocaleString("en-IN")}` }}
                    </p>
                </div>
            </div>

        </div>


        <hr class="border-[#ffffff22] mb-4" />

        <h3 class="text-white text-[18px] xl:text-xl font-bold mb-4">
            What's Inside It
        </h3>

        <ul class="space-y-4 ">
            <li v-for="(feature, i) in productDescData[active.product_id]" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <div class="">
    <!-- Already Purchased Button -->
    <button 
        v-if="isPurchased(active.category_name)"
        class="text-white font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150 cursor-not-allowed">
        Already Purchased
    </button>

    <!-- Add to Cart Button (only shown if not purchased) -->
    <button 
        v-if="!isPurchased(active.category_name)" 
        @click="addProduct(active)"
        :disabled="active.timely_price[billingPeriod]?.price <= 0"
        class="text-[#272727] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 transition-all duration-150"
        :class="{
            'cursor-not-allowed opacity-50': active.timely_price[billingPeriod]?.price <= 0, 
            'hover:bg-[#ffffff11]': active.timely_price[billingPeriod]?.price > 0
        }"
    >
        <img src="/src/assets/svg/add.svg" alt="" class="w-4">
        <p class="font-openSans text-white">Add To Cart</p>
    </button>
</div>

        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div class="">
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

        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Tippy from '../Tippy.vue';
import { computed } from 'vue';
import useProductsStore from '../../../store/subscription';
import { storeToRefs } from 'pinia';

const subscriptionStore = useProductsStore()

const props = defineProps({
    data: Array,
    addToCart: Function,
    billingPeriod: String
})

const webhookData = computed(() => {
    let data = props.data || []
    data.sort((a, b) => a.max_webhook_strategies - b.max_webhook_strategies);
    if(data.length) {
        active.value = data[0]
    }
    return data
})

const active = ref('first')
const productDescData = ref({})

const toggleActive = (data) => {
    active.value = data;
}

const previousSelectedData = ref({})
// inside webook only one product can be selected
const addProduct = (item) => {
  if(previousSelectedData.value.product_id) {
    props.addToCart(previousSelectedData.value)
  }
  props.addToCart(item)
  previousSelectedData.value = item
}

// const addMatrixAlgoProduct = (item) => {
//   // Check if any Matrix ALGO product exists in the cart
//   const existingMatrixAlgoProduct = props.cart.find(
//     (cartItem) => matrixAlgoData.value.some((algoItem) => algoItem.product_id === cartItem.product_id)
//   );

//   // If an existing Matrix ALGO product is found, remove it
//   if (existingMatrixAlgoProduct) {
//     props.removeFromCart(existingMatrixAlgoProduct);
//   }

//   // Add the new Matrix ALGO product to the cart
//   props.addToCart(item);

//   // Update the active plan
//   matrixActivePlan.value = item;
// };

const isPurchased = (planName) => {
  const subscriptions = subscriptionStore.subscriptions || []; // Default to empty array

  return Array.isArray(subscriptions) && subscriptions.some(sub => {
    const baseCategory = (sub.category_name || "").trim().toLowerCase(); // Convert to lowercase
    const paymentStatus = (sub.payment_status || "").toUpperCase(); // Convert to uppercase

    return baseCategory === planName.toLowerCase() && paymentStatus === "COMPLETE";
  });
};

const activeIndividualPlan = ref('F&O')

const individualPlans = [
    {
        title: 'F&O',
        price: '2000',
        cutprice: '3000',
        img: '/src/assets/svg/option.svg',
        discount: '50% OFF'
    },
    {
        title: 'Equity',
        price: '2000',
        cutprice: '3000',
        img: '/src/assets/svg/equity.svg',
        discount: ''
    },
    {
        title: 'Commodity',
        price: '2000',
        cutprice: '3000',
        img: '/src/assets/svg/gold.svg',
        discount: ''
    },
    {
        title: 'Stocks',
        price: '2000',
        cutprice: '3000',
        img: '/src/assets/svg/stock.svg',
        discount: ''
    },
]

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


const findProductDesc = (data={}) => {
    try {
        const parsedData = JSON.parse(data.description || '[]');
        productDescData.value[data.product_id] = parsedData
    } catch (e) {
        
    }
  
  return ''
}
</script>