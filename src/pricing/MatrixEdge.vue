<template>
    <div class="bg-[#1d2125] rounded-lg p-6 gap-2 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div class="">
            <div class="">
              <h3 class="text-white text-[20px] font-bold mb-4">
                Featured Products
              </h3>
            </div>

            <!-- plan list -->
            <div class="flex flex-col justify-evenly gap-2 ">

              <div v-for="plan in edgePricing" @click="changePlan(plan)"
                class="relative  flex justify-between items-end gap-3 rounded p-2 pt-8 border "
                :class="{'border-[#FFEB00] bg-[#FFEB0022]' : activePlan.name == plan.name && activePlan.tag != '' ,'border-[#ffffff22]': activePlan.name != plan.name }"
               >
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                  <div class="flex flex-col items-start">
                    <h3 class="text-white text-[20px] font-bold">{{ plan.name }}</h3>
                    <div class="bg-[#FFEB00]  top-0 left-2 rounded-b absolute px-2"
                    :class="{'opacity-0' : plan.tag == ''}">
                      <span class=" text-xs uppercase font-extrabold">{{ plan.tag }}</span>
                    </div>

                  </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[14px] text-[#ffffff55] font-bold ">Starting From</p>
                  <p class="text-[22px] font-bold text-white ">
                    ₹{{ plan.price }}
                  </p>

                </div>
            </div>  
            </div>
          </div>
          
          <div class="col-span-2 lg:px-4 lg:border-l border-[#ffffff22] mx-2">
            <SignalPlan v-if="activePlan.name === 'Signals'" />
            <ScreenerPlan v-if="activePlan.name === 'Screener'" />
            <WebhookPlan v-if="activePlan.name === 'Webhook'" />
            <IndicatorPlan v-if="activePlan.name === 'Indicators'"/>
          </div>


        </div>

</template>




<script setup>
import { storeToRefs } from 'pinia';
import usePricingStore from '../store/pricing';
import IndicatorPlan from './components/Plans/IndicatorPlan.vue';
import ScreenerPlan from './components/Plans/ScreenerPlan.vue';
import SignalPlan from './components/Plans/SignalPlan.vue';
import WebhookPlan from './components/Plans/WebhookPlan.vue';


const pricingStore = usePricingStore();

const {activePlan , edgePricing , screener} = storeToRefs(pricingStore);

const changePlan = (plan) => {
    activePlan.value = plan;
}

</script>