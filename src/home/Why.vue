<template>
    <div class="text-center relative">

        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 ">
            <h2 class="lg:text-[38px] text-3xl font-bold text-white ">
                For Whom This Platform Is Designed
            </h2>
        </div>

        <div class="mx-auto gap-2 grid grid-cols-1 lg:grid-cols-3  w-[95%] mt-6 ">
            <button @click="() => {router.push(user.path)}"
                v-for="user in intendedUsers" 
                :key="user.name"
                class="bg-[#1D2125] border text-left border-[#2F2F2F] rounded p-8 hover:bg-[#252A30] transition-all duration-300 hover:scale-110"
            >
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-white text-[24px] font-bold">
                        {{ user.name }}
                    </h2>
                    
                </div>

                <p class="text-[#7F7F7F] max-w-96 font-openSans">
                    {{ user.description }}
                </p>
            </button>
        </div>

    </div>
</template>

<script setup>
import {  useRouter } from 'vue-router';


const router = useRouter();
const intendedUsers = [
    {
        name: 'The Scalper',
        description: "Designed for precision and speed, this platform offers real-time tools and seamless execution for high-frequency trading.",
        path : '/scalper'
    },

    {
        name: 'The Traders',
        description: "Perfect for day or swing traders, it provides strategic insights and automation to tackle market volatility and seize short- to medium-term trends.",
        path : '/trader'
    },
    {
        name: 'The Investors',
        description: "Empowering long-term planners with tools to assess opportunities, manage risks, and achieve steady portfolio growth.",
        path : '/investor'
    },

]

</script>

<style scoped>

.group img {
    will-change: transform, opacity;
    backface-visibility: hidden;
}
</style>