<template>
  <div class="text-center relative mx-auto">
    <!-- Grid Background -->
    <div class="grid-background hidden lg:block">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
      <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
    </div>

    <!-- Main Content -->

    <div class="lg:pt-24  text-center ">

      <div class=" flex justify-center mt-24">
        <p class="text-[14px] uppercase text-[#5BC9F9]">
          Maximize Your Control, Minimize the Hassle
        </p>
      </div>
      
      <div class="text-container">
        <h1 class=" text-[27px] md:text-[64px] max-w-3xl font-extrabold leading-tight 
      bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text 
      text-transparent mx-auto py-1 text-gradient">
      Manual Trading Made Easy with Matrix Trading Tech
          
        </h1>
      </div>

     


      <p class="text-[#dfdfdf] text-[1rem] max-w-4xl mx-auto md:mt-8 w-[90%] font-openSans ">
        Imagine a trading journey where every decision is yours to make, every move is guided by your insight, and every win is a result of your hard work and skill. It's just you, your expertise, and the market. Make every trade count, and turn your passion for trading into tangible achievements.
      </p>
      
      
        <button @click="redirectToLogin"
          class="z-40 mt-8 btn btn-anim text-[#F3F8F9] text-sm w-[95%] md:w-1/2 lg:w-1/5 py-2 rounded-full bg-[#00B852] max-w-48 ">
          <div class="content vertical flex justify-center">
            <div class="text font-semibold text-base font-openSans">Try Free Demo</div>
            <div class="hover-text font-semibold  text-base font-openSans">Try Free Demo</div>
          </div>
        </button>        
      
    </div>

      <div class="relative">
        <img src="/src/assets/img/manualtradehero.png" class="w-[90%] mx-auto mt-16">

        <div
        class=" absolute bg-gradient-to-t from-[#161a1e] via-[#161a1e] to-transparent h-[5vh] lg:h-[20vh] w-full z-40 bottom-0">
      </div>
      </div>

  </div>
</template>

<script setup>

const redirectToLogin = () =>{
  window.open('https://v3.matrixtradingtech.com/' , "_blank");
}

// Register the modules to be used in the Swiper

</script>

<style scoped>
.text-container {
  padding: 0;
  text-align: center;
}

.text-container h2 {
  font-size: 6em;
  text-transform: uppercase;
  font-family: 'Fredoka One', cursive;
}

.text-container .text-gradient {  
  color: transparent;
  background-image: linear-gradient(to left, #7B68EE, #3498db, #2ecc71, #7B68EE, #3498db, #2ecc71);
  -webkit-background-clip: text;
  background-clip: text;
  animation: color 5s linear infinite; 
  background-size: 500%;  
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
}

.text-container .text-pattern {  
  color: transparent;
  background-color: #DC143C;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 25px,
    rgba(255,255,255,.5) 25px,
    rgba(255,255,255,.5) 50px
  );
  -webkit-background-clip: text;
  background-clip: text;   
  animation: color 50s linear infinite; 
  background-size: 200%;  
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
}

@keyframes color {
  from { 
    background-position: 0% 50%;
  }
  to { 
    background-position: 100% 50%; 
  }
}
.grid-background {
  display: none;
  /* Default: hide the grid on all screen sizes */
}

.bg {

  background-image: url('/src/assets/img/homebg1.png');
  background-position: center;
  background-size: cover;

}

.inner-headings {
  border: 0px solid #ddd;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}

.inner-headings span {
  position: relative;
  animation: animation 10s ease infinite;
}

@keyframes animation {

  0%,
  100% {
    top: 0;
  }

  20% {
    top: 0;
  }

  25% {
    top: -50px;
  }

  45% {
    top: -50px;
  }

  50% {
    top: -100px;
  }

  70% {
    top: -100px;
  }

  75% {
    top: -150px;
  }

  95% {
    top: -150px;
  }
}

@media (min-width: 1024px) {

  /* Tailwind's lg breakpoint */
  .grid-background {
    display: flex;
    /* Show the grid only on large screens */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    pointer-events: none;
    /* Ensures the grid does not block interactions */
    z-index: -1;
    /* Sends the grid to the background */
  }

  .grid-image {
    width: 26rem;
    object-fit: contain;
    opacity: 1;
    /* Adjust opacity to make it less intrusive */
  }
}

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