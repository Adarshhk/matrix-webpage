<template>
    <div class="mx-auto px-4 mt-24 lg:my-32 lg:mb-40">
      <div class="text-center mb-24">
        <h2 class="text-[27px] lg:text-[38px] font-semibold mb-2 text-white">
          Frequently Asked Questions
        </h2>
        <p class="text-white mt-4 font-openSans text-md">
          Find answers to common questions and get the clarity you need to make the most of our platform.
        </p>
      </div>
  
      <div class="space-y-4 w-[90%]  mx-auto text-[18px]">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-[#FFFFFF11]">
          <button
            @click="toggleFaq(index)"
            class=" rounded-sm w-full px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 "
          >
            <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
            <img src="/src/assets/svg/faqcross.svg"
              :class="[
                'w-10 h-10 transition-transform duration-200',
                { 'rotate-45': faq.isOpen }
              ]"
            />
          </button>
          <div
            v-show="faq.isOpen"
            class="py-4 px-6 pb-4 text-[#dfdfdf]"
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