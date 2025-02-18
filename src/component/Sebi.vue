<template>
    <div class="flex flex-col md:flex-row gap-12 w-[95%] items-center mx-auto justify-center">
        <img src="/src/assets/svg/sebi2.svg" alt="Logo" class="w-44 -rotate-[16deg]">
        
        <div class="border-l md:border-l-0 border-r border-b border-t-0 md:border-t md:rounded-r-[24px] 
                    border-[#ffffff33] grid grid-cols-1 md:grid-cols-3 h-min gap-6 px-6 md:pr-6 py-6 text-center md:text-left items-center">
            
            <div v-for="(stat, index) in stats" :key="index" class="mt-3">
                <h1 class="text-[32px] font-extrabold text-white">
                    {{ stat.value }}
                </h1>
                <p class="text-[#dfdfdf] text-[14px] font-openSans">
                    {{ stat.label }}
                </p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
    { value: '7000+', label: 'Active Users' },
    { value: '12 Yrs', label: 'Proven Market Expertise' },
    { value: '100%', label: 'Safe & Trusted' }
])
</script>
