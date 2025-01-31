<template>
    <div class="text-[#dfdfdf] text-center mt-16 lg:mt-32 mx-2 md:hidden">
        <div class="text-center">
            <p class="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold mx-auto text-white leading-tight">
                You’re in Charge—Trade with Confidence
            </p>
            <p
                class="text-[#dfdfdf] mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-[16px] leading-relaxed w-[95%] max-w-6xl p-2 mx-auto mt-4 font-openSans">
                Want to control your financial future? Our platform gives you the insights, speed, and flexibility to
                trade on your terms and maximize your success.
            </p>
        </div>

        <main class=" mx-auto">
            <ul class="grid grid-cols-1 gap-4">
                <li v-for="(tradeCard, index) in tradeCards" :key="tradeCard.id">
                    <div
                        class=" border-[#2F2F2F] bg-gradient-to-r from-[#1D2125] to-[#1e1e1e] rounded-md overflow-hidden shadow-lg flex flex-col">
                        <div class="ml-4 p-4 pt-8 flex flex-col justify-center ">
                            <div class="flex items-center gap-4 ">
                                <img :src="tradeCard.icon" alt="" class="w-12  ">
                                <div class="text-left">
                                    <h3 class="text-white text-[19px] font-semibold">
                                        {{ tradeCard.title }}</h3>
                                    <p class="text-xs  text-[#dfdfdf] font-openSans">
                                        {{ tradeCard.subtitle }}</p>
                                </div>
                            </div>
                            <hr class="h-px my-4 mb-6 bg-[#373636] border-0">
                            <div class="text-left">
                                <p class="text-[#dfdfdf] text-base leading-relaxed font-openSans">
                                    {{ tradeCard.description }}</p>
                            </div>

                            <div class="mt-6">
                                <div v-for="(feat, featIndex) in tradeCard.features" :key="featIndex"
                                    class="flex gap-2 justify-start items-start my-3 max-h-20">
                                    <!-- <img src="/src/assets/svg/cloud.svg" alt="" class="w-4 h-4 sm:w-5 sm:h-5 mt-1 md:mt-0"> -->

                                    <div class="w-[10%]">

                                        <LottieComponent animationPath="/json/tick.json" />
                                    </div>

                                    <p class="text-left font-openSans text-[16px] text-[#dfdfdf]">

                                        {{ feat }}

                                    </p>
                                </div>
                            </div>

                            <div class="flex justify-start">
                                <button
                                    class="rounded-3xl border border-white py-2 px-6 max-w-48 w-full text-white font-openSans text-sm  mt-4 hover:bg-white hover:text-black transition-colors duration-300">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div class="h-auto">
                            <img :src="tradeCard.image" :alt="tradeCard.title"
                                class="w-[90%] mx-auto object-contain mt-4 ">
                        </div>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import homecard1 from '/src/assets/img/homecard1.png'
import manualicon from '/src/assets/svg/manual.svg'
import indicatoricon from '/src/assets/producticons/producticon (1).svg'
import signalicon from '/src/assets/producticons/producticon (5).svg'
import webhookicon from '/src/assets/producticons/producticon (3).svg'
import algotradingicon from '/src/assets/producticons/producticon (2).svg'
import screenericon from '/src/assets/producticons/producticon (6).svg'
import homecard2 from '/src/assets/img/homecard2.png'
import indicatorCard from '/src/assets/img/indicatorcard.png'
import algocard from '/src/assets/img/algocard.png'
import screenerCard from '/src/assets/img/screenercard.png'
import LottieComponent from '/src/home/utils/LottieComponent.vue'
import webhookcard from '/src/assets/img/webhookcard.webp'

const tradeCardsWrapper = ref(null);
const tradeCards = ref([
    {
        id: 1,
        title: 'Algo Trading',
        icon: algotradingicon,
        subtitle: 'Trade Your Way',
        features: [
            'Integrate with platform across your business',
            'Integrate with platform across your business ',
            'Integrate with platform across your business'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: algocard
    },
    {
        id: 4,
        title: 'Manual Trade',
        icon: manualicon,
        subtitle: 'Execute trades your way, confidently.',
        features: [
            'Your Strategy, Your Rules – No bots, just your instincts and insights.',
            'Fast Market Response – Stay ahead of trends and react instantly.',
            'Skill & Experience Boost – The more you trade, the sharper you get.',
            'No Extra Costs – No fancy software or coding required.'
        ],
        description: "Tired of relying on automated systems? Take control with Manual Trade, where you call the shots. Analyze trends, execute trades, and make decisions that fit your strategy.",
        image: homecard1
    },
    {
        id: 2,
        title: 'Signals',
        icon: signalicon,
        subtitle: 'Act fast with real-time expert signals.',
        features: [
            'Integrate with platform across your business',
            'Integrate with platform across your business',
            'Integrate with platform across your business'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: homecard2
    },
    {
        id: 3,
        title: 'Webhooks',
        icon: webhookicon,
        subtitle: 'Trade Your Way',
        features: [
            'Integrate with platform across your business',
            'Integrate with platform across your business',
            'Integrate with platform across your business'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: webhookcard
    },
    {
        id: 5,
        title: 'Screener',
        icon: screenericon,
        subtitle: 'Trade Your Way',
        features: [
            'Integrate with platform across your business',
            'Integrate with platform across your business ',
            'Integrate with platform across your business'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: screenerCard
    },
    {
        id: 6,
        title: 'Indicators',
        icon: indicatoricon,
        subtitle: 'Trade Your Way',
        features: [
            'Integrate with platform across your business',
            'Integrate with platform across your business ',
            'Integrate with platform across your business'
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: indicatorCard
    }
]);


</script>