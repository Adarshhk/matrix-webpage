<template>
    <div class="relative ">
        <!-- Background -->
        <div class="absolute w-full flex justify-between  ">
            <img src="/src/assets/img/one-bg.png" class="object-contain max-w-[40%]" alt="" />
            <img src="/src/assets/img/one-bg.png" class="object-contain max-w-[40%] transform scale-x-[-1]" alt="" />
        </div>

        <!-- Glow Effect -->
        <div class="absolute flex justify-center items-center">
            <img src="/src/assets/img/one-glow.png" class="opacity-60 max-w-full" alt="" />
        </div>

        <!-- Header -->
        <div class="flex w-full py-4">
            <img src="/src/assets/svg/matrix-logo.svg" alt="" class="max-w-36" />
        </div>

        <!-- Content -->
        <div class="max-w-4xl mx-auto flex items-center flex-col text-center space-y-8 mt-20 z-20">
            <div class="relative md:w-[40%] w-full text-[#F2AA55] text-[12px] font-extrabold uppercase tracking-widest px-6 py-2">
                Introducing
                <div
                    class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent top-0">
                </div>
                <div
                    class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent bottom-0">
                </div>
            </div>

            <div class="w-full flex items-center justify-center">
                <img src="/src/assets/img/matrix-one.png" alt="" class="max-w-56">
            </div>
            <p class="text-white text-[19.2px] font-[500] max-w-xl">
                Get everything you need—indicators, signals, algo trading, manual trading, screeners, and more—in one
                powerful subscription.
            </p>

            <div class="flex w-full gap-2 pt-6 flex-wrap lg:flex-nowrap justify-center items-center">
            
                <div class="px-6 py-1 bg-gradient-to-r from-[#f2aa55]/25 to-[#8c6231]/25 rounded-[40px] border border-[#f2aa55] justify-center items-center gap-2 inline-flex">
                    <img src="/src/assets/svg/golden_star.svg" alt="" class="">
                    <p class=" text-nowrap text-center text-[#f2aa55] text-base font-medium ">One Price. All Features.</p>
                </div>

                <div class="px-6 py-1 bg-gradient-to-r from-[#f2aa55]/25 to-[#8c6231]/25 rounded-[40px] border border-[#f2aa55] justify-center items-center gap-2 inline-flex">
                    <img src="/src/assets/svg/golden_star.svg" alt="">
                    <div class="  text-nowrap text-center text-[#f2aa55] text-base font-medium ">Yearly Plan for uninterrupted access.</div>
                </div>

                <div class="px-6 py-1 bg-gradient-to-r from-[#f2aa55]/25 to-[#8c6231]/25 rounded-[40px] border border-[#f2aa55] justify-center items-center gap-2 inline-flex">
                    <img src="/src/assets/svg/golden_star.svg" alt="">
                    <div class=" text-nowrap text-center text-[#f2aa55] text-base font-medium ">Exclusive VIP benefits for elite traders.</div>
                </div>

            </div>


            <!-- product included -->

            <div class="relative w-full md:w-[40%] text-[#F2AA55] text-sm font-bold tracking-widest px-6 py-2">
                Product Included
                <div
                    class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F2AA55] to-transparent bottom-0">
                </div>
            </div>

            <div class="flex w-full gap-4 justify-center ">
                
                <div v-for="icon in icons" class="bg-gradient-to-r from-[#f2aa55]/25 to-[#8c6231]/25 w-14 flex items-center justify-center h-14 rounded-lg">
                    <img :src="icon" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const icons = [
    '/src/assets/producticons/producticon (1).svg',
    '/src/assets/producticons/producticon (2).svg',
    '/src/assets/producticons/producticon (3).svg',
    '/src/assets/producticons/producticon (4).svg',
    '/src/assets/producticons/producticon (5).svg',
    '/src/assets/producticons/producticon (6).svg',
]
</script>