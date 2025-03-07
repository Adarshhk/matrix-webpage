<template>
    <div class="min-h-screen bg-[#161A1E] flex items-start justify-center p-4 font-cabinet-grotesk">
      <div class="w-full max-w-2xl mt-8">
        <!-- Header -->
        <div class="flex items-center gap-4 mb-6 text-white">
          <button class="p-2 hover:bg-white/5 rounded-lg">
             <i class="pi pi-arrow-left"></i>
          </button>
          <div>
            <h1 class="text-2xl font-semibold">Your Invoice Summary</h1>
            <p class="text-gray-400">Please wait until all checks are done</p>
          </div>
        </div>
  
        <!-- Invoice Items -->
        <div class="space-y-4">
          <div v-for="(item, index) in invoiceItems" :key="index" 
               class="bg-white/5 rounded-lg p-6">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div> 
                  <!-- <img src="../assets/svg/Layer.svg" alt=""> -->
                </div>
                <div>
                  <h3 class="text-white font-semibold">{{ item.title }}</h3>
                  <p class="text-gray-500">{{ item.description }}</p>
                </div>
              </div>
              <button class="px-4 py-1 text-gray-400 bg-white/5 rounded-full">
                Remove
              </button>
            </div>
            
            <div class="mt-6 border-t border-dashed border-gray-700 pt-4">
              <div class="flex justify-between text-white">
                <span>Subtotal</span>
                <span>₹{{ item.amount.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Plan Details</span>
                <span class="text-white">{{ item.plan }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Valid Till</span>
                <span class="text-white">{{ item.validTill }}</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- GST Checkbox -->
        <div class="bg-white/5 rounded-lg p-6 mt-4">
          <label class="flex items-center gap-3 text-white cursor-pointer">
            <input type="checkbox" v-model="useGST" class="w-5 h-5 rounded border-gray-600 bg-transparent">
            <span>Use GST Invoice</span>
          </label>
        </div>
  
        <!-- Total and Pay Button -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span class="text-gray-400">Subtotal</span>
              <p class="text-white text-2xl font-semibold">₹12000.00</p>
            </div>
            <button class="w-full md:w-[237px] bg-[#00B852] hover:bg-[#00A048] text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Pay Now
            </button>
          </div>
        </div>
  
        <!-- Footer Links -->
        <div class="flex flex-wrap gap-4 justify-center mt-8 text-gray-400 text-sm">
          <a href="#" class="hover:text-white">Terms & Condition</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Investor Journey</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Investor</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Complaint</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const useGST = ref(false)
  
  const invoiceItems = ref([
    {
      title: 'Algo Trading',
      description: 'Automate strategies for smarter trading.',
      amount: 12000.00,
      plan: 'Essential (Quaterly)',
      validTill: '12 Jan 2023'
    },
    {
      title: 'Algo Trading',
      description: 'Automate strategies for smarter trading.',
      amount: 12000.00,
      plan: 'Essential (Quaterly)',
      validTill: '12 Jan 2023'
    }
  ])
  

  </script>
  
  <style>
  @font-face {
    font-family: 'Cabinet Grotesk';
    src: url('path-to-cabinet-grotesk-font.woff2') format('woff2');
    font-weight: 400 700;
    font-display: swap;
  }
  
  .font-cabinet-grotesk {
    font-family: 'Cabinet Grotesk', sans-serif;
  }
  </style>