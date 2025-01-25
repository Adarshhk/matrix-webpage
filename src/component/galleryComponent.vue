<template>
  <div class="custom-galleria" v-if="images.length">
    <div class="galleria-container">
      <div class="thumbnails pt-28 overflow-x-hidden">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="thumbnail-container"
          :class="{ active: index === activeIndex }"
          @click="setActiveIndex(index)"
        >
          <img :src="image.thumbnailImageSrc" :alt="image.alt" class="galleria-thumbnail-image" />
        </div>
      </div>
      <div class="main-image">
        <div class="">
          <div class="w-full justify-end flex">
            <div class="red-div">
              <div class="flex w-full h-full items-center justify-center content-center">
                <img src="/images/money.png" alt="">
              </div>
            </div>
          </div>
          <img :src="images[activeIndex].itemImageSrc" :alt="images[activeIndex].alt" class="galleria-item-image" />
          <div class="pnl-box">
            <div class="flex w-full h-full justify-start content-start p-2 flex-col">
              <p class="font-semibold text-[16px]">Today's P&L</p>
              <p class="font-semibold text-[16px] text-matrix-green">₹ {{ images[activeIndex].pnl }} <span class="text-[10px]">(43.3%)</span></p>
              <p class="font-semibold text-[13px] text-[#787878]">on 4th Position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading images...
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([]);
const activeIndex = ref(0);

const setActiveIndex = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  images.value = [
    {
      itemImageSrc: '/images/Women.jpg',
      thumbnailImageSrc: '/images/Women.jpg',
      alt: 'Sample Image 1',
      pnl:"1,20,000"
    },
    {
      itemImageSrc: '/images/Normal_Man.jpg',
      thumbnailImageSrc: '/images/Normal_Man.jpg',
      alt: 'Sample Image 2',
      pnl:"12,000"
    },
    {
      itemImageSrc: '/images/Sardar.jpg',
      thumbnailImageSrc: '/images/Sardar.jpg',
      alt: 'Sample Image 3',
      pnl:"10,000"
    },
  ];
  
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.value.length;
  }, 3000); // Auto-slide every 3 seconds
});
</script>

<style scoped>
.custom-galleria {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
}

.galleria-container {
  display: flex;
  max-width: 100%;
  height: 70vh; /* Ensures the height is sufficient to contain the thumbnails and main image */
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 0px;
  width: 20%;
  overflow-y: auto;
}

.thumbnail-container {
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  right: -15px;
  top: 30px;
  width: 60px;
  height: 60px;
}

.thumbnail-container.active {
  outline: 4px solid #7fef00; /* Active thumbnail border color */
  border-radius: 50%;
}

.galleria-thumbnail-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.main-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.galleria-item-image {
  width: 100%;
  max-height: 50vh;
  padding: 20px;
  border-radius: 30px;
  object-fit: cover;
}

.red-div {
  width: 100px;
  height: 100px;
  transform: rotate(9deg);
  justify-content: center;
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  top: 60px; 
}

.pnl-box {
  width: 70%;
  height: auto;
  position: relative;
  top: -60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
}
</style>
