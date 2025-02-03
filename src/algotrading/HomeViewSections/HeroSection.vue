<template>
  <div class="md:mt-48 mb-16 lg:mb-32  grid grid-cols-1 lg:grid-cols-12 lg:gap-20 ">
      <div class="grid-background hidden lg:block ">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
      </div>
      <div class="flex flex-col col-span-6 space-y-6 justify-center ">
          <div  class="text-container ">
              <h1
              class=" text-center text-gradient md:text-left outer-heading text-[38px] md:text-[64px] max-w-3xl font-extrabold mx-auto leading-tight">
              Let Your Trades Work While You Relax!
          </h1>
          </div>


          <p class=" text-center md:text-left text-[#dfdfdf] font-openSans text-[14px] lg:text-[16px] ">
            Our Algo Trading platform is designed to make trading stress-free and profitable for you.
          </p>

          <div
              class="flex flex-col md:flex-row border-t border-[#ffffff33] pt-6 gap-2 md:gap-10 font-openSans text-[16px] font-semibold text-white ">
              <p class="font-openSans text-[14px] text-center">
                  <span class="text-[24px]">🚀</span> Effortless Automation 
              </p>
              <p class="font-openSans text-[14px] text-center">
                  <span class="text-[24px]">🏆</span> Save Time
              </p>
              <p class="font-openSans text-[14px] text-center">
                  <span class="text-[24px]">🌟</span> Boost Your Profits
              </p>
          </div>
      </div>
      <div class="col-span-6  h-full">
          <img src="/src/assets/img/algotradinghero.png" alt="">
      </div>
  </div>
</template>

<script setup>
// No additional script needed

import Breadcrumb from '/src/component/Breadcrumb.vue'
</script>

<style scoped>

.grid-background {
display: none;
/* Default: hide the grid on all screen sizes */
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
opacity: 1;
/* Adjust opacity to make it less intrusive */
}
}


.text-container {
padding: 0;
text-align: center;
}

.text-container h2 {
font-size: 6em;
text-transform: uppercase;
font-family: 'Fredoka One', cursive;
}

.text-container .text-gradient {  
color: transparent;
background-image: linear-gradient(to left, #7B68EE, #3498db, #2ecc71, #7B68EE, #3498db, #2ecc71);
-webkit-background-clip: text;
background-clip: text;
animation: color 5s linear infinite; 
background-size: 500%;  
-webkit-transform: translate3d(0,0,0);
-webkit-backface-visibility: hidden;
}

.text-container .text-pattern {  
color: transparent;
background-color: #DC143C;
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 25px,
  rgba(255,255,255,.5) 25px,
  rgba(255,255,255,.5) 50px
);
-webkit-background-clip: text;
background-clip: text;   
animation: color 50s linear infinite; 
background-size: 200%;  
-webkit-transform: translate3d(0,0,0);
-webkit-backface-visibility: hidden;
}

@keyframes color {
from { 
  background-position: 0% 50%;
}
to { 
  background-position: 100% 50%; 
}
}
</style>