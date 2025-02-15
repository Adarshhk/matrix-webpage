<template>
  <div class="mx-auto w-[95%] mt-24 lg:mt-32 mb-24">
    <div class="text-center mb-16 lg:mb-24">
      <h2 class="text-[27px] lg:text-[38px] font-extrabold mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <p class="text-white mt-4 font-openSans text-md ">
        Find answers to common questions and get the clarity you need to make the most of our platform.
      </p>
    </div>

    <div class="space-y-4 mx-auto text-[18px]" v-if="!routes.some(r => r == route.path)">
      <div v-for="(faq, index) in faqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <!-- signals faq -->
    <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/signals'">
      <div v-for="(faq, index) in signalsFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>

    <!-- indicator faq -->
    <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/indicator'">
      <div v-for="(faq, index) in indicatorFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>

     <!-- screener faq -->
     <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/screener'">
      <div v-for="(faq, index) in screenerFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>

     <!-- manual trade faq -->
     <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/manualtrade'">
      <div v-for="(faq, index) in manualFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>

     <!-- algo trade faq -->
     <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/algo-trading'">
      <div v-for="(faq, index) in algoFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>

     <!-- webhook faq -->
     <div class="space-y-4 mx-auto text-[18px]" v-if="route.path == '/webhook'">
      <div v-for="(faq, index) in webhookFaqs" :key="index" class="border-b border-[#FFFFFF11]">
        <button @click="faq.isOpen = !faq.isOpen"
          class=" rounded-sm w-full lg:px-6 py-4 text-left flex justify-between items-center  transition-colors duration-200 ">
          <span class="font-medium text-white text-[19px]">{{ faq.question }}</span>
          <img src="/src/assets/svg/faqcross.svg" :class="[
            'w-10 h-10 transition-transform duration-200',
            { 'rotate-45': faq.isOpen }
          ]" />
        </button>
        <div v-show="faq.isOpen" class="py-4 px-6 pb-4 text-[#dfdfdf]">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const routes = ['/indicators' , '/manualtrade' , '/screener' , '/algo-trading' , '/signals' , '/screener']

const faqs = ref([
  {
    question: 'Do I need trading experience to use algo trading?',
    answer: 'No, algo trading platforms are designed for both beginners and experienced traders. They automate strategies, making it user-friendly for everyone.',
    isOpen: false
  },
  {
    question: 'Can I test the algo without risking real money?',
    answer: 'Yes, we offer a paper trading feature to simulate trades without risking actual funds.',
    isOpen: false
  },
  {
    question: 'How much can I earn with algo trading?',
    answer: 'Earnings depend on market conditions, the strategy used, and investment size. Algo trading optimizes opportunities but doesn’t guarantee profits.',
    isOpen: false
  },
  {
    question: 'Can I customize my trading strategies in algo trading?',
    answer: 'Yes, our platform allows you to create, modify, and automate your own trading strategies to suit your goals.',
    isOpen: false
  },
  {
    question: 'Is algo trading better than manual trading?',
    answer: 'Algo trading removes emotional bias, improves execution speed, and is more efficient than manual trading for most traders.',
    isOpen: false
  }
])

const indicatorFaqs = ref([
  {
    question: 'What are trading indicators?',
    answer: 'Trading indicators are mathematical calculations based on price, volume, or open interest of a security. They help traders analyze market trends and make informed decisions.',
    isOpen: false
  },
  {
    question: 'What types of indicators do you offer?',
    answer: 'We offer multiple types of indicators, including trend-following, momentum, volatility-based, and volume-based indicators.',
    isOpen: false
  },
  {
    question: 'Can I use these indicators for any market?',
    answer: 'No, our indicators are specifically designed for the Indian stock market and work only within it.',
    isOpen: false
  },
  {
    question: 'How do I access these indicators?',
    answer: 'Once you purchase an indicator, you will get access to it on your Trading View account.',
    isOpen: false
  },
  {
    question: 'Can I modify the indicator settings?',
    answer: 'Yes, you can adjust the settings according to your trading preferences. However, you cannot customize the core logic of the indicator.',
    isOpen: false
  },
  {
    question: 'Do I need a paid TradingView plan to use your indicators?',
    answer: 'If you are using only 2-3 indicators, the free TradingView plan is sufficient. For more indicators, a Pro or higher plan is recommended.',
    isOpen: false
  },
  {
    question: 'Do you provide support for setting up the indicators?',
    answer: 'Yes, we provide complete guidance on how to add and configure the indicators on TradingView. We also offer tutorial videos to help you understand the settings and usage effectively. You can watch our step-by-step guide on YouTube here: [Your YouTube Link]',
    isOpen: false
  },
  {
    question: 'What are the payment options available for indicators?',
    answer: 'We offer two payment options: Yearly subscription and Lifetime access.',
    isOpen: false
  },
  {
    question: 'What if I face issues with my indicator?',
    answer: 'If you face any technical issues, you can contact our support team, and we will assist you in resolving them.',
    isOpen: false
  },
  {
    question: 'Are these indicators suitable for beginners?',
    answer: 'Yes! Our indicators are designed for both beginners and experienced traders. Plus, we provide tutorial videos to help you understand them easily.',
    isOpen: false
  }
]);

const webhookFaqs = ref([
  {
    question: 'What is a webhook, and how does it work?',
    answer: 'A webhook is an automated system that sends real-time data to a specified URL whenever a specific event occurs. Unlike API requests, which require manual data fetching, webhooks automatically push data as soon as an event is triggered. They work by sending an HTTP request (usually a POST request) to a predefined URL, containing relevant data in JSON or other formats.',
    isOpen: false
  },
  {
    question: 'Can I automate any TradingView strategy using the webhook?',
    answer: 'Yes, you can automate any TradingView strategy by integrating the provided JSON code with the webhook URL in TradingView’s alerts section. Once set up, your trades will execute automatically without manual intervention.',
    isOpen: false
  },
  {
    question: 'Can I use my own strategy with the webhook?',
    answer: 'Yes, you can automate any strategy using our webhook system.',
    isOpen: false
  },
  {
    question: 'How can I automate my trading strategy using the webhook?',
    answer: 'You need to get a webhook URL and JSON code from us, which you can integrate into your TradingView alerts.',
    isOpen: false
  },
  {
    question: 'Where can I check my executed trades?',
    answer: 'All executed trades are visible in your personal dashboard on Matrix Trading Tech.',
    isOpen: false
  },
  {
    question: 'Is there any coding knowledge required to use the webhook?',
    answer: 'No, you just need to copy-paste the provided webhook URL and JSON code into TradingView alerts.',
    isOpen: false
  },
  {
    question: 'Do I need to check manually for trades executed by webhooks?',
    answer: 'No, you don’t have to check manually. Your personal dashboard will show you all the trades placed automatically via webhooks. You will have complete transparency on which trades were triggered by your system.',
    isOpen: false
  },
  {
    question: 'How do I get real-time updates for webhook-based trades?',
    answer: 'You can set up real-time notifications on your personal dashboard. Whenever a trade is executed by a webhook, you will receive instant alerts via email or app notifications.',
    isOpen: false
  },
  {
    question: 'What happens if my internet disconnects while using the webhook?',
    answer: 'Since the webhook operates on cloud-based execution, trades will continue without disruption.',
    isOpen: false
  },
  {
    question: 'Can I use multiple strategies with one webhook URL?',
    answer: 'Yes, but you will need separate JSON code configurations for different strategies.',
    isOpen: false
  },
  {
    question: 'Does the webhook support multiple brokers?',
    answer: 'Yes, you can integrate the webhook with multiple supported brokers in the Indian market.',
    isOpen: false
  }
]);

const signalsFaqs = ref([
  {
    question: 'What are trading signals?',
    answer: 'Trading signals are buy/sell recommendations generated by our SEBI-registered analysts based on market analysis. They include entry, stop-loss, and target levels.',
    isOpen: false
  },
  {
    question: 'How are your signals generated?',
    answer: 'Our signals are generated through a combination of technical analysis, fundamental analysis, and market trends, reviewed by SEBI-registered analysts.',
    isOpen: false
  },
  {
    question: 'Which segments are covered in your signals service?',
    answer: 'We provide signals for equity, futures & options, commodities, and stocks.',
    isOpen: false
  },
  {
    question: 'Are the signals suitable for beginners?',
    answer: 'Yes, our signals are structured to help both beginners and experienced traders.',
    isOpen: false
  },
  {
    question: 'How many signals do you provide per day?',
    answer: 'The number of signals depends on market conditions, but we aim to provide high-quality trade opportunities rather than a large quantity of trades.',
    isOpen: false
  },
  {
    question: 'Do I need a specific broker to use your signals?',
    answer: 'No, you can use any broker of your choice, as our signals can be manually executed or automated through our webhook.',
    isOpen: false
  },
  {
    question: 'Can I backtest your signals before trading live?',
    answer: 'We provide historical performance reports that allow you to review past signals and their outcomes.',
    isOpen: false
  },
  {
    question: 'Do you provide stop-loss and target levels in the signals?',
    answer: 'Yes, every signal includes clearly defined entry price, stop-loss, and multiple target levels.',
    isOpen: false
  },
  {
    question: 'Are your signals based on news or technical analysis?',
    answer: 'Our signals are primarily based on technical and fundamental analysis, but we also consider major news events that could impact the market.',
    isOpen: false
  },
  {
    question: 'Can I customize signals based on my trading preferences?',
    answer: 'No, our signals follow a structured strategy, but you can choose which signals to follow based on your risk appetite.',
    isOpen: false
  },
  {
    question: 'What is the minimum capital required to use your signals?',
    answer: 'The capital requirement depends on the segment you are trading in. We provide guidance based on different trading strategies.',
    isOpen: false
  }
]);

const algoFaqs = ref([
  {
    question: 'What is Algo Trading, and do I need any technical knowledge or a running system to use it?',
    answer: 'Algo trading automates your trades, eliminating emotional decisions and ensuring fast execution with predefined strategies. Our platform is designed for traders of all levels, so no coding knowledge is required—simply configure your strategy, and the system will handle execution. Plus, since our algo trading system is cloud-based, it runs independently without needing your system to be on.',
    isOpen: false
  },
  {
    question: 'Do I need to use a particular broker for your algo trading platform?',
    answer: 'Our platform is compatible with multiple SEBI-registered brokers. You can check the list of supported brokers in our Broker Section using the link below. ⬇️',
    isOpen: false
  },
  {
    question: 'Why should I choose Matrix Trading Tech’s Algo Trading platform?',
    answer: 'Our platform is SEBI-registered, fully automated, and built for fast execution, risk management, and profitability in the Indian stock market.',
    isOpen: false
  },
  {
    question: 'Is algo trading suitable for beginners?',
    answer: 'Yes, even if you have no experience, our ready-made strategies and easy setup make algo trading accessible.',
    isOpen: false
  },
  {
    question: 'What are the plans/pricing for algo trading?',
    answer: 'We offer quarterly and yearly subscription plans with transparent pricing. For detailed pricing information, please visit our Pricing Section using the link below. ⬇️',
    isOpen: false
  },
  {
    question: 'Can I get customer support if I face issues?',
    answer: 'Yes, we provide dedicated support via WhatsApp, email, and phone.',
    isOpen: false
  },
  {
    question: 'Is there any free demo available?',
    answer: 'Yes, we offer a 3-day free demo, where you can test our strategies without any charges. This trial runs on virtual trading, meaning your real funds are not used, allowing you to explore our algo trading platform risk-free.',
    isOpen: false
  },
  {
    question: 'How quickly are trades executed?',
    answer: 'Our system executes trades in milliseconds, ensuring minimal slippage and maximum accuracy.',
    isOpen: false
  },
  {
    question: 'Can I backtest my strategy before live trading?',
    answer: 'Yes, our platform provides backtesting tools with access to historical data, which is periodically updated for all strategies. This allows you to analyze past market performance before going live.',
    isOpen: false
  },
  {
    question: 'Can algo trading help me reduce trading losses?',
    answer: 'Yes, by removing emotional trading and following a disciplined approach with stop-loss and risk management.',
    isOpen: false
  },
  {
    question: 'Is there a minimum margin required to start trading?',
    answer: 'Yes, minimum margin required to start trading is 15k-20k for 1 lot.',
    isOpen: false
  },
  {
    question: 'What is the difference between live trade and paper trade?',
    answer: 'Paper trading involves simulating trading activities using virtual money instead of real money. It allows traders to practice and refine their strategies without any financial risk. Live trading involves buying and selling financial securities in real markets using actual money. Trades are executed in real-time, and profits or losses are realized.',
    isOpen: false
  },
  {
    question: 'How can I link my broker account to your platform?',
    answer: 'You can link your brokerage account through our platform’s integration settings. Simply follow the step-by-step instructions provided in our tutorial video to authorize and connect your account seamlessly.',
    isOpen: false
  },
  {
    question: 'Is algo trading suitable for full-time traders as well as working professionals?',
    answer: 'Yes, both active traders and busy professionals can benefit since the system trades automatically without constant monitoring.',
    isOpen: false
  },
  {
    question: 'Can I switch between different subscription plans?',
    answer: 'Yes, you can upgrade or change your plan as per your trading needs.',
    isOpen: false
  }
]);

const screenerFaqs = ref([
  {
    question: 'What is Matrix Screener, and how does it help in trading?',
    answer: 'Screener is an advanced stock screener that helps traders filter stocks based on technical and fundamental conditions. It provides real-time scanning, alerts, and custom screeners for better trade decisions.',
    isOpen: false
  },
  {
    question: 'What do you offer in your Screener product?',
    answer: 'We provide ready-to-use screeners designed for intraday, swing trading, and positional trading. These screeners are built using advanced filters to identify profitable trading opportunities.',
    isOpen: false
  },
  {
    question: 'How do I get access to your screeners?',
    answer: 'Once you purchase any of our premium plans, you will get free access to all our screeners instantly.',
    isOpen: false
  },
  {
    question: 'Are your Matrix screeners real-time?',
    answer: 'Yes, our screeners update in real-time as per screeners scanning mechanism, helping you get quick trade signals.',
    isOpen: false
  },
  {
    question: 'How do I use your Matrix screeners?',
    answer: 'After purchasing any of our premium plans, simply log in to your Matrix dashboard, click on the Screeners section, and filter stocks based on the strategy.',
    isOpen: false
  },
  {
    question: 'What type of screeners do you offer?',
    answer: 'We provide screeners for Intraday trading (Breakouts, Volume spikes, Reversal setups), Swing trading (Trend-based stock picking, RSI/MACD strategies), and Positional trading (Long-term trend identification, stock accumulation zones).',
    isOpen: false
  },
  {
    question: 'Can I request a customized screener?',
    answer: 'Yes! If you have specific conditions or a trading strategy, we can build a custom screener for you.',
    isOpen: false
  },
  {
    question: 'How can I make the most of Matrix screeners?',
    answer: 'Combine them with proper risk management, use them alongside technical indicators for confirmation, and monitor real-time alerts for quick trading actions.',
    isOpen: false
  }
]);

const manualFaqs = ref([
  {
    question: 'What is manual trading?',
    answer: 'Manual trading is the process where a trader manually analyzes the market and executes buy/sell orders without using automation or algorithms.',
    isOpen: false
  },
  {
    question: 'How does manual trading work on Matrix Trading Tech?',
    answer: 'With our platform, traders can analyze the market, select their preferred stocks or instruments, and place trades manually through our interface.',
    isOpen: false
  },
  {
    question: 'What are the benefits of manual trading?',
    answer: 'Full control over trade execution, Ability to adapt to changing market conditions, No dependency on algorithms or automation.',
    isOpen: false
  },
  {
    question: 'Is manual trading better than algo trading?',
    answer: 'It depends on your trading style. Manual trading gives you more control, while algo trading automates strategies for faster execution.',
    isOpen: false
  },
  {
    question: 'What markets can I trade manually on Matrix Trading Tech?',
    answer: 'You can trade manually in equity, futures & options, commodities, and stocks in the Indian market.',
    isOpen: false
  },
  {
    question: 'Is manual trading suitable for beginners?',
    answer: 'Yes, beginners can trade manually, but it requires market knowledge and experience. We provide indicators and expert insights to assist traders.',
    isOpen: false
  },
  {
    question: 'Can I manually place trades directly from Matrix Trading Tech’s dashboard?',
    answer: 'Yes, our platform allows you to analyze, select, and execute trades manually through your connected broker.',
    isOpen: false
  },
  {
    question: 'What is the minimum capital required for manual trading?',
    answer: 'There is no fixed minimum capital. It depends on the asset you trade, your risk management, and brokerage margin requirements.',
    isOpen: false
  },
  {
    question: 'How do I track my manual trades?',
    answer: 'All executed manual trades can be viewed in your broker’s terminal as well as in the Matrix Trading Tech dashboard.',
    isOpen: false
  },
  {
    question: 'What risk management tools are available for manual trading?',
    answer: 'We provide tools like stop-loss, trailing stop-loss, risk-reward calculators, and real-time market alerts to help manage risk.',
    isOpen: false
  }
]);



const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>