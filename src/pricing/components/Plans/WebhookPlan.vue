<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="grid  grid-cols-1 lg:grid-cols-3  gap-2 overflow-x-auto ">

            <div v-for="plan in webhookPlans.plans" @click="toggleActive(plan)"
                class="relative flex justify-between items-end gap-3 rounded p-2 border"
                :class="{ 'border-[#dfdfdf]': activePlan.name == plan.name, 'border-[#ffffff22]': activePlan.name != plan.name }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class=" text-white text-[20px] font-bold">{{ plan.name }}</h3>
                        <div class="bg-[#E3DB98] top-0 left-2 rounded-b absolute px-2"
                            :class="{'opacity-0' : plan.tag == ''}">
                            <span class=" text-xs uppercase font-extrabold">{{ plan.tag }}</span>
                        </div>

                    </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col text-center">
                    <p class="text-[#ffffff55] text-[14px] font-semibold">Start With</p>
                    <p class="text-[24px] font-bold text-white leading-tight">
                        ₹{{ plan.price }}
                    </p>

                </div>
            </div>

        </div>


        <hr class="border-[#ffffff22] mb-4" />

        <h3 class="text-white text-xl font-bold mb-4">
            What's Inside It
        </h3>

        <ul class="space-y-4 ">
            <li v-for="(feature, i) in activePlan.features" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <button @click="add"
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150">

            <img src="/src/assets/svg/add.svg" alt="" class="w-4">
            <p class="font-openSans text-white">Add To Cart</p>

        </button>
        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Free For You*
        </h3>
        <ul class="flex flex-wrap gap-4" >
            <li v-if="activePlan.products.includes('wehook')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="activePlan.products.includes('signals')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="activePlan.products.includes('manual_trade')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="activePlan.products.includes('screener')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>


            <li v-if="activePlan.products.includes('indicator')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li v-if="activePlan.products.includes('algo_trading')">
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
import useCartStore from '../../../store/cart';

const pricingStore = usePricingStore();
const {edgePricing} = storeToRefs(pricingStore);
const cartStore = useCartStore();
const {addToCart} = storeToRefs(cartStore);
const webhookPlans = computed(() => edgePricing.value[3]);

const activePlan = ref(webhookPlans.value.plans[0]);

const toggleActive = (plan) => {
    activePlan.value = plan;
}

const add = () => {
    cartStore.addToCart({name : `Webhooks: ${activePlan.value.name}` , price : activePlan.value.price})
}


</script>