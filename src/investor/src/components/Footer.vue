call Correctly
<template>
    <div class="mt-20 md:mt-16 w-[95%] mx-auto">

        <div class="rounded-md bg-[#01B852] flex flex-col xl:flex-row mb-24">
            <!-- First main div -->
            <div class="flex flex-col sm:flex-row p-8 pr-4  ">
                <img src="/src/assets/svg/techsupport.svg" alt="Tech Support" class="w-44 mx-auto sm:mx-0 mb-4 sm:mb-0">
                <div class="text-white flex flex-col justify-center sm:ml-5 border-r pr-4 border-[#ffffff22]">
                    <h2 class="font-semibold text-[21px] text-center sm:text-left">
                        Need support for Matrix dashboard Practice?
                    </h2>
                    <p class="font-normal text-[16px] font-openSans text-center sm:text-left mt-2">
                        Reach out to us today and let's discuss how we can help you transform your practice.
                    </p>
                </div>
            </div>

            <!-- Second main div -->

            <div class="text-white flex flex-col sm:flex-row xl:w-1/2">
                <div class="w-full p-8 flex flex-col justify-center ">
                    <h2 class="font-semibold text-[21px] text-center sm:text-left">Support Enquiry</h2>
                    <div class="flex justify-center sm:justify-start gap-2 mt-1">
                        <img src="/src/assets/svg/email.svg" alt="Email icon" class="w-6 h-6">
                        <a href="mailto:support@matrixtrading.com"
                            class="hover:underline font-openSans">support@matrixtrading.com</a>
                    </div>
                    <h2 class="font-semibold text-[19px] mt-4 text-center sm:text-left">
                        Partnership & Sales Enquiry
                    </h2>
                    <div class="flex justify-center sm:justify-start gap-2 mt-1">
                        <img src="/src/assets/svg/email.svg" alt="Email icon" class="w-6 h-6">
                        <a href="mailto:accounts@matrixtrading.com"
                            class="hover:underline font-openSans">accounts@matrixtrading.com</a>
                    </div>
                </div>
                <!-- <img src="/src/assets/svg/girl.svg" alt="Support representative"
                    class="w-54 mx-auto sm:mx-0 mt-4 sm:mt-14"> -->
            </div>
        </div>

        <div class=" grid grid-cols-12 gap-[20px] md:gap-[1rem] lg:gap-[2rem] ">
            <!-- first div -->
            <div class=" col-span-12 md:col-span-4 ">
                <img src="/src/assets/svg/matrix-logo.svg" alt="" class="w-40">

                <img @click="redirectToCalendly" src="/src/assets/img/footerbanner.png" alt="" class="mt-6 hover:cursor-pointer">
            </div>


            <div class="md:hidden col-span-12 border-t border-b border-[#FFFFFF22] py-4">

                <button @click="toggle"
                    class="w-full text-left flex justify-between items-center transition-colors duration-200 ">
                    <span class="font-semibold text-white text-[19px]">Explore More</span>
                    <img src="/src/assets/svg/faqcross.svg" :class="[
                        'w-8 h-8 transition-transform duration-200',
                        { 'rotate-45': isOpen }
                    ]" />
                </button>
                <div v-show="isOpen" class="py-4">
                    <div v-for="exp in explores">
                        <p class="text-white font-light mb-2 hover:underline hover:cursor-pointer font-openSans">
                            {{ exp }}
                        </p>
                    </div>
                </div>

            </div>

            <!-- second div -->
            <div class=" hidden md:block md:col-span-3 lg:col-span-2">
                <ul class="">
                    <li class="text-white text-[19px] font-bold mb-8 ">Explore More</li>

                    <!-- <li class="text-[#dfdfdf]  font-light mb-2 hover:underline hover:cursor-pointer font-openSans">
                        <a href="#" target="_blank" class="font-openSans text-[14px]">Get Free Demo</a>
                    </li> -->
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink
                            to="/algo-trading" class="font-openSans text-[14px]">Algo Trading</RouterLink></li>
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink
                            to="/signals" class="font-openSans text-[14px]">Signals</RouterLink></li>
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink to="/screener"
                            class="font-openSans text-[14px]">Screeners</RouterLink></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink to="/webhook"
                            class="font-openSans text-[14px]">Webhooks</RouterLink></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink to="/manualtrade"
                            class="font-openSans text-[14px]">Manual Trading</RouterLink></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink
                            to="/about">
                            About Us</RouterLink></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><RouterLink to="/contact"
                            class="font-openSans text-[14px]">Contact Us</RouterLink></li>
                </ul>

            </div>

            <div class="flex flex-col justify-start md:items-center  col-span-12 md:col-span-5 lg:col-span-4">
                <ul class="text-wrap">
                    <li class="text-white mb-8 font-bold text-[19px]  ">Get in touch with us</li>
                    <li
                        class="text-[#dfdfdf] flex gap-3 items-center font-light mb-2  font-openSans text-[14px]">
                        <img src="/src/assets/svg/call.svg" alt="">
                        <div class="hover:underline hover:cursor-pointer">
                            <span class="font-bold text-[#00B852]">Sales:</span> +91 9109316249 
                        </div>
                        <div class="hover:underline hover:cursor-pointer">
                            <span class="font-bold text-[#00B852]">Support:</span> +91 9109185132 
                        </div>
                    </li>
                    <li
                        class="text-[#dfdfdf] flex gap-3 items-center font-light mb-3 hover:underline hover:cursor-pointer">
                        <img src="/src/assets/svg/location.svg" alt="">
                        <p class="text-wrap font-openSans text-[14px]">Matrix Trading Technologies, Vidhan Sabha Road,
                            Dubey Colony , Raipur (C.G)
                            492007</p>
                    </li>
                    <li
                        class="text-[#dfdfdf] flex gap-3 items-center font-light mb-2 hover:underline hover:cursor-pointer font-openSans text-[14px] ">
                        <img src="/src/assets/svg/mail.svg" alt="">
                        support@matrixtradingtech.com
                    </li>

                </ul>
            </div>

            <div class="flex flex-col md:items-start justify-start col-span-12 lg:col-span-2">
                <p class="text-white  mb-8 font-bold">Follow Us On</p>
                <div class="flex gap-2">
                    <a target="_blank" href="https://www.youtube.com/@MatrixTradingTech" class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/youtube.svg" alt="" class="w-5">
                    </a>
                    <a target="_blank" href="https://www.instagram.com/matrixtradingtech/" class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/instagram.svg" alt="" class="w-5">
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61569887255498" class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/facebook.svg" alt="" class="w-5">
                    </a>
                    <a target="_blank" href="https://telegram.me/+cuoUg1tBcDc5OGM1" class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/telegram.svg" alt="" class="w-5">
                    </a>
                </div>
            </div>


        </div>

        <div class="lg:p-10 lg:pt-0 border-t border-b border-[#FFFFFF1A] mt-4">
            <p class="text-[#dfdfdf] font-light text-[14px] mt-10 text-center font-openSans">
                Matrix Trading Tech is a sophisticated algotrading platform, uniquely integrated with TradingView and custom strategies, offering a seamless API connection to your broker. Tailored for retail traders and investors, our platform is dedicated to elevating wealth management practices. While we strive to ensure flawless operation, we recommend consulting a financial advisor before trading or investing through our platform. Please be aware that Matrix Trading Tech cannot be held accountable for any losses resulting from market volatility or any platform-related issues.
            </p>
            
        </div>
        <div class="py-2 border-b border-[#FFFFFF1A]">
            <div class="w-full text-[#ffffff55] font-openSans text-[14px] flex flex-wrap gap-2 justify-evenly">
                <button @click="changeRoute('/complain-board')">
                    Complain Board
                </button>
                <button @click="changeRoute('/terms/disclosure')">
                    Disclosure
                </button>
                <button @click="changeRoute('/terms/t&c')">
                    Terms & Conditions
                </button>
                <button @click="changeRoute('/terms/disclaimer')">
                    Disclaimer
                </button>
                <button @click="changeRoute('/terms/investor-charter')">
                    Investor Charter
                </button>
                <button @click="changeRoute('/terms/refund-policy')">
                    Refund Policy
                </button>
                <button @click="changeRoute('/terms/privacy-policy')">
                    Privacy Policy
                </button>

            </div>
        </div>
        <div class=" text-center py-4">
            
            <p class="text-[#F3F8F9] text-[14px] ">
                © 2025 All rights reserved by Matrix Trading Tech &nbsp; | &nbsp; Proudly Developed with ❤️‍🔥 by 
                <a href="https://www.xtentioncrew.tech/" target="_blank" class="text-[#00B852]">X-tention crew technologies</a></p>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const redirectToCalendly = () => {
    window.open('https://calendly.com/metaalgomatrix01/new-meeting' , "_blank")
}


const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

const router = useRouter();

const changeRoute = (name) => {
    router.push(name);
}


const explores = [
    'Get Free Demo', 'Algo Trading', 'Signals', 'Screeners', 'Webhooks', 'Manual Trading', 'About Us', 'Contact Us'
]

</script>

<style scoped>
@media (min-width: 640px) and (max-width: 1023px) {
    .rounded-md {
        display: flex;
        flex-direction: column;
    }

    .rounded-md>div {
        width: 100%;
    }
}
</style>
