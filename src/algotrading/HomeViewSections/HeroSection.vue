<script setup></script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] ">

    <div class="flex items-center ">
      <div class="text-center lg:text-left">
        <div class="space-y-3 ">
          
          <h1 class=" font-semibold text-white leading-[60px] text-[45px] md:text-[55px]">
            Don't Wait, <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00B852] to-[#5BC9F9]">Host
              Strategies</span>
          </h1>
        </div>

        <p class="font-openSans text-[#dfdfdf] text-[14px] md:text-[16px] mt-4 ">
          Dive fearlessly into the world of trading with our end-to-end trading
          algos, empowering both amateurs and experts
        </p>
        <button
          class=" mt-8 btn btn-anim text-[#F3F8F9] text-sm w-[95%] md:w-1/2 lg:w-2/5 py-2 rounded-full bg-[#00B852] max-w-48 ">
          <div class="content vertical flex justify-center">
            <div class="text font-semibold text-base font-openSans">Get Started</div>
            <div class="hover-text font-semibold  text-base font-openSans">Get Started</div>
          </div>
        </button>
      </div>
    </div>

    <div class=" flex items-center">
      <img src="/images/BannerImage.webp" alt="">
    </div>
  </section>
</template>

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
