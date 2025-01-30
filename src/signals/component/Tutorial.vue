<template>
    <div class="bg-[#00B852] px-6 lg:px-10 py-10 ">

        <div>
            <h2 class="text-white font-extrabold text-[27px] lg:text-[38px] text-center max-w-lg mx-auto mb-12">
                From Signal to Success—It’s as Simple as This
            </h2>

        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
            <div v-for="(item , index) in tutorial" class="flex items-center gap-3  ">
                <div class="">
                   <h1 class="text-white text-[90px]  font-extrabold  ">
                    {{ index }}
                   </h1> 
                </div>
                <div class="flex flex-col gap-4 border pr-10 border-l-0 rounded-r-full h-[150px] lg:h-[150px] justify-center px-2">
                    <h5 class="text-white text-[22px] font-bold">
                        {{ item.title }}
                    </h5>
                    <p class="text-white text-[14px] font-openSans">{{ item.description }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>


const tutorial = [

    {
        title: 'Get Notified',
        description: 'Stay ahead with instant alerts. You’ll receive signals as soon as opportunities arise.',
    },
    {
        title: 'Execute Trades',
        description: 'Use our one-click trading option to act on signals instantly, ensuring the same price levels as recommended.'
    },
    {
        title: 'Track Performance',
        description: 'Monitor the success of your trades and adjust your strategy as needed.Monitor the success of your trades.'
    }
]
</script>