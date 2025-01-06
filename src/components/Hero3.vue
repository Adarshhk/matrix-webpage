<template>
    <div class="slider mx-auto">
      <div
        class="slider__viewport"
        :style="{
          transform: `translateZ(${-radius}px) rotateY(${-currentIndex * angle}rad)`
        }"
      >
        <div
          v-for="(image, index) in images"
          :key="image"
          :class="[
            'slider__image',
            { 'slider__image_active': index === currentIndex }
          ]"
          :style="{
            transform: `translateZ(${getZ(index)}px) translateX(${getX(index)}px) rotateY(${index * angle}rad)`
          }"
        >
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const props = defineProps({
    images: {
      type: Array,
      default: () => ['1', '2', '3']
    },
    radius: {
      type: Number,
      default: 400
    }
  });
  
  const currentIndex = ref(0);
  const len = computed(() => props.images.length);
  const angle = computed(() => 2 * Math.PI / len.value);
  
  const getZ = (index) => Math.cos(index * angle.value) * props.radius;
  const getX = (index) => Math.sin(index * angle.value) * props.radius;
  
  onMounted(() => {
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % len.value;
    }, 2500);
  });
  </script>
  
  <style scoped>
  .slider {
    width: 70%;
    height: 90vh;
    perspective: 1000px;

  }
  
  .slider__viewport {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1.2s cubic-bezier(0.68, 0.08, 0.27, 0.96);    
  }
  
  .slider__image {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 300 48px/1 Menlo, monospace;
    border-radius: 4px;

    opacity: 0.3;
    transition: opacity 1.4s ease-in-out;
  }
  
  .slider__image_active {
   
    opacity: 1;
  }
  </style>