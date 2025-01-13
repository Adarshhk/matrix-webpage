<template>
  <div class="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-24 bg-[#161a1e]">
    <div class="relative max-w-[1200px] w-full flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <!-- Left Arrow - Visible on all screen sizes -->
      <div class="absolute -left-2 sm:-left-6 md:-left-8 lg:-left-12  mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        <img 
          src="/src/assets/svg/growth1.svg " 
          alt="" 
          class="w-12 sm:w-16 md:w-20 lg:w-24 hidden md:flex"
        >
      </div>

      <!-- Main Quote Container -->
      <div class="max-w-full md:px-12 lg:px-16 text-center">
        <h2 class="text-2xl  md:text-4xl lg:text-5xl font-bold">
          <div class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <span>"Imagine watching your portfolio</span>
            <img src="/src/assets/svg/growth3.svg" alt="" class="w-8 sm:w-10 md:w-12 lg:w-14 inline-block">
            <span>grow</span>
            <img src="/src/assets/svg/growth2.svg" alt="" class="w-8 sm:w-10 md:w-12 lg:w-14 inline-block">
            <span>while you focus on what</span>
            <span>matters most</span>
            <img src="/src/assets/svg/hand.svg" alt="" class="w-8 sm:w-10 md:w-12 lg:w-16 inline-block">
            <span>-your family, your</span>
            <span>passions, your life. That's the power</span>
            <img src="/src/assets/svg/fire.svg" alt="" class="w-8 sm:w-10 md:w-12 lg:w-14 inline-block">
            <span>of smart investing"</span>
          </div>
        </h2>
      </div>

      <!-- Right Arrow - Visible on all screen sizes -->
      <div class="absolute -right-2 sm:-right-6 md:-right-8 lg:-right-12 bottom-0 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <img 
          src="/src/assets/svg/growth1.svg" 
          alt="" 
          class="w-12 sm:w-16 md:w-20 lg:w-24 hidden md:flex"
          style="transform: rotate(250deg);"
        >
      </div>
    </div>
  </div>
  
  <!-- Get Started Button -->
  <div class="flex justify-center  mb-40  ">
    <button
            class="btn btn-anim text-[#F3F8F9] text-sm w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
            <div class="content vertical flex justify-center">
              <div class="text font-semibold text-base">Join Now</div>
              <div class="hover-text font-semibold  text-base">Get Started</div>
            </div>
          </button>
  </div>
</template>

<script setup>
// No additional script needed
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