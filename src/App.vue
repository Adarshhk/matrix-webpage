<template>
    
    <Navbar/>
    <RouterView/>
    <FAQ/>
    <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './scalper/src/components/Navbar.vue';
import FAQ from './component/FAQ.vue';
import Footer from './component/Footer.vue';
import Promotion from './component/Promotion.vue';


</script>