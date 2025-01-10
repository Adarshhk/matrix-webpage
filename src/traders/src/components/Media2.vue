
<!-- Not needed -->

<template>
    <div class="swiper-container h-[110vh] w-full -mt-20 lg:-mt-36 ">
        <swiper :slidesPerView="3" :spaceBetween="0" :centeredSlides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false,
        }" :loop="true" :modules="modules" class="h-full w-full">
            <swiper-slide v-for="(item, index) in features" :key="index" class="swiper-slide">
                <img :src="item.img" :alt="item.title" class="slide-image" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
import heroimg from '/src/assets/img/heroimg.png'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Register the modules to be used in the Swiper
const modules = [Autoplay];

const features = [
    {
        title: "Copy Trade",
        desc: "Mirror trades across different accounts automatically.",
        img: heroimg,
    },
    {
        title: "Admin Console",
        desc: "Get full access to manage users, brokers, and trades from a centralized console.",
        img: heroimg,
    },
    {
        title: "Landing Page",
        desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
        img: heroimg,
    },
    {
        title: "Landing Page",
        desc: "Hosted on your own domain, marketing is made easy by a high-conversion landing page for new users.",
        img: heroimg,
    },


];


</script>

<style scoped> 
.swiper-container {
    position: relative;
    overflow: hidden;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    position: relative;
}

.slide-image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    transition: all 0.5s ease;
}

.swiper-slide-active {
    z-index: 2;

}

.swiper-slide-active .slide-image {
    height: 90%;
    width: auto;
    max-width: none;

}

.swiper-slide-prev,
.swiper-slide-next {
    opacity: 0;
}


@media (max-width: 1024px) {
    .swiper-container {
        height: 70vh;
    }

    .swiper-slide-active .slide-image {
        max-height: 70vh;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
        transform: scale(0.6);
    }
}

@media (max-width: 768px) {
    .swiper-container {
        height: 38vh;
    }

    .swiper-slide-active .slide-image {
        max-height: 38vh;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
        transform: scale(0.5);
    }
}
</style>