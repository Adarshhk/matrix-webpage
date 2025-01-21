<template>
  <div class=" py-20 mx-5">
    <div class="px-3 2xl:px-32 mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2
          class="text-[32px] md:text-[38px] 2xl:text-[48px] font-bold text-white mb-8"
        >
          What Sets Us Apart?
        </h2>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Grow Card -->
        <div class="relative rounded-2xl bg-[#1d2125] p-8">
          <div class="flex justify-end mb-8">
            <img src="/src/assets/svg/brush.svg" class="w-10 md:w-12" alt="" />
          </div>
          <h1 class="text-2xl font-bold text-white">
            Long-Term Growth Signals
          </h1>
          <p class="text-[#BBB8B8] text-lg leading-relaxed">
            Carefully selected opportunities for sustainable wealth.
          </p>
        </div>
        <!-- Laptop Platform Card -->
        <div class="relative rounded-2xl bg-[#1d2125] p-8">
          <div class="flex justify-end mb-8 mt-4">
            <img src="/src/assets/svg/signal.svg" class="w-10 md:w-12" alt="" />
          </div>
          <h1 class="text-2xl font-bold text-white">
            Insightful Market Reports
          </h1>
          <p class="text-[#BBB8B8] text-lg leading-relaxed">
            Regular updates tailored to your investment strategy.
          </p>
        </div>

        <div class="relative rounded-2xl bg-[#1d2125] p-8">
          <div class="flex justify-end mb-8">
            <!-- Bag Platform Card -->
            <div class="flex gap-2">
              <img src="/src/assets/svg/batch.svg" class="w-10 md:w-12" alt="" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-white">
            Portfolio Optimization Tools
          </h3>
          <p class="text-[#BBB8B8] text-lg leading-relaxed">
            Get personalized diversification recommendations.
          </p>
        </div>

        <div class="relative rounded-2xl bg-[#1d2125] p-8">
          <div class="flex justify-end mb-8">
            <div class="flex gap-2">
              <img src="/src/assets/svg/call.svg" class="w-10 md:w-12" alt="" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-white">One-Click Simplicity</h3>
          <p class="text-[#BBB8B8] text-lg leading-relaxed">
            Place trades without complex manual entries.
          </p>
        </div>
       
      </div>
      <div class="flex justify-center mt-10">
          <button
            class="btn btn-anim text-[#F3F8F9] text-sm w-full max-w-48 py-2 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]"
          >
            <div class="content vertical flex justify-center w-full">
              <div class="text font-semibold text-base">Start Trading Now</div>
              <div class="hover-text font-semibold text-base">Join Now</div>
            </div>
          </button>
        </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
