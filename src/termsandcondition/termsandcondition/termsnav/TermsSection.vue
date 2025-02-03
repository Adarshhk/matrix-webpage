<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// import Cookie from "./Cookie.vue";
import Refund from "../refundpolicy/RefundPolicy.vue";
import Terms from "../t&c/TermsandCondition.vue";
import Disclaimer from "../disclaimer/Disclaimer.vue";
import Privacy from "../privacypolicy/PrivacyPolicy.vue";

// Use Vue Router composables
const route = useRoute();
const router = useRouter();

// Reactive variable for the active content
const activeContent = ref(route.query.tab || 'security');

// Watch for changes in the route query to update active content
watch(() => route.query.tab, (newTab) => {
  activeContent.value = newTab || 'security';
});
</script>


<template>
  <section class="p-8 md:p-16 xl:p-20 3xl:max-w-[85%] mx-auto">
    <div class="flex flex-col xl:grid grid-cols-8 gap-10 md:gap-20 w-full">
      <div class="col-span-2">
        <div
          class="w-full flex xl:flex-col items-center justify-start font-dm-sans text-[18px] sticky top-40 overflow-x-auto"
        >
          <router-link
            :to="{ query: { tab: 'security' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'security',
              'text-black': activeContent !== 'security',
            }"
          >
            Security Policy
          </router-link>

          <router-link
            :to="{ query: { tab: 'privacy' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'privacy',
              'text-black': activeContent !== 'privacy',
            }"
          >
            Privacy Policy
          </router-link>

          <router-link
            :to="{ query: { tab: 'terms' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'terms',
              'text-black': activeContent !== 'terms',
            }"
          >
            Terms and Conditions
          </router-link>

          <router-link
            :to="{ query: { tab: 'cookies' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'cookies',
              'text-black': activeContent !== 'cookies',
            }"
          >
            Cookies Policy
          </router-link>

          <router-link
            :to="{ query: { tab: 'disclaimer' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'disclaimer',
              'text-black': activeContent !== 'disclaimer',
            }"
          >
            Disclaimer
          </router-link>

          <router-link
            :to="{ query: { tab: 'refund' } }"
            class="w-full text-left p-4 rounded-md whitespace-nowrap"
            :class="{
              'bg-theme-background text-white': activeContent === 'refund',
              'text-black': activeContent !== 'refund',
            }"
          >
            Refund Policy
          </router-link>
        </div>
      </div>

      <div class="col-span-6">
        <!-- <Security v-if="activeContent === 'security'" id="securityid" /> -->
        <Privacy v-if="activeContent === 'privacy'" id="privacyid" />
        <Terms v-if="activeContent === 'terms'" id="termsid" />
        <!-- <Cookie v-if="activeContent === 'cookies'" id="cookiesid" /> -->
        <Disclaimer v-if="activeContent === 'disclaimer'" id="descid" />
        <Refund v-if="activeContent === 'refund'" id="refundid" />
      </div>
    </div>
  </section>
</template>
