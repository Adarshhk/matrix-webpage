<template>
  <div v-if="cart.length > 0" class="fixed bottom-10 left-0 right-0 mx-auto w-[90%] max-w-3xl z-40">
    <div 
      :class="[
        'px-1 bg-[#1d2125] border border-[#ffffff22] overflow-hidden ',
        {' rounded-[100px]': !isExpanded},
        {'h-[70vh] rounded-[24px]': isExpanded}
      ]"
    >
      <div :class="['flex items-center py-4 px-2', {'hidden': isExpanded}]">
        <div class="flex-grow overflow-x-auto">
          <div class="flex items-center h-full gap-2 whitespace-nowrap">
            <p class="font-extrabold text-[#dfdfdf] text-[19px]">Plans:</p>
            <!-- Desktop view: show all products -->
            <div class="hidden lg:flex items-center">
              <div v-for="item in cart" :key="item.id" class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0 mr-2">
                <p class="text-black text-[14px] font-openSans font-semibold">{{ item.name }}</p>
                <button @click="cartStore.removeFromCart(item)" class="text-xs ml-2 text-black font-bold">
                  X
                </button>
              </div>
            </div>
            <!-- Mobile view: show first product and +X button -->
            <div class="flex lg:hidden items-center">
              <div v-if="cart.length > 0" class="flex items-center bg-[#dfdfdf] rounded-full py-1 px-3 flex-shrink-0">
                <p class="text-black text-[14px] font-openSans font-semibold">{{ cart[0].name }}</p>
                <button @click="cartStore.removeFromCart(cart[0])" class="text-xs ml-2">
                  <img src="/src/assets/svg/X.svg" class="w-3" alt="">
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
        <button class="py-2 bg-[#f9dd83] rounded-full px-10 text-[#222222] font-bold font-sans">
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
            <p class="text-black text-[14px] font-openSans font-semibold">{{ item.name }}</p>
            <button @click="cartStore.removeFromCart(item)" class="text-xs">
              <img src="/src/assets/svg/X.svg" class="w-3" alt="">
            </button>
          </div>
        </div>
        <button class="w-full py-3 bg-[#f9dd83] rounded-full text-[#222222] font-bold font-sans">
          Pay ₹{{ totalPrice }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import useCartStore from '../../store/cart'
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const {cart } = storeToRefs(cartStore);

const isExpanded = ref(false)

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price || 0), 0)
})

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

</script>

<style scoped>
.overflow-x-auto, .overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.overflow-x-auto::-webkit-scrollbar, 
.overflow-y-auto::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
</style>

