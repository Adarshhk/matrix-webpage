<template>
    <nav aria-label="Breadcrumb">
      <ol class="inline-flex items-center ">
        <li 
          v-for="(item, index) in items"
          :key="item.href"
          class="inline-flex items-center"
        >
          <div class="flex items-center">
            <span 
              v-if="index > 0"
              class=" text-white"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <component
              :is="index === items.length - 1 || item.disabled ? 'span' : RouterLink"
              :to="item.href"
              class="text-sm font-medium relative"
              :class="[
                index === items.length - 1 
                  ? 'text-[#dfdfdf] cursor-default' 
                  : 'text-[#dfdfdf] hover:underline transition-colors duration-200',
                item.disabled ? ' opacity-50' : 'cursor-pointer',
                index === items.length - 1 ? 'text-[white]' : ''
              ]"
              :aria-current="index === items.length - 1 ? 'page' : undefined"
            >
              {{ item.title }}
              <span 
                v-if="index !== items.length - 1 && !item.disabled"
                class="absolute bottom-0 left-0 w-full h-px bg-white origin-bottom transform transition-all duration-300 scale-x-0 -translate-x-1/2 group-hover:scale-x-100 group-hover:translate-x-0"
              ></span>
            </component>
          </div>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 
          'title' in item && 
          'disabled' in item && 
          'href' in item
        )
      }
    }
  })
  </script>
  
  <style scoped>
  .router-link-active {
    position: relative;
    overflow: hidden;
  }
  
  .router-link-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }
  
  .router-link-active:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .router-link-active:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .router-link-active:not(:hover)::after {
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }
  </style>