<template>
    <div class="">
        <div class="grid grid-cols-3 mt-24 mb-14 ">
            <div class="col-span-2">
                <h2 class="leading-tight bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold max-w-2xl">
                    Every Tool You Need for Smart Trading Decisions.
                </h2>
            </div>
            <div class="col-span-1 flex justify-end gap-2 items-center">
                <button @click="handlePrevious" class="border-[#ffffff33] rounded-full border">
                    <img src="/src/assets/svg/left.svg" alt="">
                </button>
                <button @click="handleNext" class="border-[#ffffff33] rounded-full border">
                    <img src="/src/assets/svg/left.svg" alt="" class="rotate-180">
                </button>
            </div>
        </div>

        <div class="relative overflow-auto no-scrollbar">
            <div 
                class="flex transition-transform duration-300 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
            >
                <div 
                    v-for="(tool, index) in tools" 
                    :key="index"
                    :class="`flex-none px-2 transition-all duration-300
                        w-full 
                        md:w-1/2 
                        lg:w-1/3`"
                >
                    <img :src="tool.img" alt="" class="w-full">
                    <h2 class="text-left text-white text-[24px] font-bold mt-4">
                        {{ tool.title }}
                    </h2>
                    <p class="text-[#dfdfdf] font-openSans text-[16px] text-left">
                        {{ tool.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import img1 from '/src/assets/img/signaltool (1).png'
import img2 from '/src/assets/img/signaltool (2).png'
import img3 from '/src/assets/img/signaltool (3).png'

const currentIndex = ref(0)
const windowWidth = ref(window.innerWidth)

// Update window width on resize
const handleResize = () => {
    windowWidth.value = window.innerWidth
    // Reset position when screen size changes to prevent empty spaces
    currentIndex.value = 0
}

// Lifecycle hooks for window resize listener
onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

// Compute number of visible cards based on screen width
const visibleCards = computed(() => {
    if (windowWidth.value < 768) return 1        // mobile: 1 card
    if (windowWidth.value < 1024) return 2       // md: 2 cards
    return 3                                     // lg and above: 3 cards
})

const tools = [
    {
        title: 'Entry and Exit Points',
        description: 'Precise levels for optimal trades.',
        img: img1
    },
    {
        title: 'Stop-Loss Guidance',
        description: 'Minimize risk while maximizing potential returns.',
        img: img2
    },
    {
        title: 'Risk-to-Reward Ratio',
        description: 'Trade smarter by focusing on opportunities with the best profit potential.',
        img: img3
    },
    {
        title: 'Stop-Loss Guidance',
        description: 'Minimize risk while maximizing potential returns.',
        img: img1
    },
    {
        title: 'Entry and Exit Points',
        description: 'Precise levels for optimal trades.',
        img: img2
    }
]

const handlePrevious = () => {
    currentIndex.value = currentIndex.value === 0 
        ? tools.length - visibleCards.value 
        : currentIndex.value - 1
}

const handleNext = () => {
    currentIndex.value = currentIndex.value >= tools.length - visibleCards.value
        ? 0 
        : currentIndex.value + 1
}
</script>
<style scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>