<template>
    <div class=" text-white text-center mt-24 ">
      
      <main class="w-[95%] mx-auto">
        <ul id="cards" ref="cardsWrapper" class="list-none grid grid-cols-1 gap-[4vw] pb-[calc(var(--numcards)*var(--card-top-offset))] mb-[4vw]">
          <li v-for="(card, index) in cards" :key="card.id" :id="`card_${index + 1}`" class="card sticky top-24 transform-gpu will-change-transform" :style="{ paddingTop: `calc(${index + 1} * var(--card-top-offset))` }">
            <div class="card__content bg-gradient-to-r from-[#1D2125] to-[#1F0B03] text-[#0a0507] rounded-md overflow-hidden shadow-lg grid grid-cols-2 items-stretch">
              <div class="w-4/5 place-self-center text-left grid gap-4 place-items-start">
                <h2 class="font-light text-4xl">{{ card.title }}</h2>
                <p class="font-sans font-light leading-[1.42]">{{ card.description }}</p>
                <p><a href="#top" class="btn bg-[#bc5724] text-white no-underline inline-block p-2 rounded">Read more</a></p>
              </div>
              <figure class="overflow-hidden">
                <img :src="card.image" :alt="card.title" class="w-full h-full object-cover">
              </figure>
            </div>
          </li>
        </ul>
      </main>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { scroll, animate } from 'motion';
  
  const cardsWrapper = ref(null);
  const cards = ref([
    { id: 1, title: 'Card One', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg' },
    { id: 2, title: 'Card Two', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg' },
    { id: 3, title: 'Card Three', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg' },
    { id: 4, title: 'Card Four', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg' },
  ]);
  
  onMounted(() => {
    const numCards = cards.value.length;
    const cardElements = document.querySelectorAll('.card');
  
    cardElements.forEach(($card, index0) => {
      const index = index0 + 1;
      const reverseIndex = numCards - index0;
      const reverseIndex0 = numCards - index;
  
      scroll(
        animate($card, {
          scale: [1, 1 - (0.1 * reverseIndex0)],
        }), {
          target: cardsWrapper.value,
          offset: [`${index0 / numCards * 100}%`, `${index / numCards * 100}%`],
        }
      );
    });
  });
  </script>
  
  <style scoped>
  :root {
    --card-height: 40vw;
    --card-margin: 4vw;
    --card-top-offset: 1em;
    --numcards: 4;
  }
  
  #cards {
    grid-template-rows: repeat(var(--numcards), var(--card-height));
  }
  
  .card__content {
    grid-template-areas: "text img";
  }
  </style>