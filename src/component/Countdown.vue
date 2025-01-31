<template>
    <div class="flex items-center justify-center overflow-hidden p-4">
      <canvas ref="snowCanvas" class="absolute inset-0 w-full h-full"></canvas>
      <div class="text-center z-10 mt-4">
        <h1 class="text-[24px] font-bold mb-4 animate-text-bg text-white">
          Sale Ends In
        </h1>
        <div class="flex justify-center gap-4 text-white">
          <div v-for="(unit, index) in timeUnits" :key="unit" class="px-4 rounded bg-[#ffffff22]">
            <div class="text-[32px] font-bold">{{ getTrueNumber(remainingTime[index]) }}</div>
            <div class=" text-[16px]">{{ unit }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const snowCanvas = ref(null);
  const remainingTime = ref([0, 0, 0, 0]);
  const timeUnits = ['Days', 'Hours', 'Minutes', 'Seconds'];
  
  let snowflakes = [];
  let animationId = null;
  
  // Add this prop to accept the target date
  const props = defineProps({
  targetDate: {
    type: Date,
    required: false,
    default: () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    }
  }
});
  
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
  
  function createSnowflakes() {
    const canvas = snowCanvas.value;
    const flakes = Math.floor(window.innerWidth / 4);
  
    snowflakes = Array.from({ length: flakes }, () => new Snowflake(canvas));
  }
  
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
  
  function getTrueNumber(num) {
    return num < 10 ? `0${num}` : num;
  }
  
  function calculateRemainingTime() {
    const now = new Date();
    const remainingTimeMs = props.targetDate.getTime() - now.getTime();
  
    if (remainingTimeMs <= 0) {
      remainingTime.value = [0, 0, 0, 0];
      return 0;
    }
  
    const days = Math.floor(remainingTimeMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);
  
    remainingTime.value = [days, hours, mins, secs];
  
    return remainingTimeMs;
  }
  
  function initCountdown() {
    const interval = setInterval(() => {
      const remainingTimeInMs = calculateRemainingTime();
  
      if (remainingTimeInMs <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  onMounted(() => {
    const canvas = snowCanvas.value;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    createSnowflakes();
    updateSnow();
    initCountdown();
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createSnowflakes();
    });
  });
  
  onUnmounted(() => {
    cancelAnimationFrame(animationId);
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