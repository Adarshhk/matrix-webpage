<template>
  <div class="min-h-screen  w-full relative pt-40">
    <div class="mx-5 flex flex-col lg:flex-row gap-8 px-0">


      <!-- Grid Background Images -->
      <div class="absolute inset-0 hidden lg:block">
        <img src="/src/assets/img/Grid.png" alt="Grid Pattern Left" class="absolute ml-24 left-0 top-[-100px]" />
        <img src="/src/assets/img/Grid.png" alt="Grid Pattern Right" class="absolute right-0 top-[-250px] " />
      </div>

      <!-- Left Column (100% on md and below, 70% on lg and above) -->
      <div class="w-full  p-8  xl:p-2 2xl:p-4 z-10 ">
        <div class="mb-12">
          <h1 class="text-[40px] font-extrabold mb-4">
            <span class="bg-gradient-to-r from-[#00b853] to-[#2fc1a7] bg-clip-text text-transparent">
            Know How Algo Trading Can Be a Source Of Your Extra Income
            </span>
          </h1>
          <p class="text-[#dfdfdf] text-[14px] font-openSans mb-8">UPDATED ON: 23 Oct 2023</p>

          <img :src="blog2" alt="" class="my-8">
          <p class="text-[#dfdfdf] text-[16px] font-openSans">
            Have you ever thought about earning some extra cash without multiple jobs or compromising your free time? If the answer is yes, let’s talk about algo (algorithmic) trading — a game-changing way to generate extra income with the help of technology. Whether you’re a seasoned trader or someone who’s never touched the stock market, algo trading could be your new best friend.

          </p>
          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            What is Algo Trading?

          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            Imagine having a super-smart assistant who’s always on the lookout for money-making opportunities in the stock market. That’s basically what algo trading is! It uses computer algorithms to analyze market trends, spot the best opportunities, and execute trades automatically. The best part ? It's really fast—milliseconds—and eliminates the need for you to stare at your screen all day.
          </p>
        </div>

        <!-- First card with placeholder image -->
        <!-- <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img src="/src/assets/img/placeholder.webp" alt="Placeholder" class="w-full h-full object-contain" />
          </div>
        </div> -->

        <div class="mb-8">
          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Why Algo Trading is Perfect for Your Extra Income
          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 space-y-4">

            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">1. Saves You Tons of Time</h2>
              <p class="font-openSans text-[14px]">
                Let’s face it, who has time to monitor stock prices and charts all day? With algo trading, you can set your strategies, and the system takes care of the rest. It’s like having a personal trader working 24/7 while you focus on your job, hobbies, or family.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">2. No Room for Emotional Decisions
              </h2>
              <p class="font-openSans text-[14px]">
                Ever made a bad financial decision because of fear or excitement? (We’ve all been there!) Algo trading takes emotions out of the equation. Every trade is backed by data and logic, so you can rest easily knowing it’s all calculated.


              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">3. Works Around the Clock
              </h2>
              <p class="font-openSans text-[14px]">
                Markets in different time zones mean opportunities can pop up anytime, even while you’re sleeping. With algo trading, your strategies are running non-stop, ensuring you don’t miss out any opportunity.


              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">4. Designed Just for You

              </h2>
              <p class="font-openSans text-[14px]">
                Whether you’re a beginner or a pro trader, algo trading platforms let you customize your strategies to match your goals. So, if you want to play it safe? Go for it. The system has your back.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">5. Anyone Can Do It

              </h2>
              <p class="font-openSans text-[14px]">
                You don’t need a finance degree or years of trading experience to get started. Platforms like Matrix Trading Tech make algo trading easy with user-friendly tools and prebuilt strategies. All you need is the will to start.

              </p>
            </li>
          </ul>


          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            How to Dive into Algo Trading

          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 space-y-4">

            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">1. Pick a Solid Platform
              </h2>
              <p class="font-openSans text-[14px]">
                First things first, find a platform that suits your needs. Look for one that offers easy integration with brokers, advanced features, and solid customer support. Matrix Trading Tech is a great example—it’s packed with tools for both beginners and seasoned traders.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">2. Learn the Basics
              </h2>
              <p class="font-openSans text-[14px]">
                Sure, the system does the heavy lifting, but understanding concepts like trading signals, indicators, and market trends will help you make the most of it. Many platforms offer tutorials to get you up to speed.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">3. Start Small

              </h2>
              <p class="font-openSans text-[14px]">
                Dip your toes in the water with a small investment. This way, you can see how the system works without risking too much. As you gain confidence, you can scale up.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">4. Keep an Eye on Performance

              </h2>
              <p class="font-openSans text-[14px]">
                Even though algo trading is automated, it’s a good idea to check in and see how your strategies are performing. Most platforms have analytics tools to help you tweak and improve your approach.

              </p>
            </li>

          </ul>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Pro Tips for Success
          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 list-disc space-y-2">

            <li>
              <p><span class="font-semibold"font-openSans >Stay Informed: </span>Keep up with market news and trends to adjust your strategies as needed.


              </p>
            </li>
            <li>
              <p><span class="font-semibold"font-openSans >Diversify: </span>Don’t put all your eggs in one basket. Spread your investments across different assets or strategies.
              </p>
            </li>
            <li>
              <p><span class="font-semibold"font-openSans >Be Patient: </span>Algo trading is great for consistent growth over time. Avoid the temptation to chase quick profits.
              </p>
            </li>

          </ul>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Why Algo Trading Beats Traditional Methods

          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 space-y-4">

            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">1. No More Emotional Rollercoaster

              </h2>
              <p class="font-openSans text-[14px]">
                You know fear and greed can mess up even the best trading plans. Algo trading sticks to the data, so every decision you make is rational and calculated.


              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">2. Lightning-Fast Execution

              </h2>
              <p class="font-openSans text-[14px]">
                In the stock market, timing is everything. Algo trading reacts in milliseconds, seizing opportunities faster than any human analysis could.


              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">3. Budget-Friendly

              </h2>
              <p class="font-openSans text-[14px]">
                Forget expensive financial advisors. Because with algo trading, you get professional-grade tools at a fraction of the cost.

              </p>
            </li>
            <li>
              <h2 class="text-[18px] font-semibold font-openSans text-[#dfdfdf]">4. Easy to Scale

              </h2>
              <p class="font-openSans text-[14px]">
                Want to take things to the next level? Deploy multiple strategies across different markets and watch your income potential soar.

              </p>
            </li>

          </ul>

          
        </div>

        <!-- Second card with placeholder image -->
        <!-- <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img src="/src/assets/img/placeholder.webp" alt="Placeholder" class="w-full h-full object-contain" />
          </div>
        </div> -->

        <div class="mb-8">
          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Is Algo Trading Right for You?
          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">If you’re someone who:</p>
          <ul class="md:ml-14 text-[#dfdfdf] text-[16px] font-openSans mt-2 list-disc space-y-2">

            <li>
              <p>Wants to earn extra income but doesn’t have time to trade manually

              </p>
            </li>
            <li>
              <p>Feels nervous about making trading decisions

              </p>
            </li>
            <li>
              <p>Likes the idea of leveraging technology for financial growth
              </p>
            </li>

          </ul>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Let’s Wrap This Up


          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            So, what do you think? Ready to explore algo trading and unlock a smarter way to earn extra income? With automation, precision, and tools like Matrix Trading Tech, it’s never been easier to get started.
            <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
              Why not give it a try? Your financial future is waiting—and so is that extra income you’ve been dreaming about. Take the leap today, and let algo trading do the hard work for you!
            </p>




          </p>
        </div>
      </div>

      <!-- Right Column (30%) - Sticky Form (visible only on lg and above) -->
      <!-- <div class="hidden lg:block">
        <div class="sticky top-24 rounded-lg overflow-hidden shadow-xl" style="width: 385px; height: 619px ">
          <div class="relative h-full">
            
            <img src="/src/assets/img/wavy.jpg" alt="Ocean Wave" class="w-full h-full object-cover" />

            
            
          </div>
        </div>
      </div> -->
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import blog2 from '/src/assets/img/blog2.jpeg'


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
