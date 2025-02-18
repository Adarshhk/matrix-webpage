<template>
    <div class="">
        <Hero id="hero" />
        <Why id="why" />
        <Features id="features" />
        
        <Card/>
        <CardMobile/>
        <Pricing id="pricing" />
        <Video/>
        <VideoAd />
        <Tutorial />
        <Community />
        <Testimonial />
        <Plans />
        <BlogHeroSection/>
        <SuggestedArticlesSectionCopy/>
    </div>
</template>

<script setup>

import Features from './Features.vue';
import Hero from './Hero.vue';
import Media from './Media.vue';
import Pricing from './Pricing.vue';
import Tutorial from './Tutorial.vue';
import Why from './Why.vue';
import Community from './Community.vue';
import Testimonial from './Testimonial.vue';
import Plans from './Plans.vue';
import Card from './Card.vue';
import Video from './Video.vue';
import CardMobile from './CardMobile.vue';
import BlogHeroSection from './BlogHeroSection.vue';
import SuggestedArticlesSectionCopy from './SuggestedArticlesSection copy.vue';
import VideoAd from './utils/VideoAd.vue';


</script>