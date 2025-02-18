<script setup>
import { ref } from "vue";

// Sample data (Replace with API data if needed)
const monthData = ref([
  { id: 1, source: "Directly from Investors", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, resolutionTime: 0 },
  { id: 2, source: "SEBI (SCORES)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, resolutionTime: 0 },
  { id: 3, source: "Other Sources (If Any)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, resolutionTime: 0 },
]);

const monthlyTrend = ref([
  { id: 1, month: "January, 2025", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { id: 2, month: "December, 2024", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { id: 3, month: "November, 2024", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
]);

const annualTrend = ref([
  { id: 1, year: "2024-25", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
]);
</script>

<template>
  <div class="">
    <!-- Header -->
    <h2 class="text-lg font-bold p-2">
      Data For The Month Ending: <span class="text-white">DECEMBER, 2024</span> | SEBI Reg Number: 
      <span class="text-white font-bold">INH000019035</span>
    </h2>

    <!-- Monthly Complaints Table -->
    <div class="overflow-x-auto mt-4">
      <table class="w-full border-collapse border border-gray-300 sm-text overflow-x-auto min-w-[800px]">
        <thead class=" text-black bg-[#F4B084]">
          <tr>
            <th class="border p-2">Sr.No</th>
            <th class="border p-2">Received From</th>
            <th class="border p-2">Pending at End of Last Month</th>
            <th class="border p-2">Received</th>
            <th class="border p-2">Resolved</th>
            <th class="border p-2">Total Pending</th>
            <th class="border p-2">Pending Complaint > 3 Months</th>
            <th class="border p-2">Avg Resolution Time (Days)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in monthData" :key="item.id" class="text-center text-white">
            <td class="border p-2">{{ item.id }}</td>
            <td class="border p-2">{{ item.source }}</td>
            <td class="border p-2">{{ item.pendingLastMonth }}</td>
            <td class="border p-2">{{ item.received }}</td>
            <td class="border p-2">{{ item.resolved }}</td>
            <td class="border p-2">{{ item.totalPending }}</td>
            <td class="border p-2">{{ item.pending3Months }}</td>
            <td class="border p-2">{{ item.resolutionTime }}</td>
          </tr>
          <tr class=" font-bold text-black bg-[#FFD966]">
            <td class="border p-2" colspan="2">Grand Total</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Monthly Trend -->
    <h2 class="text-lg font-bold  p-2 mt-6 text-white">Trend of Monthly Disposal of Complaints</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300 sm-text overflow-x-auto min-w-[800px]">
        <thead class=" text-black bg-[#F4B084]">
          <tr>
            <th class="border p-2">Sr.No</th>
            <th class="border p-2">Month</th>
            <th class="border p-2">Carried Forward</th>
            <th class="border p-2">Received</th>
            <th class="border p-2">Resolved</th>
            <th class="border p-2">Pending</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in monthlyTrend" :key="item.id" class="text-center text-white">
            <td class="border p-2">{{ item.id }}</td>
            <td class="border p-2">{{ item.month }}</td>
            <td class="border p-2">{{ item.carriedForward }}</td>
            <td class="border p-2">{{ item.received }}</td>
            <td class="border p-2">{{ item.resolved }}</td>
            <td class="border p-2">{{ item.pending }}</td>
          </tr>
          <tr class=" font-bold text-black bg-[#FFD966]">
            <td class="border p-2" colspan="2">Grand Total</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Annual Trend -->
    <h2 class="text-lg font-bold  p-2 mt-6 text-white">Trend of Annual Disposal of Complaints</h2>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300 sm-text overflow-x-auto min-w-[800px]">
        <thead class=" text-black bg-[#F4B084]">
          <tr>
            <th class="border p-2">Sr.No</th>
            <th class="border p-2">Year</th>
            <th class="border p-2">Carried Forward</th>
            <th class="border p-2">Received</th>
            <th class="border p-2">Resolved</th>
            <th class="border p-2">Pending</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in annualTrend" :key="item.id" class="text-center text-white">
            <td class="border p-2">{{ item.id }}</td>
            <td class="border p-2">{{ item.year }}</td>
            <td class="border p-2">{{ item.carriedForward }}</td>
            <td class="border p-2">{{ item.received }}</td>
            <td class="border p-2">{{ item.resolved }}</td>
            <td class="border p-2">{{ item.pending }}</td>
          </tr>
          <tr class=" font-bold text-black bg-[#FFD966]">
            <td class="border p-2" colspan="2">Grand Total</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
            <td class="border p-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>