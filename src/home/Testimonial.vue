<template>
    <div class="my-32 ">
        <div class="text-center">
            <p class="lg:text-[38px] font-bold mx-auto text-white text-[27px]">Know Why People Trust Us?</p>

            <p class="font-openSans text-[#BBB8B8] lg:text-[18px] max-w-4xl mx-auto mb-16 mt-8 text-[16px] px-2">Our commitment to innovation, transparency, and delivering results has earned us the trust of traders worldwide. Experience a platform designed with your success in mind.</p>
        </div>

        <!-- <div class="gap-4 mx-auto flex justify-evenly w-[95%] mt-6 overflow-x-auto">
            <div v-for="user in testimonials" class="bg-[#1D2125] min-w-96 lg:w-1/3 border text-left border-[#2F2F2F] rounded p-8">
                
                <p class="text-[#dfdfdf] max-w-96 text-[18px]">
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

        <Vue3Marquee :duration="80" :gradient="true" :gradientColor="[22, 26, 30, 1]" >
            <div v-for="user in testimonials" class=" min-w-80 lg:w-1/3  text-left border-[#2F2F2F] rounded p-8 mx-4 flex flex-col items-start space-y-4 ">
                
                <img src="/src/assets/svg/comma.svg" alt="" class="w-16">
                <p class="text-[#dfdfdf] max-w-96 text-sm lg:text-[16px] font-openSans">
                    {{ user.description }}
                </p>
                
                
                <div class="flex gap-3 border-t border-[#2F2F2F] w-full">
                    <h2 class=" pt-4 text-white font-bold text-sm lg:text-[16px] text-nowrap">
                        {{ user.name }}
                    </h2>   
                    <div class=" h-12">

                        <LottieComponent animationPath="/json/5star.json" />
                    </div>
                </div>
                
                
            </div>
        </Vue3Marquee>
        
    </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import profile from '/src/assets/img/prof.png';
import LottieComponent from './utils/LottieComponent.vue';

const testimonials = [
    { 
        name: 'Rahul Mehta, Mumbai', 
        description: "It has revolutionized the way I trade, and all thanks to Matrix Trading Tech. Because of algorithmic trading I can focus on my work without worrying about missing out on profitable trades. Highly recommended!"
    },
    { 
        name: 'Priya Singh, New Delhi', 
        description: "Being a busy professional, I found it hard to take out time to trade. Matrix Trading Tech had changed the way I saw trading. The algo trading feature is incredible and has significantly boosted my returns."
    },
    { 
        name: 'Anil Kumar, Bangalore', 
        description: "I was not sure in the beginning about algo trading, but Matrix Trading Tech has exceeded my expectations. The platform is user-friendly, and the support team is always available to assist with any queries."
    },
    { 
        name: 'Sneha Shah, Ahmedabad', 
        description: "Matrix Trading Tech's automated trading has saved me so much time. I no longer have to monitor the markets constantly, and the returns have been impressive. It's a must-have for anyone serious about trading."
    },
    { 
        name: 'Ramesh Verma, Hyderabad', 
        description: "The best part about Matrix Trading Tech is its reliability. The platform executes trades flawlessly, and I have complete peace of mind knowing my investments are in good hands."
    },
    { 
        name: 'Kavita Rao, Chennai', 
        description: "Thanks to Matrix Trading Tech, I've been able to balance my work and trading easily. The automated system is efficient, and the customer service is excellent. I couldn't be happier!"
    },
    { 
        name: 'Arjun Patel, Pune', 
        description: "Matrix Trading Tech has revolutionized my trading strategy. The algorithms are incredibly accurate, and the platform is easy to use. I've seen a significant increase in my trading profits."
    },
    { 
        name: 'Anjali Gupta, Kolkata', 
        description: "I love how Matrix Trading Tech takes the stress out of trading. The automated trades are executed perfectly, and the platform's analytics have helped me make informed decisions. It's a game-changer!"
    },
    { 
        name: 'Vikram Iyer, Kochi', 
        description: "Matrix Trading Tech has been a great addition to my trading toolkit. The automated system is reliable and efficient, and the returns have been consistently impressive. Highly recommended!"
    },
    { 
        name: 'Neha Desai, Jaipur', 
        description: "I've been using Matrix Trading Tech for a few months now, and it has significantly improved my trading performance. The platform is user-friendly, and the automated trading feature is a lifesaver for someone with a busy schedule."
    }
];


</script>

<style>



</style>