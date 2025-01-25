<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import IndiaAnimation from "/src/component/IndiaAnimation.vue";
import Vue3Autocounter from "vue3-autocounter";

const observedSection = ref(null);
const isInView = ref(false);

let observer;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    console.log("Intersection observed:", entry.isIntersecting); // Debug log
    isInView.value = entry.isIntersecting;
  });
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Adjust as needed
  });

  if (observedSection.value) {
    observer.observe(observedSection.value);
    console.log("Observer set up on", observedSection.value); // Debug log
  }
});

onBeforeUnmount(() => {
  if (observer && observedSection.value) {
    observer.unobserve(observedSection.value);
  }
});

const reviews = [
  {
    img: "/images/svg/review1.svg",
    title: 7256,
    desc: "Registered users",
  },
  {
    img: "/images/svg/review2.svg",
    title: 1288,
    desc: "Cities covered",
  },
  {
    img: "/images/svg/review3.svg",
    title: 8,
    desc: "Countries covered",
  },
  {
    img: "/images/svg/review4.svg",
    title: 12,
    desc: "Years of experience",
  },
];
</script>

<template>
  <section
    ref="observedSection"
    class="p-8 md:p-20 bg-[#ECF6F6] flex items-center justify-between"
  >
    <div class="flex flex-col justify-between items-center xl:flex-row">
      <h1
        class="font-CabinetGrotesk font-extrabold text-black mx-auto text-[31px] w-full md:text-[38px] md:w-[70%] xl:hidden"
      >
        We are loved by people from all parts of India
      </h1>
      <div class="w-[100%] mx-auto xl:mx-0 xl:w-[45%]">
        <IndiaAnimation />
      </div>
      <div class="flex flex-col items-center xl:items-start justify-start w-full xl:w-[35%]">
        <div class="">
          <h1
            class="font-CabinetGrotesk font-extrabold text-black text-[38px] hidden xl:flex"
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
      <img :src="item.img" alt="" class="w-[31px] md:w-[52px] xl:w-[40px]"/>
      <div>
        <p
          class="font-CabinetGrotesk font-extrabold text-black text-[27px] md:text-[34px]"
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
        <p class="font-ProximaNova text-[16px] md:text-[18px] whitespace-nowrap">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>

      </div>
    </div>
  </section>
</template>
