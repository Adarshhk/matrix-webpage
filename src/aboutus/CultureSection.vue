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
  <section class="bg-[#1D2025] p-8 md:p-20 grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5">
    <div class="w-full md:w-[60%]">
      <img src="/src/assets/img/culture.png" alt="" />
    </div>
    <div class="text-white  h-full w-full md:w-[80%] text-center xl:text-left">
      <div class="">
        <h1 class="font-CabinetGrotesk font-extrabold text-[35px] md:text-[47px]">
          Matrix CULTURE
        </h1>
        <div class="flex items-center justify-center xl:justify-start gap-1 md:gap-3 text-[#787878]">
          <button
            class="border border-[#787878]  px-4 py-1 rounded-2xl"
            @click="() => {content = 'deliver'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'deliver'}"
          >
            Deliver
          </button>
          <button
            class="border border-[#787878]  px-4 py-1 rounded-2xl"
            @click="() => {content = 'grow'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'grow'}"
          >
            Grow
          </button>
          <button
            class="border border-[#787878]  px-4 py-1 rounded-2xl"
            @click="() => {content = 'together'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'together'}"
          >
            Together
          </button>
          <button
            class="border border-[#787878] text-[#787878] px-4 py-1 rounded-2xl"
            @click="() => {content = 'fun'}"
            :class="{'border-[#00B852] bg-[#00B852] bg-opacity-10 text-[#00B852]' : content === 'fun'}"
          >
            Fun
          </button>
        </div>
      </div>
      <p class="font-openSans mt-12  text-[#787878] text-[16px]">
        {{ mapping[content] }}
      </p>
    </div>
  </section>
</template>
