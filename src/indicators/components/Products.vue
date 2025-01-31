<template>
    <div class="w-[95%] mx-auto">
        <!-- button -->
        <div class="flex gap-1 lg:gap-2 ">
            <button v-for="plan in plans" :key="plan" :aria-label="plan + ' Plan'" :class="getButtonClass(plan)"
                @click="toggleActive(plan)"
                class="transition-all duration-200 py-1 lg:px-4 rounded-3xl text-[12px] lg:text-[16px] font-openSans">
                {{ plan }}
            </button>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-8">

            <RouterLink :to="`/indicator-details/${id}`" v-for="(item, id) in indicators" class=" space-y-3 group relative">
                
                <div class="">
                    <img :src="item.img" alt="" class="aspect-video" />
                </div>

                <h1
                    class="font-CabinetGrotesk text-white font-bold text-[19px] group-hover:text-[#00b852] transition-all duration-150 text-left">
                    {{ item.title }}
                </h1>


                <hr class="border-dashed border-[#FFFFFF30]" />


                <p class="text-left text-white text-[14px] md:text-[16px]">{{ item.date }}</p>
            </RouterLink>

        </div>
    </div>
</template>

<script setup>

import { ref, computed } from "vue";
import graphimg from '/src/assets/img/trade.png'
import { RouterLink } from "vue-router";

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
        img: graphimg,
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
        date: '24 Oct 2023'
    },
    {
        img: graphimg,
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
        date: '24 Oct 2023'
    },
    {
        img: graphimg,
        title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
        description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
        date: '24 Oct 2023'
    },
    

]

</script>

<style></style>