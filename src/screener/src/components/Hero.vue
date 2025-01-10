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
    <div class="mx-auto  h-full flex items-center">
      <div class="flex flex-col lg:flex-row">
        <!-- Text Content (40% width) -->
        <div class="lg:w-2/5 space-y-8 ml-4 md:ml-10 z-20 mt-0 xl:mt-64">
          <p class="text-white my-5">Home <span class="mx-1">></span> Investors  </p>
          <h1 class="text-[32px] md:text-[48px] 2xl:text-[60px] font-extrabold leading-[35px] md:leading-[55px] xl:leading-[40px] 2xl:leading-[70px] w-[200%]">
            <span class="bg-gradient-to-r from-[#00b853] to-[rgb(81,199,230)] bg-clip-text text-transparent">
              Investing Doesn't Have to
              <p class="bg-gradient-to-r from-[#00b853] to-[#2fc1a7] bg-clip-text text-transparent">Be Complicated</p>
            </span>
          </h1>
          
          <p class="text-[#BBB8B8] text-md md:text-xl 2xl:text-xl leading-relaxed tracking-wide mt-6">
            The Matrix Trading Tech risk-free demo account is your gateway 
            to enhancing your trading skills, refining strategies, and mastering 
            our advanced trading tools—all without any financial risk.
          </p>

          <button class="btn btn-anim text-[#F3F8F9] text-sm w-1/3 py-3 rounded-full bg-[#00B852]">
            <div class="content vertical flex justify-center">
              <div class="text">Try Free Demo</div>
              <div class="hover-text">Click Here</div>
            </div>
          </button>
        </div>

        <!-- Image Container (60% width) -->
        <div class="lg:w-3/5 z-20 relative lg:mt-0">
          <div class="relative">
            <img 
              src="/src/assets/img/demoplann.webp" 
              alt="Trading Dashboard"
              class="w-full h-full object-cover ml-20 mt-20 md:mt-0 hidden xl:flex"
            />
            <img 
              src="/src/assets/img/demooplan.png" 
              alt="Trading Dashboard"
              class="w-full h-full flex xl:hidden object-cover 0 mt-20 md:mt-0"
            />
            <!-- Added gradient overlay -->
            <div class="absolute hidden xl:flex inset-0 bg-gradient-to-t from-[#161a1e] via-black/0  to-transparent  transform translate-x-36"></div>
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