<template>
  <nav class="flex justify-between items-center p-2 md:p-4 w-full z-40 fixed top-0" :class="{'bg-gradient-to-b from-[#161a1e] to-transparent' : !showProductMenu , 'bg-[#161a1e]' : showProductMenu}">
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
    <button @click="toggleNav" class="md:hidden relative z-50 w-6 h-6 flex flex-col justify-center items-center">
      <span class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
        :class="{ 'rotate-45 translate-y-[0.3rem]': isNavOpen }"></span>
      <span class="w-6 h-0.5 bg-white rounded-full my-1 transition-all duration-300"
        :class="{ 'opacity-0': isNavOpen }"></span>
      <span class="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-[0.3rem]': isNavOpen }"></span>
    </button>

    <!-- Desktop Menu -->
    <div class="md:flex items-center justify-end flex-1 gap-6 hidden">
      <ul class="flex items-center gap-6 text-sm text-[#D6D6D6]">
        <li v-for="item in navItems" :key="item.name"
          class="cursor-pointer transition-all duration-200 hover:text-white relative"
          :class="{ 'text-white': activeItem === item.name }"
          @click="handleItemClick(item)">
          <a class="flex items-center gap-1">
            {{ item.name }}
            <img src="/src/assets/svg/toggle.svg" v-if="item.name === 'Product'" class="transition-all duration-150 w-4 h-4" 
              :class="{ 'rotate-180': showProductMenu && item.name === 'Product' }" />
          </a>
        </li>
      </ul>

      <a href="https://app.hifiinvesting.com/" target="_blank"
        class="text-[#F3F8F9] text-sm px-6 py-3 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300">
        <div class="content vertical flex justify-center">
          <div class="text">Sign Up / Login</div>
          <div class="hover-text">Click Here</div>
        </div>
      </a>
    </div>

    <!-- Product Dropdown (Desktop) -->
    <Transition name="fade">
      <div v-if="showProductMenu" 
        class=" left-0 right-0 top-20 bg-[#161a1e] fixed inset-0 z-40 hidden md:block border-t border-[#2F2F2F]">
        <div class="bg-[#161a1e] p-5 rounded-b-md">
          <div class="w-full flex justify-between  items-center py-4">
            <h2 class="text-white font-bold text-[20px] ">Products</h2>
            <button @click="showProductMenu = false"><img src="/src/assets/svg/X.svg" alt="" class="w-4 h-4"></button>
          </div>
          <div class="grid grid-cols-3 gap-8">
            <RouterLink :to="item.path" v-for="item in productItems" :key="item.title" 
              class="p-2 flex rounded-md gap-6 border border-[#1a1a1a] items-start hover:border-[#2F2F2F] transition-all duration-150">
              <img :src="item.icon" alt="" class="">
              <div>
                <h2 class="text-white text-[16px] font-semibold">{{ item.title }}</h2>
                <p class="text-[#D6D6D6] text-[14px] font-openSans mt-3">
                  {{ item.description }}
                </p>
              </div>
            </RouterLink>
          </div>
          <img src="/src/assets/img/productbanner.png" alt="" class="my-10">
        </div>
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide-fade">
      <div v-if="isNavOpen" class="fixed inset-0 bg-[#161a1e] z-40 md:hidden flex flex-col">
        <div class="flex flex-col items-start justify-start flex-1 p-4">
          <ul class="flex flex-col items-start gap-6 pt-2 text-lg text-[#D6D6D6] w-full">
            <li v-for="item in navItems" :key="item.name"
              class="cursor-pointer transition-all duration-200 hover:text-white w-full"
              :class="{ 'text-white': activeItem === item.name }">
              <div class="flex items-center justify-start gap-1" @click="toggleProductMenu(item)">
                {{ item.name }}
                <img src="/src/assets/svg/toggle.svg" v-if="item.name === 'Product'" class="w-4 h-4" 
                  :class="{ 'rotate-180': showMobileProductMenu && item.name === 'Product' }" />
              </div>
              <Transition name="slide-down">
                <ul v-if="showMobileProductMenu && item.name === 'Product'" class="mt-4 ml-4">
                  <li v-for="product in productItems" :key="product.title" class="mb-3">
                    <RouterLink :to="product.path" class="flex items-center gap-2">
                      <img :src="product.icon" alt="" class="w-6 h-6">
                      <span class="text-[#D6D6D6] text-md">{{ product.title }}</span>
                    </RouterLink>
                  </li>
                </ul>
              </Transition>
            </li>
          </ul>

          <a target="_blank" href="#"
            class="text-[#F3F8F9] animate text-sm lg:px-6 px-4 py-3 rounded-full bg-[#00B852] btn btn-anim shadow-md shadow-[#00b8539e] mt-6">
            <div class="content vertical flex justify-center">
              <div class="text">Sign Up / Login</div>
              <div class="hover-text">Click Here</div>
            </div>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import icon1 from '/src/assets/producticons/producticon (1).svg'
import icon2 from '/src/assets/producticons/producticon (2).svg'
import icon3 from '/src/assets/producticons/producticon (3).svg'
import icon4 from '/src/assets/producticons/producticon (4).svg'
import icon5 from '/src/assets/producticons/producticon (5).svg'
import icon6 from '/src/assets/producticons/producticon (6).svg'

const navItems = [
  { name: 'Product', path: '#features' },
  { name: 'Pricing', path: '#hero' },
  { name: 'Contact Us', path: '#why' },
  { name: 'News', path: '#media' },
]

const productItems = [
  {
    title: 'Screener',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon6,
    path: "/screener"
  },
  {
    title: 'Indicator',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon1,
    path: "/indicator"
  },
  {
    title: 'Algo Trading',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon2,
    path: "/screener"
  },
  {
    title: 'Webhook',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon3,
    path: "/webhook"
  },
  {
    title: 'Manual Trade',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon4,
    path: "/trader"
  },
  {
    title: 'Signals',
    description: 'Lorem ipsum dolor sit amet consectetur. Et males usda lacinia consectetur in aliquet.',
    icon: icon5,
    path: "/signals"
  },
]

const activeItem = ref('Home')
const isNavOpen = ref(false)
const showProductMenu = ref(false)
const showMobileProductMenu = ref(false)

const handleItemClick = (item) => {
  if (item.name === 'Product') {
    showProductMenu.value = !showProductMenu.value
    isNavOpen.value = false
  } else {
    activeItem.value = item.name
    showProductMenu.value = false
    isNavOpen.value = false
  }
}

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
  showProductMenu.value = false
  document.body.style.overflow = isNavOpen.value ? 'hidden' : ''
}

const toggleProductMenu = (item) => {
  if (item.name === 'Product') {
    showMobileProductMenu.value = !showMobileProductMenu.value
  } else {
    activeItem.value = item.name
    showMobileProductMenu.value = false
  }
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

/* Fade animation for desktop product dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Slide fade animation for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Slide down animation for mobile product submenu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
  max-height: 1000px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>