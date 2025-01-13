<template>
  <div class="relative w-[100%] bg h-[95vh]">
    <!-- Background Grid Pattern Container -->
    

    <!-- Main Content -->

    <div class="mx-auto px-4 h-full flex items-center ">
      <div class="flex flex-col lg:flex-row justify-between items-center w-full">
        <!-- Text Content -->
        <div class="ml-0 xl:ml-10 xl:w-[70%] 2xl:w-[50%] z-10"> 
          
          <h1 class="text-[32px] md:text-[48px] 2xl:text-[60px] font-extrabold leading-[35px] md:leading-[55px] xl:leading-[40px] 2xl:leading-[70px] "> 
            <span class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
              When Seconds Matter, 
            </span>
            <p class="bg-gradient-to-r from-[#00b853] to-[#51c7e6] bg-clip-text text-transparent">We Deliver</p>
          </h1>
          
          <p class="text-[#BBB8B8] text-md md:text-xl 2xl:text-xl leading-relaxed tracking-wide mt-6">
            Scalping is all about speed and precision, and our platform is built to match your pace. From lightning-
            fast signals to one-click execution, we ensure you never miss a beat in the fast-moving market.
          </p>

          <button
            class="mt-6 btn btn-anim text-[#F3F8F9] text-sm w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
            <div class="content vertical flex justify-center">
              <div class="text font-semibold text-base">Get Started</div>
              <div class="hover-text font-semibold  text-base">Join Now</div>
            </div>
          </button>
        </div>

        <!-- Image Container -->
         
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>

.bg{

background-image:url('/src/assets/img/investorbg4.png');
background-size: cover;
background-position: center;
}

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