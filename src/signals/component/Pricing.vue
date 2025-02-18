<template>
     <h1 class="text-2xl my-24 sm:text-4xl font-extrabold text-center md:text-left leading-tight bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent ">
                    Plans & Perks
                </h1>
    <div class="  grid grid-cols-5 bg-[#161a1e] p-4 rounded border border-[#ffffff33]">
        
        <div class="col-span-2 relative text-[#dfdfdf]">
            <div class="sticky top-24 flex flex-col items-center md:items-start justify-center p-4 ">
               
                <p class="text-base md:text-lg mb-8 text-center md:text-left">
                    Affordable plans designed for every need.
                    
                </p>
                
                <p class="text-base md:text-lg mb-8 text-center md:text-left">Access Starts at just   &nbsp;<span class="font-bold text-[44px]">
                    ₹{{Math.min(...signals.map(p => p.offer_price))}}
                </span></p>
            </div>

        </div>

        <div class="col-span-3">

            <SignalPlan />
            <Cart/>
        </div>

    </div>
</template>

<script setup>
import Cart from '../../pricing/components/Cart.vue';
import SignalPlan from '../../pricing/components/Plans/SignalPlan.vue';
import useCartStore from '../../store/cart';
import usePricingStore from '../../store/pricing';

const pricingStore = usePricingStore();
const {signals} = pricingStore




</script>