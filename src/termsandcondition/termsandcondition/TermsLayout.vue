<template>
    <div class="flex">
      <SidebarNavigation />
      <div class="flex-grow p-4">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup>
  import SidebarNavigation from '../../component/SidebarNavigation.vue';
  </script>