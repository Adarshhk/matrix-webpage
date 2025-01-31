<template>
  <div class="text-center mt-24 lg:mt-32">
      <h2 class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold max-w-xl mx-auto">
        Key Features of our manual trading
      </h2>
      <p class="text-[#dfdfdf] text-[1rem] max-w-2xl mx-auto md:mt-8 w-[90%] font-openSans ">
        Empower your trading journey with confidence. Our platform equips you with insights and tools for financial triumph.
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
      description : 'To Stay Informed, Track Your Favorite Stocks, and Gain Insights into Market Trends Effortlessly.',

  },
  {
      img : img2,
      title : 'Instant Order Execution',
      description : 'Experience Seamless Trading with One-Click Execution for Fast and Efficient Transactions.',
      
  },
  {
      img : img3,
      title : 'Real-Time Data ',
      description : 'Empowering You to Monitor Live Market Trends and Make Swift, Informed Decisions as the Market Moves.',
      
  },
  {
      img : img4,
      title : 'Multi-Broker Support ',
      description : 'Manage All Your Trading Accounts in One Dashboard for Easy, Streamlined Access to Multiple Brokers.',
      
  },
  
]



</script>