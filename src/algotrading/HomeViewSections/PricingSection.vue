<script setup>
import PricingTable from "/src/component/PricingTable.vue"
import animation from "../animation.vue";
</script>


<template>
    <section class="p-4 md:p-20 bg-gradient-to-b from-[#0A0A0A] to-[#222426]">
        <div class="text-center mx-auto space-y-3">
            <div class="flex items-center justify-center">
                <div class="w-[15%] md:w-[10%] xl:w-[6%]"><animation animationPath="/Animations/thunder.json"/></div>
                <h1 class="font-CabinetGrotesk font-bold text-white text-[27px] xl:text-[38px]">Simple and <span class="text-matrix-green">flexible pricing</span></h1>
            </div>
            <p class="font-ProximaNova text-matrix-white text-[16px] xl:text-[18px]">Start with a <span class="underline">7-day free trial</span>. No credit card needed. Cancel at any time.</p>
        </div>

        <div class="">
            <PricingTable/>
        </div>
    </section>
</template>


