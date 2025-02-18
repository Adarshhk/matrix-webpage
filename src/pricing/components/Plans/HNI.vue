<template>

    <div class="w-full my-4">


        <h3 class="text-white text-xl font-bold mb-4">
            Whats For You
        </h3>
        <ul class="space-y-4 ">
            
            <li v-for="(feature, i) in (plan.features)" :key="i" class="flex items-center gap-3">
                <img v-if="feature.is_enable" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.is_enable ? 'text-white' : 'text-gray-400'">
                    {{ feature.title }}
                </span>
            </li>
        </ul>

        <button :disabled="purchased" @click="props.add" 
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150" :class="{'text-[#ffffff22] hover:bg-transparent' : purchased}">

            <img v-if="!purchased" src="/src/assets/svg/add.svg" alt="" class="w-4">
            <p class="font-openSans text-white">{{ purchased ? 'Already Purchased' : 'Add To Cart' }}</p>

        </button>
        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Free For You*
        </h3>
        <ul class="flex flex-wrap gap-4" >
            <li v-if="plan.products.includes('wehook')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="plan.products.includes('signals')">
                <Tippy content_title="Signals with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="plan.products.includes('manual_trade')">
                <Tippy content_title="Manual Trade with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="plan.products.includes('screener')">
                <Tippy content_title="Screener with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>


            <li v-if="plan.products.includes('indicator')">
                <Tippy content_title="Indicators with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li v-if="plan.products.includes('algo_trading')">
                <Tippy content_title="Algo Trading with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Tippy from '../../../component/Tippy.vue';
import usePricingStore from '../../../store/pricing';
import { storeToRefs } from 'pinia';
import useProductsStore from '../../../store/subscription';

const pricingStore = usePricingStore();
const {algoPricing} = storeToRefs(pricingStore);

const props = defineProps({
    id : Number,
    add : Function
})
const subscriptionStore = useProductsStore();
const {isPurchased} = subscriptionStore
const purchased = computed(() => {
    return isPurchased(plan.value.product_id)
})

const plan = computed(() => algoPricing.value[props.id]);
</script>