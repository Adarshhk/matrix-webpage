<template>
  <div class="text-center relative w-[95%] mx-auto">
    <!-- Grid Background -->
    <div class="grid-background hidden lg:block">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
    </div>

    <!-- Main Content -->
    
    <div class="pt-24 text-center">
      <p
        class="text-4xl md:text-[55px] max-w-3xl font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent mx-auto ">
        Turning Investments into Achievements.
    </p>
      <p class="text-[#BBB8B8] text-[18px] max-w-6xl mx-auto mt-8 w-[90%]">
        Empowering your growth with smart financial solutions. From seamless trading to intelligent tools, we simplify
        decisions and maximize opportunities—making every move count."
      </p>
    </div>

    <div class="h-[50vh] md:h-[80vh] lg:h-[110vh] ">
      <swiper :slidesPerView="3" :spaceBetween="0" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: false,
      }" :loop="true" :modules="modules" class="h-full w-full">
        <swiper-slide v-for="(item, index) in features" :key="index" class="swiper-slide">
          <img :src="item.img" :alt="item.title" class="slide-image" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import heroimg from '../assets/img/heroimg.png'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Register the modules to be used in the Swiper
const modules = [Autoplay];

const features = [
  {
    title: "Copy Trade",
    desc: "Mirror trades across different accounts automatically.",
    img: heroimg,
  },
  {
    title: "Admin Console",
    desc: "Get full access to manage users, brokers, and trades from a centralized console.",
    img: heroimg,
  },
  {
    title: "Landing Page",
    desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
    img: heroimg,
  },
  {
    title: "Landing Page",
    desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
    img: heroimg,
  },


];


</script>

<style>
.grid-background {
  display: none;
  /* Default: hide the grid on all screen sizes */
}

@media (min-width: 1024px) {

  /* Tailwind's lg breakpoint */
  .grid-background {
    display: flex;
    /* Show the grid only on large screens */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    pointer-events: none;
    /* Ensures the grid does not block interactions */
    z-index: -1;
    /* Sends the grid to the background */
  }

  .grid-image {
    width: 26rem;
    object-fit: contain;
    opacity: 0.3;
    /* Adjust opacity to make it less intrusive */
  }
}



.swiper-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  position: relative;
  
}

.slide-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease;
}

.swiper-slide-active {
  z-index: 2;

}

.swiper-slide-active .slide-image {
  height: 90%;
  width: auto;
  max-width: none;

}

.swiper-slide-prev,
.swiper-slide-next {
  z-index: 1;
  opacity: 0.3;


}


@media (max-width: 1024px) {
  .swiper-container {
    height: 70vh;
  }

  .swiper-slide-active .slide-image {
    max-height: 70vh;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.6);
  }
}

@media (max-width: 768px) {
  .swiper-container {
    height: 32vh;
  }

  .swiper-slide-active .slide-image {
    max-height: 32vh;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.5);
  }
}

.title-wrap {
  color: white;
  font-size: 30px;
  line-height: 34px;
  display: flex;
  height: 34px;
}

.left-text {
  color: rgba(#fff, .9);
}

.right-text {
  margin-left: 5px;
  overflow: hidden;
}

.flip-wrap {
  animation: flip 8s infinite;
  margin-top: -136px;
}

.flip {
  font-weight: bold;
}


@keyframes flip {

  from {
    margin-top: 0px;
  }

  3% {
    margin-top: -34px;
  }

  25% {
    margin-top: -34px;
  }

  28% {
    margin-top: -68px;
  }

  50% {
    margin-top: -68px;
  }

  53% {
    margin-top: -102px;
  }

  75% {
    margin-top: -102px;
  }

  78% {
    margin-top: -136px;
  }

  to {
    margin-top: -136px;
  }

}
</style>