<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="flex gap-2 overflow-x-auto ">
            <div @click="toggleActive('individual')"
                class=" relative min-w-56 w-full  lg:w-1/3 flex justify-between items-end gap-3 rounded p-2 border"
                :class="{ 'border-[#493D9E] bg-[#493D9E22]': active == 'individual', 'border-[#ffffff22]': active != 'individual' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class="w-[122px] text-white text-[20px] font-bold">Individual</h3>
                        <div class="bg-[#493D9E] top-0 left-2 rounded-b text-white absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Recommended</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end text-end">
                    <p class="text-[22px] font-bold text-white leading-tight">
                        <span class="text-[#ffffff33] text-[14px] font-semibold">starts with </span><span>₹</span>10,740
                    </p>

                </div>
            </div>


            <div @click="toggleActive('trader')"
                class="relative flex justify-between items-end gap-3 min-w-56 w-full lg:w-1/3 rounded p-2 border"
                :class="{ 'border-[#dfdfdf]': active == 'trader', 'border-[#ffffff22]': active != 'trader' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class="w-[122px]  text-white text-[20px] font-bold">Trader</h3>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">Top Selling</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end text-end">
                    <p class="text-[22px] font-bold text-white leading-tight">
                        <span class="text-[#ffffff33] text-[14px] font-semibold">starts with </span><span>₹</span>10,740
                    </p>

                </div>
            </div>

            <div @click="toggleActive('investor')"
                class="relative flex justify-between items-end gap-3 rounded min-w-56 w-full lg:w-1/3   p-2 border"
                :class="{ 'border-[#dfdfdf]': active == 'investor', 'border-[#ffffff22]': active != 'investor' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="w-[122px] flex flex-col items-start mt-8">
                        <h3 class="text-white text-[20px] font-bold">Investor</h3>
                        <div class="bg-[#E3DB98] opacity-0 top-0 left-2 rounded-b absolute px-2">
                            <span class=" text-xs uppercase font-extrabold ">Top Selling</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end text-end">
                    <p class="text-[22px] font-bold text-white leading-tight">
                        <span class="text-[#ffffff33] text-[14px] font-semibold">starts with </span><span>₹</span>10,740
                    </p>

                </div>
            </div>
        </div>



        <div class="w-full my-4">
            

            <hr class="border-[#ffffff22] my-4" />

            <h3 v-if="active == 'individual'" class="text-white text-xl font-bold mb-4">
                Choose Your Favourite One
            </h3>
            <h3 v-else class="text-white text-xl font-bold mb-4">
                What's Inside It
            </h3>
            <!-- tags -->
            <div v-if="active === 'individual'" class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div @click="activeIndividualPlan = item.title" v-for="item in individualPlans"
                    class=" flex flex-col items-center space-y-3 rounded pb-2 border"
                    :class="{ 'border-[#16C47F] bg-[#16C47F22]': activeIndividualPlan == item.title && item.discount != '', 'border-[#ffffff22]': activeIndividualPlan != item.title }">
                    <!-- Radio div and Indicator Section -->
                    <div class="bg-[#16C47F] rounded-b px-2" :class="{'opacity-0' : item.discount == ''}">
                        <span class=" text-xs uppercase font-extrabold">50% Off</span>
                    </div>
                    <img :src="item.img" alt="">
                    <div class="flex items-center gap-2">
                        
                        <div class="flex flex-col items-start ">
                            <h3 class=" text-white text-[20px] font-bold">{{ item.title }}</h3>


                        </div>
                    </div>
                    <!-- Pricing Section -->
                    <div class="flex flex-col text-center">
                        <p class="text-[#ffffff] text-[14px] font-semibold line-through">₹{{ item.cutprice }}</p>
                        <p class="text-[24px] font-bold text-white leading-tight">
                            ₹{{ item.price }}
                        </p>

                    </div>
                </div>

            </div>


        </div>


        
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