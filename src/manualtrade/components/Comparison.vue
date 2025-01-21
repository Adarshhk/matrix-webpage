<template>
    <div class=" text-white py-16 px-4">
      <div class="max-w-6xl mx-auto">


        <!-- Header Section -->
         
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">
          Your Trading Success is Our Priority
        </h1>
        <p class="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          At our core, we believe in empowering traders to succeed. With cutting-edge technology, intuitive tools, 
          and a commitment to transparency, we provide an edge that other platforms simply can't match.
        </p>
  
        <!-- Comparison Section -->
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Other Platform Column -->
          <div class="bg-[#1E1E1E] rounded-2xl p-8">
            <div class="flex items-center gap-3 mb-8">
              <div class="bg-[#1E1E1E] p-2 rounded">
                <MonitorIcon class="w-8 h-8 text-white" />
              </div>
              <span class="text-xl font-semibold">Other Platform</span>
            </div>
  
            <div class="space-y-6">
              <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-4">
                <div class="mt-1 bg-[#2A2A2A] rounded-full p-1">
                  <XIcon class="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">{{ feature.title }}</h3>
                  <p class="text-sm text-gray-400">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Matrix Platform Column -->
          <div class="bg-[#00a048] rounded-2xl p-8 relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <!-- <img 
                src="" 
                alt="Matrix Trading Tech Logo" 
                class="h-12"
              /> -->
            </div>
  
            <div class="space-y-6 mt-8">
              <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-4">
                <div class="mt-1 bg-white/20 rounded-full p-1">
                  <CheckIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">{{ feature.title }}</h3>
                  <p class="text-sm text-white/90">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { XIcon, CheckIcon, MonitorIcon } from 'lucide-vue-next'
  
  const features = [
    {
      title: 'Trading Features',
      description: 'Offers automated trading strategies, real-time market data, and advanced analytics'
    },
    {
      title: 'Pricing and Plans',
      description: 'Flexible pricing plans with no hidden charges'
    },
    {
      title: 'Security and Compliance',
      description: 'End-to-end encryption, 2FA, and regulatory compliance with global standards'
    },
    {
      title: 'Customer Support',
      description: '24/7 support via live chat, email, and phone'
    }
  ]
  </script>