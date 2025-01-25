<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

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
    <section>
      <div
        class="flex justify-center gap-x-5 text-white font-ProximaNova mx-auto bg-[#353535] w-[70%] md:w-[40%] xl:w-[25%] py-1 rounded-3xl mt-8"
      >
        <button
          :class="[
            'w-[50%] h-[35px] rounded-3xl text-sm ml-1 xxl:text-base',
            {
              'bg-matrixgreen': isTabActive === 'Matrix',
              inactive: isTabActive !== 'Matrix',
            },
          ]"
          @click="toggle('Matrix')"
        >
          Matrix
        </button>
        <button
          :class="[
            'w-[50%] h-[35px] rounded-3xl text-sm mr-1 xxl:text-base',
            {
              'bg-matrixgreen': isTabActive === 'Webhook',
              inactive: isTabActive !== 'Webhook',
            },
          ]"
          @click="toggle('Webhook')"
        >
          Webhook
        </button>
      </div>
    </section>

    <section class="hidden md:flex justify-center mt-9 px-4 relative">
      <DataTable
        :value="explorePlans"
        showGridlines
        stripedRows
        class=" overflow-x-auto  bg-[#151719] text-white"
      >
        <Column
          header=""
          field="base"
          class="sticky left-0 z-10 border border-white border-opacity-25 text-center p-6 bg-[#151719]"
          
        ></Column>

        <Column
          header="Free"
          field="title1"
          class="border border-white border-opacity-25 text-center py-6 px-8 "
          headerClass="p-column-header-content"
        >
          <template #body="slotProps">
            <img :src="slotProps.data.title1.img" alt="" class="mx-auto" />
            <p class="font-CabinetGrotesk font-bold text-[30px] whitespace-nowrap">
                  <span v-if="slotProps.data.title1.charges">&#x20b9;</span
                  >{{ slotProps.data.title1.charges
                  }}<span
                    v-if="slotProps.data.title1.charges"
                    class="text-[18px]"
                    >+0 brokerage</span
                  >
                </p>
            <p class="font-CabinetGrotesk font-bold">
              {{ slotProps.data.title1.name }}
            </p>
            <button
              v-if="slotProps.data.title1.button"
              class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2 whitespace-nowrap"
            >
              {{ slotProps.data.title1.button }}
            </button>
          </template>
        </Column>

        <Column
          header="Essential"
          field="title2"
          class="border border-white border-opacity-25 text-center py-6 px-8"
        >
          <template #body="slotProps">
            <img :src="slotProps.data.title2.img" alt="" class="mx-auto" />
            <p class="font-CabinetGrotesk font-bold text-[30px] whitespace-nowrap">
                  <span v-if="slotProps.data.title2.charges">&#x20b9;</span
                  >{{ slotProps.data.title2.charges
                  }}<span
                    v-if="slotProps.data.title2.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
            <p class="font-CabinetGrotesk font-bold">
              {{ slotProps.data.title2.name }}
            </p>
            <button
              v-if="slotProps.data.title2.button"
              class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2 whitespace-nowrap"
            >
              {{ slotProps.data.title2.button }}
            </button>
          </template>
        </Column>

        <Column
          header="Evolution"
          field="title3"
          class="border border-white border-opacity-25 text-center py-6 px-8"
        >
          <template #body="slotProps">
            <img :src="slotProps.data.title3.img" alt="" class="mx-auto" />
            <p class="font-CabinetGrotesk font-bold text-[30px] whitespace-nowrap">
                  <span v-if="slotProps.data.title3.charges">&#x20b9;</span
                  >{{ slotProps.data.title3.charges
                  }}<span
                    v-if="slotProps.data.title3.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
            <p class="font-CabinetGrotesk font-bold">
              {{ slotProps.data.title3.name }}
            </p>
            <button
              v-if="slotProps.data.title3.button"
              class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2 whitespace-nowrap"
            >
              {{ slotProps.data.title3.button }}
            </button>
          </template>
        </Column>

        <Column
          header="Elite"
          field="title4"
          class="border border-white bg-matrix-green border-opacity-25 text-center py-6 px-8"
        >
          <template #body="slotProps">
            <img :src="slotProps.data.title4.img" alt="" class="mx-auto" />
            <p class="font-CabinetGrotesk font-bold text-[30px] whitespace-nowrap">
                  <span v-if="slotProps.data.title4.charges">&#x20b9;</span
                  >{{ slotProps.data.title4.charges
                  }}<span
                    v-if="slotProps.data.title4.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
            <p class="font-CabinetGrotesk font-bold">
              {{ slotProps.data.title4.name }}
            </p>
            <button
              v-if="slotProps.data.title4.button"
              class="font-semibold bg-white text-black px-6 py-2 whitespace-nowrap"
            >
              {{ slotProps.data.title4.button }}
            </button>
          </template>
        </Column>

        <Column
          header="HNI"
          field="title5"
          class="border border-white border-opacity-25 text-center py-6 px-8"
        >
          <template #body="slotProps">
            <img :src="slotProps.data.title5.img" alt="" class="mx-auto" />
            <p class="font-CabinetGrotesk font-bold text-[30px] whitespace-nowrap">
                  <span v-if="slotProps.data.title5.charges">&#x20b9;</span
                  >{{ slotProps.data.title5.charges
                  }}<span
                    v-if="slotProps.data.title5.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
            <p class="font-CabinetGrotesk font-bold">
              {{ slotProps.data.title5.name }}
            </p>
            <button
              v-if="slotProps.data.title5.button"
              class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2 whitespace-nowrap"
            >
              {{ slotProps.data.title5.button }}
            </button>
          </template>
        </Column>
      </DataTable>
    </section>

    <!-- Mobile Plans Section -->

    <section class="px-2 mt-8 flex items-center justify-center overflow-x-auto md:hidden">
      <div class="flex w-full gap-4">
        <div class="w-full flex-shrink-0">
          <DataTable
            :value="explorePlans"
            showGridlines
            stripedRows
            class="border border-white border-opacity-25 overflow-x-auto w-full"
          >
            <Column
              header="Free"
              field="title1"
              class="border border-white border-opacity-25 text-center py-6 px-8"
            >
              <template #body="slotProps">
                <p class="font-ProximaNova mb-1">{{ slotProps.data.base }}</p>
                <img :src="slotProps.data.title1.img" alt="" class="mx-auto" />
                <p class="font-CabinetGrotesk font-bold text-[30px]">
                  <span v-if="slotProps.data.title1.charges">&#x20b9;</span
                  >{{ slotProps.data.title1.charges
                  }}<span
                    v-if="slotProps.data.title1.charges"
                    class="text-[18px]"
                    >+0 brokerage</span
                  >
                </p>
                <p class="font-CabinetGrotesk font-bold text-[18px]">
                  {{ slotProps.data.title1.name }}
                </p>
                <button
                  v-if="slotProps.data.title1.button"
                  class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2"
                >
                  {{ slotProps.data.title1.button }}
                </button>
              </template>
            </Column>
          </DataTable>
        </div>

        <div class="w-full flex-shrink-0">
          <DataTable
            :value="explorePlans"
            showGridlines
            stripedRows
            class="border border-white border-opacity-25 overflow-x-auto bg-[#151719] w-full"
          >
            <Column
              header="Essential"
              field="title2"
              class="border border-white border-opacity-25 text-center py-6 px-8"
            >
              <template #body="slotProps">
                <p class="font-ProximaNova mb-1">{{ slotProps.data.base }}</p>
                <img :src="slotProps.data.title2.img" alt="" class="mx-auto" />
                <p class="font-CabinetGrotesk font-bold text-[30px]">
                  <span v-if="slotProps.data.title2.charges">&#x20b9;</span
                    >{{ slotProps.data.title2.charges
                  }}<span
                    v-if="slotProps.data.title2.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
                <p class="font-CabinetGrotesk font-bold text-[18px]">
                  {{ slotProps.data.title2.name }}
                </p>
                <button
                  v-if="slotProps.data.title2.button"
                  class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2"
                >
                  {{ slotProps.data.title2.button }}
                </button>
              </template>
            </Column>
          </DataTable>
        </div>

        <div class="w-full flex-shrink-0">
          <DataTable
            :value="explorePlans"
            showGridlines
            stripedRows
            class="border border-white border-opacity-25 overflow-x-auto bg-[#151719] w-full"
          >
            <Column
              header="Evolution"
              field="title3"
              class="border border-white border-opacity-25 text-center py-6 px-8"
            >
              <template #body="slotProps">
                <p class="font-ProximaNova mb-1">{{ slotProps.data.base }}</p>
                <img :src="slotProps.data.title3.img" alt="" class="mx-auto" />
                <p class="font-CabinetGrotesk font-bold text-[30px]">
                  <span v-if="slotProps.data.title3.charges">&#x20b9;</span
                    >{{ slotProps.data.title3.charges
                  }}<span
                    v-if="slotProps.data.title3.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
                <p class="font-CabinetGrotesk font-bold text-[18px]">
                  {{ slotProps.data.title3.name }}
                </p>
                <button
                  v-if="slotProps.data.title3.button"
                  class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2"
                >
                  {{ slotProps.data.title3.button }}
                </button>
              </template>
            </Column>
          </DataTable>
        </div>

        <div class="w-full flex-shrink-0 h-full">
          <DataTable
            :value="explorePlans"
            showGridlines
            stripedRows
            class="border border-white border-opacity-25 overflow-x-auto bg-matrixgreen w-full"
          >
            <Column
              header="Elite"
              field="title4"
              class="bg-matrix-green text-center py-6 px-8"
            >
              <template #body="slotProps">
                <p class="font-ProximaNova mb-1">{{ slotProps.data.base }}</p>
                <img :src="slotProps.data.title4.img" alt="" class="mx-auto" />
                <p class="font-CabinetGrotesk font-bold text-[30px]">
                  <span v-if="slotProps.data.title4.charges">&#x20b9;</span
                    >{{ slotProps.data.title4.charges
                  }}<span
                    v-if="slotProps.data.title4.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
                <p class="font-CabinetGrotesk font-bold text-[18px]">
                  {{ slotProps.data.title4.name }}
                </p>
                <button
                  v-if="slotProps.data.title4.button"
                  class="font-ProximaNova font-bold bg-white text-black px-6 py-2"
                >
                  {{ slotProps.data.title4.button }}
                </button>
              </template>
            </Column>
          </DataTable>
        </div>

        <div class="w-full flex-shrink-0">
          <DataTable
            :value="explorePlans"
            showGridlines
            stripedRows
            class="border border-white border-opacity-25 overflow-x-auto bg-[#151719] w-full"
          >
            <Column
              header="HNI"
              field="title5"
              class="border border-white border-opacity-25 text-center py-6 px-8"
            >
              <template #body="slotProps">
                <p class="font-ProximaNova mb-1">{{ slotProps.data.base }}</p>
                <img :src="slotProps.data.title5.img" alt="" class="mx-auto" />
                <p class="font-CabinetGrotesk font-bold text-[30px]">
                  <span v-if="slotProps.data.title5.charges">&#x20b9;</span
                    >{{ slotProps.data.title5.charges
                  }}<span
                    v-if="slotProps.data.title5.charges"
                    class="text-[18px]"
                    >+GST</span
                  >
                </p>
                <p class="font-CabinetGrotesk font-bold text-[18px]">
                  {{ slotProps.data.title5.name }}
                </p>
                <button
                  v-if="slotProps.data.title5.button"
                  class="font-ProximaNova font-bold bg-matrixgreen px-6 py-2"
                >
                  {{ slotProps.data.title5.button }}
                </button>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </section>
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
