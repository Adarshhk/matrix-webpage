<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import IndiaAnimation from "/src/component/IndiaAnimation.vue";
import Vue3Autocounter from "vue3-autocounter";
import LottieComponent from "../../home/utils/LottieComponent.vue";

const observedSection = ref(null);
const isInView = ref(false);

let observer;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    
    isInView.value = entry.isIntersecting;
  });
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Adjust as needed
  });

  if (observedSection.value) {
    observer.observe(observedSection.value);
    
  }
});

onBeforeUnmount(() => {
  if (observer && observedSection.value) {
    observer.unobserve(observedSection.value);
  }
});

const reviews = [
  {
    img: "/images/svg/review1.json",
    title: 7256,
    desc: "Registered users",
  },
  {
    img: "/images/svg/review2.json",
    title: 1288,
    desc: "Cities covered",
  },
  {
    img: "/images/svg/review3.json",
    title: 8,
    desc: "Countries covered",
  },
  {
    img: "/images/svg/review4.json",
    title: 12,
    desc: "Years of experience",
  },
];
</script>

<template>
  <section
    ref="observedSection"
    class="mt-16 lg:mt-24 flex items-center justify-between"
  >
    <div class="flex flex-col justify-between items-center xl:flex-row">
      <h1
        class="font-bold text-white mx-auto text-[27x] w-full md:text-[38px] md:w-[70%] xl:hidden"
      >
        We are loved by people from all parts of India
      </h1>
      <div class="w-[100%] mx-auto xl:mx-0 xl:w-[45%]">
        <IndiaAnimation />
      </div>
      <div class="flex flex-col items-center xl:items-start justify-start w-full xl:w-[35%]">
        <div class="">
          <h1
            class="font-bold text-white text-[38px] hidden xl:flex"
          >
            We are loved by people from all parts of India
          </h1>
        </div>


  <div class="grid grid-cols-2 place-items-center justify-items-center gap-1 md:gap-3 text-black">
    <div
      v-for="item in reviews"
      :key="item.desc"
      class="flex items-center gap-1 py-7 justify-between"
    >
      <LottieComponent :animationPath="item.img" />
      <div>
        <p
          class="font-bold text-[#dfdfdf] text-[27px] md:text-[34px]"
        >
          <Vue3Autocounter
            v-if="isInView"
            :startAmount="0"
            :endAmount="item.title"
            :duration="4"
            separator=","
            decimalSeparator="."
          />
        </p>
        <p class="font-openSans text-[#dfdfdf] text-[14px] md:text-[16px] whitespace-nowrap">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>

      </div>
    </div>
  </section>
</template>
