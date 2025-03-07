<script setup>
import Elite from '../pricing3/components/Plans/Elite.vue';
import { useStrategiesStore } from '../store/strategies';

const categories = ref([])
const strategiesStore = useStrategiesStore();
const { products, billingPeriod } = storeToRefs(strategiesStore);
const productDescData = ref({})
const matrixAlgoProduct = ref({})
const matrixActivePlan = ref({})


watchEffect(() => { 
  let data = products.value || []
  if(data.length) {
    let temp = data.filter(item => item.base_category_name === selectedPlan.value) || []
    categories.value = temp
  }
})

const findProductDesc = (data = {}) => {
  try {
    let parsedData = JSON.parse(data.description || '[]');
    parsedData = typeof parsedData === 'object' ? parsedData : {};
    productDescData.value[data.product_id] = parsedData;
  } catch (e) {
    productDescData.value[data.product_id] = {};
  }
};

const matrixAlgoData = computed(() => {
  let data = categories.value || [];
  data.sort((a, b) => b.is_recommended - a.is_recommended);
  if (data.length && data[0].base_category_name === selectedPlan.value) {
    matrixAlgoProduct.value = data[0];
    matrixActivePlan.value = data[0];
    findProductDesc(data[0]);
  }
  return data || [];
});
const changeMatrixAlgoPlans = (category) => {
  findProductDesc(category);
  matrixAlgoProduct.value = category;
  matrixActivePlan.value = category;
};



</script>

<template>
  <div class="mt-12 ">
    <div class="bg-[#1d2125] rounded-lg p-4 xl:p-6 gap-2 grid grid-cols-1 md:grid-cols-3">
      <!-- Pricing Card -->
      <div class="">
        <div class="">
          <h3 class="text-white text-[20px] font-bold mb-4">
            Featured Products
          </h3>
        </div>

        <!-- plan list -->
        <div class="flex flex-col justify-evenly gap-4 ">


          <div v-if="matrixAlgoData.length" v-for="(category, index) in matrixAlgoData" :key="index"
            @click="changeMatrixAlgoPlans(category)"
            class="relative flex justify-between items-end gap-3 rounded p-2 pt-8 border cursor-pointer" :class="[
              category.is_recommended
                ? (matrixActivePlan.product_name === category.product_name
                  ? 'border-[#FFEB00] bg-[#FFEB0022]'
                  : 'border-[#ffffff22]')
                : (matrixActivePlan.product_name === category.product_name ? '' : 'border-[#ffffff22]'),
              isPlanAvailable(category) === 'no-plans' ? 'hidden' : ''
            ]">

            <!-- Radio div and Indicator Section -->
            <div class="flex items-center gap-2">
              <div class="flex flex-col items-start">
                <h3 class="text-white md-text xl:text-[20px] font-bold">{{ category.product_name }}</h3>
                <div v-if="category.is_recommended" class="bg-[#FFEB00] top-0 left-2 rounded-b absolute px-2">
                  <span class="text-xs uppercase font-extrabold">Top Selling</span>
                </div>
              </div>
            </div>

            <!-- Pricing Section -->
            <div v-if="category.timely_price && category.timely_price[billingPeriod]" class="flex flex-col items-end">

              <p class="text-[14px] text-[#ffffff55] font-bold">Starting From</p>

              <p class="md:md-text xl:text-[22px] font-bold text-white">
                <!-- Show "Product not available" if price is <= 0 -->
                <span
                  v-if="!category.timely_price[billingPeriod].price || category.timely_price[billingPeriod].price <= 0">
                  Product not available
                </span>

                <!-- Show only the price if offer_price is missing or <= 0 -->
                <span
                  v-else-if="!category.timely_price[billingPeriod].offer_price || category.timely_price[billingPeriod].offer_price <= 0">
                  ₹{{ category.timely_price[billingPeriod].price.toLocaleString("en-IN") }}
                </span>

                <!-- Show Original & Offer Price Side by Side -->
                <span v-else class="flex items-center gap-2">
                  <span class="text-[14px] font-semibold line-through">
                    ₹{{ category.timely_price[billingPeriod].price.toLocaleString("en-IN") }}
                  </span>
                  <span class="text-white">
                    ₹{{ category.timely_price[billingPeriod].offer_price.toLocaleString("en-IN") }}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2 px-4 lg:border-l border-[#ffffff22] mx-2">

        <div class="w-full my-4">
          <h3 class="text-white text-xl font-bold mb-4">
            Whats For You
          </h3>

          <ul v-if="productDescData[matrixAlgoProduct?.product_id]" class="space-y-4">
            <!-- features.column1 -->
            <li v-for="(feature, i) in productDescData[matrixAlgoProduct?.product_id]" :key="i"
              class="flex items-center gap-3">
              <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
              <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
              <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                {{ feature.text }}
              </span>
            </li>
          </ul>
          <div>
            <!-- Already Purchased Button -->
            <button v-if="isPurchased(matrixActivePlan.category_name)"
              class="text-[#272727] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150 cursor-not-allowed">
              Already Purchased
            </button>

            <!-- Add to Cart Button (Disabled if product is not available) -->
            <button v-else @click="addMatrixAlgoProduct(matrixActivePlan)"
              :disabled="!matrixActivePlan.timely_price || !matrixActivePlan.timely_price[billingPeriod] || matrixActivePlan.timely_price[billingPeriod].price <= 0"
              class="text-[#272727] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 transition-all duration-150"
              :class="{
                'cursor-not-allowed opacity-50 bg-gray-500': !matrixActivePlan.timely_price || !matrixActivePlan.timely_price[billingPeriod] || matrixActivePlan.timely_price[billingPeriod].price <= 0,
                'hover:bg-[#ffffff11]': matrixActivePlan.timely_price && matrixActivePlan.timely_price[billingPeriod] && matrixActivePlan.timely_price[billingPeriod].price > 0
              }">
              <img src="/src/assets/svg/add.svg" alt="" class="w-4">
              <p class="font-openSans text-white">Add To Cart</p>
            </button>
          </div>

          <hr class="border-[#ffffff22] my-8" />

          <div v-if="matrixAlgoProduct.product_name === 'Evaluation' || matrixAlgoProduct.product_name === 'Elite'"
            class="">
            <h3 class="text-white text-xl font-bold mb-4">
              Free For You*
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li>
                <Tippy content_title="Screener with partail access"
                  content_desc="Note : This is a premium feature, you will get partial access."
                  class="bg-[#272b2f] text-white p-2 rounded-lg">
                  <img src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                </Tippy>
              </li>
              <li>
                <Tippy content_title="Indicator with partail access"
                  content_desc="Note : This is a premium feature, you will get partial access."
                  class="bg-[#272b2f] text-white p-2 rounded-lg">
                  <img src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                </Tippy>
              </li>
              <li v-if="matrixAlgoProduct.product_name === 'Elite'">
                <Tippy content_title="Webhook with partail access"
                  content_desc="Note : This is a premium feature, you will get partial access."
                  class="bg-[#272b2f] text-white p-2 rounded-lg">
                  <img src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                </Tippy>
              </li>
            </ul>
          </div>
        </div>
        
        <Elite v-if="activePlan.name === 'elite'" />
      </div>
    </div>
  </div>


</template>