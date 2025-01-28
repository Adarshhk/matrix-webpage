<template>
    <div class=" h-[487px] flex flex-col">
        <h3 class="text-white text-[20px] font-bold mb-4 ">
        Features of Matrix Algo
      </h3>
    <!-- Adjust grid columns dynamically -->
    <div
    
      :class="{
        'grid grid-cols-2 gap-2 overflow-y-auto': activeIndicator !== '',
        'grid grid-cols-1 overflow-y-auto': activeIndicator === ''
      }"
    >
      <!-- Indicators List -->
      <div class="overflow-auto no-scrollbar px-4 border-l border-r border-[#ffffff33]">
        
        <button
          @click="changeActive(ind.name)"
          v-for="ind in Indicators"
          :key="ind.name"
          class="w-full mb-4 flex justify-between items-center gap-3 rounded p-4 border h-auto"
          :class="{
            'border-[#dfdfdf]': activeIndicator === ind.name,
            'border-[#ffffff33]': activeIndicator != ind.name,
            'col-span-2': activeIndicator === ''
          }"
        >
          <!-- Radio div and Indicator Section -->
          <div class="grid grid-cols-4 items-center gap-4 ">
            <!-- <div class="col-span-1 border">
                <img src="/src/assets/img/ind1.jpeg" alt="" class=" aspect-square" >
            </div> -->
            <div class="text-left col-span-4">
              <h3 class="text-white text-[20px] font-bold">{{ ind.name }}</h3>
              <hr class="h-px my-4 bg-[#ffffff33] border-0 dark:bg-[#ffffff33]">
              <div class="text-[#dfdfdf]">
                <p class="font-semibold font-openSans text-[14px]">{{ ind.description }}</p>
              </div>
            </div>
          </div>
          
        </button>
      </div>
  
      <!-- Details Section -->
      <div v-if="activeIndicator !== ''" class="p-2 pt-4 ">
        <div class="sticky top-0 flex flex-col gap-4">
            <h3 class="text-white text-[20px] font-bold mb-4">
          {{ activeIndicator }} Details
        </h3>
        <img src="/src/assets/img/ind1.jpeg" alt="" class="">
        <p class="text-white">
          {{ getActiveIndicatorDetails(activeIndicator) }}
        </p>

        </div>
        
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";

  const props = defineProps({
    addToCart : Function , 
    isInCart : Boolean
  })
  
  const activeIndicator = ref("Breakout Range");
  const Indicators = [
    {
      name: "Breakout Range",
      description: "Now, when you click an indicator, the grid will divide into two columns, and the second column will display the relevant details. When no indicator is active, the grid will return to a single-column layout.",
      price: 3000,
    },
    {
      name: "Moving Average",
      description: "Calculates the average price over a specific time period.",
      price: 2500,
    },
    {
      name: "Relative Strength Index (RSI)",
      description:"Measures momentum to assess overbought or oversold conditions.",
      price: 2800,
    },
    {
      name: "Bollinger Bands",
      description: "Plots bands based on standard deviation to detect volatility.",
      price: 3200,
    },
    
    
  ];
  
  const changeActive = (ind) => {
    activeIndicator.value = ind
  };
  
  const getActiveIndicatorDetails = (name) => {
    const indicator = Indicators.find((ind) => ind.name === name);
    return indicator ? indicator.description : "No details available";
  };
  </script>

  <style scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
  