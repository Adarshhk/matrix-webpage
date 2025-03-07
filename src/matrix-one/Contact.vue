<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/80" @click="close"></div>
  
      <!-- Modal -->
      <div class="relative z-80 w-full max-w-xl bg-black border border-[#f2aa55]/30 rounded-lg p-6 mx-4">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="relative w-full text-[#F2AA55] text-sm font-extrabold uppercase tracking-widest px-6 py-2 mb-4">
            Contact Us
            <div class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent top-0"></div>
            <div class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent bottom-0"></div>
          </div>
          <p class="text-[#F2AA55] text-sm">
            We're here to support you on your trading journey. Have questions or need help?
            Our team is ready to guide you.
          </p>
        </div>
  
        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
            
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="w-full px-4 py-3 rounded-lg border bg-transparent border-[#f2aa55]/30 text-[#f2aa55] placeholder-[#f2aa55]/40 focus:outline-none focus:border-[#f2aa55]"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email Address"
            class="w-full px-4 py-3 rounded-lg border bg-transparent border-[#f2aa55]/30 text-[#f2aa55] placeholder-[#f2aa55]/40 focus:outline-none focus:border-[#f2aa55]"
            required
          />
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Your Phone Number"
            class="w-full px-4 py-3 rounded-lg border bg-transparent border-[#f2aa55]/30 text-[#f2aa55] placeholder-[#f2aa55]/40 focus:outline-none focus:border-[#f2aa55]"
            required
          />
          <textarea
            v-model="form.message"
            placeholder="Type your Message Here...."
            class="w-full px-4 py-3 rounded-lg border bg-transparent border-[#f2aa55]/30 text-[#f2aa55] placeholder-[#f2aa55]/40 focus:outline-none focus:border-[#f2aa55] min-h-[120px]"
            required
          ></textarea>
  
          <button
            type="submit"
            class="w-full px-6 py-3 bg-gradient-to-r from-[#f2aa55] to-[#8c6231] text-[#222222] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
  
        <!-- Close button -->
        <!-- <button 
          @click="onClose" 
          class="absolute top-4 right-4 text-[#222222]/60 hover:text-[#222222]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const emit = defineEmits(['close']);
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = async () => {
    try {
      await axios.post('https://v3landing.matrixtradingtech.com/contact-us', form.value);
      // Reset form after successful submission
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      props.onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const close = () => {
    emit('close');
  }
  </script>