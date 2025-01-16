<script setup>

const features = [
    {
        img: "src/assets/svg/Money.svg",
        title: "Competitive compensation"
    },
    {
        img: "src/assets/svg/Learning.svg",
        title: "Learning & development"
    },
    {
        img: "src/assets/svg/BabyCart.svg",
        title: "Parental Benefits"
    },
    {
        img: "src/assets/svg/Healthcare.svg",
        title: "Healthcare coverage"
    },
    {
        img: "src/assets/svg/Working.svg",
        title: "Flexible time off & working hours"
    }
]
</script>


<template>
    <section class=" p-8 md:p-12 xl:p-20">
        <div class=" text-center mx-auto space-y-5">
            <p class="font-openSans text-[#787878] uppercase text-[16px]">Why Join Us</p>
            <h1 class="font-CabinetGrotesk text-white font-extrabold text-[35px] md:text-[47px]">Do your life's best work with Matrix</h1>
            <p class="font-openSans text-[#6E6E6E] w-[85%] xl:w-[70%] mx-auto font-medium text-[16px]">It doesn't matter if you are a fresher or less experienced than others or working on fintech product for the first time. You get complete ownership of your deliverables from Day 1. You experiment and innovate, apply yourself and work as a leader! You dream and create possibilities that no one has thought about. You make it happen!</p>
        </div>
        <ul class=" mt-16 grid grid-cols-5 w-full mx-auto gap-3 ">
            <li v-for="item in features" class="mx-auto text-center">
                <img :src="item.img" alt="" class="mx-auto">
                <p class="text-white mt-10 font-CabinetGrotesk text-center text-[15.5px] xl:text-[19px]">{{ item.title }}</p>
                <hr class="text-black mt-10 md:hidden">
            </li>
        </ul>
    </section>
</template>


