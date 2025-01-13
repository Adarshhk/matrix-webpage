<template>
    <div ref="cursorRef" class="cursor-shine hidden lg:block"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const cursorRef = ref(null);
  
  let animationFrameId = null;
  let mouseX = 0;
  let mouseY = 0;
  
  const updateCursorPosition = () => {
    if (cursorRef.value) {
      cursorRef.value.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }
    animationFrameId = requestAnimationFrame(updateCursorPosition);
  };
  
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  
  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateCursorPosition);
  });
  
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
  </script>
  
  <style scoped>
  .cursor-shine {
    pointer-events: none;
    position: fixed;
    /* Change these values to adjust the size of the shiny circle */
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(144, 238, 144, 0.338) 0%,
      rgba(144, 238, 144, 0.228) 30%,
      rgba(144, 238, 144, 0) 70%
    );
    border-radius: 50%;
    z-index: 9999;
    will-change: transform;
  }
  
  /* Optional: Add shimmer effect to interactive elements */
  :deep(a:hover), :deep(button:hover) {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(144, 238, 144, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>