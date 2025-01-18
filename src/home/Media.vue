<template>
    <div class="mt-16 md:mt-32 my-20">
        <div class="text-center">
            <p class="text-[27px] md:text-[38px] font-bold mx-auto text-white">Transform Your Trading Approach</p>

            <p class="text-[#BBB8B8] text-[16px] md:text-[18px] w-[95%] max-w-6xl p-2 mx-auto mt-4 font-openSans">Innovate your trading experience with ease and precision. Our platform provides powerful tools and actionable insights to help you achieve your goals effortlessly.</p>
        </div>
        <div class="my-10 mt-24">
            <!-- <SliderText/>
          <SliderVid/> -->

            <!-- <div class="w-32 text-center border overflow-hidden text-nowrap">
                <div class="anime">
                    <span class="p-4">Algo Trading</span>
                    <span class="p-4 ">Indicators</span>
                    <span class="p-4">Manual Trading</span>
                </div>

            </div> -->

            <swiper :slidesPerView="size"  :centeredSlides="true" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: false,
            }" :loop="true" :modules="modules" class="mySwiper w-[95%] md:w-[60%] text-nowrap text-center ">
                <swiper-slide class="flex flex-col space-y-2" v-for="item in features">

                    <h3 class=" text-white text-[23px]">
                        {{ item.title }}
                    </h3>

                </swiper-slide>
            </swiper>
            <Media2/>
        </div>
    </div>
</template>

<script setup>
import SliderText from './utils/SliderText.vue';
import SliderVid from './utils/SliderVid.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { computed } from 'vue';
import Media2 from './Media2.vue';

// Register the modules to be used in the Swiper

const size = computed(() => {
    if(window.innerWidth < 1024) return 1 
    
    else return 3
})
const modules = [Autoplay];
const features = [
    {
        title: "Copy Trade",
        desc: "Mirror trades across different accounts automatically.",
        img: "/images/whiteLabel/svg/pie-chart.svg",
    },
    {
        title: "Admin Console",
        desc: "Get full access to manage users, brokers, and trades from a centralized console.",
        img: "/images/whiteLabel/svg/stock.svg",
    },
    {
        title: "Landing Page",
        desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
        img: "/images/whiteLabel/svg/development.svg",
    },
    {
        title: "Webhooks",
        desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
        img: "/images/whiteLabel/svg/development.svg",
    },

];

</script>

<style scoped>
.swiper-slide-active h3 {
    transform: scale(1.1);
    font-size: 38px;
    /* md:text-[55px] */
    font-weight: 700;
    /* font-bold */
    background: linear-gradient(to right, #00B852, #5BC9F9);
    /* bg-gradient-to-r from-[#00B852] to-[#5BC9F9] */
    -webkit-background-clip: text;
    /* bg-clip-text */
    color: transparent;
    /* text-transparent */
}


.swiper-slide-prev h3 {
    font-size: 38px;
    /* md:text-[55px] */
    font-weight: 700;
    /* font-bold */
    background: linear-gradient(to right, #161a1e 15%, white);
    /* bg-gradient-to-r from-[#00B852] to-[#5BC9F9] */
    -webkit-background-clip: text;
    /* bg-clip-text */
    color: transparent;
    /* text-transparent */
}
.swiper-slide-next h3{
    font-size: 38px;
    /* md:text-[55px] */
    font-weight: 700;
    /* font-bold */
    
    background: linear-gradient(to left, #161a1e 15%, white);
    /* bg-gradient-to-r from-[#00B852] to-[#5BC9F9] */
    -webkit-background-clip: text;
    /* bg-clip-text */
    color: transparent;
    /* text-transparent */
}
</style>
