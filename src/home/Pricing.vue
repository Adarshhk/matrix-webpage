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
        <div v-for="detail, in details" class="pb-5 rounded-xl px-6 bg-[#1D2125]">
            <div class="flex justify-center h-[45vh]">
                <div class=" flex items-center">
                    <img :src="detail.img" alt="pricing" class="object-cover">
                </div>
            </div>
            <div class="text-left group">
                <h3 class="text-[23px] font-bold text-white group-hover:-translate-y-4 transition-all duration-200">{{
                    detail.title }}</h3>
                <p
                    class="group-hover:-translate-y-4 transition-all duration-200 text-[#dfdfdf] text-[16px] max-w-6xl font-openSans mx-auto mt-2">
                    {{ detail.description }}</p>
                <button
                    class="hidden  lg:flex translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-[#00B852] font-bold gap-1">
                    {{ detail.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
                <button class="lg:hidden text-[#00B852] flex gap-1 font-bold mt-3">
                    {{ detail.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import img1 from '/src/assets/img/pricing1.png';
import img2 from '/src/assets/img/pricing2.png';
import img3 from '/src/assets/img/pricing3.png';

const details = [
    {
        title: 'Expert Support',
        img: img1,
        description: 'Receive personalized assistance from specialists for setup, troubleshooting, and strategy optimization, ensuring you’re always supported.',
        btn: 'Schedule a call'
    },
    {
        title: 'Free Demo',
        img: img2,
        description: 'A risk-free demo allows you to test strategies, explore features, and gain confidence before diving into live trading.',
        btn: 'Get Started'
    },
    {
        title: 'Live Sessions',
        img: img3,
        description: 'You get access to real-time webinars and workshops with expert insights, tips, and strategy refinements to enhance your trading skills.',
        btn: 'Book a Webinar'
    }
]

</script>

<style scoped></style>