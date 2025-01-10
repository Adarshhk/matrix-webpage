
<!-- Call Correctly -->
<template>
    <div class="mx-auto px-0 2xl:px-16 py-12 mt-10">
      <div class="text-center mb-12">
        <h2 class="text-[32px] md:text-[38px] 2xl:text-[48px]
 font-bold text-white mb-4">
          Frequently asked question's
        </h2>
        <p class="text-white mt-8">
          Let our bot do trading for you, you just chill and relax
        </p>
      </div>
  
      <div class="space-y-4 w-[90%] mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="">
          <button
            @click="toggleFaq(index)"
            class="bg-[#1D2125] rounded-sm w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#2b3137] transition-colors duration-200 "
          >
            <span class="font-medium text-white">{{ faq.question }}</span>
            <img src="/src/assets/svg/faqcross.svg"
              :class="[
                'w-5 h-5 transition-transform duration-200',
                { 'rotate-45': faq.isOpen }
              ]"
            />
          </button>
          <div
            v-show="faq.isOpen"
            class="bg-[#1D2125] py-4 px-6 pb-4 text-[#787878]"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: 'What is algorithmic trading?',
      answer: 'Algorithmic trading uses automated strategies to execute trades based on market data and trends.',
      isOpen: false
    },
    {
      question: 'How do I get started with HiFi Investment?',
      answer: 'Getting started is easy! Create an account, complete your profile, and follow our step-by-step guide to begin trading.',
      isOpen: false
    },
    {
      question: 'Can I customize my trading strategies?',
      answer: 'Yes, you can customize and fine-tune your trading strategies to match your investment goals and risk tolerance.',
      isOpen: false
    },
    {
      question: 'Do I need to have previous trading experience?',
      answer: 'No prior trading experience is required. Our platform is designed to be accessible for both beginners and experienced traders.',
      isOpen: false
    },
    {
      question: 'What markets can I trade on HiFi Investing?',
      answer: 'We offer access to a wide range of markets including stocks, cryptocurrencies, forex, and commodities.',
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>