<template>
  <div class="pt-28">
    <h2 class="text-3xl md:text-[38px] font-bold text-white text-center">
      Our Trusted Brokers
    </h2>
    <div class="flex justify-center">

      <Vue3Marquee :duration="20" :gradient="true" :gradientColor="[22, 26, 30, 1]" class="">
            <img src="/src/assets/img/broker/broker (1).png" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (1).webp" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (2).png" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (2).webp" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (3).png" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (4).png" alt="" class="w-36 mx-8 " >
            <img src="/src/assets/img/broker/broker (5).png" alt="" class="w-24 mx-8 " >
            <img src="/src/assets/img/broker/broker (6).png" alt="" class="w-36 mx-8 " >
        </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';




</script>

<style></style>