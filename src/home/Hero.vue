<template>
  <div class="text-center relative mx-auto">
    <!-- Grid Background -->
    <div class="grid-background hidden lg:block">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
    </div>

    <!-- Main Content -->

    <div class="lg:pt-24  text-center ">

      <div class=" flex justify-center mt-24">
        <p class=" border rounded-3xl font-semibold border-[#FFCA28] px-2 py-1 text-[11px] text-[#FFCA28] bg-[#FFCA28] bg-opacity-10">#1 One stop solution for your Trading needs</p>
      </div>
      <!-- <div class="flex  justify-center items-center gap-2 mt-4">
        <Odometer/>
        <p class="text-[white]">User Joined</p>
      </div> -->
      <div class="outer-heading ">
        <h1 class=" outer-heading text-[27px] md:text-[55px] max-w-3xl font-bold 
      bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text 
      text-transparent mx-auto py-1">
          Turning Opportunities into
          <div class="inner-headings -mt-2 md:mt-0">
            <span class="
          bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text 
          text-transparent">
              Outcomes. <br />
              Achievement. <br />
              Profit. <br />
              Success. <br />
            </span>
          </div>
        </h1>
      </div>

      <!-- <div class="pt-24 text-center  md:hidden">
        <div class="outer-heading">
          <h1 class="mt-14 outer-heading text-4xl md:text-[55px] max-w-3xl font-bold 
      bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text 
      text-transparent mx-auto py-1">
            Turning Opportunities
            <div class="flex justify-center border mx-auto w-[95%] p-1 gap-3 ">
              <span class="mt-1 ">into</span>
              <div class="inner-headings text-left">

                <span class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent ">
                  Outcomes. <br />
                  Achievement. <br />
                  Profit. <br />
                  Success. <br />
                </span>
              </div>
            </div>
          </h1>
          </div>
        </div> -->


      <p class="text-[#dfdfdf] text-[1rem] max-w-4xl mx-auto md:mt-8 w-[90%] font-openSans ">
        Empowering your trading journey with advanced solutions. From seamless automation to innovative tools, we
        simplify strategies and amplify possibilities— make every decision a step towards your success.
      </p>
      <button
        class=" mt-8 btn btn-anim text-[#F3F8F9] text-sm w-[95%] md:w-1/2 lg:w-1/5 py-2 rounded-full bg-[#00B852] max-w-48">
        <div class="content vertical flex justify-center">
          <div class="text font-semibold text-base font-openSans">Get Started</div>
          <div class="hover-text font-semibold  text-base font-openSans">Get Started</div>
        </div>
      </button>

      
    </div>
    <!-- <div class="md:my-5">
        <div class="flex">
          <img src="/src/assets/img/homehero2.png" alt="" class="absolute bottom-0 left-0 z-[-1] w-[70vh]">
          <img src="/src/assets/img/homehero1.png" alt="" class="absolute bottom-0 right-0 z-[-1] w-[95vh]">

        </div>
        <img src="/src/assets/img/homehero2.png" alt="absolute top-0 right-0 z-[-1]">
        <AnimatedHero :images="[heroimg, heroimg, heroimg, heroimg]" :radius="rad" />
        
      </div> -->
    <div class="mt-8 lg:mt-16 relative ">

      <AnimatedHero2 />
      <div
        class="hidden lg:block absolute bg-gradient-to-t from-[#161a1e] via-[#161a1e] to-transparent h-[40vh] w-full z-40 bottom-0">

      </div>
      <div
        class="block lg:hidden absolute bg-gradient-to-t from-[#161a1e] via-[#161a1e] to-transparent h-[10vh] w-full z-40 bottom-0">
      </div>
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
import heroimg from '/src/assets/img/heroimg.png'
import heroimg2 from '/src/assets/img/heroimg2.png'
import heroimg3 from '/src/assets/img/heroimg3.png'
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { computed, ref, watch } from 'vue';
import AnimatedHero from './utils/AnimatedHero.vue';
import AnimatedHero2 from './utils/AnimatedHero2.vue';
import Odometer from '../component/Odometer.vue';

// Register the modules to be used in the Swiper
const modules = [Autoplay];
const rad = computed(() => {
  if (window.innerWidth < 768) return 200
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

.bg {

  background-image: url('/src/assets/img/homebg1.png');
  background-position: center;
  background-size: cover;

}

.inner-headings {
  border: 0px solid #ddd;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}

.inner-headings span {
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

  75% {
    top: -150px;
  }

  95% {
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

.content {
  position: relative;
  overflow: hidden;
  text-align: center;

}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}
</style>