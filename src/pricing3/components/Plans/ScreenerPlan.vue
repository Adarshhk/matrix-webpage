<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            What's Inside It
        </h3>
        {{ categoryData.length ? findProductDesc(categoryData[0]) : '' }}
        <hr class="border-[#ffffff22] my-4" />
        
        <ul class="space-y-4 ">
            <li v-for="(feature, i) in productDescData[categoryData[0].product_id]" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <router-link to="/screeners"
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

       
            <p class="font-openSans text-white">Explore Screener</p>

        </router-link>
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
import { RouterLink } from 'vue-router';

const props = defineProps({
    data: Array
})

const productDescData = ref({})

const categoryData = computed(() => {
    return props.data || {}
})

const findProductDesc = (data={}) => {
    try{
        const parsedData = JSON.parse(data.description || '[]');
        productDescData.value[data.product_id] = parsedData
        return ''
    } catch (e) {
        productDescData.value[data.product_id] = {}
        return ''
    }
  
}

const active = ref('individual')

const toggleActive = (name) => {
    active.value = name;
}

const activeIndividualPlan = ref('F&O')

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
</script>