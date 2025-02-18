<template>
    <div>
      <!-- Mobile Horizontal Scroll Navigation -->
      <div class="lg:hidden fixed top-[4.5rem] left-0 right-0 bg-transparent z-40 overflow-x-auto whitespace-nowrap py-4 px-4 hide-scrollbar">
        <div class="inline-flex space-x-4">
          <button 
            v-for="link in links" 
            :key="link.path"
            @click="navigateTo(link.path)"
            class="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200"
            :class="[
              $route.path === link.path 
                ? 'bg-white/5 text-white' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            ]"
          >
            <component 
              :is="link.icon" 
              class="w-5 h-5 mr-2"
              :class="$route.path === link.path ? 'text-[#00a048]' : 'text-gray-500'"
            />
            <span class="font-medium whitespace-nowrap">{{ link.name }}</span>
          </button>
        </div>
      </div>
  
      <!-- Desktop Sidebar -->
      <div class="hidden lg:block sticky top-12 sidebar p-6 w-72 mt-32">
        <h2 class="text-xl font-bold mb-6 bg-gradient-to-r from-[#4CC3FD] to-[#00a048] bg-clip-text text-transparent">
          Legal Information
        </h2>
        <nav>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.path">
              <router-link 
                :to="link.path" 
                class="flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group"
                :class="[
                  $route.path === link.path 
                    ? 'bg-white/5 text-white' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                ]"
              >
                <component 
                  :is="link.icon" 
                  class="w-5 h-5 mr-3"
                  :class="$route.path === link.path ? 'text-[#00a048]' : 'text-gray-500 group-hover:text-white'"
                />
                <span class="font-medium">{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { 
    Shield, 
    FileText, 
    AlertTriangle, 
    RefreshCw, 
    MessageSquare, 
    Users,
    FileQuestion
  } from 'lucide-vue-next'
  
  const route = useRoute()
  const router = useRouter()
  
  const navigateTo = (path) => {
    router.push(path)
  }
  
  const links = ref([
    { 
      name: 'Privacy Policy', 
      path: '/terms/privacy-policy',
      icon: Shield
    },
    { 
      name: 'Terms & Conditions', 
      path: '/terms/t&c',
      icon: FileText
    },
    { 
      name: 'Disclaimer', 
      path: '/terms/disclaimer',
      icon: AlertTriangle
    },
    { 
      name: 'Refund Policy', 
      path: '/terms/refund-policy',
      icon: RefreshCw
    },
    
    { 
      name: 'Investor Charter', 
      path: '/terms/investor-charter',
      icon: Users
    },
    {
      name: 'Disclosure',
      path: '/terms/disclosure',
      icon: FileQuestion
    }
  ])
  </script>
  
  <style scoped>
  .router-link-active {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .sidebar {
    animation: fadeIn 0.3s ease-out;
    background: transparent;
  }
  
  /* Hide scrollbar but keep functionality */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
  </style>