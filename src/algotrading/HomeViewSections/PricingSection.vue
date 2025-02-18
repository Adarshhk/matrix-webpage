<script setup>
import PricingTable from "/src/component/PricingTable.vue"
import animation from "../animation.vue";
import MatrixAlgo from "../../pricing/MatrixAlgo.vue";
import Cart from "../../pricing/components/Cart.vue";
import usePricingStore from "../../store/pricing";
import { storeToRefs } from "pinia";

const pricingStore = usePricingStore();
const {selectedPriceType} = storeToRefs(pricingStore)

const periods = [{ name: 'Monthly', value: 'monthly' }, { name: 'Quaterly', value: 'quaterly' }, { name: 'Yearly', value: 'yearly' }]
</script>


<template>
    <section class="mt-24">
        <div class="text-center mx-auto space-y-3">
            <div class="flex items-center justify-center">
                <div class="w-[15%] md:w-[10%] xl:w-[6%]">
                    <animation animationPath="/Animations/thunder.json" />
                </div>
                <h1 class="font-CabinetGrotesk font-bold text-white text-[27px] xl:text-[38px]">Simple and <span
                        class="text-matrix-green">flexible pricing</span></h1>
            </div>
            <p class="font-openSans text-[#dfdfdf] text-[16px] xl:text-[18px]">Start with a <span
                    class="underline font-openSans ">7-day free trial</span>. No credit card needed. Cancel at any time.
            </p>
        </div>

        <div class=" mt-10 w-full">
            <div class="w-full flex justify-end">
                <div class="bg-[#1d2125] rounded-full p-1.5 inline-flex mb-4 mx-auto">
                <button v-for="period in periods" :key="period.value" :class="[
                    'px-4 font-openSans text-[16px]  md:px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm md:text-base min-w-[80px] md:min-w-[100px]',
                    selectedPriceType === period.value ? 'bg-[#00B852] text-[#dfdfdf]' : 'text-gray-400',
                ]" @click="selectedPriceType = period.value">
                    {{ period.name }}
                </button>
            </div>

            </div>
            
            <!-- <PricingTable/> -->
            <MatrixAlgo />
            <Cart />
        </div>
    </section>
</template>
