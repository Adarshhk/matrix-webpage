<template>
    <div class="w-[95%]  mx-auto mt-24 ">
        <div class="grid-background hidden lg:block -z-10">
            <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
            <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
        </div>
        <Breadcrumb :items="[{
            title: 'Home',
            disabled: false,
            href: '/'
          },
          {
            title: 'Screener',
            disabled: false,
            href: '/screener'
          },
          ]" />
        <div>
            <img src="/src/assets/img/screenerbanner.png" alt="" class="mt-4">
        </div>
        <!-- <div class="rounded-md bg-[#68B2D7] h-48 grid grid-cols-4 ">
            <div>
                <h2 class="text-white font-bold text-[32px]">Your Smart Investment Guide</h2>
                <p>

                </p>
            </div>

        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-2 w-[95%] mx-auto">
            <div class="flex flex-col justify-end mt-16 2xl:mt-0 text-center lg:text-left">
                <h2
                    class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-[27px] lg:text-[38px] font-extrabold mb-6">
                    Here’s How Screener Can Help You</h2>
                <p class="text-[#BBB8B8] text-[16px] lg:text-[18px] max-w-3xl mb-5">
                    Navigating the stock market can be overwhelming, but Screener simplifies the process. Whether you’re
                    a beginner or a seasoned investor, our tools are designed to help you make informed decisions and
                    find the best opportunities in the market.
                </p>

                <div class="mt-3">
                    <div class="flex items-start gap-3 mb-5 ">
                        <img src="/src/assets/svg/cloud.svg" alt="">
                        <div>
                            <h3 class="text-white font-bold text-[18px] text-left">Real-Time Data</h3>
                            <p class="text-[#BBB8B8] text-[16px] font-openSans text-left">
                                Access up-to-date stock information and insights to stay ahead in the market.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 mb-5">
                        <img src="/src/assets/svg/cloud.svg" alt="">
                        <div>
                            <h3 class="text-white font-bold text-[18px] text-left">Comprehensive Analysis</h3>
                            <p class="text-[#BBB8B8] text-[16px] font-openSans text-left">
                                Dive deep into company details, performance trends, and key statistics.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 mb-5">
                        <img src="/src/assets/svg/cloud.svg" alt="">
                        <div>
                            <h3 class="text-white font-bold text-[18px] text-left">Smart Stock Selection</h3>
                            <p class="text-[#BBB8B8] text-[16px] font-openSans text-left">
                                Filter through thousands of stocks to find the ones that align with your investment
                                goals.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 mb-5">
                        <img src="/src/assets/svg/cloud.svg" alt="">
                        <div>
                            <h3 class="text-white font-bold text-[18px] text-left">Save Time</h3>
                            <p class="text-[#BBB8B8] text-[16px] font-openSans text-left">
                                Eliminate hours of research with automated screening tools tailored to your preferences.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div class="grid-cols-1">
                <img src="/src/assets/img/screenerhero.png" alt="" class="-mt-12 lg:mt-0">
            </div>
        </div>
    </div>
</template>

<script setup>

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
</style>