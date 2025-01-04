<template>
    <div class="">
        
        <div class="pt-24 pb-20 w-[95%] mx-auto ">
            
            <h2 class="text-[38px] font-bold text-white">
                Simple Steps to Access Your Account
            </h2>
            <p class="text-[#BBB8B8] text-[18px] mt-8">Empower your trading journey with confidence. Our platform equips you with insights and tools for financial triumph.</p>
        </div>

        <div class="gap-8 mx-auto flex justify-between w-[95%] overflow-x-auto">
            <div v-for="user in intendedUsers" class="bg-[#1D2125] relative border text-left border-[#2F2F2F] rounded p-8 min-w-96  lg:w-1/3">
                <img :src="user.bg" class="absolute top-8 w-52" alt="">
                <img :src="user.img" alt="" class="w-8 mb-6">
                <h2 class="text-white text-[24px] font-bold mb-6">
                    {{ user.name }}
                </h2>
                <p class="text-[#7F7F7F] max-w-96 text-[18px]">
                    {{ user.description }}
                </p>
            </div>
        </div>

        <div class="w-full text-center mt-10">
            <button class="btn btn-anim text-[#F3F8F9] text-sm w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] ">
                Get Started
            </button>
        </div>
    </div>
</template>

<script setup>
import login from '../assets/svg/login.svg';
import link from '../assets/svg/link.svg';
import rocket from '../assets/svg/rocket.svg';
import bg1 from '../assets/img/01.png';
import bg2 from '../assets/img/02.png';
import bg3 from '../assets/img/03.png';

const intendedUsers = [
    { 
        name: 'Register', 
        img : login,
        bg : bg1,
        description : "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps." 
    },

    { 
        name: 'Connect Broker',
        img : link,
        bg : bg2,
        description: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps.",
    },
    { 
        name: 'Trade',
        img : rocket,
        bg : bg3,
        description: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps.",
    },
    
]

</script>