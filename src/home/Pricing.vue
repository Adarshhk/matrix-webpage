

<template>
    <div class="p-4 mt-24 lg:mt-32">
        <h2 class="md:text-[38px] text-[27px] font-extrabold text-white text-center mx-auto">
            Your Ultimate Toolkit for Trading Success
        </h2>
        <p class="max-w-5xl text-[#BBB8B8] font-openSans mt-4 text-center mx-auto text-[14px] md:text-[18px] ">Explore
            the full potential of your trading journey with personalized support. Our platform equips you with the
            resources and insights to confidently navigate every decision with clarity and precision.</p>
    </div>

    <div class="w-[95%] mx-auto gap-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div v-for="(detail , index) in details" class="pb-5 rounded-xl px-6 bg-[#1D2125]">
            <div class="flex justify-center">
                <div class=" flex items-center">
                    <img :src="detail.img" alt="pricing" class="object-contain" :class="{'pt-7' : index === 1}">
                </div>
            </div>
            <div class="text-left group">
                <h3 class="text-[23px] font-bold text-white group-hover:-translate-y-4 transition-all duration-200">{{
                    detail.title }}</h3>
                <p
                    class="group-hover:-translate-y-4 transition-all duration-200 text-[#dfdfdf] text-[16px] max-w-6xl font-openSans mx-auto mt-2">
                    {{ detail.description }}</p>
                <button @click="detail.func"
                    class="hidden  lg:flex translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-[#00B852] font-bold gap-1">
                    {{ detail.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
                <button @click="detail.func" class="lg:hidden text-[#00B852] flex gap-1 font-bold mt-3">
                    {{ detail.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import {  useRouter } from 'vue-router';
import img1 from '/src/assets/img/pricing1.png';
import img2 from '/src/assets/img/pricing2.png';
import img3 from '/src/assets/img/pricing3.png';

const details = [
    {
        title: 'Expert Support',
        img: img1,
        description: 'Get the guidance you need, not just for setup and fixes, but to truly thrive. Our experts are here to make your journey smoother, ensuring you trade with confidence.',
        btn: 'Schedule a call',
        func : () => window.open('https://calendly.com/metaalgomatrix01/new-meeting' , "_blank")
    },
    {
        title: 'Free Demo',
        img: img3,
        description: "Take your first step into trading without the fear of losing. Our free demo lets you explore, experiment, and build confidence—so when you're ready, you trade with certainty, not hesitation.",
        btn: 'Get Started',
        func : () => window.open('https://v3.matrixtradingtech.com/' , "_blank")
    },
    {
        title: 'Live Sessions',
        img: img2,
        description: 'Join live sessions where experts don’t just share strategies—they help you grow. Gain confidence, refine your skills, and be part of a community that wants to see you win.',
        btn: 'Book a Webinar',
        func : () => window.open('https://calendly.com/metaalgomatrix01/new-meeting' , "_blank")
    }
]



</script>

<style scoped></style>