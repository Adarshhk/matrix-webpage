<script setup>
import { RouterLink } from 'vue-router';

// import { LottieAnimation } from "lottie-web-vue";
// import logo from "../../public/Animations/ring_with_logo.json";

const articles = [
  {
    img: "/src/assets/img/blog1.jpeg",
    tag: ["Finance", "AutoMobile"],
    title:
      "Understanding Option Trading: A Guide to Navigating the Market",
    desc: "Option trading is a very helpful tool for traders and investors in the realm of financial markets. Options offer a variety of ways to reach your financial goals. Whether you want to hedge your risks, speculate on price movements, or generate additional income, options provide a wide array of strategies to achieve your financial goals. In this article, we'll look at basic concepts of option trading and why it's worthwhile.",
    date: "May 20, 2024",
  },
 
  {
    img: "/src/assets/img/blog2.jpeg",
    tag: ["Finance", "AutoMobile"],
    title:
      "Know How Algo Trading Can Be a Source Of Your Extra Income",
    desc: "Have you ever thought about earning some extra cash without multiple jobs or compromising your free time? If the answer is yes, let’s talk about algo (algorithmic) trading — a game-changing way to generate extra income with the help of technology. Whether you’re a seasoned trader or someone who’s never touched the stock market, algo trading could be your new best friend.",
    date: "May 20, 2024",
  },
  {
    img: "/src/assets/img/blog3.jpeg",
    tag: ["Finance", "AutoMobile"],
    title:
      "Algo Trading vs Manual Trading: Which One is Right for You?",
    desc: "Trading in financial markets has evolved significantly over the years. What once required hours of manual effort and analysis can now be streamlined with the power of technology. This brings us to the age-old debate: algo trading vs manual trading. Both approaches have their pros and cons, and choosing the right one depends on your goals, experience, and preferences.",
    date: "May 20, 2024",
  },
  
];
</script>

<template>
  <section class="mx-auto w-[95%]">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-8">
      <RouterLink :to="`/blog-details/${id}`" v-for="(item,id) in articles" class=" space-y-3">
        <div class="">
          <img :src="item.img" alt="" class="aspect-video"/>
        </div>
        
        <h1 class="font-CabinetGrotesk text-white font-bold text-[19px]">
          {{ item.title }}
        </h1>
        
        <hr class="border-dashed border-[#FFFFFF30]" />

        
        <p class="text-white text-[14px] md:text-[16px]">{{ item.date }}</p>
      </RouterLink>
    </div>
    
  </section>
</template>
