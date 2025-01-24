<template>
    <div class=" text-[#dfdfdf] mt-28">
        <div class=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <!-- Left Content -->
            <div class="flex flex-col items-center md:items-start justify-center p-4 ">
                <h1 class="text-2xl sm:text-4xl font-bold mb-6 md:mb-10 text-center md:text-left leading-tight">
                    Learn, Trade, and Grow with Expert Insights
                </h1>
                <p class="text-[16px] mb-8 text-center md:text-left font-openSans ">
                    Explore our curated videos for trading strategies, market
                    trends, and tips to maximize your success. Watch and
                    empower your journey.
                </p>
                <button
                    class="btn btn-anim text-[#F3F8F9] text-sm w-[95%] py-2 rounded-full bg-[#00B852] max-w-48">
                    <div class="content vertical flex justify-center">
                        <div class="text font-semibold text-base font-openSans">Get Started</div>
                        <div class="hover-text font-semibold  text-base font-openSans">Get Started</div>
                    </div>
                </button>
            </div>

            <!-- Right Content - Video Grid -->
            <div class="relative h-[500px] overflow-hidden">
                <!-- Top Gradient -->
                <div
                    class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#161a1e] via-[#161a1e]/80 to-transparent z-10">
                </div>

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
                <div
                    class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#161a1e] via-[#161a1e]/80 to-transparent z-10">
                </div>
            </div>
        </div>

        <!-- Video Modal -->
        <div v-if="selectedVideo" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            @click="selectedVideo = null">
            <div class="w-full max-w-3xl mx-4">
                <div class="relative pt-[56.25%]">
                    <iframe :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`"
                        class="absolute inset-0 w-full h-full rounded-lg" allowfullscreen
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
        id: 'vzkyJsfPUAs',
        thumbnail: `https://img.youtube.com/vi/vzkyJsfPUAs/maxresdefault.jpg`
    },
    {
        id: 'BWTgEYgi3B8',
        thumbnail: `https://img.youtube.com/vi/BWTgEYgi3B8/maxresdefault.jpg`
    },
    {
        id: 'VTC500Xa_6U',
        thumbnail: `https://img.youtube.com/vi/VTC500Xa_6U/maxresdefault.jpg`
    },
    {
        id: '86B9E9Wnfbw',
        thumbnail: `https://img.youtube.com/vi/86B9E9Wnfbw/maxresdefault.jpg`
    },
    {
        id: 'kvG0sek1iss',
        thumbnail: `https://img.youtube.com/vi/kvG0sek1iss/maxresdefault.jpg`
    },
    {
        id: 'bfDhK64CU7s',
        thumbnail: `https://img.youtube.com/vi/bfDhK64CU7s/maxresdefault.jpg`
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

.content {
  position: relative;
  overflow: hidden;
  text-align: center;

}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}
</style>