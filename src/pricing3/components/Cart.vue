<template>
  <div v-if="props.cart.length > 0" class="fixed bottom-10 left-0 right-0 mx-auto w-[90%] max-w-3xl z-40">
    <div :class="[
      'px-1 bg-[#1d2125] border border-[#ffffff22] overflow-hidden ',
      { ' rounded-[100px]': !isExpanded },
      { 'min-h-[70vh] rounded-[24px]': isExpanded }
    ]">
      <div :class="['flex items-center py-4 px-2', { 'hidden': isExpanded }]">
        <div class="flex-grow overflow-x-auto">
          <div class="flex items-center h-full gap-2 whitespace-nowrap">
            <p class="font-extrabold text-[#dfdfdf] text-[19px]">Plans:</p>
            <!-- Desktop view: show all products -->
            <div class="hidden lg:flex flex-wrap space-y-1 items-center">
              <div v-for="item in props.cart" :key="item.id"
                class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0 mr-2">
                <p class="text-black text-[14px] font-openSans font-semibold capitalize">{{ item.category_name }} - {{
                  item.product_name }}</p>
                <button @click="removeFromCart(item)" class="inline-flex items-center text-xs mt-0.5 ml-2">
                  <i class="pi pi-times text-black text-xs"></i>
                </button>
              </div>
            </div>
            <!-- Mobile view: show first product and +X button -->
            <div class="flex lg:hidden items-center">
              <div v-if="props.cart.length > 0"
                class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0">
                <p class="capitalize text-black text-[14px] font-openSans font-semibold">{{ props.cart[0].category_name
                }} - {{ props.cart[0].product_name }}</p>
                <button @click="removeFromCart(props.cart[0])" class="inline-flex items-center text-xs ml-2">
                  <i class="pi pi-times text-black text-xs"></i>
                </button>
              </div>
              <button v-if="props.cart.length > 1" @click="toggleExpand"
                class="ml-2 bg-[#dfdfdf] rounded-full py-1 px-3 text-black text-[14px] font-openSans font-semibold">
                +{{ props.cart.length - 1 }}
              </button>
            </div>
          </div>
        </div>
        <p class="text-[#dfdfdf] font-openSans bg-transparent text-nowrap mr-2 hidden lg:block">Amount To Be Paid:</p>
        <button @click="showModalToggle"
          class="py-2 bg-[#f9dd83] rounded-full px-10 text-[#222222] font-bold font-sans">
          ₹{{ totalPrice }}
        </button>
      </div>

      <!-- Expanded mobile view -->
      <div v-if="isExpanded" class="h-full flex flex-col p-4 lg:hidden">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-[#dfdfdf] text-xl font-bold">Your Cart</h2>
          <button @click="toggleExpand" class="text-[#dfdfdf]">
            <img src="/src/assets/svg/X.svg" class="w-5" alt="Close">
          </button>
        </div>
        <div class="flex-grow overflow-y-auto space-y-2 mb-4">
          <div v-for="item in props.cart" :key="item.id"
            class="flex items-center justify-between bg-[#dfdfdf] rounded-full py-2 px-4">
            <p class="capitalize text-black text-[14px] font-openSans font-semibold">{{ item.category_name }} - {{
              item.product_name }}</p>
            <button @click="removeFromCart(item)" class="text-xs">
              <i class="pi pi-times text-black text-sm"></i>
            </button>
          </div>
        </div>
        <button @click="showModalToggle"
          class="w-full py-3 bg-[#f9dd83] rounded-full text-[#222222] font-bold font-sans">
          Pay ₹{{ totalPrice }}
        </button>
      </div>
    </div>
  </div>



  <div v-if="openSummaryModal" class="fixed inset-0 h-screen z-50 flex items-center justify-center bg-[#161A1E] pb-10">
    <div
      class="bg-[#161A1E] h-screen w-[95%] md:w-[80%] xl:w-[45%] xxl:max-w-[45%] overflow-y-auto flex items-start justify-centerfont-cabinet-grotesk ">
      <div class="w-full mt-8 p-1 sm:p-4">
        <!-- Header -->
        <div class="flex items-center gap-4 mb-6 text-white">
          <button @click="showModalToggle" class="p-2 hover:bg-white/5 rounded-lg">
            <i class="pi pi-arrow-left"></i>
          </button>
          <div>
            <h1 class="text-2xl font-semibold">Your Invoice Summary</h1>
            <p class="text-gray-400">Please wait until all checks are done</p>
          </div>
        </div>

        <!-- Invoice Items -->
        <div class="space-y-4">
          <div v-for="(item, index) in cart" :key="index" 
               class="bg-white/5 rounded-lg p-6">
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div> 
                  <!-- <img src="../assets/svg/Layer.svg" alt=""> -->
                </div>
                <div>
                  <h3 class="text-white font-semibold">{{ item.product_name }}</h3>
                 
                  <p class="text-gray-500 text-ellipsis ">{{ truncateByWords(item?.description.text, 20) }}</p>
                </div>
              </div>
              <button @click="removeFromCart(item)" class="px-4 py-1 text-gray-400 bg-white/5 rounded-full">
                Remove
              </button>
            </div>
            
            <div class="mt-6 border-t border-dashed border-gray-700 pt-4">
              <div class="flex justify-between text-white">
                <span>Price</span>
                <span>₹{{ item.timely_price[billingPeriod]?.price }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Discount</span>
                <span class="text-white capitalize">- ₹{{ (item.timely_price[billingPeriod]?.price - item.timely_price[billingPeriod]?.offer_price || 0).toFixed(2) }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Plan Details</span>
                <span class="text-white capitalize">{{ item.product_name }} ({{  billingPeriod }})</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Valid Till</span>
                <span class="text-white">{{ planValidTill }}</span>
              </div>

              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Coupon Discount Applied</span>
                <span class="text-white capitalize">
                  - ₹{{ getCouponDiscount(item.product_id) }}
                </span>
              </div>

              <div v-if="!couponDiscounts.find(c => c.product_id === item.product_id)" class="mt-2">
                <label class="flex items-center gap-3 text-white cursor-pointer">
                  <input type="checkbox" v-model="useCoupon[item.product_id]" class="w-4 h-4 rounded border-gray-600 bg-transparent">
                  <span class="text-gray-400">Do you have any coupon?</span>
                </label>
              </div>

              <div v-if="useCoupon[item.product_id] && !couponDiscounts.find(c => c.product_id === item.product_id)" class=" mt-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="sm-text text-[#ececec]">Enter Coupon Code</h3>
                </div>
                <div class="space-y-4">
                  <input 
                    v-model="couponData[item.product_id]"
                    type="text"
                    maxlength="8"
                    placeholder="Enter coupon code"
                    class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600 sm-text"
                  />
                  <div class="flex justify-end gap-4">
                    <button type="button" @click="useCoupon[item.product_id] = false; couponData[item.product_id]  = ''" class="text-red-400 hover:text-red-300 transition-colors">Cancel</button>
                    <button @click="applyCoupon(item.product_id)" type="button" class="text-[#00B852] hover:text-[#00A048] transition-colors">Apply</button>
                  </div>
                </div>
              </div>

              <div class="flex justify-between text-white mt-6 border-t border-dashed border-gray-700 pt-4">
                <span class="font-semibold">Total Price</span>
                <span class="font-semibold text-lg">₹{{ getProductPrice(item.product_id) }}</span>
              </div>
            </div>
          </div>
        </div>


        <div class="bg-white/5 rounded-lg p-6 mt-4">
          <div class="flex justify-between">
            <span class="text-gray-400">Total Amount: </span> 
            <span class="text-white">₹{{ totalInvoicePrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Total Discount: </span> 
            <span class="text-white">- ₹{{ (totalInvoicePrice-totalPrice || 0).toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Total Coupon Discount: </span> 
            <span class="text-white">- ₹{{ totalCouponDiscount }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">After Discount: </span>
            <span class="text-white">₹{{ subTotalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Gst (18%): </span>
            <span class="text-white">₹{{ gstAmount.toFixed(2) }}</span>
          </div>
        </div>

        <!-- GST Checkbox -->
        <div class="bg-white/5 rounded-lg p-6 mt-4">
          <label class="flex items-center gap-3 text-white cursor-pointer">
            <input type="checkbox" v-model="useGST" class="w-5 h-5 rounded border-gray-600 bg-transparent">
            <span>Use GST Invoice</span>
          </label>
        </div>

        <div v-if="useGST" class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-white font-semibold ">Add GST Details</h3>
            <i v-if="savedGSTDetails" @click="savedGSTDetails = false" class="pi pi-pencil text-yellow-500"></i>
          </div>
          <div class="space-y-4">
            <input v-model="formData.gst_number" type="text" :disabled="savedGSTDetails" placeholder="GSTIN*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600" />
            <input v-model="formData.business_name" type="text" :disabled="savedGSTDetails" placeholder="Business Name*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600" />
            <div v-if="!savedGSTDetails" class="flex justify-end gap-4">
              <button type="button" @click="useGST = false; savedGSTDetails = false"
                class="text-red-400 hover:text-red-300 transition-colors">Cancel</button>
              <button @click="savedGSTDetails = true" type="button"
                class="text-[#00B852] hover:text-[#00A048] transition-colors">Save</button>
            </div>
          </div>
        </div>

        <!-- Total and Pay Button -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span class="text-gray-400">Subtotal</span>
              <p class="text-white text-2xl font-semibold">₹{{ subtotalWithGST.toFixed(2) }}</p>
            </div>
            <button @click="subscribeProducts"
              class="w-full md:w-[237px] bg-[#00B852] hover:bg-[#00A048] text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Pay Now
            </button>
          </div>
        </div>


      </div>
    </div>
  </div>




  <!-- verifyPaymentModal  -->
  <div v-if="showVerificationModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-colors duration-300">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96 transition-colors duration-300">
      <h2 class="text-2xl font-semibold mb-4 text-center text-gray-200 transition-colors duration-300">Payment
        Verification</h2>
        
      <div v-if="Object.keys(verificationData).length === 0" class="text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto mb-4"></div>
        <p class="text-gray-400 transition-colors duration-300">Verifying your payment, please wait...</p>
      </div>

      <div v-else-if="verificationData?.status.toLowerCase() === 'pending'" class="text-center capitalize">
        <i class="pi pi-clock text-yellow-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Pending!</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}
        </p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div
        v-else-if="verificationData?.status.toLowerCase() === 'completed' || verificationData?.status.toLowerCase() === 'complete'"
        class="text-center capitalize">
        <i class="pi pi-check-circle text-green-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verified Successfully!</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}
        </p>
        <p class="text-gray-400 transition-colors duration-300 mb-1">Amount: ₹{{ verificationData?.amount }}</p>
        <router-link to="/" class="text-[#00B852] hover:text-[#00A048] transition-colors">Go to Home</router-link>
      </div>

      <div v-else-if="verificationData?.status.toLowerCase() === 'failed'" class="text-center capitalize">
        <i class="pi pi-times-circle text-red-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Failed</p>
        <p class="text-gray-400 transition-colors duration-300">Message: {{ verificationData?.message }}</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}
        </p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div v-else class="text-center capitalize">
        <i class="pi pi-times-circle text-red-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Failed</p>
        <p class="text-gray-400 transition-colors duration-300">Message: {{ verificationData?.message }}</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}
        </p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div class="mt-6 flex justify-center gap-x-3">
        <!-- check again  -->
        <button v-if="Object.keys(verificationData).length > 0" @click="verifyPayment"
          class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300">
          Check Again
        </button>

        <button @click="showVerificationModal = false"
          class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300">
          {{ verificationData?.status && verificationData?.status.toLowerCase() === 'pending' ? 'Cancel' : 'Close' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { makeRequest } from '../../request/requests'
import { watch, computed, defineProps, ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import useProfileStore from '../../store/profile'
import { storeToRefs } from 'pinia'

const props = defineProps({
  cart: {
    type: Array,
    required: true
  },
  billingPeriod: String,
  addToCart: Function,
  removeFromCart: Function,
})

const couponStore = useCouponStore();
const {couponDiscounts , couponCode} = storeToRefs(couponStore)

const isExpanded = ref(false)
const useGST = ref(false)
const useCoupon = ref({})
const savedGSTDetails = ref(false)
const openSummaryModal = ref(false)
const productDescData = ref({})
const isPageActive = ref(true);


const formData = ref({})

const invoiceItems = ref([
  {
    title: 'Algo Trading',
    description: 'Automate strategies for smarter trading.',
    amount: 12000.00,
    plan: 'Essential (Quaterly)',
    validTill: '12 Jan 2023'
  },
  {
    title: 'Algo Trading',
    description: 'Automate strategies for smarter trading.',
    amount: 12000.00,
    plan: 'Essential (Quaterly)',
    validTill: '12 Jan 2023'
  }
])

const findProductDesc = (data = {}) => {
  try {
    const parsedData = JSON.parse(data.description || '[]');
    productDescData.value[data.product_id] = parsedData
  } catch (e) {
    productDescData.value[data.product_id] = {}
  }

  return ''
}

// const totalPrice = computed(() => {
//   return props.cart.reduce((sum, item) => {
//     let priceData = item['timely_price'][props.billingPeriod] || {}
//     return sum + (priceData.offer_price || 0);
//   }, 0);
// });

const subTotalPrice = computed(() => {
  const totalBasePrice = props.cart.reduce((sum, item) => {
    let priceData = item['timely_price'][props.billingPeriod] || {};

    // Use offer_price if it's greater than 0, otherwise fallback to price
    let finalPrice = priceData.offer_price > 0 ? priceData.offer_price : priceData.price || 0;

    return sum + finalPrice;
  }, 0);

  // Subtract the total coupon discount, ensuring it doesn't go below zero
  return Math.max(totalBasePrice - totalCouponDiscount.value, 0);
});

const couponData = ref({
  "plan_id": "",
  "offer_uuid": ""
})

const applyCoupon = (product_id) => {
  if (!couponData.value[product_id]) {
    alert("Please enter a coupon code.");
    return;
  }
    // Pass only the relevant product's coupon data
    const couponPayload = {
    plan_id: product_id,
    offer_uuid: couponData.value[product_id]
  };

   // Ensure couponCode is an array before adding new entries
   if (!Array.isArray(couponCode.value)) {
    couponCode.value = [];
  }

  // Check if a coupon for this product already exists, update if found
  const existingIndex = couponCode.value.findIndex(coupon => coupon.plan_id === product_id);
  if (existingIndex !== -1) {
    couponCode.value[existingIndex] = couponPayload; // Update existing entry
  } else {
    couponCode.value.push(couponPayload); // Add new entry
  }

  couponStore.getCoupons(couponPayload).then(() => {
    // Hide input after applying coupon
    useCoupon.value[product_id] = false;
  });
};
const totalPrice = computed(() => {
  return props.cart.reduce((sum, item) => {
    let priceData = item['timely_price'][props.billingPeriod] || {};

    // Use offer_price if it's greater than 0, otherwise fallback to price
    let finalPrice = priceData.offer_price > 0 ? priceData.offer_price : priceData.price || 0;

    return sum + finalPrice;
  }, 0);
});

const totalInvoicePrice = computed(() => {
  return props.cart.reduce((sum, item) => {
    let priceData = item['timely_price'][props.billingPeriod] || {}
    return sum + (priceData.price || 0);
  }, 0);
});

const gstRate = 0.18; // 18% GST

const gstAmount = computed(() => {
  return subTotalPrice.value * gstRate; // GST on the discounted price
});

const subtotalWithGST = computed(() => {
  return subTotalPrice.value + gstAmount.value; // Subtotal including GST
});

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const removeFromCart = (item) => {
  props.removeFromCart(item)
  if (props.cart.length <= 1) {
    isExpanded.value = false
  }
}

const subscribeData = ref({})
const profileStore = useProfileStore();


const showModalToggle = () => {
  if (openSummaryModal.value) {
    openSummaryModal.value = false
    document.body.style.overflow = 'auto'
  } else {
    if (Object.keys(profileStore.profileData).length === 0) {
      window.open('https://v3.matrixtradingtech.com/login', "_blank");
      return;
    }

    openSummaryModal.value = true
    document.body.style.overflow = 'hidden'
  }
}
import { baseApiUrl } from '../../request/requests'
import { useCouponStore } from '../../store/coupons'

const errorMsg = ref("");

const subscribeProducts = async () => {
  try {
      if(!savedGSTDetails.value) {
        delete formData.value.gst_number
        delete formData.value.business_name
      }
      const authToken = localStorage.getItem('token')
      const url = `${baseApiUrl.value}/user/subscriptions`

      const productIds = props.cart.map(product => product.product_id);
      formData.value.products = productIds;
      formData.value.price_type = props.billingPeriod

      const res = await axios.post(url, formData.value, { headers: { Authorization: authToken } })

      const response = res.data || {}// await makeRequest('subscribe', "POST", formData.value, {}, {}, 0, null);
      if(response.data) {
        
        subscribeData.value = response.data
        localStorage.setItem('transaction_id', subscribeData.value.transaction_id);
        // open url in new page 
        window.open(subscribeData.value.url, '_blank');
      }
  } catch (error) {
      errorMsg.value = error?.response?.data?.message || 'Something went wrong'
      console.error('Error fetching subscriptions:', error);
  }
}

const planValidTill = computed(() => {
  let date = new Date();
  const billingPeriod = props.billingPeriod;
  if (billingPeriod === 'monthly') {
    date.setMonth(date.getMonth() + 1);
  } else if (billingPeriod === 'quarterly') {
    date.setMonth(date.getMonth() + 3);
  } else if (billingPeriod === 'yearly') {
    date.setFullYear(date.getFullYear() + 1);
  }
  return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
});


const handleVisibilityChange = () => {
  isPageActive.value = document.visibilityState === "visible";
  if (isPageActive.value) {
    verifyPayment();
  }
};

const handleWindowFocus = () => {
  isPageActive.value = true;
  verifyPayment();
};

const handleWindowBlur = () => {
  isPageActive.value = false;
};

const addListners = () => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("focus", handleWindowFocus);
  window.addEventListener("blur", handleWindowBlur);
}


const removeListeners = () => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  window.removeEventListener("focus", handleWindowFocus);
  window.removeEventListener("blur", handleWindowBlur);
}

watch(openSummaryModal, () => {
  if (openSummaryModal.value) {
    addListners();
  } else {
    removeListeners();
  }
})


const showVerificationModal = ref(false)
const verificationData = ref({})
const transaction_idfor2nd = ref('')

const verifyPayment = async () => {
  let transaction_id = localStorage.getItem('transaction_id') || transaction_idfor2nd.value || '';
  if(!transaction_id) return
  
  try {
    const authToken = localStorage.getItem('token')
    const url = `${baseApiUrl.value}/user/check-payment/status`
    showVerificationModal.value = true
    let params = { transaction_id: transaction_id }
    if (authToken == null) return;
    const res = await axios.get(url, { headers: { Authorization: authToken }, params: params });
            
    const response = res.data || {}//await makeRequest('verifyPayment', "GET", {}, {}, params, 0, null); 

    if(response.data) {
      if(response.data.status) {
        transaction_idfor2nd.value = transaction_id
        setTimeout(() => {
          verificationData.value = response.data
          localStorage.removeItem('transaction_id')
        }, 2000)
      }
    }
  } catch (error) {
    verificationData.value = error.data
    console.error("Error verifying payment:", error);
  }
};

onMounted(() => {
  let transaction_id = localStorage.getItem('transaction_id') || '';
  if (transaction_id) {
    verifyPayment();
  }
});
function truncateByWords(text, wordCount) {
  if (!text) return "";

  const words = text.split(/\s+/); // Split by any whitespace
  if (words.length <= wordCount) {
    return text;
  } else {
    return words.slice(0, wordCount).join(" ") + "...";
  }
}

const getCouponDiscount = (id) => {
  // console.log(id)
  const coupon = couponDiscounts.value.find(c => c.product_id === id)
  if (coupon) {
    return coupon.discount; // Return the discount amount
  }

  return 0; // Return 0 if no coupon is found

}



const getProductPrice = (id) => {
  if (!props.cart || !Array.isArray(props.cart)) return 0; // Fallback for empty cart

  // Get the product details
  const product = props.cart.find(c => c.product_id === id);
  if (!product) return 0; // Fallback if product not found

  const originalPrice = product.timely_price?.[props.billingPeriod]?.price || 0;
  const offerPrice = product.timely_price?.[props.billingPeriod]?.offer_price || originalPrice;
  const offerDiscount = originalPrice - offerPrice; // Calculate offer discount
  const couponDiscount = parseFloat(getCouponDiscount(id)) || 0;

  const finalPrice = originalPrice - offerDiscount - couponDiscount; // Deduct both discounts

  return finalPrice.toFixed(2); // Format to 2 decimal places
};
const totalCouponDiscount = computed(() => {
  if (!couponDiscounts.value || !Array.isArray(couponDiscounts.value) || couponDiscounts.value.length === 0) {
    return 0; // Return 0 if no coupons are available
  }

  return couponDiscounts.value.reduce((total, c) => total + (c.discount || 0), 0);
});
onUnmounted(() => {
  removeListeners()
});

</script>

<style scoped>
/* .overflow-x-auto, .overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}
.overflow-x-auto::-webkit-scrollbar, 
.overflow-y-auto::-webkit-scrollbar { 
  display: none;
} */

.overflow-y-auto {
  overflow-y: auto;
}
</style>
