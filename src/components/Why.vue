<template>
    <div class="text-center relative">
        
        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 ">
            <h2 class="lg:text-[38px] text-3xl font-bold text-white ">
                Intended Users of This Platform
            </h2>
        </div>

        <div class="mx-auto gap-3 flex justify-evenly w-[95%] mt-6 flex-wrap">
            <div v-for="user in intendedUsers" class="bg-[#1D2125] border text-left border-[#2F2F2F] rounded p-8">
                <h2 class="text-white text-[24px] font-bold mb-6">
                    {{ user.name }}
                </h2>
                <p class="text-[#7F7F7F] max-w-96">
                    {{ user.description }}
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>

const intendedUsers = [
    { 
        name: 'For Scalpe', 
        description : "Take creativity a step further with the transformative power of our Image Generation tool. It's not just about bringing your concepts to life" 
    },

    { 
        name: 'For Trader',
        description: "Take creativity a step further with the transformative power of our Image Generation tool. It's not just about bringing your concepts to life",
    },
    { 
        name: 'For Investor',
        description: "Take creativity a step further with the transformative power of our Image Generation tool. It's not just about bringing your concepts to life",
    },
    
]

</script>