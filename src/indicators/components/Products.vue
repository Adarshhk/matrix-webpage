<template>
    <div class="w-[95%] mx-auto">
        <!-- button -->
        <!-- <div class="flex gap-1 lg:gap-2 ">
            <button v-for="cat in indicatorCategory" :key="cat.id" :aria-label="plan + ' Plan'"
                :class="getButtonClass(cat)" @click="toggleActive(cat.id)"
                class="transition-all duration-200 py-1 lg:px-4 rounded-3xl text-[12px] lg:text-[16px] font-openSans">
                {{ cat.name }}
            </button>
        </div> -->

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:gap-8">

            <RouterLink :to="`/indicator-details/${item.id}`" v-for="item in indicators" :key="item.id"
                class="space-y-3 group relative">
                
                <div>
                    <img v-if="item.image" :src="item.image" alt="" class="aspect-video" />
                    <img v-else src="/src/assets/img/trade.png" alt="" class="aspect-video" />
                    
                </div>

                <h1
                    class="font-CabinetGrotesk text-white font-bold text-[19px] group-hover:text-[#00b852] transition-all duration-150 text-left">
                    {{ item.name }}
                </h1>

                <hr class="border-dashed border-[#FFFFFF30]" />

                <p class="text-left text-white text-[14px] md:text-[16px]">{{ item.created_at }}</p>
            </RouterLink>

        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import useIndicatorStore from "../../store/indicator";
import { storeToRefs } from "pinia";
import useIndicatorCategoryStore from "../../store/indicatorcategory";

const indicatorStore = useIndicatorStore();
const indicatorCategoryStore = useIndicatorCategoryStore();

const { indicators } = storeToRefs(indicatorStore);
const { indicatorCategory, selectedIndicatorCategory } = storeToRefs(indicatorCategoryStore);

const toggleActive = (categoryId) => {
    selectedIndicatorCategory.value = categoryId;
};

const getButtonClass = (cat) => ({
    "text-[#46BA4B] border border-[#46BA4B] bg-[#46BA4B33]": selectedIndicatorCategory.value === cat.id,
    "text-white border border-[#4F4F4F]": selectedIndicatorCategory.value !== cat.id,
});


</script>

<style></style>