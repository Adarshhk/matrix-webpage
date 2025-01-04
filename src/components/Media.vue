<template>
    <div class="my-20">
        <div class="text-center">
            <p class="text-[38px] font-bold mx-auto text-white">Innovate Your Trading Experience</p>

            <p class="text-[#BBB8B8] text-[18px] max-w-6xl mx-auto mt-4">Empower your trading journey with confidence.
                Our platform equips you with insights and tools for financial triumph.</p>
        </div>
        <swiper 
          :slidesPerView="slidesPerView"
          :spaceBetween="10"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false,
          }"
          :loop="true"
          :modules="modules"
          class="mx-auto mt-12"
        >
          <swiper-slide class="flex flex-col space-y-2">
            <p>Indicators</p>
          </swiper-slide>
          <swiper-slide class="flex flex-col space-y-2">
            <p>Algo Trading</p>
          </swiper-slide>
          <swiper-slide class="flex flex-col space-y-2">
            <p>Manual Trading</p>
          </swiper-slide>
          <swiper-slide class="flex flex-col space-y-2">
            <p>Algo Trading</p>
          </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Register the modules to be used in the Swiper
const modules = [Autoplay];

// Set responsive slidesPerView
const slidesPerView = ref(3);

const updateSlidesPerView = () => {
  if (window.innerWidth < 768) {
    slidesPerView.value = 1; // 1 slide per view on smaller screens
  } else if (window.innerWidth < 1024) {
    slidesPerView.value = 2; // 2 slides per view on medium screens
  } else {
    slidesPerView.value = 3; // 3 slides per view on larger screens
  }
};

// Update slidesPerView on window resize
window.addEventListener("resize", updateSlidesPerView);

// Set initial value for slidesPerView
updateSlidesPerView();
</script>

<style scoped>
.swiper {
    max-width: 100%; /* Full width */
}

.swiper-slide-active {
    font-size: 38px;
    max-width: 48rem; /* 3xl */
    font-weight: bold;
    background: linear-gradient(to right, #00B852, #5BC9F9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-left: auto;
    margin-right: auto;
    white-space: nowrap;
    transform: scale(1.1); /* Scale up the active slide */
    opacity: 100%;
}

.swiper-slide-prev,
.swiper-slide-next {
    font-size: 38px;
    max-width: 48rem; /* 3xl */
    font-weight: bold;
    background: linear-gradient(to right, #161a1e, white);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-left: auto;
    margin-right: auto;
    white-space: nowrap;
}

@media (max-width: 1024px) {
    .swiper-container {
        height: 70vh;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
        transform: scale(0.6);
    }
}

@media (max-width: 768px) {
    .swiper-container {
        height: 50vh;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
        transform: scale(0.5);
    }
}
</style>
