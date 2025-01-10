<script setup>
import { ref, onMounted } from 'vue'
import confetti from 'canvas-confetti'
import gsap from 'gsap'

const props = defineProps({
    startCount: {
        type: String,
        default: '2000'
    },
    endCount: {
        type: String,
        default: '7,000'
    }
})
const show = ref(true);
const counter = ref(null)
const continueButton = ref(null)
const colors = ref([])
const reducedMotion = ref(false)
const tl = gsap.timeline()

onMounted(() => {
    colors.value = [
        getComputedStyle(document.body).getPropertyValue('--c1'),
        getComputedStyle(document.body).getPropertyValue('--c2')
    ]

    reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Hide button initially
    if (continueButton.value) {
        gsap.set(continueButton.value, { 
            opacity: 0,
            y: 20
        })
    }

    animateCount()
})

const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const removeCommas = (num) => {
    return num.replace(/,/g, '')
}

var count = 200;
var defaults = {
    origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
}

const animateButton = () => {
    gsap.to(continueButton.value, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out"
    })
}

const celebrate = () => {
    setCelebrateClass(true)
    animateButton()

    // Multiple bursts of confetti with different configurations
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

const setCelebrateClass = (enabled) => {
    counter.value.classList.toggle('celebrate', enabled)
}

const animateCount = () => {
    const start = removeCommas(props.startCount)
    const end = removeCommas(props.endCount)

    tl.set(counter.value, { opacity: 1 })
        .fromTo(
            counter.value,
            {
                innerText: start,
                '--font-variation-weight': 300,
                scale: reducedMotion.value ? 0.95 : 0.8
            },
            {
                innerText: end,
                snap: { innerText: 1 },
                duration: reducedMotion.value ? 0 : 3,
                ease: 'linear',
                onUpdate: () => {
                    counter.value.innerHTML = formatNumber(counter.value.innerText)
                },
                onComplete: () => celebrate()
            }
        )
        .to(counter.value, {
            scale: 1,
            '--font-variation-weight': 600,
            ease: 'elastic.out(1, 0.2)',
            duration: 1.2
        })
}

const handleClick = () => {
    show.value = false
}
</script>

<template >
    <div v-if="show" class="fixed inset-0 bg-[#161a1e]  z-40">
        <div class="flex-col justify-center text-center mt-24">
            <p class="font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[34px]">WE HAVE </p>
            <h1 ref="counter"
                class="counter text-white relative text-[max(2rem,calc(1rem+12vw))] font-openSans font-bold opacity-0">
                {{ endCount }}
                
            </h1>

            <p class="font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[34px] mt-8">PROFITABLE CLIENTS CONNECTED WITH US </p>

            <button  @click="handleClick"
                ref="continueButton"
                class="group text-[#F3F8F9] text-sm lg:px-4 px-4 py-3 rounded-full bg-[#00B852] btn btn-anim shadow-md shadow-[#00b8539e] mt-14"
                
            >
            <div class="flex items-center gap-2">
                Continue To Site
                <img src="/src/assets/svg/arrow.svg" alt="" class="">
            </div>
               
            </button>
        </div>
    </div>
</template>

<style scoped>
:root {
    --c1: #fbda61;
    --c2: #ff5acd;
}

.celebrate {
    color: transparent;
    background-clip: text;
    background-color: #4158d0;
    background-image: linear-gradient(45deg, #EDA54E,#9D5500, #EDA54E);
    background-size: 200% auto;
    filter: drop-shadow(white 1px 1px 0) drop-shadow(#fbda61 2px 2px 2px);
    animation: bg 4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@media (prefers-reduced-motion) {
    .celebrate {
        animation: unset;
    }
}

@keyframes bg {
    100% {
        background-position: 200% center;
    }
}
</style>