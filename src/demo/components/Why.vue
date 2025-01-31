<template>
    <div class="">
      <div class="">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <h2 class="text-[32px] md:text-[38px] 2xl:text-[48px] font-extrabold text-white mb-4">
            Benefits of using our demo trading account
          </h2>
          <p class="text-[#dfdfdf] text-[14px] lg:text-[16px] font-openSans max-w-3xl mx-auto">
            Our demo trading account can be your "secret weapon" to test out strategies
            and hone your skills with zero risk. Here's how you'll benefit:
          </p>
        </div>
  
        <!-- Grid Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 mx-auto">
          <!-- Risk-free practice card -->
          <div class="group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f] ">
            <div class="relative overflow-hidden flex-1">
              <img 
                src="/src/assets/img/watchlist.png" 
                alt="Risk-free practice"
                class="w-full object-cover p-8 -mt-16 mb-20 md:mb-0"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
              <div class="absolute bottom-4 left-4 right-4 p-0 md:p-0 xl:p-6">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Risk-free practice</h3>
                <p class="text-[#dfdfdf] font-openSans text-sm md:text-base">Learn to trade without financial risk, refining strategies and learning from mistakes.</p>
              </div>
            </div>
          </div>
  
          <!-- Skill development card -->
          <div class="group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]">
            <div class="relative overflow-hidden flex-1">
              <img 
                src="/src/assets/img/skill-development.jpg" 
                alt="Skill development"
                class="w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
              <div class="absolute bottom-4 left-4 right-4 mb-0 xl:mb-6 2xl:mb-2 p-0 md:p-0 xl:p-6">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Skill development</h3>
                <p class="text-[#dfdfdf] text-sm md:text-base font-openSans">Hone trading abilities, from market analysis to decision-making.</p>
              </div>
            </div>
          </div>
  
          <!-- Platform orientation card -->
          <div class="group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]">
            <div class="relative overflow-hidden flex-1">
              <img 
                src="/src/assets/img/DemoPlan.png" 
                alt="Platform orientation"
                class="w-full object-cover p-8"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
                <div class="absolute bottom-4 left-4 right-4 p-0 md:p-0 xl:p-6">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Platform orientation</h3>
                <p class="text-[#dfdfdf] text-sm md:text-base font-openSans">Get comfortable with trading platform tools and features.</p>
              </div>
            </div>
          </div>
  
          <!-- Strategy testing card -->
          <div class="group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]">
            <div class="relative overflow-hidden flex-1">
              <img 
                src="/src/assets/img/swing.png" 
                alt="Strategy testing"
                class="w-full object-cover mb-14 md:mb-20 xl:mb-0"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
              <div class="absolute bottom-4 left-4 right-4 p-0 md:p-0 xl:p-6">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Strategy testing</h3>
                <p class="text-[#dfdfdf] text-sm md:text-base font-openSans">Experiment with various strategies in real market conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No data needed as cards are now static in the template
  </script>