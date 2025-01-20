<template>
    <div class="w-[95%] mx-auto mt-16">
        <!-- button -->
        <div class="flex gap-1 lg:gap-4 ">
            <button v-for="plan in plans" :key="plan" :aria-label="plan + ' Plan'" :class="getButtonClass(plan)"
                @click="toggleActive(plan)"
                class="transition-all duration-200 py-1 lg:px-4 rounded-3xl text-[12px] lg:text-[16px] font-openSans">
                {{ plan }}
            </button>
        </div>

        <div class="mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(item, index) in indicators" :key="index"
                class="bg-[#1D2125] p-5 rounded-md col-span-1 relative">
                <div class="w-full h-full rounded-md backdrop-blur flex justify-center items-center z-20 absolute top-0 left-0"
                    v-if="index === 5">
                    <button
                        class="bg-white rounded-3xl shadow-3xl text-black text-[16px] px-4 py-1 font-semibold font-openSans">
                        Explore Screener
                    </button>
                </div>
                <img :src="item.img" alt="">

                <h4 class="text-[24px] mt-2 font-bold text-[#F3EFEF]">{{ item.title }}</h4>
                <p class="text-[#BBB8B8] text-[16px] font-openSans">{{ item.description.slice(0, 109) }}
                    <span v-if="item.description.length > 110">. . .</span>
                    <button v-if="item.description.length > 110"
                        class="text-white font-semibold text-[16px] hover:underline">Read More</button>
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>

import { ref, computed } from "vue";


const active = ref("Large Cap Stocks");
const plans = ["Large Cap Stocks", "Perfect Sell (short)", "Profit Jump by 200%", "Low debt companies"];

const toggleActive = (name) => {
    active.value = name;
};

const getButtonClass = (plan) => ({
    "text-[#46BA4B] border border-[#46BA4B]  bg-[#46BA4B33] ": active.value === plan,
    "text-white border border-[#4F4F4F]": active.value !== plan,
});


const indicators = [
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    },
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    },
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    },
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    },
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    },
    {
        img: '/src/assets/img/trade.png',
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!'
    }

]

</script>

<style></style>