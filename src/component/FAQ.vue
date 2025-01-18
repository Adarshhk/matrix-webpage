<template>
    <div class="mx-auto px-4 mt-24 lg:my-32 lg:mb-40">
      <div class="text-center mb-12">
        <h2 class="text-[27px] font-openSans font-semibold mb-2 text-white">
          FAQ's
        </h2>
        <p class="text-white mt-4 font-openSans text-md">
          Find answers to common questions and get the clarity you need to make the most of our platform.
        </p>
      </div>
  
      <div class="space-y-4 w-[90%] max-w-4xl mx-auto text-[18px]">
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
      question: 'Do I need trading experience to use algo trading?',
      answer: 'No, algo trading platforms are designed for both beginners and experienced traders. They automate strategies, making it user-friendly for everyone.',
      isOpen: false
    },
    {
      question: 'Can I test the algo without risking real money?',
      answer: 'Yes, we offer a paper trading feature to simulate trades without risking actual funds.',
      isOpen: false
    },
    {
      question: 'How much can I earn with algo trading?',
      answer: 'Earnings depend on market conditions, the strategy used, and investment size. Algo trading optimizes opportunities but doesn’t guarantee profits.',
      isOpen: false
    },
    {
      question: 'Can I customize my trading strategies in algo trading?',
      answer: 'Yes, our platform allows you to create, modify, and automate your own trading strategies to suit your goals.',
      isOpen: false
    },
    {
      question: 'Is algo trading better than manual trading?',
      answer: 'Algo trading removes emotional bias, improves execution speed, and is more efficient than manual trading for most traders.',
      isOpen: false
    }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>