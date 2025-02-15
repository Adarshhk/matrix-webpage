<template>
  <div class="flex items-center justify-center overflow-hidden p-4">
    <canvas ref="snowCanvas" class="absolute inset-0 w-full h-full"></canvas>
    <div class="text-center z-10 mt-4">
      <div class="flex justify-center gap-2 md:gap-4 text-white">
        <div v-for="(unit, index) in timeUnits" :key="unit" class="px-4 rounded bg-[#ffffff22]">
          <div class="text-[20px] md:text-[32px] font-bold">
            {{ getTrueNumber(remainingTime[index]) }}
          </div>
          <div class="text-[14px] md:text-[16px]">{{ unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';


const snowCanvas = ref(null);
const remainingTime = ref([0, 0, 0, 0]); 
const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds'];


let snowflakes = [];
let animationId = null;
let countdownInterval = null;

// Props
const props = defineProps({
  isSaleLive: Boolean,
  saleStartDate: String,
  saleEndDate: String,
});

// Snowflake class
class Snowflake {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * -this.canvas.height;
    this.vx = Math.random() * 6 - 3;
    this.vy = Math.random() * 3 + 2;
    this.radius = Math.random() * 3 + 1;
    this.alpha = Math.random() * 0.8 + 0.1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > this.canvas.height) {
      this.reset();
    }
  }
}

// Function to create snowflakes
function createSnowflakes() {
  const canvas = snowCanvas.value;
  const flakes = Math.floor(window.innerWidth / 4);
  snowflakes = Array.from({ length: flakes }, () => new Snowflake(canvas));
}

// Function to animate snowflakes
function updateSnow() {
  const canvas = snowCanvas.value;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((flake) => {
    flake.update();
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.alpha})`;
    ctx.fill();
  });

  animationId = requestAnimationFrame(updateSnow);
}

// Format number with leading zero
function getTrueNumber(num) {
  return num < 10 ? `0${num}` : num;
}

// Calculate remaining time
function calculateRemainingTime() {
  if (!props.isSaleLive || !props.saleStartDate || !props.saleEndDate) {
    remainingTime.value = [0, 0, 0, 0];
    return;
  }

  const now = new Date();
  const startDate = new Date(props.saleStartDate);
  const endDate = new Date(props.saleEndDate);

  // If current time is before the sale start date, set timer to 00:00:00:00
  if (now < startDate) {
    remainingTime.value = [0, 0, 0, 0];
    return;
  }

  // If the sale has ended, set timer to 00:00:00:00
  if (now >= endDate) {
    remainingTime.value = [0, 0, 0, 0];
    return;
  }

  const remainingTimeMs = endDate - now;
  const days = Math.floor(remainingTimeMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);

  remainingTime.value = [days, hours, mins, secs];
}

// Start countdown
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    calculateRemainingTime();
  }, 1000);
}

// Watch for prop changes (e.g., when sale status updates)
watch(() => [props.isSaleLive, props.saleStartDate, props.saleEndDate], () => {
  calculateRemainingTime();
  startCountdown();
});

// Lifecycle hooks
onMounted(() => {
  const canvas = snowCanvas.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  createSnowflakes();
  updateSnow();
  calculateRemainingTime();
  startCountdown();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createSnowflakes();
  });
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  clearInterval(countdownInterval);
});
</script>

  
  <style>
  @keyframes textBg {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  
  .animate-text-bg {
    animation: textBg 5s linear infinite;
    background-size: 200% auto;
  }
  </style>