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
    description: "Take your first steps with confidence! Paper trading lets you explore, practice, and grow without any fear. It's your safe space to experiment and refine your strategies, so when you're ready, you'll know exactly what to do.",
    buttonText: "Explore Paper Trading",
    animationPath: "/json/PaperTrading.json",
    imagePath: "/src/assets/img/algotrading (2).png",
  },
  {
    id: "multipleAccount",
    title: "Multiple Account Management",
    description: "Keep your trading life organized and in one place. With multiple accounts at your fingertips, you're always in control, staying on top of your goals and feeling empowered to manage your investments with ease.",
    animationPath: "/json/MultipleAccounts.json",
    imagePath: "/src/assets/img/algotrading (3).png",
  },
  {
    id: "demoAccount",
    title: "Demo Account",
    description: "Learn, grow, and explore without the pressure. Your demo account is there to help you practice and gain confidence, giving you the freedom to test and refine your strategies at your own pace.",
    animationPath: "/json/UI_07.json",
    imagePath: "/src/assets/img/algotrading (4).png",
  },
  {
    id: "createStrategies",
    title: "Create Strategies",
    description: "This is your journey, your path. Customize your strategies and make them your own—knowing that every decision is made with your goals and dreams in mind, giving you the power to shape your future.",
    animationPath: "/json/CreateStrategies.json",
    imagePath: "/src/assets/img/algotrading (5).png",
  },
  {
    id: "definedStrategies",
    title: "Predefined Strategies",
    description: "Start strong with strategies that have already been tested and proven. Feel the comfort of having a roadmap as you build your trading confidence—knowing you're walking a path of smart, informed decisions.",
    animationPath: "/json/PredefinedStrategies.json",
    imagePath: "/src/assets/img/algotrading (6).png",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Stay connected to your trading world with real-time notifications. Whether it's a moment to act or just an update, you'll always feel informed and in control, bringing peace of mind to every step you take.",
    animationPath: "/json/Notifications.json",
    imagePath: "/src/assets/img/algotrading (7).png",
  },
  {
    id: "support",
    title: "Constant Support",
    description: "You're never alone in this. No matter the challenge or victory, our constant support is here to guide you, celebrate with you, and help you stay on track, ensuring you always feel backed and empowered.",
    animationPath: "/json/ConstantSupport.json",
    imagePath: "/src/assets/img/algotrading (8).png",
  },
  {
    id: "setup",
    title: "One-Time Setup",
    description: "Set it up once, and then let the journey unfold. No need for constant tweaking—just smooth sailing as you focus on what truly matters: your growth and success.",
    animationPath: "/src/assets/img/algotrading (1).png",
    imagePath: "/src/assets/img/algotrading (1).png",
  },
];


const filteredFeatures = computed(() => {
  return features.filter(feature => feature.id === selectedFeature.value);
});

const onAnimationLoaded = () => {
  animationLoaded.value = true;
};

const buttonContainerRef = ref(null);

const scrollToActiveButton = () => {
  const activeButton = document.querySelector(`button[data-feature="${selectedFeature.value}"]`);
  if (activeButton && buttonContainerRef.value) {
    const container = buttonContainerRef.value;
    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (buttonRect.right > containerRect.right || buttonRect.left < containerRect.left) {
      container.scrollTo({
        left: activeButton.offsetLeft - container.clientWidth / 2 + activeButton.clientWidth / 2,
        behavior: 'smooth'
      });
    }
  }
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
  setTimeout(scrollToActiveButton, 50); // Small delay to ensure DOM update
});

onUnmounted(() => {
  clearInterval(cycleInterval);
});

watch(selectedFeature, () => {
  clearInterval(cycleInterval);
  cycleInterval = setInterval(cycleFeatures, 5000);
  setTimeout(scrollToActiveButton, 50); // Small delay to ensure DOM update
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
        Algo trading makes your journey smoother and more confident. With automation, precision, and personalized strategies, you can focus on what matters most—your success. No stress, just smart trading.
      </p>
    </div>

    <div class="my-24">
      <Transition name="fade" mode="out-in">
        <div :key="selectedFeature" class="grid grid-cols-1 lg:grid-cols-12 h-[70vh]">
          <div v-for="feature in filteredFeatures" :key="feature.id"
            class="col-span-12 lg:col-span-6 text-center flex items-center xl:text-left">
            <div>
              <h1 class="font-semibold text-white text-[27px] xl:text-[38px] mb-4">
                {{ feature.title }}
              </h1>
              <p class="font-openSans text-[14px] md:text-[16px] text-[#dfdfdf]">
                {{ feature.description }}
              </p>
            </div>
          </div>

          <div v-for="feature in filteredFeatures" :key="feature.id"
            class="col-span-12 lg:col-span-6 flex justify-center">
            <div class="w-[80%]">
              <img v-if="feature.imagePath" :src="feature.imagePath" alt="" class="" />
              <animation v-else :animationPath="feature.animationPath" />
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Buttons -->
    <div ref="buttonContainerRef" class="flex items-center justify-between space-x-3 overflow-x-auto w-full text-white no-scrollbar">
    <div v-for="feature in features" :key="feature.id" class="flex flex-col items-center">
      <button 
        @click="selectFeature(feature.id)" 
        :class="[
          'flex items-center border-2 rounded-xl min-w-max p-4 gap-4  relative ',
          selectedFeature === feature.id
            ? 'border-[#00B852] bg-[#00B852] border-b-4 bg-opacity-10'
            : 'border-gray-500 bg-transparent',
        ]"
        :data-feature="feature.id"
      >
       
        <p class="font-CabinetGrotesk text-nowrap font-bold text-[16px] relative z-10">
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
