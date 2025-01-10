
<!-- call Correctly -->
<template>
    <div class="my-20 px-0 2xl:px-28">
        <div class="text-center pt-0 xl:pt-24  w-[95%] mx-auto ">
            <p class="text-[28px] md:text-[34px] 2xl:text-[42px] font-bold text-white mb-3">Why People Trust us?</p>

            <p class="text-[#BBB8B8] text-[18px] max-w-4xl mx-auto px-0 md:px-40 mb-14 mt-8">Empower your trading journey with confidence. Our platform equips you with insights and tools for financial triumph.</p>
        </div>

        <!-- <div class="gap-4 mx-auto flex justify-evenly w-[95%] mt-6 overflow-x-auto">
            <div v-for="user in testimonials" class="bg-[#1D2125] min-w-96 lg:w-1/3 border text-left border-[#2F2F2F] rounded p-8">
                
                <p class="text-[#7F7F7F] max-w-96 text-[18px]">
                    {{ user.description }}
                </p>
                <div class="flex items-center gap-4 mt-10">
                    <img :src="user.img" class="w-10" alt="">
                    <h2 class="text-white font-bold text-[16px]">
                        {{ user.name }}
                    </h2>
                </div>
            </div>
        </div> -->

        <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]"  class="mt-4">
            <div v-for="user in testimonials" class="bg-[#1D2125] min-w-80 lg:w-1/3 border text-left border-[#2F2F2F] rounded p-8 mx-4">
                <p class="text-white max-w-96 text-sm lg:text-[16px]">
                    {{ user.description }}
                </p>
                <div class="flex items-center gap-4 mt-10">
                    
                    <img :src="user.img" class="w-10" alt="">
                    <h2 class="text-white font-bold text-sm lg:text-[16px]">
                        {{ user.name }}
                    </h2>
                </div>
            </div>
        </Vue3Marquee>
        
    </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import profile from '/src/assets/img/prof.png';

const testimonials = [
    { 
        name: 'Anirudh Tiwari, Delhi', 
        img : profile,
        description : "PromptVault has become my go-to resource for sparking creativity in ChatGPT. The diverse range of prompts has not only saved me time but has elevated the quality of my content. A must-have for any content creator." 
    },

    { 
        name: 'Anirudh Tiwari, Delhi', 
        img : profile,
        description: "PromptVault has become my go-to resource for sparking creativity in ChatGPT. The diverse range of prompts has not only saved me time but has elevated the quality of my content. A must-have for any content creator.",
    },
    { 
        name: 'Anirudh Tiwari, Delhi', 
        img : profile,
        description: "PromptVault has become my go-to resource for sparking creativity in ChatGPT. The diverse range of prompts has not only saved me time but has elevated the quality of my content. A must-have for any content creator.",
    },
    
]

</script>

<style>

</style>