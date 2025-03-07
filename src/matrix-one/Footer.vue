<template>

    <Contact v-if="showContactForm" @close="showContactForm = false" />
    <div class="my-24 text-center">

        <h4 class="text-[#f2aa55] text-xl font-bold ">
            Still have questions?
        </h4>


        <button @click="showContactForm = true" class="hover:bg-gradient-to-r from-[#f2aa55]/25 to-[#8c6231]/25 duration-200 transition-colors border-[#f2aa55] border-2 text-xl font-bold px-6 py-2 rounded-lg text-[#f2aa55] mt-4">
            Contact our support team for assistance.
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Contact from './Contact.vue';

const showContactForm = ref(false);
</script>