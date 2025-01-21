<template>
  <div class="relative px-5 w-full overflow-hidden bg-gradient-to-b from-[#161a1e] via-transparent to-transparent">
    <!-- Grid Background Images -->
    <div class="absolute inset-0 hidden lg:block">
      <img 
        src="/src/assets/img/Grid.png" 
        alt="Grid Pattern Left" 
        class="absolute left-0 top-20"
      />
      <img 
        src="/src/assets/img/Grid.png" 
        alt="Grid Pattern Right" 
        class="absolute right-0 top-[-90px] "
      />
    </div>

    
    <!-- Main Content -->
    <div class="mx-auto h-full flex items-center mt-0">
      <div class="flex flex-col lg:flex-row">
        <!-- Text Content (40% width) -->
        <div class="lg:w-3/5 space-y-8 ml-4 md:ml-10 z-20 mt-24 md:mt-32 xl:mt-48 ">
          
          <h1 class="text-[32px] md:text-[48px] leading-[50px] font-bold text-center lg:text-left "> 
            <span class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
              Turning Investments into
              <p class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
               Achievements
              </p>
            </span>
          </h1>
          
          <p class="text-[#D6D6D6] md:max-w-2xl mt-6 text-[16px] mx-auto lg:mx-0 font-openSans text-center lg:text-left  ">
            Empowering your growth with smart financial solutions. From seamless trading to
intelligent tools, we simplify decisions and maximize opportunities—making every
move count."
          </p>
          <div class="w-full text-center lg:text-left pb-6  ">
            <button
            class=" btn btn-anim text-[#F3F8F9] text-sm w-full max-w-48 py-2 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
            <div class="content vertical flex justify-center w-full">
              <div class="text font-semibold text-base">Start Screening</div>
              <div class="hover-text font-semibold  text-base">Join Now</div>
            </div>
          </button>
          </div>

        </div>

        <!-- Image Container (60% width) -->
        <div class="lg:w-3/5 relative mt-8 lg:mt-24 z-10">
          <div class="relative">
            <img 
              src="/src/assets/img/demooplann.png" 
              alt="Trading Dashboard"
              class="hidden lg:block"
            />
            <img 
              src="/src/assets/img/demooplann.png" 
              alt="Trading Dashboard"
              class="w-full h-full lg:hidden object-cover "
            />
            <!-- Added gradient overlay -->
            <!-- <div class="absolute hidden xl:flex inset-0 bg-gradient-to-t from-[#161a1e] via-black/0  to-transparent  transform translate-x-36"></div> -->
          </div>
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