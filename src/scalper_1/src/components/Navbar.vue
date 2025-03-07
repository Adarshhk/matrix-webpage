<template>
  <nav class="flex justify-between items-center p-2 md:p-4 w-full z-40 fixed top-0 "
    :class="{ 'bg-gradient-to-b from-[#161a1e] to-[#161a1e]': !showProductMenu, 'bg-[#161a1e]': showProductMenu }">
    <!-- Left section -->
    <div class="flex items-center gap-3 pl-2">
      
      <RouterLink to="/">
        <img src="/src/assets/svg/matrix-logo.svg" alt="logo" class="w-28 md:w-40">
      </RouterLink>
      <!-- <div class="md:flex bg-[#1D2125] rounded-full hidden md:p-2 items-center">
        <img src="/src/assets/svg/sebi.svg" alt="SEBI logo" class="w-8 md:w-10">
        <div class="text-white text-xs ml-2 font-bold pl-1 pr-3">
          <p>SEBI Registered</p>
          <p>INH000019035</p>
        </div>
      </div>
      <div class="md:hidden bg-[#1D2125] rounded-full px-2 pr-4 py-1 flex items-center gap-1">
        <img src="/src/assets/svg/sebi.svg" alt="SEBI logo" class="w-6">
        <div class="text-white text-[10px]">
          <p>SEBI Registered</p>
          <p>INH000019035</p>
        </div>
      </div> -->
      <img src="/src/assets/svg/sebii.svg" alt="" class="w-44">
    </div>

    <!-- Desktop Menu -->
    <div class="lg:flex items-center justify-end flex-1 gap-6 hidden">
      <ul class="flex items-center gap-12 text-[16px] text-[#D6D6D6]">
        <li v-for="item in navItems" :key="item.name"
          class="cursor-pointer transition-all duration-200 hover:text-white relative"
          :class="{ 'text-white': activeItem === item.name }" @click="handleItemClick(item)">
          <a class="flex items-center gap-1 font-openSans">
            {{ item.name }}
            <img v-if="item.name === 'Product'" src="/src/assets/svg/toggle.svg"
              class="transition-all duration-150 w-4 h-4 rotate-180"
              :class="{ 'rotate-0': showProductMenu && item.name === 'Product' }" />
          </a>
        </li>
      </ul>

      <a href="https://app.hifiinvesting.com/" target="_blank"
        class="text-[#F3F8F9] btn btn-anim text-sm px-6 py-3 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300">
        <div class="content vertical flex justify-center">
          <div class="text font-openSans">Sign Up / Login</div>
          <div class="hover-text font-openSans">Sign Up / Login</div>
        </div>
      </a>
    </div>

    <!-- Product Dropdown (Desktop) -->
    <Transition name="fade">
      <div v-if="showProductMenu"
        class="left-0 right-0 top-20 bg-black bg-opacity-80 inset-0 fixed z-20 hidden md:block border-t border-[#2F2F2F]">
        <div class="bg-[#161a1e] p-5 rounded-b-md pb-8">
          <div class="w-full flex justify-between items-center py-4">
            <h2 class="text-white font-bold text-[20px]">Products</h2>
            <button @click="showProductMenu = false"><img src="/src/assets/svg/X.svg" alt="" class="w-4 h-4 mr-3"></button>
          </div>
          <div class="grid grid-cols-3 gap-8">
            <button @click="handleRouteChange(item.path)" v-for="item in productItems" :key="item.title"
              class="p-2 py-4 flex rounded-md gap-6 border border-[#1a1a1a] items-start hover:border-[#2F2F2F] hover:bg-[#1D2125] transition-all duration-200 justify-start hover:scale-105">
              <img :src="item.icon" alt="" class="">
              <div class="text-left">
                <h2 class="text-white text-[16px] font-semibold">{{ item.title }}</h2>
                <p class="text-[#D6D6D6] text-[14px] font-openSans mt-3">
                  {{ item.description }}
                </p>
              </div>
            </button>
          </div>
          <img src="/src/assets/img/productbanner.png" alt="" class="mt-6">
        </div>
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide-fade">
      <div v-if="isNavOpen"
        class="fixed top-20 md:top-20 left-1/2 transform -translate-x-1/2 border-[#2f2f2f] rounded w-[95%] border bg-[#1D2125] z-40 flex flex-col overflow-y-auto text-[16px] pb-32 h-[85dvh]">
        <div class="flex flex-col items-start justify-start flex-1 p-4">
          <ul class="flex flex-col items-start gap-6 pt-2 text-[#D6D6D6] w-full">
            <li v-for="item in navItems" :key="item.name"
              class="cursor-pointer transition-all duration-200 hover:text-white w-full"
              :class="{ 'text-white': activeItem === item.name }">
              <div class="flex items-center justify-between gap-1" @click="toggleProductMenu(item)">
                {{ item.name }}
                <img v-if="item.name === 'Product'" src="/src/assets/svg/toggle.svg" class="rotate-180 w-4 h-4"
                  :class="{ 'rotate-0': showMobileProductMenu && item.name === 'Product' }" />
              </div>
              <Transition name="slide-down">
                <div v-if="showMobileProductMenu && item.name === 'Product'">
                  <ul class="mt-4">
                    <li v-for="product in productItems" :key="product.title" class="mb-2 py-2 w-full">
                      <button @click="handleMobileRouteChange(product.path)" class="flex gap-2 justify-start border-[#2f2f2f] ">
                        <div class="mt-1">
                          <img :src="product.icon" alt="" class="w-10">
                        </div>
                        <div class="text-left">
                          <span class="text-[white] font-semibold">{{ product.title }}</span>
                          <p class="text-[#D6D6D6] text-sm">{{ product.description }}</p>
                        </div>
                      </button>
                    </li>
                  </ul>

                </div>
              </Transition>
            </li>
          </ul>
          <div class="flex mt-4">
            <a href="#" target="_blank"
              class="text-[#F3F8F9] text-sm px-6 py-3 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300">
              <div class="content vertical flex justify-center ">
                <div class="text ">Sign Up / Login</div>
                <div class="hover-text">Click Here</div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </Transition>
    <div class="">
      <button @click="toggleNav" class="lg:hidden">
        <img v-if="isNavOpen" src='/src/assets/svg/X.svg' alt="" class="w-4">
        <img v-if="!isNavOpen" src='/src/assets/svg/ham.svg' alt="" class="w-7">
      </button>
    </div>

  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
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
  { name: 'Blogs & Insights', path: '/blogs' },
  { name: 'About Us', path: '/about' },
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
    router.push(item.path);
  }
}

const router = useRouter()

const handleRouteChange = (path) => {

  router.push(path);
  showProductMenu.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling
  })
}
const handleMobileRouteChange = (path) => {
  console.log(path)
  router.push(path);
  isNavOpen.value = false;
  showMobileProductMenu.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling
  })
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

watch(showMobileProductMenu, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      const mobileMenu = document.querySelector('.slide-fade-enter-active')
      if (mobileMenu) {
        mobileMenu.scrollTop = 0
      }
    }, 0)
  }
})
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

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