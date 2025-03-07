<template>

  <div v-if="openSummaryModal" class="fixed inset-0 h-screen z-50 flex items-center justify-center bg-[#161A1E] pb-10">
    <div class="bg-[#161A1E] h-screen overflow-y-auto flex items-start justify-centerfont-cabinet-grotesk">
      <div class="w-full max-w-2xl mt-8 p-1 sm:p-4">
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
                  <p class="text-gray-500 text-ellipsis ">{{ truncateByWords(item?.description, 20) }}</p>
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
                <span class="text-white capitalize">- ₹{{ item.timely_price[billingPeriod]?.price - item.timely_price[billingPeriod]?.offer_price || 0 }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Plan Details</span>
                <span class="text-white capitalize">{{ item.product_name }} ({{  billingPeriod }})</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Valid Till</span>
                <span class="text-white">{{ planValidTill }}</span>
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
            <span class="text-gray-400">After Discount: </span>
            <span class="text-white">₹{{ totalPrice.toFixed(2) }}</span>
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
            <input 
              v-model="formData.gst_number"
              type="text"  :disabled="savedGSTDetails"
              placeholder="GSTIN*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
            />
            <input 
              v-model="formData.business_name"
              type="text"  :disabled="savedGSTDetails"
              placeholder="Business Name*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
            />
            <div v-if="!savedGSTDetails" class="flex justify-end gap-4">
              <button type="button" @click="useGST = false; savedGSTDetails = false" class="text-red-400 hover:text-red-300 transition-colors">Cancel</button>
              <button @click="savedGSTDetails = true"  type="button" class="text-[#00B852] hover:text-[#00A048] transition-colors">Save</button>
            </div>
          </div>
        </div>
  
        <div v-if="errorMsg" class="bg-red-600 rounded-lg p-4 mt-4">
          {{ errorMsg }}
        </div>
        <!-- Total and Pay Button -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span class="text-gray-400">Subtotal</span>
              <p class="text-white text-2xl font-semibold">₹{{ totalPrice.toFixed(2) }}</p>
            </div>
            <button @click="subscribeProducts" class="w-full md:w-[237px] bg-[#00B852] hover:bg-[#00A048] text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Pay Now
            </button>
          </div>
        </div>
  
        <!-- Footer Links -->
        <div class="flex flex-wrap gap-4 justify-center mt-8 text-gray-400 text-sm">
          <a href="#" class="hover:text-white">Terms & Condition</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Investor Journey</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Investor</a>
          <span>|</span>
          <a href="#" class="hover:text-white">Complaint</a>
        </div>
      </div>
    </div>
  </div>




  <!-- verifyPaymentModal  -->
  <div v-if="showVerificationModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-colors duration-300">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96 transition-colors duration-300">
      <h2 class="text-2xl font-semibold mb-4 text-center text-gray-200 transition-colors duration-300">Payment Verification</h2>

      <div v-if="Object.keys(verificationData).length === 0" class="text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto mb-4"></div>
        <p class="text-gray-400 transition-colors duration-300">Verifying your payment, please wait...</p>
      </div>

      <div v-else-if="verificationData?.status.toLowerCase() === 'pending'" class="text-center capitalize">
        <i class="pi pi-clock text-yellow-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Pending!</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}</p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div v-else-if="verificationData?.status.toLowerCase() === 'success'" class="text-center capitalize">
        <i class="pi pi-check-circle text-green-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verified Successfully!</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}</p>
        <p class="text-gray-400 transition-colors duration-300 mb-1">Amount: ₹{{ verificationData?.amount }}</p>
        <router-link to="/" class="text-[#00B852] hover:text-[#00A048] transition-colors">Go to Home</router-link>
      </div>

      <div v-else-if="verificationData?.status.toLowerCase() === 'failed'" class="text-center capitalize">
        <i class="pi pi-times-circle text-red-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Failed</p>
        <p class="text-gray-400 transition-colors duration-300">Message: {{ verificationData?.message }}</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}</p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div v-else class="text-center capitalize">
        <i class="pi pi-times-circle text-red-500 text-5xl mb-4 transition-colors duration-300"></i>
        <p class="text-gray-400 font-semibold transition-colors duration-300">Payment Verification Failed</p>
        <p class="text-gray-400 transition-colors duration-300">Message: {{ verificationData?.message }}</p>
        <p class="text-gray-400 transition-colors duration-300">Transaction ID: {{ verificationData?.transaction_id }}</p>
        <p class="text-gray-400 transition-colors duration-300">Amount: ₹{{ verificationData?.amount }}</p>
      </div>

      <div class="mt-6 flex justify-center gap-x-3">
        <!-- check again  -->
        <button v-if="Object.keys(verificationData).length > 0" @click="verifyPayment" class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300">
          Check Again
        </button>

        <button @click="showVerificationModal = false" class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300">
          {{ verificationData?.status && verificationData?.status.toLowerCase() === 'pending' ? 'Cancel' : 'Close' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { watch, computed, defineProps, ref, onMounted, onUnmounted } from 'vue'
import useIndicatorStore from '../../store/indicator'
import axios from "axios";
import { baseApiUrl } from '../../request/requests';
const indicatorStore = useIndicatorStore();
const { billingPeriod, indicators, cart, openSummaryModal } = storeToRefs(indicatorStore);


const isExpanded = ref(false)
const useGST = ref(false)
const savedGSTDetails = ref(false)
const productDescData = ref({})
const isPageActive = ref(true);


const formData = ref({})
// const billingPeriod = computed(() => {
//   let data = cart.value || []
//   if(data.length) {
//     return 'monthly'
//   }
//   return ''
// })

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    let priceData = item['timely_price'][billingPeriod.value] || {}
    return sum + (priceData.offer_price || 0);
  }, 0);
});

const totalInvoicePrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    let priceData = item['timely_price'][billingPeriod.value] || {}
    return sum + (priceData.price || 0);
  }, 0);
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

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const removeFromCart = (item) => {
  cart.value = []
}


const showModalToggle = () => {
  if(openSummaryModal.value) {
    openSummaryModal.value = false
    document.body.style.overflow = 'auto'
  } else {
    openSummaryModal.value = true
    document.body.style.overflow = 'hidden'
  }
}

const subscribeData = ref({})
const errorMsg = ref('')
const subscribeProducts = async () => {
  try {
      if(!savedGSTDetails.value) {
        delete formData.value.gst_number
        delete formData.value.business_name
      }
      const authToken = localStorage.getItem('token')
      const url = `${baseApiUrl.value}/user/subscriptions`

      if(!authToken) return
      const productIds = cart.value.map(product => product.product_id);
      formData.value.products = productIds;
      formData.value.price_type = billingPeriod.value

      const res = await axios.post(url, formData.value, { headers: { Authorization: authToken } })

      const response = res.data || {} // await makeRequest('subscribe', "POST", formData.value, {}, {}, 0, null);
      if(response.data) {
        subscribeData.value = response.data
        localStorage.setItem('transaction_id', subscribeData.value.transaction_id);
        // open url in new page 
        window.open(subscribeData.value.url, '_blank');
      }
  } catch (error) {
    errorMsg.value = error?.response?.data?.message || 'Something went wrong'
  }
}

const planValidTill = computed(() => {
  let date = new Date();
  const period = billingPeriod.value;
  if(period === 'monthly') {
    date.setMonth(date.getMonth() + 1);
  } else if(period === 'quarterly') {
    date.setMonth(date.getMonth() + 3);
  } else if(period === 'yearly') {
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
  if(openSummaryModal.value) {
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
            
    const response = res.data || {} //const response = await makeRequest('verifyPayment', "GET", {}, {}, params, 0, null); 

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
  if(transaction_id) {
    verifyPayment();
  }
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

