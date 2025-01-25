<script setup>
import HeroSection from "./HomeViewSections/HeroSection.vue"
import ConfidentTraderSection from "./HomeViewSections/ConfidentTraderSection.vue"
import FeaturesSection from "./HomeViewSections/FeaturesSection.vue"
import PricingSection from "./HomeViewSections/PricingSection.vue"
import ImproveTradingSection from "./HomeViewSections/ImproveTradingSection.vue"
import LovedByPeopleSection from "./HomeViewSections/LovedByPeopleSection.vue"

import JoinCommunitySection from "./HomeViewSections/JoinCommunitySection.vue"
import GalleriaComponent from '/src/component/galleryComponent.vue'; 


</script>


<template>
    <main class="mt-24 px-4">
        <HeroSection/>
        <ConfidentTraderSection/>
        <FeaturesSection/>
        <PricingSection/>
        <ImproveTradingSection/>
        <LovedByPeopleSection/>
        
        <JoinCommunitySection/>
        <!-- <GalleriaComponent /> -->
    </main>
</template>

