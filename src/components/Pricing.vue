<template>
    <div class="p-10">
        <h2 class="text-[38px] font-bold pb-6 text-white">
            Your Ultimate Toolkit for Trading Success
        </h2>
        <p class="text-[#BBB8B8] font-openSans text-[18px] mt-4">Empower your trading journey with confidence. Our platform equips you with insights and tools for <br> financial triumph.</p>
    </div>

    <div class="w-[95%] mx-auto gap-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        
        <div class="border rounded border-[#2F2F2F]">
            <LottieComponent animationPath="/json/4.json" />
        </div>
        <div class="border rounded border-[#2F2F2F]">
            <LottieComponent animationPath="/json/2.json" />
        </div>
        <div class="border rounded border-[#2F2F2F]">
            <LottieComponent animationPath="/json/1.json" />
        </div>
    </div>
</template>

<script setup>
import LottieComponent from './utils/LottieComponent.vue';
import img1 from '../assets/img/pricing1.png';

const details = [
    {
        title: 'Help or support',
        img: img1,
        description: 'Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps.'
    },
    {
        title: 'Live Sessions',
        img: img1,
        description: 'Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps.'
    },
    {
        title: 'Free demo',
        img: img1,
        description: 'Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps.'
    }
]

</script>

<style scoped>
.bg-1{
    background-image: url('../assets/img/grid1.png');
    background-size: contain;
}
</style>