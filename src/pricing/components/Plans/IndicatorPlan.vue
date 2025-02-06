<template>

    <div class=" h-full flex flex-col justify-center items-center lg:px-24">
        

        <h3 class="text-white text-[32px] text-center leading-tight font-bold mb-4">
            Discover & Trade with the Best Indicators
        </h3>

        <p class="text-[#dfdfdf] text-[16px] mb-4 text-center font-openSans">
            Access millions of premium indicators in one marketplace. Compare, buy, and enhance your trading strategy effortlessly. Stop searching across multiple platforms—everything you need is here to trade smarter and faster! 🚀
        </p>


        <button
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

            
            <p class="font-openSans text-white">Explore</p>

        </button>

    </div>


    
</template>

<script setup>
import { computed, ref } from 'vue';
import usePricingStore from '../../../store/pricing';
import { storeToRefs } from 'pinia';

const pricingStore = usePricingStore();
const {edgePricing} = storeToRefs(pricingStore);

const indicatorPlan = computed(() => edgePricing.value[2]);
</script>