<script setup>
const monthlyData = [
  {
    month: 'December, 2024',
    carriedForward: 0,
    received: 0,
    resolved: 0,
    pending: 0
  },
  {
    month: 'November, 2024',
    carriedForward: 0,
    received: 0,
    resolved: 0,
    pending: 0
  },
  {
    month: 'October, 2024',
    carriedForward: 0,
    received: 0,
    resolved: 0,
    pending: 0
  }
]

const sourceData = [
  {
    source: 'Directly from Investors',
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pendingOver3Months: 0,
    avgResolutionDays: 0
  },
  {
    source: 'SEBI (SCORES)',
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pendingOver3Months: 0,
    avgResolutionDays: 0
  },
  {
    source: 'Other Sources (If Any)',
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pendingOver3Months: 0,
    avgResolutionDays: 0
  }
]

const annualData = [
  {
    year: '2024-25',
    carriedForward: 0,
    received: 0,
    resolved: 0,
    pending: 0
  }
]
</script>

<template>
  <div class="min-h-screen  text-gray-100 mt-24">
    <div class="container mx-auto p-4">
      <!-- Header -->
      <div class="bg-yellow-900/50 p-4 rounded-lg mb-6 shadow-lg">
        <h1 class="text-lg md:text-xl font-bold">
          Data For The Month Ending: DECEMBER, 2024 
          <span class="block mt-2 text-sm md:text-base text-yellow-400">
            SEBI Reg Number: | INH000019035
          </span>
        </h1>
      </div>

      <!-- Source Data Table -->
      <div class="mb-8">
        <div class="overflow-x-auto rounded-lg shadow-lg">
          <table class="min-w-full bg-gray-800 border-collapse">
            <thead>
              <tr class="bg-gray-700">
                <th class="p-3 text-left text-xs md:text-sm">Sr.No</th>
                <th class="p-3 text-left text-xs md:text-sm">Received From</th>
                <th class="p-3 text-center text-xs md:text-sm">Pending at the End of Last Month</th>
                <th class="p-3 text-center text-xs md:text-sm">Received</th>
                <th class="p-3 text-center text-xs md:text-sm">Resolved</th>
                <th class="p-3 text-center text-xs md:text-sm">Total Pending</th>
                <th class="p-3 text-center text-xs md:text-sm">Pending > 3 Months</th>
                <th class="p-3 text-center text-xs md:text-sm">Avg Resolution Days</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr v-for="(item, index) in sourceData" :key="index" 
                  class="hover:bg-gray-700/50 transition-colors">
                <td class="p-3 text-xs md:text-sm">{{ index + 1 }}</td>
                <td class="p-3 text-xs md:text-sm">{{ item.source }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.pendingLastMonth }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.received }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.resolved }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.totalPending }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.pendingOver3Months }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.avgResolutionDays }}</td>
              </tr>
              <tr class="bg-yellow-900/30 font-bold">
                <td class="p-3 text-xs md:text-sm">Grand Total</td>
                <td class="p-3"></td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Monthly Disposal Table -->
      <div class="mb-8">
        <h2 class="text-lg md:text-xl font-bold bg-yellow-900/50 p-4 rounded-lg mb-4 shadow-lg">
          Trend of Monthly Disposal of Complaints
        </h2>
        <div class="overflow-x-auto rounded-lg shadow-lg">
          <table class="min-w-full bg-gray-800">
            <thead>
              <tr class="bg-gray-700">
                <th class="p-3 text-left text-xs md:text-sm">Sr.No</th>
                <th class="p-3 text-left text-xs md:text-sm">Month</th>
                <th class="p-3 text-center text-xs md:text-sm">Carried Forward</th>
                <th class="p-3 text-center text-xs md:text-sm">Received</th>
                <th class="p-3 text-center text-xs md:text-sm">Resolved</th>
                <th class="p-3 text-center text-xs md:text-sm">Pending</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr v-for="(item, index) in monthlyData" :key="index"
                  class="hover:bg-gray-700/50 transition-colors">
                <td class="p-3 text-xs md:text-sm">{{ index + 1 }}</td>
                <td class="p-3 text-xs md:text-sm">{{ item.month }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.carriedForward }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.received }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.resolved }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.pending }}</td>
              </tr>
              <tr class="bg-yellow-900/30 font-bold">
                <td class="p-3 text-xs md:text-sm">Grand Total</td>
                <td class="p-3"></td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Annual Disposal Table -->
      <div>
        <h2 class="text-lg md:text-xl font-bold bg-yellow-900/50 p-4 rounded-lg mb-4 shadow-lg">
          Trend of Annual Disposal of Complaints
        </h2>
        <div class="overflow-x-auto rounded-lg shadow-lg">
          <table class="min-w-full bg-gray-800">
            <thead>
              <tr class="bg-gray-700">
                <th class="p-3 text-left text-xs md:text-sm">Sr.No</th>
                <th class="p-3 text-left text-xs md:text-sm">Year</th>
                <th class="p-3 text-center text-xs md:text-sm">Carried Forward</th>
                <th class="p-3 text-center text-xs md:text-sm">Received</th>
                <th class="p-3 text-center text-xs md:text-sm">Resolved</th>
                <th class="p-3 text-center text-xs md:text-sm">Pending</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr v-for="(item, index) in annualData" :key="index"
                  class="hover:bg-gray-700/50 transition-colors">
                <td class="p-3 text-xs md:text-sm">{{ index + 1 }}</td>
                <td class="p-3 text-xs md:text-sm">{{ item.year }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.carriedForward }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.received }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.resolved }}</td>
                <td class="p-3 text-center text-xs md:text-sm">{{ item.pending }}</td>
              </tr>
              <tr class="bg-yellow-900/30 font-bold">
                <td class="p-3 text-xs md:text-sm">Grand Total</td>
                <td class="p-3"></td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
                <td class="p-3 text-center text-xs md:text-sm">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>