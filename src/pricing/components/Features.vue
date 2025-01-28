<template>
  <div class="bg-[#00B852] grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-10 lg:py-0 rounded-lg">
      <div class="flex items-center text-center lg:text-left">
          <div class="lg:pl-4">
            <div class="w-full flex lg:justify-start justify-center">
              <p class=" rounded-3xl font-semibold bg-white bg-opacity-10 border-[white] px-2 py-1 text-[14px] text-white mb-6">
                  #1 Community For All
              </p>
          </div>

          <h2 class="text-[27px] xl:text-[38px] font-bold text-white">
            Step Into Smarter Trading
          </h2>
          <p class="text-[#F3F8F9] text-[16px] font-openSans">
            Join thousands who trust us for reliable and secure trading. Select the perfect plan to start your journey today
          </p>
          <button class="bg-white rounded w-[80%] max-w-60 mt-10 font-bold text-[#00B852] py-3">
              <div class="content vertical flex justify-center">
                      <div class="text font-openSans">Get Started Now</div>
                      <div class="hover-text font-openSans">Get Started Now</div>
                  </div>
          </button>
          </div>
          
      </div>
      <div class="xl:flex hidden h-full gap-2 relative">
          <img src="/src/assets/img/buisness.png" alt="" class="object-contain">
      </div>
      <!-- <div class="justify-center items-center w-[40%] hidden lg:flex">
          <div class="-t border-b text-white py-3 text-center w-full bg-gradient-to-r from-transparent via-[#00B852] to-transparent flex flex-col justify-center items-center">
              <h2 class="font-bold text-[38px]">
                  7000+
              </h2>
              <p class="text-[18px] font-light">
                  People Already Joined
              </p>
          </div>
          
      </div> -->
      
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

</script>

<style scoped>

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

</style>