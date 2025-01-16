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
  <section class="w-[95%] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-8">
      <div v-for="item in articles" class=" text-black space-y-3 max-w-[95%]">
        <div class="">
          <img :src="item.img" alt="" />
        </div>
        <div class="flex space-x-2">
          <p
            v-for="tag in item.tag"
            class="bg-[#00b852] text-white px-2 rounded-sm"
          >
            {{ tag }}
          </p>
        </div>
        <h1 class="font-CabinetGrotesk text-white font-bold text-[20px]">
          {{ item.title }}
        </h1>

        <hr class="border-dashed w-[95%] border-[#FFFFFF30]" />

        <p class="font-openSans text-[#6E6E6E] text-[16px]">
          {{ item.desc }}
        </p>
        <p class="text-white text-[16px]">{{ item.date }}</p>
      </div>
    </div>
    <div class="w-full text-center mt-16">
            <button class="text-[#F3F8F9] text-sm w-[95%] md:w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
                <div class="flex justify-center">
                        <div class="text font-semibold text-base font-openSans">Load More</div>
                        
                    </div>
            </button>
        </div>
  </section>
</template>
