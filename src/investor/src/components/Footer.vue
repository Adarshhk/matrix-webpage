call Correctly
<template>
    <div class="mt-20 md:mt-16 px-7 lg:px-20">

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

                <img src="/src/assets/img/footerbanner.png" alt="" class="mt-6 hover:cursor-pointer">
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

                    <li class="text-[#dfdfdf]  font-light mb-2 hover:underline hover:cursor-pointer font-openSans">
                        <a href="#" target="_blank" class="font-openSans text-[14px]">Get Free Demo</a>
                    </li>
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a
                            href="#features" class="font-openSans text-[14px]">Algo Trading</a></li>
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a
                            href="#pricing" class="font-openSans text-[14px]">Signals</a></li>
                    <li class="text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a href="#why"
                            class="font-openSans text-[14px]">Screeners</a></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a href="#why"
                            class="font-openSans text-[14px]">Webhooks</a></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a href="#why"
                            class="font-openSans text-[14px]">Manual Trading</a></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a
                            href="#why">
                            About Us</a></li>
                    <li class=" text-[#dfdfdf] font font-light mb-2 hover:underline hover:cursor-pointer"><a href="#why"
                            class="font-openSans text-[14px]">Contact Us</a></li>
                </ul>

            </div>

            <div class="flex flex-col justify-start md:items-center  col-span-12 md:col-span-5 lg:col-span-4">
                <ul class="text-wrap">
                    <li class="text-white mb-8 font-bold text-[19px]  ">Get in touch with us</li>
                    <li
                        class="text-[#dfdfdf] flex gap-3 items-center font-light mb-2 hover:underline hover:cursor-pointer font-openSans text-[14px]">
                        <img src="/src/assets/svg/call.svg" alt="">
                        +91 8962336003
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
                    <button class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/linkedin.svg" alt="" class="w-5">
                    </button>
                    <button class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/instagram.svg" alt="" class="w-5">
                    </button>
                    <button class="p-1 rounded-full border-2 border-[#ffffff11]">
                        <img src="/src/assets/svg/facebook.svg" alt="" class="w-5">
                    </button>
                </div>
            </div>


        </div>

        <div class="lg:p-10 lg:pt-0 border-t border-b border-[#FFFFFF1A] mt-4">
            <p class="text-[#dfdfdf] font-light text-[14px] mt-10 text-center font-openSans">
                Message From Regulator: No need to issue cheques by investors while subscribing to IPO. Just write the
                bank account number and sign in the application form to authorise your bank to make payment in case of
                allotment. No worries for refund as the money remains in investor's account. 1) Message from
                Exchange(s): Prevent Unauthorised transactions in your account --> Update your mobile numbers/email IDs
                with your stock brokers. Receive information of your transactions directly from Exchange on your
                mobile/email at the end of the day. Issued in the interest of investors. 2) Message from Depositories:
                a) Prevent Unauthorized Transactions in your demat account --> Update your mobile number with your
                Depository Participant. Receive alerts on your registered mobile for all debit and other important
                transactions in your demat account directly from NSDL on the same day issued in the interest of
                investors. b) KYC is one time exercise while dealing in securities markets - once KYC is done through a
                SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again
                when you approach another intermediary.
                Company Identification Number (CIN): Sharekhan Ltd: U99999MH1995PLC087498; Sharekhan Commodities Pvt
                Ltd: U67120MH2000PTC127261; SHAREKHAN BNP PARIBAS FINANCIAL SERVICES LIMITED: U65920MH2004PLC149518;
                Sharekhan.com India Pvt Ltd: U80904MH2000PTC126954; Sharekhan Consultants Pvt. Ltd:
                U67190MH2000PTC127257
                Disclaimer: Investment in securities market are subject to market risks, read all the related documents
                carefully before investing.Brokerage will not exceed SEBI prescribed limit.Please refer the Risk
                Disclosure Document issued by SEBI and go through the Rights and Obligations and Do's and Dont's issued
                by Stock Exchanges and Depositories before trading on the Stock Exchanges. For commodities derivatives
                please note that Commodities Derivatives are highly leveraged instruments. PMS is not offered in
                Commodity Derivative Segment by Sharekhan Limited. Before investing in the asset class consider your
                investment objectives, level of experience and risk appetite carefully.
                Mutual funds disclaimer: Mutual Fund investment are subject to market risk. Read all the scheme related
                documents carefully before investing. For more details, click here. Quantities, amounts, figures, graphs
                and rates shown / displayed are exemplary and not recommendatory or actual. For scheme-related
                information, please refer to the Scheme Information Document available on the relevant AMC's website for
                detailed Risk Factors, assets allocation, investment strategy, etc.
                Click here to check out the Shareshop near you.
            </p>
            
        </div>
        <div class="py-2 border-b border-[#FFFFFF1A]">
            <div class="w-full text-[#ffffff55] font-openSans text-[14px] flex justify-evenly">
                <button >
                    Services
                </button>
                <button @click="changeRoute('/disclosure')">
                    Disclosure
                </button>
                <button @click="changeRoute('/t&c')">
                    Terms & Conditions
                </button>
                <button @click="changeRoute('/disclaimer')">
                    Disclaimer
                </button>
                <button >
                    Grievance Redressal
                </button>
                <button @click="changeRoute('/refund-policy')">
                    Refund Policy
                </button>
                <button @click="changeRoute('/privacy-policy')">
                    Privacy Policy
                </button>

            </div>
        </div>
        <div class=" text-center py-4">
            
            <p class="text-[#F3F8F9] text-[14px] ">
                © 2025 All rights reserved by Matrix Trading Tech &nbsp; | &nbsp; Proudly Developed with ❤️‍🔥 by 
                <span class="text-[#00B852]">X-tention crew technologies</span></p>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


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
