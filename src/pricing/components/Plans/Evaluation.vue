<template>

    <div class="w-full my-4">


        <h3 class="text-white text-xl font-bold mb-4">
            Whats For You
        </h3>
        <ul class="space-y-4 ">
            <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                    {{ feature.text }}
                </span>
            </li>
        </ul>

        <button
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
        <ul class="flex flex-wrap gap-4">
            <li class="">
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>
            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li>
                <Tippy content_title="Webhook with partail access"
                    content_desc="Note : This is a premium feature, you will get partial access."
                    class="bg-[#272b2f] text-white p-2 rounded-lg">
                    <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
            </li>

            <li>
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
import { ref } from 'vue';
import Tippy from '../../../component/Tippy.vue';


const active = ref('core')

const toggleActive = (name) => {
    active.value = name;
}

const features = {
    column1: [
        { text: "20,000+ of PNG & SVG graphics", active: true },
        { text: "Switch or cancel anytime", active: true },
        { text: "Scalable plans for beginners to pros", active: true },
        { text: "Advanced analytics tools", active: false },
        { text: "Custom integrations", active: false },
        { text: "Priority support", active: false },
    ],
    column2: [
        { text: "Real-time market data", active: true },
        { text: "Multi-device sync", active: true },
        { text: "API access", active: true },
        { text: "White-label solutions", active: false },
        { text: "Dedicated account manager", active: false },
        { text: "Custom reporting", active: false },
    ],
};

const activeButton = ref("Capital");
const plans = ["Capital", "Risk Reward"];

const toggleActiveButton = (name) => {
    activeButton.value = name;
};

const getButtonClass = (plan) => ({
    "text-black font-semibold bg-[white] ": activeButton.value === plan,
    "text-[#F9F2F2] ": activeButton.value !== plan,
});
</script>