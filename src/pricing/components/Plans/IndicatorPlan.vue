<template>

    <div class=" h-full flex flex-col justify-center items-center px-24">
        

        <h3 class="text-white text-[32px] text-center leading-tight font-bold mb-4">
            Discover & Trade with the Best Indicators
        </h3>

        <p class="text-[#dfdfdf] text-[16px] mb-4 text-center font-openSans">
            Access millions of premium indicators in one marketplace. Compare, buy, and enhance your trading strategy effortlessly. Stop searching across multiple platforms—everything you need is here to trade smarter and faster! 🚀
        </p>

        <!-- <ul class="space-y-4 ">
            <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul> -->

        <button
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

            
            <p class="font-openSans text-white">Explore</p>

        </button>

    </div>


    
</template>

<script setup>
import { ref } from 'vue';
import Tippy from '../../../component/Tippy.vue';


const active = ref('first')

const toggleActive = (name) => {
    active.value = name;
}

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
</script>