<template>
    <div class="carousel-container">
      <div class="carousel w-[70%]" ref="carousel" >
        <div
          v-for="(card, index) in visibleCards"
          :key="card.id"
          class="carousel-card"
          
          :style="cardStyle(index)"
        >
            <img :src="card.img" alt="" :class="{'hidden' : card.id != cards[currentIndex].id}">
          
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import img1 from '../../assets/img/heroimg.png'
  const cards = ref([
    { id: 1, content: 'Algo Trading' , img : img1 },
    { id: 2, content: 'Indicators', img : img1 },
    { id: 3, content: 'Manual Trading' , img : img1},

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
    height: 90vh;
    margin: 0 auto;
    perspective: 1000px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel {
    
    height: 100%;
    background: transparent;
    position: relative;
    transform-style: preserve-3d;
  }
  
  .carousel-card {
    position: absolute;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  </style>
  
  