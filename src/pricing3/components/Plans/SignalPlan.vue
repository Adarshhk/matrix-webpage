<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="flex gap-2 overflow-x-auto ">
            <div v-if="Object.keys(categoryData).length" v-for="(title, index) in Object.keys(categoryData)" :key="index" @click="toggleActive(title)"
                class="relative flex justify-between items-end gap-3 min-w-56 w-full lg:w-1/3 rounded p-2 border "
                :class="[categoryData[title].is_recommended? active===title ? 'border-[#493D9E] bg-[#493D9E22]' : 'border-[#ffffff22]' : active===title ? '' : 'border-[#ffffff22]' ]">
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class="capitalize text-white text-[20px] font-bold">{{ title }}</h3>
                        <div v-if="categoryData[title].is_recommended" class="bg-[#493D9E] top-0 left-2 rounded-b text-white absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Recommended</span>
                        </div>
                        <!-- <div class="bg-[#E3DB98] top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div> -->
                    </div>
                </div>
                <div v-if="findCheapestProduct(categoryData[title].items)" class="flex flex-col items-end text-end">
                    <p class="text-[22px] font-bold text-white leading-tight">
                        <span class="text-nowrap text-[#ffffff33] text-[14px] font-semibold">starts with </span><br/>
                        {{ findCheapestProduct(categoryData[title].items) ?  `₹${findCheapestProduct(categoryData[title].items)}` : `₹0` }}
                    </p>
                </div>
            </div>

        </div>



        <div class="w-full my-4">
            

            <hr class="border-[#ffffff22] my-4" />

            <h3 v-if="showFavoriteOne" class="text-white text-xl font-bold mb-4">
                Choose Your Favourite One
            </h3>
            <h3 v-else class="text-white text-xl font-bold mb-4">
                What's Inside It
            </h3>
            <!-- tags -->
            <div v-if="showFavoriteOne" class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div v-if="categoryData[active].items.length" @click="activeIndividualPlan = item" v-for="(item, index) in categoryData[active].items"
                    class=" flex flex-col items-center space-y-3 rounded pb-2 border" :key="index"
                    :class="[activeIndividualPlan.product_name == item.product_name ? 'border-[#16C47F] bg-[#16C47F22]' : 'border-[#ffffff22]'], item['timely_price'][billingPeriod].price?'':'hidden'">
                    <!-- Radio div and Indicator Section -->
                    <div class="bg-[#16C47F] rounded-b px-2" :class="{ 'opacity-0' : !findPercentage(item?.timely_price[billingPeriod]?.offer_price, item?.timely_price[billingPeriod]?.price) }">
                        <span v-if="item?.timely_price && item?.timely_price[billingPeriod]" class=" text-xs uppercase font-extrabold">{{ findPercentage(item?.timely_price[billingPeriod]?.offer_price, item?.timely_price[billingPeriod]?.price) }}% Off</span>
                        <!-- call for store desc of product  -->
                        {{ findProductDesc(item) }}
                    </div>
                    
                    <img :src="images[item.product_name]?images[item.product_name] : '/src/assets/svg/option.svg'" alt="">
                    <div class="flex items-center gap-2">
                        
                        <div class="flex flex-col items-start ">
                            <h3 class=" text-white text-[20px] font-bold">{{ item.product_name }}</h3>
                        </div>
                    </div>
                    <!-- Pricing Section -->
                    <div v-if="item['timely_price'][billingPeriod] && item['timely_price'][billingPeriod].price" class="flex flex-col text-center">
                        <p class="text-[#ffffff] text-[14px] font-semibold " :class="{'line-through' : item['timely_price'][billingPeriod].offer_price}">₹{{ item['timely_price'][billingPeriod].price }}</p>
                        <p v-if="item['timely_price'][billingPeriod].offer_price" class="text-[24px] font-bold text-white leading-tight">
                            ₹{{ item['timely_price'][billingPeriod].offer_price }}
                        </p>

                    </div>
                </div>

            </div>


        </div>


        <ul class="space-y-4 ">
            <li v-if="productDescData[activeIndividualPlan?.product_id]" v-for="(feature, i) in productDescData[activeIndividualPlan?.product_id]" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <button @click="addToCart(activeIndividualPlan)"
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

            <img src="/src/assets/svg/add.svg" alt="" class="w-4">
            <p class="font-openSans text-white">Add To Cart</p>

        </button>
        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Free For You*
        </h3>
        <ul class="flex flex-wrap gap-4">
            

            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Tippy from '../Tippy.vue';


const props = defineProps({
    data: Object,
    addToCart: Function,
    billingPeriod: String
})

const active = ref('')
const productDescData = ref({})
const activeIndividualPlan = ref({})


const categoryData = computed(() => {
    let data = props.data || {}
    if(Object.keys(data).length) {
      active.value = Object.keys(data)[0]
      activeIndividualPlan.value = data[Object.keys(data)[0]].items[0]
    }
    return props.data || {}
})



const toggleActive = (name) => {
    active.value = name;
    activeIndividualPlan.value = categoryData.value[name].items[0]
    findProductDesc(categoryData.value[name].items[0])
}


const images = {
    'F&O' : '/src/assets/svg/option.svg',
    'Equity' : '/src/assets/svg/equity.svg',
    'Commodity' : '/src/assets/svg/gold.svg',
    'Stocks' : '/src/assets/svg/stock.svg',
}

const individualPlans = [
    {
        title : 'F&O',
        price : '2000',
        cutprice : '3000',
        img : '/src/assets/svg/option.svg',
        discount : '50% OFF'
    },
    {
        title : 'Equity',
        price : '2000',
        cutprice : '3000',
        img : '/src/assets/svg/equity.svg',
        discount : ''
    },
    {
        title : 'Commodity',
        price : '2000',
        cutprice : '3000',
        img : '/src/assets/svg/gold.svg',
        discount : ''
    },
    {
        title : 'Stocks',
        price : '2000',
        cutprice : '3000',
        img : '/src/assets/svg/stock.svg',
        discount : ''
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

const findPercentage  = (offerPrice=0, price=0) => {
    if(offerPrice && price) {
        let percentage = (((price - offerPrice) / price) * 100)
        return percentage ? percentage.toFixed(2) : 0
    }
    return 0
}

function findCheapestProduct(data=[]) {
  if (!data || data.length === 0 || !props.billingPeriod) {
    return 0; 
  }

  let cheapestProduct = data.reduce((cheapest, current) => {
    let currentTimelyPrice = current['timely_price'][props.billingPeriod] || {}
    let cheapestTimelyPrice = cheapest['timely_price'][props.billingPeriod] || {}
    if (currentTimelyPrice.offer_price === undefined) {
        return cheapest;
    }
    return currentTimelyPrice.offer_price < cheapestTimelyPrice.offer_price ? current : cheapest;
  });
  
  let offerPriceData = cheapestProduct.timely_price[props.billingPeriod] || 0
  if(!offerPriceData.offer_price) {
    return offerPriceData.price
  }
  return offerPriceData.offer_price || 0
}

const showFavoriteOne = computed(() => {
    let data = categoryData.value[active.value].items || []
    if(active.value && data.length) {
        let name = data[0]?.product_name
        return name === active.value ? false : true
    }
    return false
})

const findProductDesc = (data={}) => {
  try {
    const parsedData = JSON.parse(data.description || '[]');
    productDescData.value[data.product_id] = parsedData
  } catch (e) {
    productDescData.value[data.product_id] = {}
  }
  return ''
}

</script>