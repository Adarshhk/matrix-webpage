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
        description : 'Our signals aren’t just guesses—they’re backed by data, expertise, and years of trading experience. We consistently deliver high-win rate calls, helping traders achieve their goals faster.',

    },
    {
        img : img2,
        title : 'Instant Alerts, Zero Delays',
        description : 'Markets move fast, and so do our signals. Receive real-time notifications the moment opportunities arise, ensuring you stay ahead.',
        
    },
    {
        img : img3,
        title : 'Risk Management Built-In',
        description : 'We prioritize your capital with carefully calculated stop-loss levels, keeping your risk minimal while maximizing reward potential.',
        
    },
    {
        img : img4,
        title : 'One-Click Trade Execution',
        description : 'Place trades directly from the signals with a single click, ensuring precise entry and exit points without the hassle of manual calculations.',
        
    },
    {
        img : img5,
        title : 'Accessible Anytime, Anywhere',
        description : 'Stay connected to the markets wherever you are. Access signals seamlessly on your desktop, tablet, or mobile app, so you never miss a trade.',
        
    },
    {
        img : img6,
        title : 'No Guesswork, Just Results',
        description : 'Say goodbye to emotional trading. Our signals remove the guesswork, empowering you to trade with discipline and focus.',
        
    }
]



</script>