<template>
    <Navbar/>
    <RouterView/>
    <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './scalper/src/components/Navbar.vue';
import Footer from './investor/src/components/Footer.vue';

</script>