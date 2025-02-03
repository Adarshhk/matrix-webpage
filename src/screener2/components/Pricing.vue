<template>
    <div class="w-full flex justify-center -mt-7">
        <div class="flex justify-between border border-[#00B852] bg-[#161A1E] max-w-3xl rounded-3xl py-3 px-6">
            <div class="flex gap-2 items-center">
                <img src="/src/assets/img/play.png" alt="Play Icon" class="w-5 h-5" />
                <p class="text-white text-[14px] md:text-[16px] font-openSans">Know How to use screener?</p>
                <a href="#" class="text-[#E3E093] text-[14px] md:text-[16px] underline font-openSans">Watch Now</a>
            </div>
        </div>
    </div>

    <div class="text-center mt-24 lg:mt-32 w-[95%] mx-auto">
        <h2
            class="text-[27px] md:text-[38px] max-w-3xl font-extrabold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent mx-auto">
            Find the perfect pricing plan that fits your investment needs.
        </h2>

        <p class="text-[16px] lg:text-[18px] w-[90%] mt-8 font-normal text-white font-openSans max-w-4xl mx-auto">
            Choose a flexible and affordable plan for our stock screener, designed to help you maximize your investment
            potential without breaking the bank.
        </p>

        <div class="mx-auto mt-10 w-min flex justify-center h-20 items-end relative">
            <div class="bg-[#373838] rounded-3xl px-2 py-1 flex justify-evenly gap-4 text-[18px]">
                <button v-for="plan in plans" :key="plan" :aria-label="plan + ' Plan'" :class="getButtonClass(plan)"
                    @click="toggleActive(plan)" class="transition-all duration-200 py-1 px-3 rounded-3xl text-[16px]">
                    {{ plan }}
                </button>
            </div>
            <!-- Image on the right -->
            <img src="/src/assets/svg/savemore.svg" alt="Info Icon"
                class="absolute right-[-50px] md:right-[-100px] top-3 md:top-6 transform -translate-y-1/2 w-24 md:w-32 -rotate-12 md:rotate-0" />
        </div>



        <div class="mt-16 w-[95%] lg:w-[80%] grid grid-cols-10 gap-3 mx-auto flex-wrap">
            <div class="border col-span-10 lg:col-span-4 bg-[#1D2125] rounded-lg border-[#2F2F2F] text-center">
                <h2
                    class="text-[18px] font-openSans text-white font-bold py-6 tracking-widest border-b border-[#2f2f2f]">
                    FREE</h2>


                <div class="px-6">
                    <h2 class="font-openSans text-[16px] max-w-xs mx-auto text-white text-center py-6">
                        This plan is perfect for beginners exploring the market, offering access to basic screening
                        tools.
                    </h2>

                    <p class="text-[63px] font-bold text-white">
                        <span class="text-[24px]">₹</span>0
                    </p>

                    <button
                        class="border w-[95%] mx-auto py-4 border-white rounded font-bold tracking-wider text-[16px] font-openSans text-white mt-8">
                        Subscribe
                    </button>


                    <div
                        class="mt-8 text-[#FFF5A8] text-[14px] pb-10  flex gap-2 items-center justify-center font-bold">
                        <p class="font-openSans">or</p>
                        <a href="" class="underline font-openSans">Start my Free Trial</a>
                    </div>
                </div>
            </div>
            <div
                class="border col-span-10 lg:col-span-6 bg-[#1D2125] rounded-lg border-[#FFF5A8] border-t-[16px] text-center">
                <div class="bg-[#FFF5A8] rounded-b-xl">
                    <h2
                        class="text-[18px] rounded-t-xl font-openSans text-white font-bold py-6 tracking-widest border-b border-[#2f2f2f] bg-[#1d2125]">
                        STANDARD</h2>
                </div>



                <div class="px-6">
                    <h2 class="font-openSans text-[16px] max-w-xl mx-auto text-white text-center py-6">
                        Unlock advanced stock screening tools, strategy creation, and seamless performance
                        tracking—perfect for serious traders aiming to level up their investments.
                    </h2>

                    <div class="flex justify-center gap-1">
                        <p class="text-[63px] font-bold text-white">
                            <span class="text-[24px]">₹</span>10,740
                        </p>
                        <div class="py-4 flex flex-col justify-evenly">
                            <p class="text-[10px] bg-[#E3DB98] p-1 px-2 rounded-3xl font-semibold">50% Off</p>
                            <p class="text-[#BBB8B8] text-[18px] font-semibold font-openSans line-through">20000</p>
                        </div>
                    </div>


                    <button
                        class="border w-[95%] mx-auto py-4 border-white rounded font-bold tracking-wider text-[16px] font-openSans bg-white text-[#161A1E] mt-8">
                        Subscribe
                    </button>


                    <div
                        class="mt-8 text-[#FFF5A8] text-[14px] pb-10  flex gap-2 items-center justify-center font-bold">
                        <p class="font-openSans">or</p>
                        <a href="" class="underline font-openSans">Start my Free Trial</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import { ref, computed } from "vue";

export default {
    setup() {
        const active = ref("Monthly");
        const plans = ["Monthly", "Quarterly", "Yearly"];

        const toggleActive = (name) => {
            active.value = name;
        };

        const getButtonClass = (plan) => ({
            "text-white font-semibold bg-[#00B852] ": active.value === plan,
            "text-[#F9F2F2] ": active.value !== plan,
        });

        return { active, plans, toggleActive, getButtonClass };
    },
};
</script>
