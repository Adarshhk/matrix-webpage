<template>
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div
          v-for="(card, index) in visibleCards"
          :key="card.id"
          class="carousel-card"
          :class="{'card-active': card.id === cards[currentIndex].id}"
          :style="cardStyle(index)"
        >
          <img 
            :src="card.imageUrl" 
            :alt="card.altText" 
            class="carousel-image"
          />
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import img1 from '../assets/img/img (1).jpg'
  import img2 from '../assets/img/img (2).jpg'
  import img3 from '../assets/img/img (3).jpg'
  import img4 from '../assets/img/img (4).jpg'
  import Hero3 from './Hero3.vue';

  const cards = ref([
    { id: 1, imageUrl: img1, altText: 'Image 1' },
    { id: 2, imageUrl: img2, altText: 'Image 2' },
    { id: 3, imageUrl: img3, altText: 'Image 3' },
    { id: 4, imageUrl: img4, altText: 'Image 4' },
    { id: 5, imageUrl: img1, altText: 'Image 5' },
  ]);
  
  const currentIndex = ref(0);
  const carousel = ref(null);
  
  const visibleCards = computed(() => {
    const cardCount = cards.value.length;
    return [
      cards.value[(currentIndex.value - 1 + cardCount) % cardCount],
      cards.value[currentIndex.value],
      cards.value[(currentIndex.value + 1) % cardCount],
    ];
  });
  
  const cardStyle = (index) => {
    const positions = [
      { transform: 'translateX(-35%) scale(0.7)', opacity: 0.7, zIndex: 1 },
      { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 2 },
      { transform: 'translateX(35%) scale(0.7)', opacity: 0.7, zIndex: 1 },
    ];
  
    return positions[index];
  };
  
  const autoSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % cards.value.length;
  };
  
  let intervalId;
  
  onMounted(() => {
    intervalId = setInterval(autoSlide, 3000); // Change slide every 3 seconds
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    perspective: 1000px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }
  
  .carousel-card {
    position: absolute;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
   
  }
  
  .card-active {
    background-color: black;
    scale: 1.1;
  }
  </style>
  
  