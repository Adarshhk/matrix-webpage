<!-- <template>
    <div class="p-4">
        <h2 class="md:text-[38px] text-[27px] font-bold text-white text-center mx-auto">
            Your Ultimate Toolkit for Trading Success
        </h2>
        <p class="max-w-5xl text-[#BBB8B8] font-openSans mt-4 text-center mx-auto text-[16px] md:text-[18px] ">Explore the full potential of your trading journey with personalized support. Our platform equips you with the resources and insights to confidently navigate every decision with clarity and precision.</p>
    </div>

    <div class="w-[95%] mx-auto gap-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        
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
import img1 from '/src/assets/img/pricing1.png';

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
    background-image: url('/src/assets/img/grid1.png');
    background-size: contain;
}
</style> -->

<!--Not needed -->

<template>
    <div class="p-4 mt-24 lg:mt-32">
        <h2 class="md:text-[38px] text-[27px] font-bold text-white text-center mx-auto">
            Your Ultimate Toolkit for Trading Success
        </h2>
        <p class="max-w-5xl text-[#BBB8B8] font-openSans mt-4 text-center mx-auto text-[16px] md:text-[18px] ">Explore
            the full potential of your trading journey with personalized support. Our platform equips you with the
            resources and insights to confidently navigate every decision with clarity and precision.</p>
    </div>

    <div class="w-[95%] mx-auto gap-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div v-for="detail in details" class="border rounded border-[#2F2F2F] px-6 bg-[#1D2125]">
            <div class="flex justify-center ">
                <div class="py-14 bg-1">
                    <img :src="detail.img" alt="pricing" class="object-cover">
                </div>
            </div>
            <div class="text-left py-16">
                <h3 class="text-[23px] font-bold text-white">{{ detail.title }}</h3>
                <p class="text-[#7F7F7F] text-[18px] max-w-6xl mx-auto mt-4">{{ detail.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '/src/assets/img/pricing1.png';

const details = [
    {
        title: 'Expert Support:',
        img: img1,
        description: 'Get expert help for setup, troubleshooting, and strategy optimization anytime.'
    },
    {
        title: 'Free Demo:',
        img: img1,
        description: 'Explore features and test strategies risk-free to build confidence before live trading.'
    },
    {
        title: 'Live Sessions:',
        img: img1,
        description: 'Attend real-time webinars for tips, insights, and skill enhancement in trading.'
    }
]

</script>

<style scoped>
.bg-1 {
    background-image: url('/src/assets/img/grid1.png');
    background-size: contain;
}
</style>