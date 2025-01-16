<script setup>
import { Vue3Marquee } from "vue3-marquee";

const imgArray = [
  "/src/assets/img/about/c1 (5).png",
  "/src/assets/img/about/c1 (6).png",
  "/src/assets/img/about/c1 (7).png",
  "/src/assets/img/about/c1 (8).png",
  "/src/assets/img/about/c1 (5).png",
  "/src/assets/img/about/c1 (6).png",
  "/src/assets/img/about/c1 (7).png",
  "/src/assets/img/about/c1 (8).png",
  ];
</script>

<template>
  <section class="w-[95%] mx-auto mb-10 ">
    <div class="mx-auto text-center w-full xl:w-[60%] mb-32">
      
      <h1
        class="text-[27px] md:text-[47px] font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent "
      >
        With technology, We are democratizing systematic trading in India
      </h1>
      <p class="font-openSans text-[#787878] text-[16px]">
        We are the fastest growing Fintech company in Central's India.
        <span class="font-extrabold font-openSans"
          >Our growth in the last couple of years</span
        >
      </p>
    </div>

    <div
      class="text-white flex flex-col md:flex-row items-center justify-center mt-10 space-x-5 space-y-10 md:space-y-0 xl:space-x-14"
    >
      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">5X</h3>
        <p class="font-openSans text-[16px] text-[#787878]">Growth in Userbase</p>
      </div>
      <p class="text-[#787878] opacity-10 font-thin text-[50px] hidden md:block">
        |
      </p>

      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">10X</h3>
        <p class="font-openSans text-[#787878] text-[16px]">Growth in Transactions</p>
      </div>
      <p class="text-[#787878] opacity-10 font-thin text-[50px] hidden md:block">
        |
      </p>

      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">11X</h3>
        <p class="font-openSans text-[#787878] text-[16px]">
          Growth in Transactional Level
        </p>
      </div>
    </div>

    <div class="mt-10 ">
      <Vue3Marquee class="marquee">
    <template v-for="(img, index) in imgArray" :key="index">
      <img :src="img" class="no-space"/>
    </template>
  </Vue3Marquee>

    </div>
  </section>
</template>
<style scoped>
.marquee {
  display: flex;
}
.marquee img.no-space {
  margin: 0;
  padding: 0;
  width: 300px; /* Adjust width as needed */
  height: 300px; /* Adjust height as needed */
}
</style>
