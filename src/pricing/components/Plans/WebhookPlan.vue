<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="grid  grid-cols-1 lg:grid-cols-3  gap-2 overflow-x-auto ">

            <div @click="toggleActive('first')"
                class="relative flex justify-between items-end gap-3 rounded p-2 border"
                :class="{ 'border-[#dfdfdf]': active == 'first', 'border-[#ffffff22]': active != 'first' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class=" text-white text-[20px] font-bold">Upto 5 Strategies</h3>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col text-center">
                    <p class="text-[#ffffff55] text-[14px] font-semibold">Start With</p>
                    <p class="text-[24px] font-bold text-white leading-tight">
                        ₹3000
                    </p>

                </div>
            </div>

            <div @click="toggleActive('second')"
                class="relative flex justify-between items-end gap-3 rounded p-2 border"
                :class="{ 'border-[#dfdfdf]': active == 'second', 'border-[#ffffff22]': active != 'second' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class=" text-white text-[20px] font-bold">Upto 10 Strategies</h3>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col text-center">
                    <p class="text-[#ffffff55] text-[14px] font-semibold">Start With</p>
                    <p class="text-[24px] font-bold text-white leading-tight">
                        ₹3000
                    </p>

                </div>
            </div>
            <div @click="toggleActive('third')"
                class="relative flex justify-between items-end gap-3 rounded p-2 border"
                :class="{ 'border-[#dfdfdf]': active == 'third', 'border-[#ffffff22]': active != 'third' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class=" text-white text-[20px] font-bold">Unlimited Strategies</h3>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col text-center">
                    <p class="text-[#ffffff55] text-[14px] font-semibold">Start With</p>
                    <p class="text-[24px] font-bold text-white leading-tight">
                        ₹3000
                    </p>

                </div>
            </div>

        </div>


        <hr class="border-[#ffffff22] mb-4" />

        <h3 class="text-white text-xl font-bold mb-4">
            What's Inside It
        </h3>

        <ul class="space-y-4 ">
            <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <button
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