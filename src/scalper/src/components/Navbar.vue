<template>
    <nav class="flex justify-between items-center p-2 md:p-4 w-full z-30 bg-[#161a1e] relative">
      <!-- Left section -->
      <div class="flex items-center gap-3">
        <RouterLink to="/">
          <img src="/src/assets/svg/matrix-logo.svg" alt="logo" class="w-32 md:w-40">

        </RouterLink>
        <div class="flex bg-[#1D2125] rounded-full py-2 px-2 items-center">
          <img src="/src/assets/svg/sebi.svg" alt="SEBI logo">
          <div class="text-white text-xs ml-2 font-bold pl-1 pr-3">
            <p>SEBI Registered</p>
            <p>INH000019035</p>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu Button -->
      <button 
        @click="toggleNav" 
        class="md:hidden relative z-50 w-6 h-6 flex flex-col justify-center items-center"
      >
        <span 
          class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[0.3rem]': isNavOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white rounded-full my-1 transition-all duration-300"
          :class="{ 'opacity-0': isNavOpen }"
        ></span>
        <span 
          class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[0.3rem]': isNavOpen }"
        ></span>
      </button>
  
      <!-- Desktop Menu -->
      <div class="md:flex items-center justify-end flex-1 gap-6 hidden">
        <ul class="flex items-center gap-6 text-sm text-[#D6D6D6]">
          <li v-for="item in navItems" :key="item.name"
              class="cursor-pointer transition-all duration-200 hover:text-white"
              :class="{ 'text-white': activeItem === item.name }"
              @click="changeActiveItem(item.name)">
              <RouterLink :to="item.path" >{{ item.name }}</RouterLink>
          </li>
        </ul>
  
        <a 
          href="https://app.hifiinvesting.com/" 
          target="_blank"
          class="text-[#F3F8F9] text-sm px-6 py-3 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300"
        >
          <div class="content vertical flex justify-center">
            <div class="text">Sign Up / Login</div>
            <div class="hover-text">Click Here</div>
          </div>
        </a>
      </div>
  
      <!-- Mobile Menu -->
      <div 
        v-show="isNavOpen"
        class="fixed inset-0 bg-[#161a1e] z-40 md:hidden flex flex-col"
      >
        <div class="flex flex-col items-center justify-center flex-1 p-4">
          <ul class="flex flex-col items-center gap-6 text-lg text-[#D6D6D6]">
            <li v-for="item in navItems" :key="item.name"
                class="cursor-pointer transition-all duration-200 hover:text-white w-full text-center"
                :class="{ 'text-white': activeItem === item.name }"
                @click="changeActiveItem(item.name)">
              <RouterLink :to="item.path" class="block py-2">{{ item.name }}</RouterLink>
            </li>
          </ul>
  
          <a 
            href="https://app.hifiinvesting.com/" 
            target="_blank"
            class="text-[#F3F8F9] text-sm px-6 py-3 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300 mt-8"
          >
            Sign Up / Login
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const navItems = [
    { name: 'Screeners', path: '/screener' },
    { name: 'Traders', path: '/trader' },
    { name: 'Investors', path: '/investor' },
    { name: 'Scalpers', path: '/scalper' },

]
  
  const activeItem = ref('Home')
  const isNavOpen = ref(false)
  
  const changeActiveItem = (name) => {
    activeItem.value = name
    isNavOpen.value = false
  }
  
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
    document.body.style.overflow = isNavOpen.value ? 'hidden' : ''
  }
  </script>
  
  <style scoped>
  .content {
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  
  .text,
  .hover-text {
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .vertical .text,
  .vertical .hover-text {
    transform: translateY(0%);
  }
  
  .hover-text {
    position: absolute;
  }
  
  .vertical .hover-text {
    bottom: -100%;
  }
  
  a:hover .vertical .hover-text,
  a:hover .vertical .text {
    transform: translateY(-100%);
  }
  </style>