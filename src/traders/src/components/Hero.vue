<template>
  <div class="bg relative w-full h-[70dvh] md:h-[60vh] lg:h-[100dvh] overflow-hidden pt-24 md:pt-0">
    
    <div class="mx-auto lg:px-4 h-full flex items-center ">
      
      <div class="flex flex-col lg:flex-row justify-between items-left  w-full">
        <!-- Text Content -->
         
        <div class="px-8">
          
          <Breadcrumb :items="[{
            title: 'Home',
            disabled: false,
            href: '/'
          },
          {
            title: 'Trader',
            disabled: false,
            href: '/trader'
          },
          ]" />
          <h1 class="mt-4 text-[32px] md:text-[48px] lg:leading-[50px] font-bold text-center md:text-left ">
            <span class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
              When Seconds Matter,
              <p class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
                We Deliver
              </p>
            </span>
          </h1>

          
          <p class="text-[#D6D6D6] md:max-w-lg lg:max-w-2xl mt-6 text-[16px] font-openSans text-center md:text-left ">
            Scalping is all about speed and precision, and our platform is built to match your pace. From lightning-
            fast signals to one-click execution, we ensure you never miss a beat in the fast-moving market.
          </p>
          <div class="flex justify-center lg:justify-start">
            <button
              class="mt-10 btn btn-anim text-[#F3F8F9] text-sm w-1/2 max-w-48 py-2 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
              <div class="content vertical flex justify-center">
                <div class="text font-semibold text-base">Get Started</div>
                <div class="hover-text font-semibold  text-base">Join Now</div>
              </div>
            </button>
          </div>

        </div>

        <!-- Image Container -->

      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '/src/component/Breadcrumb.vue'
import { RouterLink } from 'vue-router';


// No additional script needed
</script>

<style scoped>
.bg {
  background: url('/src/assets/img/traderbg.png');

  background-size: cover;
  background-position: left;
}

@media (min-width: 768px) {
  .bg {
    background-position: center;
  }
}

@media lg {}

.content {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}

.back {
  background-image: url('/src/assets/img/grid1.png');
  background-size: 35rem;

  background-repeat: no-repeat;
}
</style>