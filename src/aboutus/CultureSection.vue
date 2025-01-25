<script setup>
import { ref } from 'vue';


const content = ref('deliver');

const mapping = {
  'deliver' : "We outperform ourselves everyday. With strong bias to action and personal accountability for work delivery, there is an immense difference we make to ourselves, the company's vision and the financial lives of Matrix Trading users.",

  'grow' : "outperform ourselves everyday. With strong bias to action and personal accountability for work delivery, there is an immense difference we make to ourselves, the company's vision and the financial lives of Matrix Trading users.",

  'together' : "ourselves everyday. With strong bias to action and personal accountability for work delivery, there is an immense difference we make to ourselves, the company's vision and the financial lives of Matrix Trading users.",

  'fun' : "With strong bias to action and personal accountability for work delivery, there is an immense difference we make to ourselves, the company's vision and the financial lives of Matrix Trading users.",
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
