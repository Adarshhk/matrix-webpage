<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cards = ref([
  { id: 1, top: "10%", left: "10%" },
  { id: 2, top: "35%", left: "8%" },
  { id: 3, top: "60%", left: "10%" },
  { id: 4, top: "30%", left: "30%" },
  // Add more card positions as needed
]);

const currentCardIndex = ref(0);

const toggleCardVisibility = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % cards.value.length;
};

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(toggleCardVisibility, 3000); // Change visibility every 3 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section class=" relative">
    <img
      src="/images/India.png"
      alt=""
      class="mt-8"
    />
    <div v-for="(card, index) in cards" :key="card.id" >
    <Transition name="card">
        <div
        v-if="index === currentCardIndex"
          class=" absolute bg-[#F3F8F9] rounded-sm w-[140px] px-2 py-2 space-y-1 shadow-lg sm:w-[160px] md:w-[200px] xl:px-4 2xl:w-[250px] xxl:space-y-2"
          :style="{ top: card.top, left: card.left }"
        >
          <img src="/images/svg/GmailIcon.svg" alt="" class="w-4 midmobiles:w-5 xl:w-7" />
          <p class=" text-black text-[7px] sm:text-[9px] md:text-[10px] 2xl:text-[13px]">
            Matrix Trading tech helped me invest with discipline via timely
            reminders and one tap payments.
          </p>
          <hr class="opacity-25" />
          <p class="font-CabinetGrotesk font-extrabold text-black text-[10px] md:text-[12px] 2xl:text-[15px]">
            Anirudh Mishra
          </p>
          <div class="absolute text-[#F3F8F9] left-16 top-[80px] sm:top-[90px] sm:left-[70px] md:top-[95px] xl:top-[108px] md:left-[90px] 2xl:top-[128px] 2xl:left-[115px] xxl:text-[20px]">&#x25BC;</div>
          <div class="absolute px-2 py-2 rounded-full bg-matrix-green left-16 top-[100px] md:top-[115px] sm:top-[110px] sm:left-[70px] xl:top-[130px] md:left-[90px] 2xl:top-[145px] 2xl:left-[115px] xxl:text-[20px]"></div>
        </div>
    </Transition>
  </div>
  </section>
</template>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
}
</style>
