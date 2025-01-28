<template>
  <nav class="flex justify-between items-center p-2 md:p-4 md:px-24 w-full z-50 fixed top-0"
    :class="{ 'bg-gradient-to-b from-[#161a1e] to-[#161a1e]': !showProductMenu, 'bg-[#161a1e]': showProductMenu }">
    <!-- Left section -->
    <RouterLink to="/">
      <img src="/src/assets/svg/matrix-logo.svg" alt="logo" class="w-28 md:w-32">
    </RouterLink>


    <!-- Desktop Menu -->
    <div class="lg:flex items-center justify-end flex-1 gap-6 hidden">
      <ul class="flex items-center gap-8 text-sm text-[#D6D6D6]">
        <li v-for="item in navItems" :key="item.name"
          class="cursor-pointer transition-all duration-200 hover:text-white relative"
          :class="{ 'text-white': activeItem === item.name }"
          @mouseenter="item.name === 'Product' ? handleProductMouseEnter() : null"
          @mouseleave="item.name === 'Product' ? handleProductMouseLeave() : null">
          <a class="flex items-center gap-2 font-openSans" @click="handleNavigation(item)">
            {{ item.name }}
            
            <img v-if="item.name === 'Product'" src="/src/assets/svg/toggle.svg"
              class="transition-all duration-150 w-4 h-4 rotate-180"
              :class="{ 'rotate-0': showProductMenu && item.name === 'Product' }" />
          </a>
        </li>
      </ul>

      <a href="https://app.hifiinvesting.com/" target="_blank"
        class="text-[#F3F8F9] btn btn-anim text-sm px-6 py-2 rounded-full bg-[#00B852] hover:bg-[#00a048] transition-all duration-300">
        <div class="content vertical flex justify-center">
          <div class="text font-openSans">Sign Up / Login</div>
          <div class="hover-text font-openSans">Sign Up / Login</div>
        </div>
      </a>
    </div>

    <!-- Product Dropdown (Desktop) -->
    <Transition name="fade">
      <div v-if="showProductMenu" class="left-0 right-0 top-16 inset-0 fixed hidden md:block "
        @mouseenter="handleProductMouseEnter">
        <div @mouseleave="handleProductMouseLeave"
          class="bg-[#161a1e] p-5 pt-4 rounded-b-md pb-8 max-w-[1280px] mx-auto mt-4 rounded">
          <h2 class="text-white font-bold text-[20px]">Products</h2>
          <hr class="h-px my-4 border-0  bg-[#373636] bg-opacity-50">
          <div class="grid grid-cols-3 gap-8 ">
            <div v-for="(item, index) in productItems" :key="item.title"
              class="p-2 py-4 flex gap-6 items-start group justify-start"
              :class="{ 'border-r border-[#373636] border-opacity-50 relative': index != 3 || index != 5, }"
              >
              <img :src="item.icon" alt="" class="">
              <div class="text-left">
                <h2 class="text-white text-[16px] font-semibold">{{ item.title }}</h2>
                <p class="text-[#D6D6D6] text-[14px] font-openSans mt-1 ">                 
                    {{ item.description }}
                </p>
                
                <div class="inset-0 backdrop-blur-sm absolute group-hover:opacity-100 opacity-0 left-0 bottom-0  text-sm font-semibold mt-2 transition-all flex justify-center items-center">
                  <button @click="handleProductClick(item.path)" class="text-[#161A1E] bg-white px-8 py-1 rounded-full">
                    
                    know more
                  </button>
                </div>
                
              </div>
            </div>

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
              <div class="flex items-center justify-between gap-1" @click="handleMobileNavClick(item)">
                {{ item.name }}
                <img v-if="item.name === 'Product'" src="/src/assets/svg/toggle.svg" class="rotate-180 w-4 h-4"
                  :class="{ 'rotate-0': showMobileProductMenu && item.name === 'Product' }" />
              </div>
              <Transition name="slide-down">
                <div v-if="showMobileProductMenu && item.name === 'Product'">
                  <ul class="mt-4">
                    <li v-for="product in productItems" :key="product.title" class="mb-2 py-2 w-full">
                      <button @click="handleProductClick(product.path)"
                        class="flex gap-2 justify-start border-[#2f2f2f]">
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

    <!-- Mobile Toggle Button -->
    <button @click="toggleNav" class="lg:hidden">
      <img :src="isNavOpen ? '/src/assets/svg/X.svg' : '/src/assets/svg/ham.svg'" :alt="isNavOpen ? 'Close' : 'Menu'"
        :class="isNavOpen ? 'w-4' : 'w-7'">
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import icon1 from '/src/assets/producticons/producticon (1).svg'
import icon2 from '/src/assets/producticons/producticon (2).svg'
import icon3 from '/src/assets/producticons/producticon (3).svg'
import icon4 from '/src/assets/producticons/producticon (4).svg'
import icon5 from '/src/assets/producticons/producticon (5).svg'
import icon6 from '/src/assets/producticons/producticon (6).svg'

// Navigation data
const navItems = [
  { name: 'Product', path: '#features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Blogs & Insights', path: '/blogs' },
  { name: 'About Us', path: '/about' },
]

const productItems = [
  {
    title: 'Screener',
    description: 'Discover trading opportunities quickly.',
    icon: icon6,
    path: "/screener"
  },
  {
    title: 'Indicator',
    description: ' Decode trends with smart insights.',
    icon: icon1,
    path: "/indicator"
  },
  {
    title: 'Algo Trading',
    description: 'Automate strategies for smarter trading.',
    icon: icon2,
    path: "/algo-trading"
  },
  {
    title: 'Webhook',
    description: 'Automate workflows with seamless integration.',
    icon: icon3,
    path: "/webhook"
  },
  {
    title: 'Manual Trade',
    description: 'Execute trades your way, confidently.',
    icon: icon4,
    path: "/manualtrade"
  },
  {
    title: 'Signals',
    description: 'Act fast with real-time expert signals.',
    icon: icon5,
    path: "/signals"
  },
]

// State
const router = useRouter()
const activeItem = ref('Home')
const isNavOpen = ref(false)
const showProductMenu = ref(false)
const showMobileProductMenu = ref(false)
const isHoveringProduct = ref(false);

// Navigation handlers
const handleNavigation = (item) => {
  if (item.name === 'Product') {
    
    return
  }

  navigateToPath(item.path)
  updateNavigationState(item.name)
}

const handleMobileNavClick = (item) => {
  if (item.name === 'Product') {
    showMobileProductMenu.value = !showMobileProductMenu.value
    return
  }

  navigateToPath(item.path)
  updateNavigationState(item.name)
}

const handleProductClick = (path) => {
  navigateToPath(path)
  closeAllMenus()
}

const handleProductMenuLeave = () => {
  setTimeout(() => {
    if (!isHoveringProduct.value) {
      showProductMenu.value = false;
    }
  }, 100);
}

const handleProductMouseEnter = () => {
  isHoveringProduct.value = true;
  showProductMenu.value = true;
}

const handleProductMouseLeave = () => {
  isHoveringProduct.value = false;
  handleProductMenuLeave();
}

// Helper functions
const navigateToPath = (path) => {
  router.push(path)
}

const updateNavigationState = (itemName) => {
  activeItem.value = itemName
  closeAllMenus()
}

const closeAllMenus = () => {
  showProductMenu.value = false
  isNavOpen.value = false
  showMobileProductMenu.value = false
  resetBodyOverflow()
}

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
  showProductMenu.value = false
  updateBodyOverflow()
}

const updateBodyOverflow = () => {
  document.body.style.overflow = isNavOpen.value ? 'hidden' : ''
}

const resetBodyOverflow = () => {
  document.body.style.overflow = ''
}

// Lifecycle hooks and watchers
onMounted(() => {
  // Reset body overflow when component is mounted
  resetBodyOverflow()
})

onUnmounted(() => {
  // Ensure body overflow is reset when component is unmounted
  resetBodyOverflow()
})

// Watch for route changes
watch(() => router.currentRoute.value, () => {
  // Reset body overflow and close all menus on route change
  resetBodyOverflow()
  closeAllMenus()
})

// Close menus on route change
router.beforeEach(() => {
  closeAllMenus()
  return true
})
</script>

<style scoped>
/* Keep your existing styles */
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
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.1s ease-out;
  max-height: 1000px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
