<template>
    <div class="text-center relative">

        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 ">
            <h2 class="lg:text-[38px] text-3xl font-bold text-white ">
                Intended Users of This Platform
            </h2>
        </div>

        <div class="mx-auto gap-12 grid grid-cols-1 lg:grid-cols-3  w-[95%] mt-6 ">
            <div 
                v-for="user in intendedUsers" 
                :key="user.name"
                class="bg-[#1D2125] border text-left border-[#2F2F2F] rounded p-8 hover:bg-[#252A30] transition-all duration-300 hover:scale-110"
            >
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-white text-[24px] font-bold">
                        {{ user.name }}
                    </h2>
                    
                </div>

                <p class="text-[#7F7F7F] max-w-96 font-openSans">
                    {{ user.description }}
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>

const intendedUsers = [
    {
        name: 'For Scalper',
        description: "Take creativity a step further with the transformative power of our Image Generation tool. It's not just about bringing your concepts to life"
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

<style scoped>

.group img {
    will-change: transform, opacity;
    backface-visibility: hidden;
}
</style>