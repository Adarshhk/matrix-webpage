<template>
    <div class="flex items-center justify-center h-full">
        <div
            class="w-full h-full bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] rounded-lg shadow-lg p-6">
            <h2 class="text-[24px] text-white font-semibold my-6 text-center">
                Get Started with your free trial
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="relative">
                    <input type="text" v-model="form.name" placeholder="Name"
                        class="w-full pl-10 py-4 bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 peer" />
                    <div
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-[#dfdfdf55] peer-focus:text-green-500 transition-colors">
                        <!-- User Icon -->
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>

                <div class="relative">
                    <input type="password" v-model="form.password" placeholder="Password"
                        class="w-full pl-10 py-4 bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 peer" />
                    <div
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-[#dfdfdf55] peer-focus:text-green-500 transition-colors">
                        <!-- Lock Icon -->
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>

                <div class="relative">
                    <input type="tel" v-model="form.phone" placeholder="Phone Number"
                        class="w-full pl-10  py-4 bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 peer" />
                    <div
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-[#dfdfdf55] peer-focus:text-green-500 transition-colors">
                        <!-- Phone Icon -->
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                </div>

                <div class="relative">
                    <input type="email" v-model="form.confirmEmail" placeholder="Email"
                        class="w-full pl-10  py-4 bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 peer" />
                    <div
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-[#dfdfdf55] peer-focus:text-green-500 transition-colors">
                        <!-- Email Icon -->
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                <div class="flex items-start">
                    <label class="flex items-center cursor-pointer relative">
                        <input type="checkbox" checked
                            class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#ffffff1a] font-openSans text-[14px]"
                            id="check" />
                        <span
                            class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="#00b852" stroke="#00b852" stroke-width="1">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label for="terms" class="ml-2 text-[12px] text-[#dfdfdf55] font-openSans">
                        I agree to the Terms of Service and Privacy Policy
                    </label>
                </div>

                <button type="submit"
                    class="w-full py-3 px-4 bg-[#00B852] hover:bg-green-600 text-white font-medium rounded-full transition-colors font-openSans text-[16px]">
                    Sign up for free
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    password: '',
    countryCode: '+91',
    phone: '',
    confirmEmail: '',
    agreed: false
})

const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', form)
}
</script>