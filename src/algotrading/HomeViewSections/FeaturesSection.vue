<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import animation from "../animation.vue";
import LottieComponent from "../../home/utils/LottieComponent.vue";

const selectedFeature = ref("paperTrading");
const animationLoaded = ref(false);

const features = [
  {
    id: "paperTrading",
    title: "Dive into Paper Trading",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    buttonText: "Explore Paper Trading",
    animationPath: "/json/PaperTrading.json",
    imagePath: "/src/assets/img/algotrading (1).png",
  },
  {
    id: "multipleAccount",
    title: "Multiple Account Management",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/MultipleAccounts.json",
    imagePath: "/src/assets/img/algotrading (2).png",
  },
  {
    id: "demoAccount",
    title: "Demo Account",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/UI_07.json",
    imagePath: "/src/assets/img/algotrading (3).png",
  },
  {
    id: "createStrategies",
    title: "Create Strategies",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/CreateStrategies.json",
    imagePath: "/src/assets/img/algotrading (4).png",
  },
  {
    id: "definedStrategies",
    title: "Pre Defined Strategies",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/PredefinedStrategies.json",
    imagePath: "/src/assets/img/algotrading (5).png",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/Notifications.json",
    imagePath: "/src/assets/img/algotrading (6).png",
  },
  {
    id: "support",
    title: "Constant Support",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/json/ConstantSupport.json",
    imagePath: "/src/assets/img/algotrading (7).png",
  },
  {
    id: "setup",
    title: "One Time Setup",
    description: "Paper trading is like a practice round for investing in the stock market. It lets you trade stocks with fake money so you can learn the ropes without risking your own cash. It's a great way to try out different strategies and get comfortable with the mechanics of buying and selling.",
    animationPath: "/src/assets/img/algotrading (8).png",
    imagePath: "/src/assets/img/algotrading (8).png",
  },
];

const filteredFeatures = computed(() => {
  return features.filter(feature => feature.id === selectedFeature.value);
});

const onAnimationLoaded = () => {
  animationLoaded.value = true;
};

const selectFeature = (feature) => {
  selectedFeature.value = feature;
};

const simulateAnimationLoading = () => {
  setTimeout(() => {
    onAnimationLoaded();
  }, 100); // Simulated delay
};

const cycleFeatures = () => {
  const currentIndex = features.findIndex(f => f.id === selectedFeature.value);
  const nextIndex = (currentIndex + 1) % features.length;
  selectedFeature.value = features[nextIndex].id;
};

let cycleInterval;

onMounted(() => {
  simulateAnimationLoading();
  cycleInterval = setInterval(cycleFeatures, 5000); // Cycle every 5 seconds
});

onUnmounted(() => {
  clearInterval(cycleInterval);
});

watch(selectedFeature, () => {
  clearInterval(cycleInterval);
  cycleInterval = setInterval(cycleFeatures, 5000);
});
</script>

<template>
  <section class="">
    <div class="text-center mx-auto w-full space-y-4 xl:w-[60%]">
      <div class="flex items-center justify-center">
        <div class="w-[10%]">
          <LottieComponent animationPath="/json/money.json" />
        </div>
        <h1 class="font-semibold text-white text-[27x] xl:text-[38px]">
          What are the <span class="text-matrix-green">features?</span>
        </h1>
      </div>
      <p class="font-openSans text-[#dfdfdf] text-[18px]">
        Empower your trading journey with confidence. Our platform equips you
        with insights and tools for financial triumph.
      </p>
    </div>

    <div class="my-24">
      <Transition name="fade" mode="out-in">
        <div :key="selectedFeature" class="grid grid-cols-1 lg:grid-cols-12 h-[70vh]">
          <div v-for="feature in filteredFeatures" :key="feature.id" class="col-span-12 lg:col-span-6 text-center flex items-center xl:text-left">
            <div>
              <h1 class="font-semibold text-white text-[27px] xl:text-[38px] mb-4">
                {{ feature.title }}
              </h1>
              <p class="font-openSans text-[14px] md:text-[16px] text-[#dfdfdf]">
                {{ feature.description }}
              </p>
            </div>
          </div>

          <div v-for="feature in filteredFeatures" :key="feature.id" class="col-span-12 lg:col-span-6 flex justify-center">
            <div class="w-[80%]">
              <img v-if="feature.imagePath" :src="feature.imagePath" alt="" class="" />
              <animation v-else :animationPath="feature.animationPath" />
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Buttons -->
    <div class="flex items-center justify-between space-x-3 overflow-x-auto w-full text-white no-scrollbar">
      <div v-for="feature in features" :key="feature.id" class="flex flex-col items-center">
        <button 
          @click="selectFeature(feature.id)" 
          :class="[
            'flex items-center border-2 rounded-xl min-w-56 px-2 py-2 relative ',
            selectedFeature === feature.id
              ? 'border-[#00B852] bg-[#00B852] border-b-4 bg-opacity-10'
              : 'border-gray-500 bg-transparent',
          ]"
        >
          <img src="/images/svg/PaperTrading.svg" alt="" />
          <p class="font-CabinetGrotesk font-bold text-[16px] relative z-10">
            {{ feature.title }}
          </p>
          <div 
            v-if="selectedFeature === feature.id" 
            class="absolute left-0 top-0 bottom-0 bg-[#00B852] opacity-25 loading-animation"
          ></div>
        </button>
        <div v-if="selectedFeature === feature.id" class="trapezoid"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trapezoid {
  border-top: 6px solid #00b852;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 90px;
}

.animation-placeholder {
  width: 100%;
  height: 650px;
  background-color: transparent;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.loading-animation {
  animation: loading 5s linear;
}

@keyframes loading {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

