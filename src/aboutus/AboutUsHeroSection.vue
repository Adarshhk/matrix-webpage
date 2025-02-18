<script setup>
import { Vue3Marquee } from "vue3-marquee";
import Breadcrumb from '/src/component/Breadcrumb.vue'
import c1 from '/src/assets/img/about/c1 (5).png'
import c2 from '/src/assets/img/about/c1 (6).png'
import c3 from '/src/assets/img/about/c1 (7).png'
import c4 from '/src/assets/img/about/c1 (8).png'
import c5 from '/src/assets/img/about/c1 (5).png'
import c6 from '/src/assets/img/about/c1 (6).png'
import c7 from '/src/assets/img/about/c1 (7).png'
import c8 from '/src/assets/img/about/c1 (8).png'
const imgArray = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,

  ];
</script>

<template>

  <section class=" mt-20">
    <Breadcrumb :items="[{
            title: 'Home',
            disabled: false,
            href: '/'
          },
          {
            title: 'About Us',
            disabled: false,
            href: '/about'
          },
          ]" />

   
    <div class="mx-auto text-center w-full xl:w-[80%] mb-16 mt-24">


      
      <h1
        class="text-[27px] md:text-[55px] font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent leading-tight "
      >
        With technology, We are democratizing systematic trading in India
      </h1>
      <p class="font-openSans text-[#dfdfdf] text-[14px] md:text-[16px] mt-6">
        We are the fastest growing Fintech company in Central's India.
        <span class="font-extrabold font-openSans"
          >Our growth in the last couple of years</span
        >
      </p>
    </div>

    <div
      class="text-white flex flex-col md:flex-row items-center justify-center space-x-5 space-y-10 md:space-y-0 xl:space-x-14"
    >
      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">5<span class="text-[32px]">X</span>
        </h3>
        <p class="font-openSans text-[16px] text-[#dfdfdf]">Growth in Userbase</p>
      </div>
      <p class="text-[#dfdfdf] opacity-10 font-thin text-[50px] hidden md:block">
        |
      </p>

      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">
          10<span class="text-[32px]">X</span>
        </h3>
        <p class="font-openSans text-[#dfdfdf] text-[16px]">Growth in Transactions</p>
      </div>
      <p class="text-[#dfdfdf] opacity-10 font-thin text-[50px] hidden md:block">
        |
      </p>

      <div class="text-center">
        <h3 class="font-CabinetGrotesk font-extrabold text-[48px]">11<span class="text-[32px]">X</span></h3>
        <p class="font-openSans text-[#dfdfdf] text-[16px]">
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
