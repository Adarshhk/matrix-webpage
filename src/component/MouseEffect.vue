<template>
  <div ref="cursorRef" class="cursor-shine hidden lg:block"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRef = ref(null);

let animationFrameId = null;
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

// Adjust this value to control the follow speed (0.0 to 1.0)
// Lower values create more delay/smoothing
const smoothFactor = 0.06;

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

const updateCursorPosition = () => {
  if (cursorRef.value) {
    // Smoothly interpolate between current and target positions
    currentX = lerp(currentX, targetX, smoothFactor);
    currentY = lerp(currentY, targetY, smoothFactor);
    
    cursorRef.value.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
  }
  animationFrameId = requestAnimationFrame(updateCursorPosition);
};

const handleMouseMove = (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
};

onMounted(() => {
  // Initialize current position to avoid initial jump
  currentX = window.innerWidth / 2;
  currentY = window.innerHeight / 2;
  targetX = currentX;
  targetY = currentY;
  
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
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(144, 238, 144, 0.219) 10%,
    rgba(144, 238, 144, 0.137) 30%,
    rgba(144, 238, 144, 0) 70%
  );
  border-radius: 50%;
  z-index: 10;
  will-change: transform;
}

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