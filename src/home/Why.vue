<template>
    <div class="text-center relative">

        <div class="mx-auto justify-center flex lg:gap-4 max-w-4xl items-center w-[95%]">
            <img src="/src/assets/svg/Diamond.svg" alt="" class="w-20 ">
            <h2 class="lg:text-[38px] text-3xl font-bold text-white ">
                For Whom This Platform Is Designed
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
        name: 'The Scalper',
        description: " Designed for individuals who thrive on accuracy and swiftness in constantly evolving markets. With real-time tools and effortless execution, this platform ensures you stay ahead of the curve in high-frequency trading scenarios."
    },

    {
        name: 'The Traders',
        description: "Whether day trading or swing trading, this platform gives traders the strategic insights and automation you need to make smart decisions. It's an ideal companion for individuals navigating market volatility and capitalizing on short- to medium-term trends.",
    },
    {
        name: 'The Investors',
        description: "For long-term planners focused on building a portfolio, the platform delivers intelligent tools for assessing opportunities, managing risk, and tracking progress. It empowers investors to turn their strategies into steady growth and sustainable achievements.",
    },

]

</script>

<style scoped>

.group img {
    will-change: transform, opacity;
    backface-visibility: hidden;
}
</style>