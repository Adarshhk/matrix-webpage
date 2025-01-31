<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const video = ref(null);
const isScrolled = ref(false);
const isMuted = ref(true);
const isFullscreen = ref(false);
const showVid = ref(true);

const toggleMute = () => {
  if (video.value) {
    video.value.muted = !video.value.muted;
    isMuted.value = video.value.muted;
  }
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    video.value.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
};

const closeVideo = () => {
  showVid.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement;
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('fullscreenchange', () => {});
});


</script>

<template>
  <div v-if="showVid" class="fixed bottom-4 left-4 z-50 group">
    <video
      ref="video"
      :class="[
        'transition-all duration-300 ease-in-out rounded-lg',
        isScrolled ? 'h-[150px]' : 'h-[300px]',
        'group-hover:h-[300px]'
      ]"
      src="/src/assets/video/matrixad.mp4"
      autoplay
      loop
      muted
      playsinline
    >
      Your browser does not support the video tag.
    </video>
    
    <!-- Custom controls that appear on hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 flex flex-col justify-between">
      <!-- Close button -->
      <div class="self-end p-2">
        <button @click="closeVideo" class="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Fullscreen and Mute buttons -->
      <div class="flex justify-start p-2 space-x-2">
        <button @click="toggleFullscreen" class="text-white hover:text-gray-300">
          <svg v-if="!isFullscreen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18h12M6 6h12" />
          </svg>
        </button>
        <button @click="toggleMute" class="text-white hover:text-gray-300">
          <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>