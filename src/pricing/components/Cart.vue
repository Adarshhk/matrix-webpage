<template>
  <div v-if="cart.length > 0" class="fixed bottom-10 left-0 right-0 mx-auto w-[90%] max-w-3xl z-40">
    <div 
      :class="[
        'px-1 bg-[#1d2125] border border-[#ffffff22] overflow-hidden ',
        {' rounded-[100px]': !isExpanded},
        {'min-h-[70vh] rounded-[24px]': isExpanded}
      ]"
    >
      <div :class="['flex items-center py-4 px-2', {'hidden': isExpanded}]">
        <div class="flex-grow overflow-x-auto">
          <div class="flex items-center h-full gap-2 whitespace-nowrap">
            <p class="font-extrabold text-[#dfdfdf] text-[19px]">Plans:</p>
            <!-- Desktop view: show all products -->
            <div class="hidden lg:flex flex-wrap space-y-1 items-center">
              <div v-for="item in cart" :key="item.id" class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0 mr-2">
                <p class="text-black text-[14px] font-openSans font-semibold capitalize">{{ item.category_name }} - {{ item.name }}</p>
                <button @click="removeFromCart(item)" class="inline-flex items-center text-xs mt-0.5 ml-2">
                  <i class="pi pi-times text-black text-xs"></i>
                </button>
              </div>
            </div>
            <!-- Mobile view: show first product and +X button -->
            <div class="flex lg:hidden items-center">
              <div v-if="cart.length > 0" class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0">
                <p class="capitalize text-black text-[14px] font-openSans font-semibold">{{ cart[0].category_name }} - {{ cart[0].name }}</p>
                <button @click="removeFromCart(cart[0])" class="inline-flex items-center text-xs ml-2">
                  <i class="pi pi-times text-black text-xs"></i>
                </button>
              </div>
              <button 
                v-if="cart.length > 1" 
                @click="toggleExpand" 
                class="ml-2 bg-[#dfdfdf] rounded-full py-1 px-3 text-black text-[14px] font-openSans font-semibold"
              >
                +{{ cart.length - 1 }}
              </button>
            </div>
          </div>
        </div>
        <p class="text-[#dfdfdf] font-openSans bg-transparent text-nowrap mr-2 hidden lg:block">Amount To Be Paid:</p>
        <button @click="showModalToggle" class="py-2 bg-[#f9dd83] rounded-full px-10 text-[#222222] font-bold font-sans">
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
          <div v-for="item in cart" :key="item.id" class="flex items-center justify-between bg-[#dfdfdf] rounded-full py-2 px-4">
            <p class="capitalize text-black text-[14px] font-openSans font-semibold">{{ item.category_name }} - {{ item.name }}</p>
            <button @click="removeFromCart(item)" class="text-xs">
              <i class="pi pi-times text-black text-sm"></i>
            </button>
          </div>
        </div>
        <button @click="showModalToggle" class="w-full py-3 bg-[#f9dd83] rounded-full text-[#222222] font-bold font-sans">
          Pay ₹{{ totalPrice }}
        </button>
      </div>
    </div>
  </div>



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
              {{ findProductDesc(item) }}
              <div class="flex items-start gap-4">
                <div> <img src="../assets/svg/Layer.svg" alt="">
                </div>
                <div>
                  <h3 class="text-white font-semibold">{{ item.name }}</h3>
                  <!-- <p class="text-gray-500">{{ productDescData[item.product_id][2]?.text }}</p> -->
                </div>
              </div>
              <button @click="removeFromCart(item)" class="px-4 py-1 text-gray-400 bg-white/5 rounded-full">
                Remove
              </button>
            </div>
            
            <div class="mt-6 border-t border-dashed border-gray-700 pt-4">
              <div class="flex justify-between text-white">
                <span>Price</span>
                <!-- <span>₹{{ item.timely_price[billingPeriod]?.price }}</span> -->
                <span>₹{{ findProductPrice(item) }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Discount</span>
                <span class="text-white capitalize">- ₹{{ findProductPrice(item) - item.price || 0 }}</span>
              </div>
              <div class="flex justify-between mt-2">
                <span class="text-gray-400">Plan Details</span>
                <span class="text-white capitalize">{{ item.name }} ({{  selectedPriceType }})</span>
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

      <div class="mt-6 flex justify-end">
        <button @click="showVerificationModal = false" class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300">
          {{ verificationData?.status && verificationData?.status.toLowerCase() === 'pending' ? 'Cancel' : 'Close' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { watch, computed, ref, onMounted, onUnmounted } from 'vue'
import { makeRequest } from '../../request/requests'
import useCartStore from '../../store/cart'
import { storeToRefs } from 'pinia';
import usePricingStore from '../../store/pricing';
import axios from 'axios';


const cartStore = useCartStore();
const {cart} = storeToRefs(cartStore);
const {addToCart} = cartStore



const isExpanded = ref(false)
const useGST = ref(false)
const savedGSTDetails = ref(false)
const openSummaryModal = ref(false)
const productDescData = ref({})
const isPageActive = ref(true);


const formData = ref({})
const pricingStore = usePricingStore();
const { rawPlans , selectedPriceType} = storeToRefs(pricingStore)

  
  
const findProductDesc = (data) => {
  const prod = rawPlans.value.find(p => p.id == data.product_id);
  try {
    const parsedData = JSON.parse(prod.description || '[]');
    productDescData.value[prod.product_id] = parsedData
  } catch (e) {
    productDescData.value[prod.product_id] = {}
  }
  
  return ''
}

const findProductPrice = (prod) => {
  
  const data = rawPlans.value.find(p => p.product_id == prod?.id)
  
  return data?.price
}


const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price || 0), 0)
})

const totalInvoicePrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + (findProductPrice(item)|| 0), 0)
})

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const removeFromCart = (item) => {
  cartStore.removeFromCart(item);
}


const showModalToggle = () => {
  const authToken = localStorage.getItem('token');
 
  if(authToken == null) {window.open('https://v3.matrixtradingtech.com'); return}
  if(openSummaryModal.value) {
    openSummaryModal.value = false
    document.body.style.overflow = 'auto'
  } else {
    openSummaryModal.value = true
    document.body.style.overflow = 'hidden'
  }
}

const subscribeData = ref({})
const subscribeProducts = async () => {
  const authToken = localStorage.getItem('token');
  try {
      if(!savedGSTDetails.value) {
        delete formData.value.gst_number
        delete formData.value.business_name
      }
      const productIds = cart.value.map(product => product.id);
      formData.value.products = productIds;
      formData.value.price_type = selectedPriceType.value

      const response = await axios.post('https://v3.matrixtradingtech.com/user/subscriptions',
                formData.value,{ headers: { Authorization: authToken } })

      if(response.data) {
        subscribeData.value = response.data.data
        localStorage.setItem('transaction_id', subscribeData.value.transaction_id);
        // open url in new page 
        window.open(subscribeData.value.url, '_blank');
      }
  } catch (error) {
      console.error('Error fetching subscriptions:', error);
  }finally{cart.value = []};
}

const planValidTill = computed(() => {
  let date = new Date();
  if(selectedPriceType.value === 'monthly') {
    date.setMonth(date.getMonth() + 1);
  } else if(selectedPriceType.value === 'quarterly') {
    date.setMonth(date.getMonth() + 3);
  } else if(selectedPriceType.value === 'yearly') {
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

const verifyPayment = async () => {
  const authToken = localStorage.getItem('token');
  let transaction_id = localStorage.getItem('transaction_id') || '';
  if(!transaction_id) return
  
  try {
    showVerificationModal.value = true
    let params = { transaction_id: transaction_id }
    const response = await axios.get(`https://v3.matrixtradingtech.com/user/check-payment/status` , {params : params, headers : {Authorization : authToken }}); 
   

    if(response.data) {
      if(response.data.status) {
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

