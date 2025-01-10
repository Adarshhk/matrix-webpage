<template>
    <div class="w-[95%] bg-[#161a1e] card rounded-lg mt-24 mx-auto relative ">
        <div class=" overflow-hidden w-full h-full absolute flex justify-center">
            <div class="absolute bottom-44 bg-[#EDA54E] rounded-full w-[10rem] h-[10rem]  md:w-[36rem] md:h-[36rem] blurit opacity-20">
            </div>
        </div>
        <div class="w-full flex justify-center relative overflow-hidden z-30  ">
            <img src="/src/assets/svg/notch.svg" alt="">
            <img src="/src/assets/svg/planlogo.svg" alt="" class="absolute top-4 w-36">
        </div>

        
        <div class="text-center mt-10 px-3">
            <p class="text-2xl md:text-[38px] font-bold mx-auto text-white">6 Power Packed Plan in a Single Place</p>

            <p class="font-openSans text-[#BBB8B8] text-md md:text-[18px] max-w-4xl mx-auto mb-24 mt-4">Explore a range of powerful solutions designed to meet your trading needs—all in one single platform.
            </p>
        </div>

    
        <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]">
            <div class="flex min-w-60 mr-4 items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/indicator.svg" alt="" class="w-10">
                <p>Indicators</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/manualtrading.svg" alt="" class="w-12">
                <p>Manual Trading</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/screener.svg" alt="" class="w-12">
                <p>Screeners</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/algo.svg" alt="" class="w-12">
                <p>Algo Trading</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/webhook.svg" alt="" class="w-12">
                <p>Webhook</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] gap-2 py-1 px-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/signals.svg" alt="" class="w-12">
                <p>Signals</p>
            </div>
        </Vue3Marquee>
        <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]" direction="reverse" class="mt-4">
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/indicator.svg" alt="" class="w-12">
                <p>Indicators</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/manualtrading.svg" alt="" class="w-12">
                <p>Manual Trading</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/screener.svg" alt="" class="w-12">
                <p>Screeners</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/algo.svg" alt="" class="w-12">
                <p>Algo Trading</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/webhook.svg" alt="" class="w-12">
                <p>Webhook</p>
            </div>
            <div class="flex min-w-60 mr-4  items-center bg-[#FFFFFF1A] px-1 gap-2 py-1 text-white font-bold rounded-md ">
                <img src="/src/assets/svg/signals.svg" alt="" class="w-12">
                <p>Signals</p>
            </div>
        </Vue3Marquee>

        <div class="w-full flex justify-center mt-12 pb-10 ">
            <button class="relative">
                <img src="/src/assets/svg/plansbutton.svg" alt="">
                <p class=" absolute top-3 left-16 text-[20px] text-[#222222] font-bold">Explore Plans</p>
            </button>
        </div>


    </div>
</template>

<script>

import { Vue3Marquee } from 'vue3-marquee';
import { onMounted, ref } from 'vue';


</script>

<style scoped>
.blurit {
    filter: blur(150px);
}

.background {
    background-image: url('/src/assets/svg/plansbutton.svg');
    background-size: cover;
}

.card{
    position: relative;
    
}

@property --angle{
    syntax : "<angle>";
    initial-value: 0deg;
    inherits: false;
}
.card::after, .card::before {
    content: ""; 
    position: absolute;
    top: -4px; /* Adjusted for proper alignment */
    left: -4px; /* Adjusted for proper alignment */
    width: calc(100% + 8px); /* Ensure consistent padding */
    height: calc(100% + 8px); 
    background-image: conic-gradient(from var(--angle), #EDA54E , #9D5500 ,#F6AF5A);
    z-index: -1; /* Place the pseudo-element behind the .card */
    border-radius: 8px;
    box-sizing: border-box;
    animation: 3s spin linear infinite;
}

.card::before {
    filter: blur(1rem);
    opacity: 0.5;
    top: -5px; /* Adjust to offset the blur effect */
    left: -5px; /* Adjust to offset the blur effect */
    width: calc(100% + 10px); /* Increase dimensions for consistency */
    height: calc(100% + 10px); 
}

@keyframes spin {
    from{
       --angle:0deg;
    }
    to{
        --angle : 360deg;
    }
}
</style>