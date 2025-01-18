<template>
  <div class="text-white text-center mt-24">
    <div class="text-center">
      <p class="text-[27px] md:text-[38px] font-bold mx-auto text-white">Transform Your Trading Approach</p>
      <p class="text-[#BBB8B8] mb-16 text-[16px] md:text-[18px] w-[95%] max-w-6xl p-2 mx-auto mt-4 font-openSans">
        Innovate your trading experience with ease and precision. Our platform provides powerful tools and actionable insights to help you achieve your goals effortlessly.
      </p>
    </div>
    
    <main class="w-[95%] mx-auto">
      <ul id="trade-cards" ref="tradeCardsWrapper" class="list-none grid grid-cols-1 gap-[6vw] pb-[calc(var(--numtradeCards)*var(--trade-card-top-offset))] mb-[4vw]">
        <li v-for="(tradeCard, index) in tradeCards" :key="tradeCard.id" :id="`trade_card_${index + 1}`" class="trade-card sticky top-20 lg:top-24 transform-gpu will-change-transform" :style="{ paddingTop: `calc(${index + 1} * var(--trade-card-top-offset))` }">
          <div class="trade-card__content border border-[#2F2F2F] bg-gradient-to-r from-[#1D2125] to-[#1F0B03] text-[#0a0507] rounded-md overflow-hidden shadow-lg grid md:grid-cols-2 items-stretch grid-cols-1">
            <div class="px-4 pt-6 lg:px-8 lg:pt-12">
              <div class="flex items-center gap-4">
                <img :src="tradeCard.icon" alt="" class="w-8 h-8">
                <div class="text-left">
                  <h3 class="text-white font-semibold text-[20px]">{{ tradeCard.title }}</h3>
                  <p class="text-[14px] text-[#F9F2F2] font-normal font-openSans">{{ tradeCard.subtitle }}</p>
                </div>
              </div>
              <hr class="h-px my-4 mb-6 bg-[#373636] border-0 dark:bg-[#373636]">
              <div class="text-left">
                <p class="text-white text-[14px] font-openSans">{{ tradeCard.description }}</p>
              </div>

              <div class="mt-6">
                <div v-for="feat in tradeCard.features" class="flex items-center my-3 gap-3">
                  <img src="/src/assets/svg/cloud.svg" alt="" class="w-5 h-5">
                  <p class="text-white font-openSans text-[14px]">{{ feat }}</p>
                </div>
              </div>
              
              <div class="flex justify-start pb-10 lg:pb-0">
                <button class="rounded-3xl border border-white py-2 max-w-48 w-full text-white font-openSans text-[16px] mt-6">
                  Sign Up
                </button>
              </div>
            </div>
            <figure class="overflow-hidden md:h-full h-64">
              <img :src="tradeCard.image" :alt="tradeCard.title" class="w-full h-full object-cover">
            </figure>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scroll, animate } from 'motion';

const tradeCardsWrapper = ref(null);
const tradeCards = ref([
  { id: 1, title: 'Manual Trade', icon: '/src/assets/svg/manual.svg', subtitle:'Trade Your Way', features: ['Integrate with platform across your business', 'Discover actionable strategies', 'Get insights of what you achieved today'], description: 'Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg' },
  { id: 2, title: 'Trade Card Two', icon: '/src/assets/svg/manualtrading.svg', subtitle:'Trade Your Way', features: ['Integrate with platform across your business', 'Discover actionable strategies', 'Get insights of what you achieved today'], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg' },
  { id: 3, title: 'Trade Card Three', icon: '/src/assets/svg/manualtrading.svg', subtitle:'Trade Your Way', features: ['Integrate with platform across your business', 'Discover actionable strategies', 'Get insights of what you achieved today'], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg' },
  { id: 4, title: 'Trade Card Four', icon: '/src/assets/svg/manualtrading.svg', subtitle:'Trade Your Way', features: ['Integrate with platform across your business', 'Discover actionable strategies', 'Get insights of what you achieved today'], description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg' },
]);

const setupAnimation = () => {
  const numTradeCards = tradeCards.value.length;
  const tradeCardElements = document.querySelectorAll('.trade-card');

  tradeCardElements.forEach(($tradeCard, index0) => {
    const index = index0 + 1;
    const reverseIndex = numTradeCards - index0;
    const reverseIndex0 = numTradeCards - index;

    scroll(
      animate($tradeCard, {
        scale: [1, 1 - (0.05 * reverseIndex0)],
      }), {
        target: tradeCardsWrapper.value,
        offset: [`${index0 / numTradeCards * 100}%`, `${index / numTradeCards * 100}%`],
      }
    );
  });
};

let resizeObserver;

onMounted(() => {
  setupAnimation();

  // Create a ResizeObserver to handle window resizing
  resizeObserver = new ResizeObserver(() => {
    setupAnimation();
  });

  // Observe the tradeCardsWrapper element
  if (tradeCardsWrapper.value) {
    resizeObserver.observe(tradeCardsWrapper.value);
  }
});

onUnmounted(() => {
  // Disconnect the ResizeObserver when the component is unmounted
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
:root {
  --trade-card-height: 40vw;
  --trade-card-margin: 4vw;
  --trade-card-top-offset: 1.5em;
  --numtradeCards: 4;
}

#trade-cards {
  grid-template-rows: repeat(var(--numtradeCards), var(--trade-card-height));
  gap: 4vw;
}

.trade-card__content {
  grid-template-areas: "text img";
  max-height: 500px;
}

@media (max-width: 768px) {
  :root {
    --trade-card-height: auto; /* Allow card height to adjust based on content */
  }

  #trade-cards {
    gap: 10vw;
  }


  .trade-card__content {
    grid-template-areas: 
      "text"
      "img";
    max-height: none; /* Remove max-height constraint on mobile */
  }

  .trade-card__content > div {
    height: auto;
  }

  .trade-card__content > figure {
    
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    position: relative;

  }

  .trade-card__content > figure img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>



