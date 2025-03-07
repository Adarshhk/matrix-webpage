<template>
    <Cart :cart="cart" :billingPeriod="billingPeriod" :addToCart="toggleCartItem" :removeFromCart="removeFromCart"/>
    
        <div class="text-center mx-auto space-y-3 mt-24">
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
                    billingPeriod === period.value ? 'bg-[#00B852] text-[#dfdfdf]' : 'text-gray-400',
                ]" @click="billingPeriod = period.value">
                    {{ period.name }}</button>
                </div>
            </div>
        </div>
    <div class="bg-[#1d2125] rounded-lg p-4 xl:p-6 gap-2 grid grid-cols-1 md:grid-cols-3">
        <!-- Pricing Card -->
        <div class="">
            <div class="">
                <h3 class="text-white text-[20px] font-bold mb-4">
                    Featured Products
                </h3>
            </div>

            <!-- plan list -->
            <div class="flex flex-col justify-evenly gap-4">
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
                            <div v-if="category.is_recommended"
                                class="bg-[#FFEB00] top-0 left-2 rounded-b absolute px-2">
                                <span class="text-xs uppercase font-extrabold">Top Selling</span>
                            </div>
                        </div>
                    </div>

                    <!-- Pricing Section -->
                    <div v-if="category.timely_price && category.timely_price[billingPeriod]"
                        class="flex flex-col items-end">

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
                    <li v-for="(feature, i) in productDescData[matrixAlgoProduct?.product_id]" :key="i"
                        class="flex items-center gap-3">
                        <img v-if="feature.active" src="/src/assets/svg/cloud-green.svg" alt="Active Icon"
                            class="w-5 h-5" />
                        <img v-else src="/src/assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                        <span class="text-[16px] font-openSans"
                            :class="feature.active ? 'text-white' : 'text-gray-400'">
                            {{ feature.text }}
                        </span>
                    </li>
                </ul>

                <div>
                    <!-- Already Purchased Button -->
                    <button v-if="isPurchased(matrixActivePlan.product_id)"
                        class="text-[#ffffff66] font-openSans font-bold rounded border-[#ffffff] p-2 py-4 border w-full mt-4 flex items-center justify-center gap-2 hover:bg-[#ffffff11] transition-all duration-150 cursor-not-allowed">
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
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { storeToRefs } from 'pinia';
import useProductsStore from '../../store/subscription';
import { useStrategiesStore } from '../../store/strategies';
import Tippy from "../../pricing3/components/Tippy.vue";
import Cart from "../../pricing3/components/Cart.vue";

const strategiesStore = useStrategiesStore();
const subscriptionStore = useProductsStore();

const { products, billingPeriod ,cart } = storeToRefs(strategiesStore);
const { subscription } = storeToRefs(subscriptionStore);
const {isPurchased} = subscriptionStore
const periods = [
    {
        name : 'Quarterly',
        value : 'quarterly',
    },
    {
        name : 'Half Yearly',
        value : 'half_yearly',
    },
    {
        name : 'Yearly',
        value : 'yearly',
    }
]

// const props = defineProps({
//     addToCart: {
//         type: Function,
//         required: true
//     },
//     cart: {
//         type: Array,
//         required: true
//     },
//     removeFromCart: {
//         type: Function,
//         required: true
//     },
//     // Optional: if you want to pass in pre-filtered data
//     algoProducts: {
//         type: Array,
//         default: () => []
//     }
// });

const algoProducts = ref([])

const productDescData = ref({});
const matrixAlgoProduct = ref({});
const matrixActivePlan = ref({});
const categories = ref([]);

const addToCart = (product) => {
    cart.value.push(product);
};

const removeFromCart = (product) => {
    cart.value = cart.value.filter((item) => item.product_id != product.product_id);
    // console.log(cart.value)
};

const isInCart = (productID) => {
    return cart.value.some((item) => item.product_id === productID);
};

const toggleCartItem = (product) => {
    if (isInCart(product.product_id)) {
        removeFromCart(product.product_id);
    } else {
        addToCart(product);
    }
};



// Check if a plan is available
const isPlanAvailable = (category) => {
    if (!category?.timely_price) return 'no-plans';

    const prices = [
        category.timely_price.monthly?.offer_price,
        category.timely_price.quarterly?.offer_price,
        category.timely_price.half_yearly?.offer_price,
        category.timely_price.yearly?.offer_price,
        category.timely_price.lifetime?.offer_price
    ];

    if (prices.every(price => price === "" || price === undefined)) return 'no-plans';
    if (prices.some(price => price === 0)) return 'free';

    return 'available';
};

// Change the selected Matrix ALGO plan
const changeMatrixAlgoPlans = (category) => {
    findProductDesc(category);
    matrixAlgoProduct.value = category;
    matrixActivePlan.value = category;
};

// Add the selected Matrix ALGO product to cart
const addMatrixAlgoProduct = (item) => {
    // Check if any Matrix ALGO product exists in the cart
    const existingMatrixAlgoProduct = cart.value.find(
        (cartItem) => matrixAlgoData.value.some((algoItem) => algoItem.product_id === cartItem.product_id)
    );

    // If an existing Matrix ALGO product is found, remove it
    if (existingMatrixAlgoProduct) {
        removeFromCart(existingMatrixAlgoProduct);
    }

    // Add the new Matrix ALGO product to the cart
    addToCart(item);

    // Update the active plan
    matrixActivePlan.value = item;
};

// Parse product descriptions
const findProductDesc = (data = {}) => {
    try {
        let parsedData = JSON.parse(data.description || '[]');
        parsedData = typeof parsedData === 'object' ? parsedData : {};
        productDescData.value[data.product_id] = parsedData;
    } catch (e) {
        productDescData.value[data.product_id] = {};
    }
};



// Get Matrix ALGO products from store or props
const matrixAlgoData = computed(() => {
    // If algoProducts are provided via props, use those
    if (algoProducts.value && algoProducts.value.length > 0) {
        return algoProducts.value;
    }

    // Otherwise, filter from the store
    let data = categories.value || [];
    data.sort((a, b) => b.is_recommended - a.is_recommended);

    if (data.length) {
        matrixAlgoProduct.value = data[0];
        matrixActivePlan.value = data[0];
        findProductDesc(data[0]);
    }

    return data || [];
});

// Watch for changes in products and update categories
watchEffect(() => {
    let data = products.value || [];
    if (data.length) {
        let temp = data.filter(item => item.base_category_name === "Matrix ALGO") || [];
        categories.value = temp;
    }
});
</script>

<style scoped>
.transition-all {
    transition: all 0.3s ease;
}

.overflow-y-auto {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
    display: none;
}

/* Add smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Improve card spacing */
.grid-cols-1>div,
.sm\:grid-cols-2>div,
.lg\:grid-cols-4>div {
    margin-bottom: 24px;
}

/* Add better touch targets on mobile */
@media (max-width: 640px) {

    .px-4,
    .py-2 {
        padding: 12px 16px;
    }

    /* Improve spacing between sections */
    .mt-12 {
        margin-top: 2rem;
    }

    /* Better spacing for feature lists */
    .space-y-4>* {
        margin-bottom: 1rem;
    }
}
</style>