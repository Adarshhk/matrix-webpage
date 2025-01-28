<script setup>
import PricingTable from "/src/component/PricingTable.vue"
import animation from "../animation.vue";
</script>


<template>
    <section class="mt-24">
        <div class="text-center mx-auto space-y-3">
            <div class="flex items-center justify-center">
                <div class="w-[15%] md:w-[10%] xl:w-[6%]"><animation animationPath="/Animations/thunder.json"/></div>
                <h1 class="font-CabinetGrotesk font-bold text-white text-[27px] xl:text-[38px]">Simple and <span class="text-matrix-green">flexible pricing</span></h1>
            </div>
            <p class="font-openSans text-[#dfdfdf] text-[16px] xl:text-[18px]">Start with a <span class="underline font-openSans ">7-day free trial</span>. No credit card needed. Cancel at any time.</p>
        </div>

        <div class="">
            <PricingTable/>
        </div>
    </section>
</template>


