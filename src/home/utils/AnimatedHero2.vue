<template>
  <div class="w-full h-screen flex items-center justify-center overflow-hidden">
    <div class="relative w-full max-w-6xl aspect-square overflow-visible">
      <TransitionGroup name="carousel" tag="div" class="relative h-full">
        <div
          v-for="(image, index) in images"
          :key="image.id"
          class="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out"
          :style="getImageStyle(index)"
        >
          <img :src="image.url" :alt="image.alt" class="w-full h-full object-contain rounded-lg " />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = ref([
  { id: 1, url: '/src/assets/img/heroimg.png', alt: 'Image 1' },
  { id: 2, url: '/src/assets/img/heroimg.png', alt: 'Image 2' },
  { id: 3, url: '/src/assets/img/heroimg.png', alt: 'Image 3' },
  { id: 4, url: '/src/assets/img/heroimg.png', alt: 'Image 4' },
]);

const currentIndex = ref(0);

const getImageStyle = (index) => {
  const position = (index - currentIndex.value + images.value.length) % images.value.length;
  let transform = '';
  let opacity = 1;
  let zIndex = 0;

  switch (position) {
    case 0: // Center
      transform = 'translate(-50%, -50%) scale(1)';
      zIndex = 30;
      break;
    case 1: // Left
      transform = 'translate(-75%, -50%) scale(0.85) rotate(-6deg)';
      opacity = 0.85;
      zIndex = 20;
      break;
    case 2: // Back (invisible)
      transform = 'translate(-50%, -40%) scale(0.7)';
      opacity = 0;
      zIndex = 10;
      break;
    case 3: // Right
      transform = 'translate(-25%, -50%) scale(0.85) rotate(6deg)';
      opacity = 0.85;
      zIndex = 20;
      break;
  }

  return {
    transform,
    opacity,
    zIndex,
    left: '50%',
    top: '50%',
  };
};

const rotateImages = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(rotateImages, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.carousel-move {
  transition: all 0.5s ease;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translate(-25%, -50%) scale(0.85) rotate(6deg);
}

.carousel-leave-to {
  opacity: 0;
  transform: translate(-75%, -50%) scale(0.85) rotate(-6deg);
}
</style>

