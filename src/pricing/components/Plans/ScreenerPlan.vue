<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            What's Inside It
        </h3>

        <hr class="border-[#ffffff22] my-4" />
        
        <ul class="space-y-4 ">
            <li v-for="(feature, i) in screenerPlan.features" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <RouterLink to="/screener"
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

       
            <p class="font-openSans text-white">Explore Screener</p>

        </RouterLink>
        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Free For You*
        </h3>
        <ul class="flex flex-wrap gap-4" >
            <li v-if="screenerPlan.products.includes('wehook')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="screenerPlan.products.includes('signals')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="screenerPlan.products.includes('manual_trade')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="screenerPlan.products.includes('screener')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>


            <li v-if="screenerPlan.products.includes('indicator')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li v-if="screenerPlan.products.includes('algo_trading')">
                <Tippy content_title="Webhook with partail access"
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

const pricingStore = usePricingStore();
const {edgePricing} = storeToRefs(pricingStore);

const screenerPlan = computed(() => edgePricing.value[1])

</script>