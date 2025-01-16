<template>
    <div class="text-center relative mt-24">

        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <!-- <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 "> -->
            <h2 class="lg:text-[38px] text-[27px] font-bold text-white ">
                For Whom This Platform Is Designed
            </h2>
        </div>

        <div class="mx-auto gap-6 grid grid-cols-1 lg:grid-cols-3  w-[95%] mt-12 md:mt-24">
            <button @click="handleChange(user.path)"
                v-for="user in intendedUsers" 
                :key="user.name"
                class="bg-[#1D2125] border text-left border-[#2F2F2F] rounded p-6 pt-8 hover:bg-[#252A30] group transition-all duration-300 "
            >
                <div class="flex justify-between items-center mb-6 group-hover:-translate-y-4 transition-all duration-300" >
                    <h2 class="text-white text-[24px] font-bold">
                        {{ user.name }}
                    </h2>
                    
                </div>

                <p class="text-[#7F7F7F] max-w-96 font-openSans group-hover:-translate-y-4 transition-all duration-300">
                    {{ user.description }}
                </p>

                <button class="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-[#00B852] underline flex gap-1">
                    know more
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
            </button>
        </div>

    </div>
</template>

<script setup>
import {  useRouter } from 'vue-router';


const router = useRouter();

const handleChange = (path) => {
    router.push(path);
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
}
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