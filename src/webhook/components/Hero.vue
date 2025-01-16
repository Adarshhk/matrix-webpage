<template>
  <div class="min-h-screen  w-full relative pt-40">
    <div class="mx-5 flex flex-col lg:flex-row gap-8 px-0">


      <!-- Grid Background Images -->
    <div class="absolute inset-0 hidden lg:block">
      <img 
        src="/src/assets/img/Grid.png" 
        alt="Grid Pattern Left" 
        class="absolute ml-24 left-0 top-[-100px]"
      />
      <img 
        src="/src/assets/img/Grid.png" 
        alt="Grid Pattern Right" 
        class="absolute right-0 top-[-250px] "
      />
    </div>
    
      <!-- Left Column (100% on md and below, 70% on lg and above) -->
      <div class="w-full  p-8  xl:p-2 2xl:p-4 z-10 ">
        <div class="mb-12">
          <h1 class="text-[40px] font-extrabold mb-4">
            <span class="bg-gradient-to-r from-[#00b853] to-[#2fc1a7] bg-clip-text text-transparent">
              About Webhooks
            </span>
          </h1>
          <p class="text-[#BBB8B8] text-[18px]">
            Webhooks allow you to send a POST request to a certain URL every time the alert is triggered. This feature can be
            enabled when you create or edit an alert. Add the correct URL for your app and we will send a POST request as soon
            as the alert is triggered, with the alert message in the body of the request. If the alert message is valid JSON, we will
            send a request with an "application/json" content-type header. Otherwise, we will send "text/plain" as a content-type
            header.
          </p>
          <p class="text-[#BBB8B8] text-[18px] mt-4">
            Important Security Notice: When configuring webhooks, ensure that you do not include sensitive information such as
            login credentials or passwords in the webhook body. Transmitting sensitive data through webhooks can expose it to
            unauthorized parties and lead to security vulnerabilities. Always use secure, authenticated endpoints and encrypt
            sensitive data to protect your information.
          </p>
        </div>

        <!-- First card with placeholder image -->
        <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/placeholder.webp" 
              alt="Placeholder" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <div class="mb-8">
          <p class="text-[#BBB8B8] text-lg">
            If you want to send a request to a URL with a port number, please note that we only accept URLs with port numbers 80
            and 443. Requests for URLs with any other port number will be rejected. If a remote server processes a request for
            more than 3 seconds, the request then gets cancelled. Also note that IPv6 isn't working with webhooks at the moment,
            but we might implement this in the future.
          </p>
        </div>

        <!-- Second card with placeholder image -->
        <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/placeholder.webp" 
              alt="Placeholder" 
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <div class="mb-8">
          <p class="text-[#BBB8B8] text-lg">
            Keep in mind that many apps and services expect to receive data from webhooks in the JSON format and not in plain
            text, which we have in the alert message by default. Before sending a request, please read the documentation of the
            corresponding app or service and format your alert message accordingly. You can find out more about the JSON
            format in the Wiki.
          </p>
        </div>

        <div>
          <p class="text-[#BBB8B8] text-lg">
            If you want to send a request to a URL with a port number, please note that we only accept URLs with port numbers 80
            and 443. Requests for URLs with any other port number will be rejected. If a remote server processes a request for
            more than 3 seconds, the request then gets cancelled. Also note that IPv6 isn't working with webhooks at the moment,
            but we might implement this in the future.
          </p>
        </div>
      </div>

      <!-- Right Column (30%) - Sticky Form (visible only on lg and above) -->
      <div class="hidden lg:block ">
        <div class="sticky top-24 rounded-lg overflow-hidden shadow-xl" style="width: 385px; height: 619px ">
          <div class="relative h-full">
            <!-- Background Image -->
            <img 
              src="/src/assets/img/wavy.jpg" 
              alt="Ocean Wave" 
              class="w-full h-full object-cover"
            />
            
            <!-- Content Overlay -->
            <div class="absolute inset-0 p-8 flex flex-col items-center justify-center text-center mt-80">
              <div 
                class="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-400/40 to-blue-600/40 backdrop-blur-md border border-white/10"
                style="width: 300px"
              >
                <div class="relative p-8 flex flex-col items-center justify-center text-center">
                  <h2 class="text-2xl font-bold text-white mb-4">
                    Get a Advice For Free
                  </h2>
                  <p class="text-white/90 text-sm mb-8 leading-relaxed">
                    Try Userpilot and take your product experience to the next level
                  </p>
                  <!-- <button class="w-full bg-[#00C853] hover:bg-[#00B84D] text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
                    Get a Free Demo
                  </button> -->
                  <button class="w-full bg-[#00C853] hover:bg-[#00B84D] text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
                <div class="content vertical flex justify-center">
                        <div class="text">Get a Free Demo</div>
                        <div class="hover-text">Click Here</div>
                    </div>
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky button for md and below screens -->
    <div class="lg:hidden fixed bottom-4 left-0 right-0 flex justify-center mb-0 md:mb-14 z-10">
      <button 
        @click="showPopup = true"
        class="bg-[#00C853] hover:bg-[#00B84D] text-white font-semibold py-3 px-10 md:px-32 rounded-full transition-colors shadow-lg"
      >
        Get Free Demo
      </button>
    </div>

    <!-- Pop-up form -->
    <transition name="fade">
      <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div 
          class="relative bg-gradient-to-b from-blue-400/90 to-blue-600/90 backdrop-blur-md border border-white/10 rounded-3xl p-8 w-full max-w-md"
        >
          <button @click="showPopup = false" class="absolute top-2 right-2 text-white">&times;</button>
          <h2 class="text-2xl font-bold text-white mb-4">
            Get a Advice For Free
          </h2>
          <p class="text-white/90 text-sm mb-8 leading-relaxed">
            Try Userpilot and take your product experience to the next level
          </p>
          <button class="w-full bg-[#00C853] hover:bg-[#00B84D] text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-lg">
            Get a Free Demo
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
</script>

<style scoped>
.from-blue-400\/40 {
  --tw-gradient-from: rgb(96 165 250 / 0.4);
}

.to-blue-600\/40 {
  --tw-gradient-to: rgb(37 99 235 / 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

