<template>
    <canvas ref="snowCanvas" class="absolute inset-0 w-full h-full"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const snowCanvas = ref(null);
  let snowflakes = [];
  let animationId = null;
  
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
  
  onMounted(() => {
    const canvas = snowCanvas.value;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    createSnowflakes();
    updateSnow();
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createSnowflakes();
    });
  });
  
  onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', () => {});
  });
  </script>