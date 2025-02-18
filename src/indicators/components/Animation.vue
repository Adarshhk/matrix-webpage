<template>
    <h2
        class="text-[27px] md:text-[38px] my-24 text-center font-extrabold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent leading-tight">
        Try Out On Your Chart
    </h2>

    
    <div class="mt-10 w-[70%] mx-auto glow-effect">

        <ImgComparisonSlider class="slider-with-animated-handle ">
            <!-- eslint-disable -->
            <img slot="first" style="width: 100%" :src="firstImg" />
            <img slot="second" style="width: 100%" :src="secondImg" />
            <!-- eslint-enable -->
            <svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100"
                viewBox="-8 -3 16 6">
                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                    stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
            </svg>
        </ImgComparisonSlider>

    </div>


</template>

<script setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import firstImg from '/src/assets/img/slider_img (1).png'
import secondImg from '/src/assets/img/slider_img (2).png'
</script>

<style scoped>
.slider-with-shadows {
    --default-handle-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.8);
    --divider-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5);
}

.glow-effect {
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.8);
}
</style>