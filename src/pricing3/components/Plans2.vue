<template>
    <div class="min-h-screen bg-[#161A1E] flex items-start justify-center p-4 font-cabinet-grotesk">
      <div class="w-full max-w-2xl mt-8">
        <!-- Header -->
        <div class="flex items-center gap-4 text-white">
          <button class="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <i class="pi pi-arrow-left"></i>
          </button>
          <div>
            <h1 class="text-2xl font-semibold">Your Invoice Summary</h1>
            <p class="text-gray-400">Please wait until all checks are done</p>
          </div>
        </div>
  
        <!-- Invoice Item -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-6"> 
          <div class="flex items-start justify-between">
            <div class="flex items-start gap-4">
                <div> 
                  <!-- <img src="../assets/svg/Layer.svg" alt=""> -->
                </div>
              <div>
                <h3 class="text-white font-semibold">Algo Trading</h3>
                <p class="text-gray-400">Automate strategies for smarter trading.</p>
              </div>
            </div>
            <button class="px-4 py-1 text-gray-400 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              Remove
            </button>
          </div>
          
          <div class="mt-6 border-t border-dashed border-gray-700 pt-4">
            <div class="flex justify-between text-white">
              <span>Subtotal</span>
              <span>₹12000.00</span>
            </div>
            <div class="flex justify-between mt-2">
              <span class="text-gray-400">Plan Details</span>
              <span class="text-white">Essential (Quarterly)</span>
            </div>
            <div class="flex justify-between mt-2">
              <span class="text-gray-400">Valid Till</span>
              <span class="text-white">12 Jan 2023</span>
            </div>
          </div>
        </div>
  
        <!-- GST Details -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <h3 class="text-white font-semibold mb-4">Add GST Details</h3>
          <div class="space-y-4">
            <input 
              type="text" 
              placeholder="GSTIN*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
            />
            <input 
              type="text" 
              placeholder="Business Name*"
              class="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600"
            />
            <div class="flex justify-end gap-4">
              <button class="text-red-400 hover:text-red-300 transition-colors">Cancel</button>
              <button class="text-[#00B852] hover:text-[#00A048] transition-colors">Save</button>
            </div>
          </div>
        </div>
  
        <!-- Total and Pay Button -->
        <div class="bg-white/5 rounded-lg p-4 md:p-6 mt-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span class="text-gray-400">Subtotal</span>
              <p class="text-white text-2xl font-semibold">₹12000.00</p>
            </div>
            <button class="w-full md:w-[237px] bg-[#00B852] hover:bg-[#00A048] text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Pay Now
            </button>
          </div>
        </div>
  
        <!-- Footer -->
        <div class="flex flex-wrap gap-2 md:gap-4 justify-center mt-10 text-gray-400 text-sm">
          <a href="#" class="hover:text-white transition-colors">Terms & Condition</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:text-white transition-colors">Investor Journey</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:text-white transition-colors">Investor</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:text-white transition-colors">Complaint</a>
        </div>
      </div>
    </div>
</template>
