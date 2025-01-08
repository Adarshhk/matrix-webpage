<template>
    <div class="carousel-container">
      <div class="carousel w-[95%] lg:w-[75%] xl:w-[60%]" ref="carousel" >
        <div
          v-for="(card, index) in visibleCards"
          :key="card.id"
          class="carousel-card"
          
          :style="cardStyle(index)"
        >
         <h2 class="text-4xl md:text-[55px] py-2 font-bold  bg-clip-text text-transparent" :class="{'opacity-100 bg-gradient-to-r from-[#00B852] to-[#5BC9F9]': card.id === cards[currentIndex].id , ' bg-gradient-to-r from-[#161a1e] to-white hidden md:block': card.id != cards[currentIndex].id }"> 
             {{ card.content }}
         </h2>
          
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const cards = ref([
    { id: 1, content: 'Algo Trading' },
    { id: 2, content: 'Indicators' },
    { id: 3, content: 'Manual Trading' },

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
    height: 10vh;
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
  
  