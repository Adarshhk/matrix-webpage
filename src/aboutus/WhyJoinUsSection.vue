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
    <section class="mt-10">
        <div class=" text-center mx-auto space-y-5">
            <p class="font-openSans text-[#dfdfdf] uppercase text-[16px]">Why Join Us</p>
            <h1 class="text-white font-semibold text-[27px] md:text-[35px]">To make the best decision for your success.</h1>
            <p class="font-openSans text-[#dfdfdf] mx-auto font-medium text-[16px]">It doesn’t matter if you’re just starting out or new to fintech—what matters is your passion and drive. From Day 1, you’ll own your journey, with the freedom to experiment, innovate, and lead. You’ll push boundaries, turn dreams into reality, and create possibilities no one has imagined yet. Here, you have the power to make them happen!</p>
        </div>
        <ul class=" mt-16 grid grid-cols-1 lg:grid-cols-5 w-full mx-auto gap-3 ">
            <li v-for="item in features" class="mx-auto text-center">
                <img :src="item.img" alt="" class="mx-auto">
                <p class="text-white mt-10 font-CabinetGrotesk text-center text-[15.5px] xl:text-[19px]">{{ item.title }}</p>
                <
            </li>
        </ul>
    </section>
</template>


