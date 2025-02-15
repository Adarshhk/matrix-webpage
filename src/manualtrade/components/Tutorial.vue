<template>
  <div class="text-center mt-24 lg:mt-32">
      <h2 class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold max-w-xl mx-auto">
        Key Features of our manual trading
      </h2>
      <p class="text-[#dfdfdf] text-[1rem] max-w-2xl mx-auto md:mt-8 w-[90%] font-openSans ">
        With the right tools in hand, you can navigate the market with confidence, turning every trade into a step toward your financial growth.

      </p>

      <div class="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-4 my-16 lg:my-24">
          <div v-for="feat in features" class="  flex flex-col space-y-4 p-4">
              <img :src="feat.img" alt="" class="w-24" >
              <h4 class="text-left text-white text-[24px] font-bold leading-tight">{{ feat.title }}</h4>
              <hr class="border-1  border-[#ffffff22]">
              <p class="text-[#dfdfdf] font-openSans text-[16px] text-left" >{{ feat.description }}</p>
          </div>
      </div>
  </div>
</template>

<script setup>
import img1 from '/src/assets/svg/manualfeature (3).svg'
import img2 from '/src/assets/svg/manualfeature (1).svg'
import img3 from '/src/assets/svg/manualfeature (2).svg'
import img4 from '/src/assets/svg/manualfeature (4).svg'


const features = [
  {
      img : img1,
      title : 'Custom Watchlists',
      description : 'Custom Watchlists let you stay close to your goals, keeping the stocks that matter most right at your fingertips.',

  },
  {
      img : img2,
      title : 'Instant Order Execution',
      description : 'Experience the freedom of trading with ease, where every decision flows effortlessly with just one click, bringing you closer to your goals in no time.',
      
  },
  {
      img : img3,
      title : 'Real-Time Data ',
      description : 'Stay in sync with the market’s rhythm, giving you the confidence to act swiftly and make decisions that drive your success.',
      
  },
  {
      img : img4,
      title : 'Multi-Broker Support ',
      description : 'Take control of your trading journey with everything you need in one place, effortlessly managing all your accounts and brokers in a single, smooth experience.',
      
  },
  
]



</script>