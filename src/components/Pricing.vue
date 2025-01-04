<template>
    <div class="p-10">
        <h2 class="text-[38px] font-bold pb-6 text-white">
            Your Ultimate Toolkit for Trading Success
        </h2>
        <p class="text-[#BBB8B8] text-[18px] mt-4">Empower your trading journey with confidence. Our platform equips you with insights and tools for <br> financial triumph.</p>
    </div>

    <div class="w-[95%] mx-auto flex justify-evenly gap-10 mt-16 overflow-x-auto">
        <div v-for="detail in details" class="min-w-96 border rounded border-[#2F2F2F] px-6 bg-[#1D2125]">
            <div class="flex justify-center">
                <div class="py-14">
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