<script setup>
import { onMounted, ref } from 'vue';
import galleryComponent from '/src/component/galleryComponent.vue';

// Features data
const features = [
    {
        img: "/images/svg/Feature1.svg",
        title: "Simple, Fast, & Free Templates you can use everyday",
        desc: "Get started with just a click."
    },
    {
        img: "/images/svg/Feature2.svg",
        title: "Super fast Backtesting speeds, for FREE",
        desc: "Backtest on over 5 years of historical data. Super Fast."
    },
    {
        img: "/images/svg/Feature3.svg",
        title: "Seamless execution of strategies with a single click",
        desc: "Save your strategies for simple and fast execution."
    },
];

// Function to handle intersection
const handleIntersection = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
};

// Set up Intersection Observer on mount
onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Adjust this value as needed
    });

    document.querySelectorAll('.fade-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-12 mb-24">
    <div class="col-span-7  pt-10">
      <div class="space-y-4 text-white text-left md:text-center xl:text-left fade-on-scroll">
        <h1 class="font-CabinetGrotesk font-semibold text-[27px] md:text-[31px] xl:text-[38px] leading-[30px] md:leading-[50px]">
          Designed to make you a confident trader
        </h1>
        <p class="font-openSans font-normal text-[16px] md:text-[18px] text-[#dfdfdf]">
          Empower your trading journey with confidence. Our platform equips you
          with insights and tools for financial triumph.
        </p>
      </div>

      <ul class=" text-[#dfdfdf] mt-10 space-y-6">
        <li v-for="item in features" :key="item.title" class="flex gap-4 items-center fade-on-scroll">
          <img :src="item.img" alt="" class="w-[35px] md:w-[40px] xl:w-[50px]">
          <div>
            <p class="font-CabinetGrotesk font-semibold text-[16px] md:text-[19px]">{{ item.title }}</p>
            <p class="font-openSans font-normal text-[16px] md:text-[18px]">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center  fade-on-scroll col-span-5">
      <img src="/src/assets/img/Sardarji.webp" alt="">
       <!-- <galleryComponent/> -->
    </div>
  </section>
</template>

<style scoped>
.fade-on-scroll {
  opacity: 0;
  transform: translateX(-50px); /* Initial position off the screen */
  transition: opacity 1s ease, transform 1s ease; /* Transition for both opacity and transform */
}

.fade-in {
  opacity: 1;
  transform: translateX(0); /* Final position */
}
</style>
