<script setup>
import { ref } from 'vue';


const content = ref('deliver');

const mapping = {
  'deliver' : "At Matrix, we don't just meet expectations; we go above and beyond. Every action we take is driven by a desire to make a real impact and create value, making each accomplishment feel meaningful.",

  'grow' : "Growth is a journey we take together. Here, you're empowered to learn, evolve, and unlock your full potential. Every step forward is a victory, and we’re here to support your personal and professional growth every step of the way.",

  'together' : "We believe in the power of unity. At Matrix, we’re more than just colleagues—we're a family, lifting each other up and achieving greatness together. Every challenge becomes easier when we face it as one.",

  'fun' : "We make work feel like an adventure. Innovation, creativity, and excitement fuel our days, and we believe having fun is the secret to making great things happen. Every moment is an opportunity to enjoy the journey as we build something amazing.",
}

</script>

<template>
  <section class=" grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5 mb-16">
    <div class="w-full md:w-[60%] mb-10 md:mb-0">
      <img src="/src/assets/img/culture.png" alt="" />
    </div>
    <div class="text-white  h-full w-full md:w-[80%] text-center xl:text-left">
      <div class="">
        <h1 class="mb-5 md:mb-0 font-semibold text-[27px] md:text-[38px]">
          Matrix Culture
        </h1>
        <div class="flex items-center justify-center xl:justify-start gap-3 md:gap-3 text-[#dfdfdf]">
          <button
            class="border   px-4 py-1 rounded-2xl"
            @click="() => {content = 'deliver'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'deliver'}"
          >
            Deliver
          </button>
          <button
            class="border   px-4 py-1 rounded-2xl"
            @click="() => {content = 'grow'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'grow'}"
          >
            Grow
          </button>
          <button
            class="border  px-4 py-1 rounded-2xl"
            @click="() => {content = 'together'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'together'}"
          >
            Together
          </button>
          <button
            class="border  text-[#dfdfdf] px-4 py-1 rounded-2xl"
            @click="() => {content = 'fun'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'fun'}"
          >
            Fun
          </button>
        </div>
      </div>
      <p class="font-openSans mt-12 md:mt-6 text-[#dfdfdf] text-[14px] md:text-[16px]">
        {{ mapping[content] }}
      </p>
    </div>
  </section>
</template>
