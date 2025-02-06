<template>
    <div class=" my-24 lg:my-32 grid grid-cols-5 bg-[#161a1e] p-4 rounded border border-[#ffffff33]">
        <div class="col-span-2 relative text-[#dfdfdf]">
            <div class="sticky top-24 flex flex-col items-center md:items-start justify-center p-4 ">
                <h1 class="text-2xl sm:text-4xl font-extrabold mb-6 md:mb-10 text-center md:text-left leading-tight bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent ">
                    Plans & Perks
                </h1>
                <p class="text-base md:text-lg mb-8 text-center md:text-left">
                    Affordable plans designed for every need.
                </p>
                
                <p class="text-base md:text-lg mb-8 text-center md:text-left">Access Starts at just   &nbsp;<span class="font-bold text-[44px]">
                    ₹300
                </span></p>
            </div>

        </div>

        <div class="col-span-3">

            <SignalPlan />
        </div>

    </div>
</template>

<script setup>
import SignalPlan from '../../pricing/components/Plans/SignalPlan.vue';



</script>