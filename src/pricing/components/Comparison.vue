<template>
  <div class=" text-white mt-28">
    <div class=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <!-- Left Content -->
      <div class="flex flex-col items-center md:items-start justify-center p-4 ">
        <h1 class="text-2xl sm:text-4xl font-bold mb-6 md:mb-10 text-center md:text-left leading-tight">
          Learn, Trade, and Grow with Expert Insights
        </h1>
        <p class="text-base md:text-lg mb-8 text-center md:text-left">
          Explore our curated videos for trading strategies, market
          trends, and tips to maximize your success. Watch and
          empower your journey.
        </p>
        <button class="bg-white rounded-md w-44 md:w-60 font-bold text-green-600 py-3 hover:bg-opacity-90 transition-all duration-300">
          Get Started Now
        </button>
      </div>

      <!-- Right Content - Video Grid -->
      <div class="relative h-[500px] overflow-hidden">
        <!-- Top Gradient -->
        <div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#161a1e] via-[#161a1e]/80 to-transparent z-10"></div>
        
        <!-- Single Column Marquee for Mobile -->
        <div class="animate-marquee-upward flex flex-col gap-4 items-center md:items-start">
          <div v-for="(video, index) in duplicatedVideos" :key="`${video.id}-${index}`"
            class="relative group cursor-pointer w-[300px] rounded-lg overflow-hidden"
            @click="openVideo(video.id)">
            <img :src="video.thumbnail" :alt="video.title"
              class="w-full h-[169px] object-cover transition-transform duration-300 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayIcon class="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <!-- Second Column Marquee for Desktop Only -->
        <div class="hidden xl:flex animate-marquee-downward flex-col gap-4 absolute top-0 left-[320px]">
          <div v-for="(video, index) in duplicatedVideos" :key="`${video.id}-${index}-reverse`"
            class="relative group cursor-pointer w-[300px] rounded-lg overflow-hidden"
            @click="openVideo(video.id)">
            <img :src="video.thumbnail" :alt="video.title"
              class="w-full h-[169px] object-cover transition-transform duration-300 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayIcon class="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <!-- Bottom Gradient -->
        <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#161a1e] via-[#161a1e]/80 to-transparent z-10"></div>
      </div>
    </div>

    <!-- Video Modal -->
    <div v-if="selectedVideo"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      @click="selectedVideo = null">
      <div class="w-full max-w-3xl mx-4">
        <div class="relative pt-[56.25%]">
          <iframe :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`"
            class="absolute inset-0 w-full h-full rounded-lg"
            allowfullscreen
            allow="autoplay; encrypted-media">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Play as PlayIcon } from 'lucide-vue-next'

const selectedVideo = ref(null)

const videos = [
  {
    id: 'CGayq-C3_Jg',
    thumbnail: `https://img.youtube.com/vi/CGayq-C3_Jg/maxresdefault.jpg`
  },
  {
    id: 'SULKI0kP6ds',
    thumbnail: `https://img.youtube.com/vi/SULKI0kP6ds/maxresdefault.jpg`
  },
  {
    id: 'iVndJKzL1nE',
    thumbnail: `https://img.youtube.com/vi/iVndJKzL1nE/maxresdefault.jpg`
  },
  {
    id: 'suhEIUapSJQ',
    thumbnail: `https://img.youtube.com/vi/suhEIUapSJQ/maxresdefault.jpg`
  },
  {
    id: 'N08LnQ77hGs',
    thumbnail: `https://img.youtube.com/vi/N08LnQ77hGs/maxresdefault.jpg`
  }
]

const duplicatedVideos = computed(() => [...videos, ...videos])

const openVideo = (videoId) => {
  selectedVideo.value = videoId
}
</script>

<style>
@keyframes marquee-upward {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

@keyframes marquee-downward {
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-marquee-upward {
  animation: marquee-upward 30s linear infinite;
}

.animate-marquee-downward {
  animation: marquee-downward 30s linear infinite;
}
</style>