<template>

    <div class="max-w-4xl mx-auto mt-24  flex flex-col items-center bg-black">

        <div
            class="relative text-center  w-full md:w-[60%] text-[#F2AA55] text-xl font-extrabold uppercase tracking-widest px-6 py-2">
            Frequently Asked Questions
            <div
                class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent top-0">
            </div>
            <div
                class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent bottom-0">
            </div>
        </div>
        

        <div class="space-y-4 mx-auto text-[18px] w-full mt-8">
            <div v-for="(faq, index) in faqs" :key="index" class="relative">
                <button @click="faq.isOpen = !faq.isOpen"
                    class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
                    <span class="text-[#f2aa55] text-base font-bold">{{ faq.question }}</span>
                    <img src="/src/assets/svg/plus_gold.svg" :class="[
                        'w-4 h-4 transition-transform duration-200',
                        { 'rotate-45': faq.isOpen }
                    ]" />
                </button>
                
                
                <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-base text-[#F2AA55]">
                    {{ faq.answer }}
                </div>
                <div
                    class="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent bottom-0">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';


const faqs = ref([
    {
        question: 'What is Matrix One?',
        answer: 'Matrix One is a premium subscription that gives you access to all trading features in one package—indicators, signals, algo trading, manual trading, screeners, and more.',
        isOpen: false
    },
    {
        question: 'What features are included in Matrix One?',
        answer: `With Matrix One, you get: 
✔ Advanced Indicators & Signals – Stay ahead with real-time insights.
✔ Algo Trading & Manual Trading – Automate or take full control.
✔ Smart Screeners – Spot the best opportunities instantly.
✔ Exclusive Benefits – Priority support, special updates, and more.`,
        isOpen: false
    },
    {
        question: 'Is Matrix One a one-time payment?',
        answer: 'No, Matrix One is a yearly subscription that ensures uninterrupted access to all features and benefits.',
        isOpen: false
    },
    {
        question: 'Can I upgrade to Matrix One if I already have a subscription?',
        answer: 'Yes! You can upgrade anytime to unlock the full suite of premium features.',
        isOpen: false
    },
    {
        question: 'Is there a refund policy?',
        answer: 'Due to the premium nature of Matrix One, we currently do not offer refunds. However, you can cancel future renewals anytime.',
        isOpen: false
    },
    {
        question: 'How do I subscribe to Matrix One?',
        answer: 'Simply click the “Upgrade Now” button and complete the secure payment process. You’ll get instant access to all features.',
        isOpen: false
    }
])


</script>