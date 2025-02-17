<template>
  <div class=" w-full relative pt-24 ">
    <div class="absolute inset-0 hidden lg:block z-[-2]">
      <img src="/src/assets/img/Grid.png" alt="Grid Pattern Left" class="absolute ml-24 left-0 top-[-100px]" />
      <img src="/src/assets/img/Grid.png" alt="Grid Pattern Right" class="absolute right-0 top-[-250px] " />
    </div>
    <Breadcrumb :items="[{
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: `${indicator?.name}`,
      disabled: false,
      href: '/indicators'
    },
    ]" />
    <div class=" flex flex-col lg:flex-row gap-8 pt-12 ">


      <!-- Grid Background Images -->


      <div class="w-full grid grid-cols-3  z-10 ">
        <div class="col-span-3 w-full ">
          <div class="">
            <h1 class="text-[40px] font-extrabold leading-tight mb-4">
              <span class="bg-gradient-to-r from-[#00b853] to-[#2fc1a7] bg-clip-text text-transparent">
                {{ indicator?.name }}

              </span>
            </h1>
            
            <p class="text-[#dfdfdf] text-[14px] font-openSans mb-8">UPDATED ON: {{ indicator ? formatDate(indicator.updated_at) : "Loading..." }}</p>
            
            
            <img :src="indicator?.image" alt="" class="my-8">
            <!-- <p class="text-[#dfdfdf] text-[16px] font-openSans">
              {{ indicator?.description }}
            </p> -->
            
            <div v-if="indicator?.info" v-html="indicator.info"></div>
        </div>
        </div>
      </div>


      <div class=" col-span-1 text-center h-min sticky top-24 bg-[#2d98ef] px-4 rounded-lg">
       
        <Countdown :isSaleLive="indicator?.is_sale_live"
            :saleStartDate="indicator?.sale_start_date"
            :saleEndDate="indicator?.sale_end_date"/>


        <div class="mx-auto w-min flex justify-center items-end relative">
          <div class="bg-[#ffffff22] rounded-3xl p-1 flex justify-evenly gap-0 text-[18px]">
            <button v-for="plan in plans" :key="plan" :aria-label="plan + ' Plan'" :class="getButtonClass(plan)"
              @click="toggleActive(plan)" class="transition-all duration-200 py-1 px-3 rounded-3xl text-[16px] font-openSans">
              {{ plan }}
            </button>
          </div>
          
        </div>

        <div class="rounded-lg text-center">

          <div class="px-6">
            <h2 class="font-openSans text-[16px] max-w-xl mx-auto text-white text-center py-6">
              Unlock advanced stock screening tools, strategy creation, and seamless performance
              tracking—perfect for serious traders aiming to level up their investments.
            </h2>

            <div class="flex justify-center items-center gap-1 ">
              <p class="text-[44px] font-bold text-white ">
                <span class="text-[24px]">₹</span>{{ indicator.offer_price }}
              </p>
              <div class="flex flex-col justify-start h-full ">
                <p class="text-[10px] bg-[#E3DB98] p-1 px-2 rounded-3xl font-semibold">
                  {{ indicator?.discountPercentage }}% Off
                </p>
                <p class="text-[#dfdfdf] text-[18px] font-semibold font-openSans line-through">₹{{ indicator.price }}</p>
              </div>
            </div>


            <button
              class="border w-[95%] mx-auto py-4 border-white rounded font-bold tracking-wider text-[16px] font-openSans bg-white text-[#161A1E] mt-4">
              Buy Now
            </button>


            <div class="mt-8 text-[#FFF5A8] text-[14px] pb-10  flex gap-2 items-center justify-center font-bold">
              <p class="font-openSans">or</p>
              <a href="" class="underline font-openSans">Ask for Demo</a>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Breadcrumb from '../../component/Breadcrumb.vue';
import Countdown from '../../component/Countdown.vue';
import useIndicatorStore from '../../store/indicator.js'
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const indicatorStore = useIndicatorStore();
const {indicators} = storeToRefs(indicatorStore);
const active = ref("Yearly");
const plans = [ "Yearly" , "Lifetime"];

const toggleActive = (name) => {
  active.value = name;
};

// Function to format date (async version)
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

const indicatorId = useRoute().params.id
const indicator = computed(() => {
  if (indicatorId) {
    const ind = indicators.value.find(
      (item) => item.id === Number(indicatorId)
    ); // Assuming the ID is a number
    if (ind) {
      const price = parseFloat(ind.price); // Ensure it's a number
      const offerPrice = parseFloat(ind.offer_price); // Ensure it's a number

      if (!isNaN(price) && !isNaN(offerPrice) && price > 0 && offerPrice > 0) {
        // Calculate discount percentage
        ind.discountPercentage = Math.round(
          ((price - offerPrice) / price) * 100
        );
      } else {
        // Set default value if price/offerPrice is invalid
        ind.discountPercentage = 0;
      }
    }
    return ind;
  }
}
)


const getButtonClass = (plan) => ({
  "text-black font-semibold bg-[white] ": active.value === plan,
  "text-[#F9F2F2] ": active.value !== plan,
});


</script>

<style scoped>
.from-blue-400\/40 {
  --tw-gradient-from: rgb(96 165 250 / 0.4);
}

.to-blue-600\/40 {
  --tw-gradient-to: rgb(37 99 235 / 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.content {
  position: relative;
  overflow: hidden;
  text-align: center;

}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}
</style>
