<template>
    <div class="flex items-center justify-center h-full">
        <div
            class="w-full h-full bg-[#1b1f22] border border-[#FFFFFF1A] font-openSans text-[14px] rounded-lg shadow-lg p-6">
            <h2 class="text-[24px] text-white font-semibold my-6 text-center">
                Start Your Journey with Us – Get in Touch Today
            </h2>

            <form id="contact" @submit.prevent="handleSubmit" class="p-6 rounded-md">
                <fieldset class="mb-4">
                    <input v-model="form.name" placeholder="Your name" type="text"
                        class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
                </fieldset>
                <fieldset class="mb-4">
                    <input v-model="form.email" placeholder="Your Email Address" type="email"
                        class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                </fieldset>
                <fieldset class="mb-4">
                    <input v-model="form.phone" placeholder="Your Phone Number" type="tel"
                        class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
                </fieldset>
                <fieldset class="mb-4">
                    <textarea v-model="form.message" placeholder="Type your Message Here...."
                        class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
                </fieldset>
                <fieldset>
                    <button type="submit"
                        class="w-full bg-[#00B852] text-white rounded-md p-2 font-medium transition duration-300">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const errors = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const validateForm = () => {
    let isValid = true
    errors.value = { name: '', email: '', phone: '', message: '' }

    if (!form.value.name) {
        errors.value.name = 'Name is required'
        isValid = false
    }

    if (!form.value.email) {
        errors.value.email = 'Email is required'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Invalid email format'
        isValid = false
    }

    if (!form.value.phone) {
        errors.value.phone = 'Phone number is required'
        isValid = false
    } else if (!/^\d{10,15}$/.test(form.value.phone)) {
        errors.value.phone = 'Invalid phone number'
        isValid = false
    }

    if (!form.value.message) {
        errors.value.message = 'Message cannot be empty'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (!validateForm()) return

    try {
        await axios.post('https://v3landing.matrixtradingtech.com/contact-us', form.value)
        alert('Form submitted successfully!')
    } catch (error) {
        alert('Failed to submit the form. Please try again later.')
    }
}
</script>
