<template>

    <div class="mt-24">
        <div class="">
            <Breadcrumb :items="[{
                        title: 'Home',
                        disabled: false,
                        href: '/'
                    },
                    {
                        title: 'Contact Us',
                        disabled: false,
                        href: '/contact'
                    },
            ]" />
            <div class="mx-auto text-center w-full py-4 lg:py-24">

                
                   

                <h1
                    class="text-[27px] md:text-[55px] font-bold bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent text-center">
                    Contact Us</h1>
                <p class="max-w-[700px] mx-auto font-openSans text-[#dfdfdf] text-[14px] md:text-[16px]">At Matrix Trading Tech, we’re more than just a platform – we’re here to support you on your trading journey. Have questions or need help? Our team is ready to guide you with personalized, prompt support. Reach out today and let’s make your trading experience even better.
                </p>
            </div>

        </div>
        <div class=" ">
            <div class="w-[100%] max-w-[700px] mx-auto">
                <form id="contact" @submit.prevent="handleSubmit" class=" p-6 rounded-md">

                    <fieldset class="mb-4">
                        <input v-model="form.name" placeholder="Your name" type="text"
                            class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    </fieldset>
                    <fieldset class="mb-4">
                        <input v-model="form.email" placeholder="Your Email Address" type="email"
                            class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    </fieldset>
                    <fieldset class="mb-4">
                        <input v-model="form.phone" placeholder="Your Phone Number" type="tel"
                            class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none" required />
                    </fieldset>

                    <fieldset class="mb-4">
                        <textarea v-model="form.message" placeholder="Type your Message Here...."
                            class="w-full rounded-md p-4 bg-[#ffffff11] text-[#dfdfdf] focus:outline-none"
                            required></textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit"
                            class="w-full bg-[#00B852] text-white rounded-md p-2 font-medium  transition duration-300">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
            <div>
                b
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from '/src/component/Breadcrumb.vue'


const form = ref({
    form: {
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    }
});

const handleSubmit = () => {
    console.log("Form submitted:", this.form);
    // Add form submission logic here
}
</script>