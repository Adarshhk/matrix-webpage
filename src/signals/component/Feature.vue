<template>
    <div class="text-center">
        <h2 class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold max-w-2xl mx-auto">
            Because Accuracy Means Everything in Trading.
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-16 lg:my-24">
            <div v-for="feat in features" class="flex flex-col space-y-4 p-4">
                <img :src="feat.img" alt="" class="w-24" >
                <h4 class="text-left text-white text-[24px] font-bold leading-tight">{{ feat.title }}</h4>
                <hr class="border-1  border-[#ffffff22]">
                <p class="text-[#dfdfdf] font-openSans text-[16px] text-left" >{{ feat.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '/src/assets/svg/strategy.svg'
import img2 from '/src/assets/svg/reminder.svg'
import img3 from '/src/assets/svg/share.svg'
import img4 from '/src/assets/svg/review.svg'
import img5 from '/src/assets/svg/web.svg'
import img6 from '/src/assets/svg/security.svg'

const features = [
    {
        img : img1,
        title : 'Proven Track Record of Success',
        description : 'Our signals come with confidence, not guesswork—crafted from data, expertise, and years of experience. Trade smarter, move faster, and get closer to your financial goals with every call.',
    },
    {
        img : img2,
        title : 'Instant Alerts, Zero Delays',
        description : 'Opportunities don’t wait, and neither should you. Get real-time alerts the moment the market moves, keeping you ready to act with confidence.',
    },
    {
        img : img3,
        title : 'Risk Management Built-In',
        description : 'Your hard-earned capital deserves protection. With thoughtfully placed stop-loss levels, we help you minimize risk while keeping your profit potential alive—so you can trade with confidence and peace of mind.',
    },
    {
        img : img4,
        title : 'One-Click Trade Execution',
        description : 'Trade effortlessly with a single click. No more guesswork, just precise entries and exits so you stay focused on what truly matters—your success.',
    },
    {
        img : img5,
        title : 'Accessible Anytime, Anywhere',
        description : 'Stay in tune with the markets, no matter where life takes you. With seamless access on your desktop, tablet, or mobile, you’ll never miss an opportunity to make your next move.',
    },
    {
        img : img6,
        title : 'No Guesswork, Just Results',
        description : 'Say goodbye to the stress of emotional trading. With our signals, you’ll find clarity and confidence, allowing you to trade with calm, focus, and discipline.',
    }
];



</script>