<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

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

const router = useRouter();

const goToHome = () => {
  router.push("/");
};

const explorePlans = ref([
  {
    id: 1,
    base: "Charges",
    title1: {
      img: "",
      name: "",
      charges: "0",
      button: "",
    },
    title2: {
      img: "",
      name: "",
      charges: "15,000",
      button: "",
    },
    title3: {
      img: "",
      name: "",
      charges: "22,000",
      button: "",
    },
    title4: {
      name: "",
      charges: "30,000",
      button: "",
    },
    title5: {
      img: "",
      name: "",
      charges: "40,000",
      button: "",
    },
  },
  {
    id: 2,
    base: "Validty",
    title1: {
      img: "",
      name: "Life time",
      button: "",
    },
    title2: {
      img: "",
      name: "1 Year",
      button: "",
    },
    title3: {
      img: "",
      name: "1 Year",
      button: "",
    },
    title4: {
      name: "1 Year",
      button: "",
    },
    title5: {
      img: "",
      name: "1 Year",
      button: "",
    },
  },
  {
    id: 3,
    base: "No of deployment",
    title1: {
      img: "",
      name: "0",
      button: "",
    },
    title2: {
      img: "",
      name: "2",
      button: "",
    },
    title3: {
      img: "",
      name: "5",
      button: "",
    },
    title4: {
      img: "",
      name: "All",
      button: "",
    },
    title5: {
      img: "",
      name: "All",
      button: "",
    },
  },
  {
    id: 4,
    base: "Segments",
    title1: {
      img: "",
      name: "0",
      button: "",
    },
    title2: {
      img: "",
      name: "1",
      button: "",
    },
    title3: {
      img: "",
      name: "2",
      button: "",
    },
    title4: {
      img: "",
      name: "All",
      button: "",
    },
    title5: {
      img: "",
      name: "All",
      button: "",
    },
  },
  {
    id: 5,
    base: "Trade updates",
    title1: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 6,
    base: "Strategy automation",
    title1: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 7,
    base: "Customised strategy",
    title1: {
      img: "",
      name: "No",
      button: "",
    },
    title2: {
      img: "",
      name: "No",
      button: "",
    },
    title3: {
      img: "",
      name: "No",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 8,
    base: "Paper Trading",
    title1: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 9,
    base: "Multiple Client Management",
    title1: {
      img: "",
      name: "No",
      button: "",
    },
    title2: {
      img: "",
      name: "No",
      button: "",
    },
    title3: {
      img: "",
      name: "No",
      button: "",
    },
    title4: {
      img: "",
      name: "No",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 10,
    base: "Live trade",
    title1: {
      img: "",
      name: "No",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 11,
    base: "Auto API Connectivity",
    title1: {
      img: "",
      name: "No",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 12,
    base: "Published indicator access",
    title1: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 13,
    base: "Webhook",
    title1: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 14,
    base: "Trade history of your strategy",
    title1: {
      img: "",
      name: "No",
      button: "",
    },
    title2: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title3: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
    title4: {
      img: "/images/svg/WhiteCloud.svg",
      name: "",
      button: "",
    },
    title5: {
      img: "/images/svg/GreenCloud.svg",
      name: "",
      button: "",
    },
  },
  {
    id: 15,
    base: "",
    title1: {
      img: "",
      name: "",
      button: "Subscribe Now",
    },
    title2: {
      img: "",
      name: "",
      button: "Subscribe Now",
    },
    title3: {
      img: "",
      name: "",
      button: "Subscribe Now",
    },
    title4: {
      img: "",
      name: "",
      button: "Subscribe Now",
    },
    title5: {
      img: "",
      name: "",
      button: "Subscribe Now",
    },
  },
]);

const isTabActive = ref("Matrix");

function toggle(button) {
  isTabActive.value = button;
}
</script>

<template>
  <main class="">

    <div  class="mt-12">
        <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div>
            <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">Freebie</h3>
            <p class="text-gray-400 text-[16px] mb-4">
              Ideal for individuals who need quick access to basic features
            </p>

            <div class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              <span class="text-[#00B852] text-xs">Get 20% off</span>
              <span class="text-[#dfdfdf] text-xs ml-1">when billed annually</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold text-[#dfdfdf]">$0</span>
              <span class="text-gray-400 ml-2 text-sm">/ Month</span>
            </div>

            <button class="w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all">
              Buy Now
            </button>
          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Features of Matrix Algo
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
          </div>

          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Products Included
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li v-for="(feature, i) in features.column2" :key="i" class="">
                <img v-if="i == 0" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 1" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 2" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 3" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 4" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 5" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

              </li>
            </ul>
          </div>
        </div>
      </div>
  </main>
</template>

<style scoped>
.bg-matrixgreen {
  background-color: #00b852;
}

.inactive {
  background-color: transparent;
}

button {
  transition: background-color 0.2s;
}

.column-text-right {
    .p-column-header-content{
      text-align: center; 
      display: block !important;
    }
  }
</style>
