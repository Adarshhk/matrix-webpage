<template>
  <div class="relative w-full  overflow-hidden  ">
    <!-- Background Grid Pattern Container -->
    <div class="absolute inset-0 flex justify-between z-[-2]">
      <!-- Left Grid Pattern -->
      <div class="w-full xl:w-1/3">
        <img 
          src="/src/assets/img/Grid.png" 
          alt="Background Grid Left"
          class="w-full h-full object-contain opacity-50" 
        />
      </div>

      <!-- Right Grid Pattern -->
      <div class="hidden xl:block w-1/3">
        <img 
          src="/src/assets/img/Grid.png" 
          alt="Background Grid Right"
          class="w-full h-full object-contain opacity-50" 
        />
      </div>
    </div>

    <div class="container mx-auto lg:h-screen z-10 ">
      <div class="flex flex-col lg:flex-row items-center justify-between h-full pt-20 lg:pt-0 ">
        <!-- Text Content -->
        <div class="w-full lg:w-1/2  px-4 space-y-8 xl:-mt-20 ml-0 xl:ml-5 mt-10 text-center lg:text-left">
          <h1 class=" text-[35px] md:text-[55px] font-bold leading-tight">
            <span class="inline-block bg-gradient-to-r from-[#00b853] to-[#51c7e6] bg-clip-text text-transparent">
              When Seconds Matter, <br> We Deliver
            </span> 
            
          </h1>

          <p class="text-[#BBB8B8] text-lg leading-relaxed xl:max-w-2xl">
            Scalping is all about speed and precision, and our platform is built to match your pace. From lightning-fast signals to one-click execution, we ensure you never miss a beat in the fast-moving market.
          </p>

          <button class="btn btn-anim bg-[#00B852] text-white px-10 py-3 rounded-full shadow-lg shadow-[#00b8539e] hover:bg-[#00a048] transition-all duration-300">
            <div class="content vertical flex justify-center">
              <div class="text font-semibold text-base">Get Started</div>
              <div class="hover-text font-semibold text-base">Join Now</div>
            </div>
          </button>
        </div>

        <!-- Graph Image -->
        <div class="w-full lg:w-1/2 lg:mt-0 p-2 md:p-0 z-[-2]">
          <img 
            src="/src/assets/img/graphh.png" 
            alt="Trading Dashboard" 
            class=" md:max-w-4xl object-contain xl:mt-32 mt-10 md:mt-0 "
          />
        </div>
      </div>
    </div>
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