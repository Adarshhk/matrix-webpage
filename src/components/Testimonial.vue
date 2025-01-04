<template>
    <div class="my-20">
        <div class="text-center">
            <p class="text-[38px] font-bold mx-auto text-white">Why People Trust us?</p>

            <p class="text-[#BBB8B8] text-[18px] max-w-4xl mx-auto mb-24 mt-8">Empower your trading journey with confidence. Our platform equips you with insights and tools for financial triumph.</p>
        </div>

        <div class="gap-4 mx-auto flex justify-evenly w-[95%] mt-6 overflow-x-auto">
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
        </div>
        
    </div>
</template>

<script setup>
import profile from '../assets/img/prof.png';

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