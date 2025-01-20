<!-- <template>
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
    gap: 48vw;
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


 -->


 <template>
  <div class="text-white text-center mt-24 md:mt-12 lg:mt-[76px] mx-2">
    <div class="text-center">
      <p class="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold mx-auto text-white font-proxima leading-tight">
        Transform Your Trading Approach
      </p>
      <p class="text-[#BBB8B8] mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-[17px] leading-relaxed w-[95%] max-w-6xl p-2 mx-auto mt-4 font-proxima">
        Innovate your trading experience with ease and precision. Our platform provides powerful tools and actionable insights to help you achieve your goals effortlessly.
      </p>
    </div>
    
    <main class="w-[95%] mx-auto">
      <ul id="trade-cards" ref="tradeCardsWrapper" 
          class="list-none grid grid-cols-1 gap-0"
          :style="{ '--numtradeCards': tradeCards.length }">
        <li v-for="(tradeCard, index) in tradeCards" 
            :key="tradeCard.id" 
            :id="`trade_card_${index + 1}`" 
            class="trade-card sticky top-16 sm:top-20 lg:top-24 transform-gpu will-change-transform" 
            :style="{ 
              paddingTop: `calc(${index + 1} * var(--trade-card-top-offset))`,
              left: index === 0 ? '0' : 'auto'
            }">
          <div class="trade-card__content border border-[#2F2F2F] bg-gradient-to-r from-[#1D2125] to-[#1e1e1e] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div class="trade-card__text px-4 p-14 2xl:py-16 md:w-1/2  ml-16   ">
              <div class="flex items-center gap-4">
                <img :src="tradeCard.icon" alt="" class="w-12  ">
                <div class="text-left">
                  <h3 class="text-white text-lg sm:text-xl md:text-[18px] lg:text-[20px] font-cabinet-grotesk">{{ tradeCard.title }}</h3>
                  <p class="text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-[#F9F2F2] font-normal font-proxima">{{ tradeCard.subtitle }}</p>
                </div>
              </div>
              <hr class="h-px my-4 mb-6 bg-[#373636] border-0">
              <div class="text-left">
                <p class="text-white text-base sm:text-lg md:text-[16px] lg:text-[18px] leading-relaxed font-proxima">{{ tradeCard.description }}</p>
              </div>

              <div class="mt-6">
                <div v-for="(feat, featIndex) in tradeCard.features" 
                     :key="featIndex"
                     class="flex items-start md:items-center my-3 gap-3">
                  <img src="/src/assets/svg/cloud.svg" alt="" class="w-4 h-4 sm:w-5 sm:h-5 mt-1 md:mt-0">
                  <p class="text-white font-proxima text-base sm:text-lg md:text-[16px] lg:text-[18px] leading-relaxed text-left">
                    <template v-if="feat.includes('Integrate')">
                      <strong>Integrate</strong> with platform across your business
                    </template>
                    <template v-else-if="feat.includes('Discover')">
                      Discover actionable <strong>strategies </strong> 
                    </template>
                    <template v-else>
                      <strong>Get insights</strong> of what you achieved today
                    </template>
                  </p>
                </div>
              </div>
              
              <div class="flex justify-start">
                <button class="rounded-3xl border border-white py-2 px-6 max-w-48 w-full text-white font-proxima text-sm sm:text-base md:text-[15px] lg:text-[16px] mt-4 sm:mt-6 hover:bg-white hover:text-black transition-colors duration-300">
                  Sign Up
                </button>
              </div>
            </div>
            <div class="trade-card__image md:w-[60%] h-auto px-4 md:px-0">
              <img :src="tradeCard.image" 
                   :alt="tradeCard.title" 
                   class="w-full h-full object-contain mt-4 sm:mt-6 md:mt-10">
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scroll, animate } from 'motion';
import homecard1 from '/src/assets/img/homecard1.png'
import manualicon from '/src/assets/svg/manual.svg'
import homecard2 from '/src/assets/img/homecard2.png'

const tradeCardsWrapper = ref(null);
const tradeCards = ref([
  { 
    id: 1, 
    title: 'Manual Trade', 
    icon: manualicon, 
    subtitle:'Trade Your Way', 
    features: [
      'Integrate with platform across your business', 
      'Discover actionable strategies', 
      'Get insights of what you achieved today'
    ], 
    description: "Top-grade information makes a world of difference to a trader. That's why we work with the best institutional data partners on the world's most famous street, and far far beyond it.", 
    image: homecard1
  },
  { 
    id: 2, 
    title: 'Trade Card Two', 
    icon: manualicon, 
    subtitle:'Trade Your Way', 
    features: [
      'Integrate with platform across your business', 
      'Discover actionable strategies', 
      'Get insights of what you achieved today'
    ], 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    image: homecard2
  },
  { 
    id: 3, 
    title: 'Trade Card Three', 
    icon: manualicon, 
    subtitle:'Trade Your Way', 
    features: [
      'Integrate with platform across your business', 
      'Discover actionable strategies', 
      'Get insights of what you achieved today'
    ], 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    image: homecard1
  },
  { 
    id: 4, 
    title: 'Trade Card Four', 
    icon: manualicon, 
    subtitle:'Trade Your Way', 
    features: [
      'Integrate with platform across your business', 
      'Discover actionable strategies', 
      'Get insights of what you achieved today'
    ], 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    image: homecard1
  }
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
        opacity: [1, 1 - (0.2 * reverseIndex0)]
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

  resizeObserver = new ResizeObserver(() => {
    setupAnimation();
  });

  if (tradeCardsWrapper.value) {
    resizeObserver.observe(tradeCardsWrapper.value);
  }
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
@font-face {
  font-family: 'Proxima Nova';
  src: url('/path/to/proxima-nova.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/path/to/cabinet-grotesk.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

:root {
  --trade-card-height: 40vw;
  --trade-card-margin: 4vw;
  --trade-card-top-offset: 1.5em;
}

.font-proxima {
  font-family: 'Proxima Nova', sans-serif !important;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.font-cabinet-grotesk {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 700;
}

#trade-cards {
  grid-template-rows: repeat(var(--numtradeCards), var(--trade-card-height));
  gap: 8vw;
}

.trade-card__content {
  grid-template-areas: "text img";
}

@media (max-width: 768px) {
  :root {
    --trade-card-height: auto;
    --trade-card-top-offset: 1em;
  }

  #trade-cards {
    gap: 24vw;
  }

  .trade-card__content {
    grid-template-areas: 
      "text"
      "img";
  }

  .trade-card__image {
    height: auto;
    max-height: 400px;
  }

  .trade-card__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .trade-card__text {
    padding-right: 1rem;
  }
  
  .trade-card__image {
    padding-left: 1rem;
  }
}

@media (max-width: 640px) {
  :root {
    --trade-card-top-offset: 0.75em;
  }

  #trade-cards {
    gap: 16vw;
  }

  .trade-card__image {
    max-height: 300px;
  }
}
</style>

