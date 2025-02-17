<template>

    <div class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Personalized & Standardized Plans
        </h3>

        <div class="flex gap-2 overflow-x-auto ">
            <div v-for="plan in signalPlans" @click="toggleActive(plan)"
                class=" relative min-w-56 w-full  lg:w-1/3 flex justify-between items-end gap-3 rounded p-2 border"
                :class="{
                    'border-[#493D9E] bg-[#493D9E22]': active.name == plan.name && plan.tag != '',
                    'border-[#ffffff22]': active.name != plan.name

                }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                    <div class="flex flex-col items-start mt-8">
                        <h3 class="w-[122px] text-white text-[20px] font-bold">{{ plan.name }}</h3>
                        <div :class="{ 'opacity-0': plan.tag === '' }"
                            class="bg-[#493D9E] top-0 left-2 rounded-b text-white absolute px-2">
                            <span class=" text-xs uppercase font-extrabold">{{ plan.tag }}</span>
                        </div>

                    </div>
                </div>

                <div class="flex flex-col items-end text-end">
                    <p class="text-[22px] font-bold text-white leading-tight">
                        <span class="text-[#ffffff33] text-[14px] font-semibold">starts with </span><span>₹</span>{{
                            plan.price }}
                    </p>

                </div>
            </div>

        </div>



        <div class="w-full my-4">
            <hr class="border-[#ffffff22] my-4" />

            <h3 v-if="active.name == 'Individual'" class="text-white text-xl font-bold mb-4">
                Choose Your Favourite One
            </h3>
            <h3 v-else class="text-white text-xl font-bold mb-4">
                What's Inside It
            </h3>
            <!-- tags -->
            <div v-if="active.name === 'Individual'" class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div @click="() => { activeIndividualPlan = item; nowActive = item }" v-for="item in active.plans"
                    class=" flex flex-col items-center space-y-3 rounded pb-2 border"
                    :class="{ 'border-[#16C47F] bg-[#16C47F22]': item.tag != '' && activeIndividualPlan.name == item.name, 'border-[#ffffff22]': activeIndividualPlan.name != item.name }">
                    <!-- Radio div and Indicator Section -->
                    <div class="bg-[#16C47F] rounded-b px-2" :class="{ 'opacity-0': item.tag == '' }">
                        <span class=" text-xs uppercase font-extrabold">{{ item.tag || '.' }}</span>
                    </div>
                    <img v-if="item.name == 'F&O'" src="/src/assets/svg/option.svg" alt="">
                    <img v-if="item.name == 'Equity'" src="/src/assets/svg/equity.svg" alt="">
                    <img v-if="item.name == 'Commodity'" src="/src/assets/svg/gold.svg" alt="">
                    <img v-if="item.name == 'Stocks'" src="/src/assets/svg/stock.svg" alt="">
                    <div class="flex items-center gap-2">

                        <div class="flex flex-col items-start ">
                            <h3 class=" text-white text-[20px] font-bold">{{ item.name }}</h3>
                        </div>
                    </div>
                    <!-- Pricing Section -->
                    <div class="flex flex-col text-center">
                        <p class="text-[#ffffff] text-[14px] font-semibold line-through">₹{{ item.actual_price }}</p>
                        <p class="text-[24px] font-bold text-white leading-tight">
                            ₹{{ item.price }}
                        </p>

                    </div>
                </div>

            </div>


        </div>

        <!-- <ul v-if="active.name == 'Individual' && activeIndividualPlan" class="space-y-4">

            <li v-for="(feature, i) in activeIndividualPlan.features" :key="i" class="flex items-center gap-3">
                <img v-if="feature.is_enable" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.is_enable ? 'text-white' : 'text-gray-400'">
                    {{ feature.title }}
                </span>
            </li>
        </ul>
        <ul v-if="active.name != 'Individual'" class="space-y-4">

            <li v-for="(feature, i) in active.features" :key="i" class="flex items-center gap-3">
                <img v-if="feature.is_enable" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.is_enable ? 'text-white' : 'text-gray-400'">
                    {{ feature.title }}
                </span>
            </li>
        </ul> -->
       
        <ul class="space-y-4">

            <li v-for="(feature, i) in nowActive.features" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <button :disabled="purchased" @click="add"
            class="text-[#272727] font-openSans font-bold  rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150" :class="{'text-[#ffffff22] hover:bg-transparent' : purchased}">

            <img src="/src/assets/svg/add.svg" v-if="!purchased" alt="" class="w-4">
            <p class="font-openSans text-white">{{ purchased ? 'Already Purchased' : 'Add To Cart' }}</p>

        </button>
        <hr class="border-[#ffffff22] my-8" />
    </div>


    <div v-if="nowActive.products" class="">
        <h3 class="text-white text-xl font-bold mb-4">
            Free For You*
        </h3>
        <ul class="flex flex-wrap gap-4">
            <li v-if="nowActive.products.includes('wehook')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="nowActive.products.includes('signals')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="nowActive.products.includes('manual_trade')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li v-if="nowActive.products.includes('screener')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>


            <li v-if="nowActive.products.includes('indicator')">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li v-if="nowActive.products.includes('algo_trading')">
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
import useProductsStore from '../../../store/subscription';

const pricingStore = usePricingStore();
const cartStore = useCartStore();
const { edgePricing } = storeToRefs(pricingStore);

const signalPlans = computed(() => edgePricing.value[0].plans);

const active = ref(signalPlans.value[0])

const activeIndividualPlan = ref(active.value.plans[0])

const nowActive = ref(active.value.plans[0]);
const toggleActive = (name) => {
    active.value = name;
    if (active.value.name === 'Individual') nowActive.value = active.value.plans[0];
    else nowActive.value = name;
}


const add = () => {
    cartStore.addToCart({ name: `Signals : ${nowActive.value.name}`, price: nowActive.value.price })
}

const subscriptionStore = useProductsStore();
const purchased = computed(() => subscriptionStore.isPurchased(nowActive.value.product_id));


</script>