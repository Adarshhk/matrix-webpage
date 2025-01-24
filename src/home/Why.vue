<template>
    <div class="text-center relative mt-8 lg:mt-4">

        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <!-- <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 "> -->
            <h2 class="lg:text-[38px] text-[27px] font-bold text-white ">
                For Whom This Platform Is Designed
            </h2>
        </div>

        <div class="mx-auto gap-4 grid grid-cols-1 lg:grid-cols-3  w-[95%] mt-12 md:mt-24">
            <button @click="handleChange(user.path)"
                v-for="user in intendedUsers" 
                :key="user.name"
                class="bg-[#ffffff00] flex flex-col items-center text-center border-[#ffffff] p-6 pt-8 hover:bg-[#252a3000] group transition-all duration-300 "
            >
                <img :src="user.img" alt="" class="mb-5 w-10 h-10 group-hover:-translate-y-4 transition-all duration-300">
                <div class="flex justify-between items-center lg:mb-1 group-hover:-translate-y-4 transition-all duration-300" >

                    <h2 class="text-white text-[24px] font-bold">
                        {{ user.name }}
                    </h2>
                    
                </div>

                <p class="text-[#dfdfdf] max-w-96 font-openSans group-hover:-translate-y-4 transition-all duration-300">
                    {{ user.description }}
                </p>

                <button class="hidden lg:flex translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 text-[#00B852] font-bold gap-1">
                    know more
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
                <button class="lg:hidden text-[#00B852] flex gap-1 font-bold mt-3">
                    know more
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
            </button>
        </div>

    </div>
</template>

<script setup>
import {  useRouter } from 'vue-router';
import s from '/src/assets/svg/s.svg'
import i from '/src/assets/svg/i.svg'
import t from '/src/assets/svg/t.svg'

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
        img : s,
        description: "Designed for precision and speed, this platform offers real-time tools and seamless execution for high-frequency trading.",
        path : '/scalper'
    },

    {
        name: 'The Traders',
        img : t,
        description: "Perfect for day or swing traders, it provides strategic insights and automation to tackle market volatility and seize short- to medium-term trends.",
        path : '/trader'
    },
    {
        name: 'The Investors',
        img : i,
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