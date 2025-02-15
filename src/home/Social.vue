<script setup>
import { ref, onMounted, nextTick, computed } from 'vue';


const showCelebrate = ref(false);
const lines = [
  "A Heartfelt Thank You to the Matrix 3.0 Team!",
  "As we celebrate the launch of Matrix 3.0, we want to take a moment to express our deepest gratitude to everyone who has been part of this journey.",
  "For the past six months, each one of you has put in immense effort, creativity, and dedication to bring this vision to life. From brainstorming ideas to executing the most innovative web solutions, your hard work has shaped Matrix 3.0 into something truly exceptional.",
  "This milestone is not just about technology; it's about the teamwork, late nights, problem-solving, and passion that made it all possible. Without your relentless pursuit of excellence, this achievement would not have been possible.",
  "Thank you for believing in this project, for pushing boundaries, and for making Matrix 3.0 a reality. Here's to innovation, collaboration, and many more successes ahead!",
  "Together, we build the future! 🚀"
];

const visibleLines = ref([]);
const currentLineIndex = ref(0);
const currentText = ref('');
const containerRef = ref(null);

const typeNextLetter = () => {
  if (currentLineIndex.value < lines.length) {
    const currentLine = lines[currentLineIndex.value];
    if (currentText.value.length < currentLine.length) {
      currentText.value += currentLine[currentText.value.length];
    } else {
      visibleLines.value.push(currentText.value);
      currentLineIndex.value++;
      currentText.value = '';
    //   scrollToBottom();
    }
  }
};
const button = computed(() => {
    if (visibleLines.value.length === lines.length) { // Use '===' for comparison
        return true;
    } 
    return false;
});

const scrollToBottom = () => {
  nextTick(() => {
    if (containerRef.value) {
      containerRef.value.scrollTop = containerRef.value.scrollHeight;
    }
  });
};

onMounted(() => {
  const interval = setInterval(() => {
    typeNextLetter();
    if (currentLineIndex.value === lines.length) {
      clearInterval(interval);
    }
  }, 20); // Type a new letter every 50 milliseconds
});
</script>

<template>
    
        <div v-if="showCelebrate" class="matrix-thank-you" ref="containerRef">
    <div class="content">
      <div v-for="(line, index) in visibleLines" :key="index" class="line">
        {{ line }}
      </div>
      <div class="line current-line">{{ currentText }}<span class="cursor">|</span></div>
    </div>
    <button :class="{'opacity-100' : button , 'opacity-0' : !button}" class="font-openSans bg-[#00B852] px-4 py-2 max-w-48 mx-auto  rounded-xl" @click="showCelebrate=false">Let's Celebrate</button>
  </div>
  
</template>

<style scoped>
.matrix-thank-you {
  background-color: black;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;

  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: fixed; 
  inset: 0;
  z-index: 100;
  width: 100vw;

}

.content {
  margin: auto 0;
}

.line {
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.5;
}

.current-line {
  display: inline-block;
}

.cursor {
  display: inline-block;
  width: 2px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
</style>