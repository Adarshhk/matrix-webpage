<template>
  <div class="relative bg h-[80dvh] md:h-[60dvh] lg:h-[95dvh]">
    <!-- Background Grid Pattern Container -->
   
    <!-- Main Content -->
    <div class="mx-auto px-4 h-full flex items-end">
      
      <div class="flex flex-col lg:flex-row justify-between items-center w-full pb-14 md:pb-20 lg:pb-0">
        <!-- Text Content -->
         
        <div class="max-w-3xl z-10 text-center lg:text-left"> 
          
          <Breadcrumb :items="[{
            title: 'Home',
            disabled: false,
            href: '/'
          },
          {
            title: 'Investor',
            disabled: false,
            href: '/investor'
          },
          ]" />
          <h1 class=" text-[35px] md:text-[55px]  font-bold leading-tight pt-24">
            <span class="inline-block bg-gradient-to-r from-[#00b853] to-[#51c7e6] bg-clip-text text-transparent">
              When Seconds Matter, <br> We Deliver
            </span> 
            
          </h1>
          
          <p class="text-[#BBB8B8] md:max-w-xl lg:max-w-3xl text-md md:text-xl 2xl:text-xl leading-relaxed tracking-wide mt-6">
            Scalping is all about speed and precision, and our platform is built to match your pace. From lightning-
            fast signals to one-click execution, we ensure you never miss a beat in the fast-moving market.
          </p>

          <button
            class="mt-12 btn btn-anim text-[#F3F8F9] text-sm w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
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
import  Breadcrumb  from '/src/component/Breadcrumb.vue';
</script>

<style scoped>

.bg{
  background: url('/src/assets/img/investorbg4.png');
  
  background-size: cover;
  background-position: left;
}
@media (min-width: 1024px) {
  .bg {
    background-position: center;
  }
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