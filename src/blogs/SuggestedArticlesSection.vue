<script setup>
// import { LottieAnimation } from "lottie-web-vue";
// import logo from "../../public/Animations/ring_with_logo.json";

const articles = [
  {
    img: "/src/assets/img/blog2.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog1.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog3.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog1.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog2.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog3.png",
    tag: ["Finance", "AutoMobile"],
    title:
      "Chhattisgarh Herbals Mahua Pickle: The Healthy, Preservative-Free Delight, Handmade by Tribal Women",
    desc: "During the COVID-19 pandemic, online learning has become commonplace and, quite often, the only possible way to improve the expertise of company’s employees. However, this learning form.",
    date: "May 20, 2024",
  },
];
</script>

<template>
  <section class="mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-8">
      <div v-for="item in articles" class=" space-y-3">
        <div class="">
          <img :src="item.img" alt="" class="aspect-video"/>
        </div>
        
        <h1 class="font-CabinetGrotesk text-white font-bold text-[19px]">
          {{ item.title }}
        </h1>

        <hr class="border-dashed border-[#FFFFFF30]" />

        
        <p class="text-white text-[14px] md:text-[16px]">{{ item.date }}</p>
      </div>
    </div>
    
  </section>
</template>
