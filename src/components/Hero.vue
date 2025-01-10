<template>
  <div class="text-center relative w-[95%] mx-auto">
    <!-- Grid Background -->
    <div class="grid-background hidden lg:block">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
    </div>

    <!-- Main Content -->

    <div class="pt-24 text-center">
      <div class="outer-heading">
        <h1
          class="outer-heading text-4xl md:text-[55px] max-w-3xl font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent mx-auto">
          Turning Opportunities into

          <div class="inner-headings mt-2">
            <span class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent ">
              Outcomes. <br/>
              Achievement. <br/>
              Profit. <br/>
              Success. <br/>
            </span>
          </div>
        </h1>
      </div>

      <p class="text-[#BBB8B8] text-[18px] max-w-4xl mx-auto mt-8 w-[90%] font-openSans">
        Empowering your trading journey with advanced solutions. From seamless automation to innovative tools, we simplify strategies and amplify possibilities— make every decision a step towards your success.
      </p>
    </div>
    <div class="my-5">
        <AnimatedHero :images="[heroimg , heroimg , heroimg , heroimg]" :radius="rad"/>

    </div>
    <!-- <div class="h-[50vh] md:h-[80vh] lg:h-[110vh] ">
      <swiper :slidesPerView="3" :spaceBetween="0" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: false,
      }" :loop="true" :modules="modules" class="h-full w-full">
        <swiper-slide v-for="(item, index) in features" :key="index" class="swiper-slide">
          <img :src="item.img" :alt="item.title" class="slide-image" />
        </swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<script setup>
import heroimg from '../assets/img/heroimg.png'
import heroimg2 from '../assets/img/heroimg2.png'
import heroimg3 from '../assets/img/heroimg3.png'
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { computed, ref, watch } from 'vue';
import AnimatedHero from './utils/AnimatedHero.vue';

// Register the modules to be used in the Swiper
const modules = [Autoplay];
const rad = computed(() => {
  if(window.innerWidth < 768) return 250
  else return 600
})

const features = [
  {
    title: "Copy Trade",
    desc: "Mirror trades across different accounts automatically.",
    img: heroimg,
  },
  {
    title: "Admin Console",
    desc: "Get full access to manage users, brokers, and trades from a centralized console.",
    img: heroimg2,
  },
  {
    title: "Landing Page",
    desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
    img: heroimg3,
  },
  {
    title: "Landing Page",
    desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
    img: heroimg,
  },


];


</script>

<style scoped>
.grid-background {
  display: none;
  /* Default: hide the grid on all screen sizes */
}

.inner-headings{
  border: 0px solid #ddd;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}
.inner-headings span{
  position: relative;
  animation: animation 10s ease infinite;
}

@keyframes animation {
  0%,
  100% {
    top: 0;
  }
  20% {
    top: 0;
  }
  25% {
    top: -50px;
  }
  45% {
    top: -50px;
  }
  50% {
    top: -100px;
  }
  70% {
    top: -100px;
  }
  75%{
    top: -150px;
  }
  95%{
    top: -150px;
  }
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
</style>