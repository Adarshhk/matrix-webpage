<template>
  <div class="min-h-screen bg-gray-100 p-4 md:p-8">
    <div class="max-w-[966px] mx-auto">
      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg" :style="{ backgroundColor: containerColor }">
        <div class="px-8 py-16 flex flex-col items-center justify-between h-full relative">
          <div class="space-y-6 text-center w-full max-w-2xl">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
              Was this page helpful?
            </h2>
            <p class="text-lg md:text-xl font-openSans text-gray-600">
              Let us know how we did
            </p>
            <div class="flex justify-between items-center mb-8">
              <label v-for="(emoji, index) in emojis" :key="index" class="cursor-pointer group">
                <input type="radio" name="feedback" :id="index" :value="index" class="hidden" v-model="selectedEmoji"
                  @change="changeContainerColor(index)">
                <span class="text-5xl md:text-6xl transition-all duration-300 transform group-hover:scale-125"
                  :class="{ 'opacity-40 hover:opacity-100': selectedEmoji !== index, 'scale-125': selectedEmoji === index }">
                  {{ emoji }}
                </span>
              </label>
            </div>
            <div v-if="selectedEmoji !== null && !submitted" class="space-y-4">
              <p class="text-xl md:text-2xl font-semibold font-openSans" :style="{ color: textColor }">
                {{ feedbackMessages[selectedEmoji] }}
              </p>
              <button @click="submitFeedback"
                class="bg-white text-xl px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-opacity w-full md:w-auto"
                :style="{ color: containerColor }">
                Submit Feedback
              </button>
            </div>
            <div v-if="submitted" class="mt-4 text-center">
              <p class="text-2xl md:text-3xl font-bold " :style="{ color: textColor }">
                Thanks for your Feedback!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emojis = ['😞', '🙁', '😐', '😁', '😍']
const selectedEmoji = ref(null)
const containerColor = ref('#ffffff') // Initial container color
const submitted = ref(false)

const feedbackMessages = [
  "We're sorry to hear that. How can we improve?",
  "We'll work on making it better.",
  "Thanks for your feedback.",
  "Great! We're glad you found it helpful.",
  "Awesome! We're thrilled you loved it!"
]

const colors = ['#3498DB', '#E67E22', '#ead621', '#ea2175', '#B2F5EA']

const changeContainerColor = (index) => {
  containerColor.value = colors[index]
}

const submitFeedback = () => {
  if (selectedEmoji.value !== null) {
    // Here you would typically send the feedback to a server
    
    submitted.value = true
  }
}

const textColor = computed(() => {
  // Use white text for dark backgrounds, and dark text for light backgrounds
  return ['#3498DB', '#E67E22', '#ea2175'].includes(containerColor.value) ? '#ffffff' : '#2C3E50'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

</style>