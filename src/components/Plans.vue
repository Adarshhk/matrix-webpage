<template>
    <div class=" w-[95%] border border-[#DEBB54] rounded-lg mt-24 mx-auto pb-16 overflow-hidden">
        <div class="w-full flex justify-center relative ">
            <img src="/src/assets/svg/notch.svg" alt="">
            <img src="/src/assets/svg/planlogo.svg" alt="" class="absolute top-4 w-36">

            <div class="absolute -top-40 -z-10 bg-[#EDA54E] rounded-full w-[22rem] h-[22rem]  md:w-[36rem] md:h-[36rem] blurit opacity-30">
            </div>
        </div>

        <div class="text-center mt-20 px-3">
            <p class="text-2xl md:text-[38px] font-bold mx-auto text-white">6 Superpowers Packed Into One</p>

            <p class="text-[#BBB8B8] text-md md:text-[18px] max-w-4xl mx-auto mb-24 mt-8">Empower your trading journey
                with confidence. Our platform equips you with insights and tools for financial triumph.</p>
        </div>

    
        <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]">
            <div class="flex min-w-60 mr-6 items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/indicator.svg" alt="" class="w-10">
                <p>Indicators</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/manualtrading.svg" alt="" class="w-10">
                <p>Manual Trading</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/screener.svg" alt="" class="w-10">
                <p>Screeners</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/algo.svg" alt="" class="w-10">
                <p>Algo Trading</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/webhook.svg" alt="" class="w-10">
                <p>Webhook</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/signals.svg" alt="" class="w-10">
                <p>Signals</p>
            </div>
        </Vue3Marquee>
        <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]" direction="reverse" class="mt-4">
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/indicator.svg" alt="" class="w-10">
                <p>Indicators</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/manualtrading.svg" alt="" class="w-10">
                <p>Manual Trading</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/screener.svg" alt="" class="w-10">
                <p>Screeners</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/algo.svg" alt="" class="w-10">
                <p>Algo Trading</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/webhook.svg" alt="" class="w-10">
                <p>Webhook</p>
            </div>
            <div class="flex min-w-60 mr-6  items-center bg-[#FFFFFF1A] px-3 gap-2 py-3 text-white font-bold rounded-md ">
                <img src="../assets/svg/signals.svg" alt="" class="w-10">
                <p>Signals</p>
            </div>
        </Vue3Marquee>

        <div class="w-full flex justify-center mt-24 ">
            <button class="relative">
                <img src="/src/assets/svg/plansbutton.svg" alt="">
                <p class="absolute top-3 left-16 text-[20px] text-[#222222] font-bold">Explore Plans</p>
            </button>
        </div>


    </div>
</template>

<script>

import { Vue3Marquee } from 'vue3-marquee';
import { onMounted, ref } from 'vue';


</script>

<style>
.blurit {
    filter: blur(150px);
}

.background {
    background-image: url('../assets/svg/plansbutton.svg');
    background-size: cover;
}
</style>