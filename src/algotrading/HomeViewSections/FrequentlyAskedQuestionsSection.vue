<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";


const question = [
  {
    title: "Why is uTrade Algos better than others?",
    desc: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps."
  },
  {
    title: "Why is uTrade Algos better than others?",
    desc: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps."
  },
  {
    title: "Why is uTrade Algos better than others?",
    desc: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps."
  },
  {
    title: "Why is uTrade Algos better than others?",
    desc: "Host your strategies in our platform and enjoy automated trading from our platform in just few simple steps."
  },
]
</script>

<template>
  <section class="p-4 md:p-20 bg-white">
    <div class="text-center space-y-5 text-black">
      <h1 class="font-CabinetGrotesk font-extrabold text-[30px] md:text-[38px]">
        Frequently asked question's
      </h1>
      <p class=" text-[16px] md:text-[18px]">Let our bot do trading for you, you just chill and relax</p>
    </div>

    <div class="card mt-10 md:mt-16">
        <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="space-y-2">
            <AccordionTab v-for="item in question" :key="item">
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">{{ item.title }}</span>
                    </span>
                </template>
                <p class="m-0">
                  {{ item.desc }}
                </p>
            </AccordionTab>      
        </Accordion>
    </div>
  </section>
</template>
