

 <template>
  <div class="text-[#dfdfdf] text-center mt-16 lg:mt-32 mx-2 hidden md:block">
    <div class="text-center">
      <p class="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-extrabold mx-auto text-white leading-tight">
        You’re in Charge—Trade with Confidence
      </p>
      <p class="text-[#dfdfdf] mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-[16px] leading-relaxed w-[95%] max-w-6xl p-2 mx-auto mt-4 font-openSans">
        Want to control your financial future? Our platform gives you the insights, speed, and flexibility to trade on your terms and maximize your success.
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
          <div class="trade-card__content border-[#2F2F2F] bg-gradient-to-r from-[#1D2125] to-[#1e1e1e] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div class="trade-card__text 2xl:py-16 md:w-1/2 ml-4 p-4 pt-8  lg:p-10 flex flex-col justify-center ">
              <div class="flex items-center gap-4 ">
                <img :src="tradeCard.icon" alt="" class="w-12  ">
                <div class="text-left">
                  <h3 class="text-white text-lg sm:text-xl md:text-[18px] lg:text-[20px] font-cabinet-grotesk">{{ tradeCard.title }}</h3>
                  <p class="text-xs sm:text-sm md:text-[13px] lg:text-[14px] text-[#F9F2F2] font-normal font-proxima">{{ tradeCard.subtitle }}</p>
                </div>
              </div>
              <hr class="h-px my-4 mb-6 bg-[#373636] border-0">
              <div class="text-left">
                <p class="text-[#dfdfdf] text-base sm:text-lg md:text-[16px] lg:text-[16px] leading-relaxed font-openSans">{{ tradeCard.description }}</p>
              </div>

              <div class="mt-6">
                <div v-for="(feat, featIndex) in tradeCard.features" 
                     :key="featIndex"
                     class="flex gap-2 justify-start items-start my-3 max-h-20">
                  <!-- <img src="/src/assets/svg/cloud.svg" alt="" class="w-4 h-4 sm:w-5 sm:h-5 mt-1 md:mt-0"> -->

                <div class="w-[10%] lg:w-[5%] ">

                  <LottieComponent animationPath="/json/tick.json" />
                </div>
  
                  <p class="text-left font-openSans text-[16px] text-[#dfdfdf]">
                    
                      {{ feat }}
                    
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
import indicatoricon from '/src/assets/producticons/producticon (1).svg'
import signalicon from '/src/assets/producticons/producticon (5).svg'
import webhookicon from '/src/assets/producticons/producticon (3).svg'
import algotradingicon from '/src/assets/producticons/producticon (2).svg'
import screenericon from '/src/assets/producticons/producticon (6).svg'
import homecard2 from '/src/assets/img/homecard2.png'
import indicatorCard from '/src/assets/img/indicatorcard.png'
import algocard from '/src/assets/img/algocard.png'
import screenerCard from '/src/assets/img/screenercard.png'
import LottieComponent from '/src/home/utils/LottieComponent.vue'
import webhookcard from '/src/assets/img/webhookcard.webp'

const tradeCardsWrapper = ref(null);
const tradeCards = ref([
{ 
    id: 4, 
    title: 'Algo Trading', 
    icon: algotradingicon, 
    subtitle:'Automate strategies for smarter trading.', 
    features: [
      'Executes trades instantly.', 
      'Avoids emotional decisions with strict rules.', 
      'Reduces need for constant monitoring.',
      'Tests strategies on historical data.',
    ], 
    description: 'Algo trading uses predefined criteria, such as price, volume, timing, or other market indicators, to identify opportunities and execute trades faster and more efficiently.', 
    image: algocard
  },
  { 
    id: 1, 
    title: 'Manual Trade', 
    icon: manualicon, 
    subtitle:'Execute trades your way, confidently.', 
    features: [
      'Your Strategy, Your Rules – No bots, just your instincts and insights.', 
      'Fast Market Response – Stay ahead of trends and react instantly.', 
      'Skill & Experience Boost – The more you trade, the sharper you get.',
      'No Extra Costs – No fancy software or coding required.'
    ], 
    description: "Tired of relying on automated systems? Take control with Manual Trade, where you call the shots. Analyze trends, execute trades, and make decisions that fit your strategy.", 
    image: homecard1
  },
  { 
    id: 2, 
    title: 'Signals', 
    icon: signalicon, 
    subtitle:'Act fast with real-time expert signals.', 
    features: [
      'Offers precise, well-analyzed trade recommendations.', 
      'Provides timely updates for quick action.', 
      'Integrates with platforms for instant execution.',
      'Guides new traders in learning strategies.'
    ], 
    description: 'Signals are alerts or recommendations to buy or sell financial assets like stocks or forex. They provide precise entry and exit points to guide you. Signals can be automated or manual.', 
    image: homecard2
  },
  { 
    id: 3, 
    title: 'Webhooks', 
    icon: webhookicon, 
    subtitle:'Automate workflows with seamless integration.', 
    features: [
      'Connects platforms for smooth workflow.', 
      'Designs actions to specific strategies.', 
      'Reduces errors by automating tasks.',
      'Easily handles large-scale, high-frequency tasks.',
    ], 
    description: 'Webhook enables automated communication between two platforms in real-time. It works by sending data or triggering actions when specific events occur. ', 
    image: webhookcard
  },
  
  { 
    id: 5, 
    title: 'Screener', 
    icon: screenericon, 
    subtitle:'Discover trading opportunities quickly.', 
    features: [
      'Quickly finds assets meeting specific criteria.', 
      'Reduces the need for manual analysis.', 
      'Provides updated results as market conditions change.',
      'Scans across multiple markets and sectors.',
    ], 
    description: 'A screener filters stocks, options, or assets based on specific criteria like price, volume, or technical indicators, helping you identify opportunities more efficiently.', 
    image: screenerCard
  },
  { 
    id: 6, 
    title: 'Indicators', 
    icon: indicatoricon, 
    subtitle:'Trade Your Way', 
    features: [
      'Enables informed, data-driven decisions.', 
      'Identifies market trends and reversals.', 
      'Helps set stop-loss and manage risk.',
      'Removes emotional bias from decisions.'
    ], 
    description: 'Indicators are used to analyze market data like price and volume. It helps identify trends, momentum, volatility, and market conditions, aiding decision-making and price movement forecasting.', 
    image: indicatorCard
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

