<template>
    <div class="mt-32">
        
        <div class=" pt-0 2xl:pt-1  w-[95%] mx-auto ">
            
            <h2 class="text-[28px] md:text-[34px] 2xl:text-[42px] font-bold text-white mb-16  mx-auto flex text-center justify-center ">
                Your Roadmap to Effortless Stock Analysis
            </h2>
           
        </div>

        <div class="gap-4 mx-auto w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="user in intendedUsers" class="bg-[#1D2125] relative border text-left border-[#2F2F2F] rounded p-8">
                <img :src="user.bg" class="absolute top-8 w-52" alt="">
                <img :src="user.img" alt="" class="w-8 mb-6">
                <h2 class="text-white text-[24px] font-bold mb-6">
                    {{ user.name }}
                </h2>
                <p class="text-[#7F7F7F] max-w-96 text-[18px]">
                    {{ user.description }}
                </p>
            </div>
        </div>

        
    </div>
</template>

<script setup>
import login from '/src/assets/svg/filter.svg';
import link from '/src/assets/svg/graph5.svg';
import rocket from '/src/assets/svg/rocket.svg';
import bg1 from '/src/assets/img/01.png';
import bg2 from '/src/assets/img/02.png';
import bg3 from '/src/assets/img/03.png';

const intendedUsers = [
    { 
        name: 'Set Your Filters', 
        img : login,
        bg : bg1,
        description : "Define your strategy by selecting criteria like price range, sector, or performance indicators to find the stocks that matter most." 
    },

    { 
        name: 'View Insights',
        img : link,
        bg : bg2,
        description: "Instantly access clear, actionable data with detailed charts and metrics for informed decision-making.",
    },
    { 
        name: 'Take Action',
        img : rocket,
        bg : bg3,
        description: "Save your favorite filters, export results for further analysis, or set alerts to stay ahead of the market.",
    },
    
]

</script>

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