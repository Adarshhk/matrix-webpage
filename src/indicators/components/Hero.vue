<template>
    <div class="w-[95%]  mx-auto mt-24 ">
        <Breadcrumb :items="[{
                        title: 'Home',
                        disabled: false,
                        href: '/' 
                    },
                    {
                        title: 'Indicator',
                        disabled: false,
                        href: '/indicators' 
                    },
                ]"/>
        <div class="grid-background hidden lg:block -z-10 ">
            <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
            <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
        </div>
        <div class="mt-4">
            <img src="/src/assets/img/indicatorbanner.png" alt="">
        </div>
        <!-- <div class="rounded-md bg-[#68B2D7] h-48 grid grid-cols-4 ">
            <div>
                <h2 class="text-white font-bold text-[32px]">Your Smart Investment Guide</h2>
                <p>

                </p>
            </div>

        </div> -->

        <div class="mt-16">

                
                <h2
                    class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold mb-6">
                    List of indicator you may to boost your trading skills</h2>
                <p class="text-[#BBB8B8] text-[16px] lg:text-[18px] max-w-3xl mb-5">
                    Navigating the stock market can be overwhelming, but Screener simplifies the process. Whether you’re a beginner or a seasoned investor, our tools are designed to help you make informed decisions and find the best opportunities in the market.
                </p>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '../../component/Breadcrumb.vue';


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
</style>