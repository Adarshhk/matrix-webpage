<template>

<div class="text-center mt-24">
        <h2 class="text-[27px] md:text-[38px] font-bold text-white mb-4">
          Next-Gen Trading Solutions for a Global Market

        </h2>
        <p class="text-[#BBB8B8] text-md md:text-lg max-w-3xl mx-auto">
          Step into a world where technology works with you, helping you make smarter moves, embrace new opportunities, and feel confident in every trade you make.
        </p>
      </div>
    <div
    style="width: 100%; max-width: 600px; aspect-ratio: 1; margin: auto; position: relative; margin-top: 80px;" 
    >
      <canvas
        ref="canvasRef"
        style="width: 100%; height: 100%; contain: layout paint size; opacity: 0; transition: opacity 1s ease"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import createGlobe from 'cobe';
  
  export default {
    name: 'Cobe',
    setup() {
      const canvasRef = ref(null);
      let phi = 0;
      let width = 0;
  
      const onResize = () => {
        if (canvasRef.value) {
          width = canvasRef.value.offsetWidth;
        }
      };
  
      onMounted(() => {
        window.addEventListener('resize', onResize);
        onResize();
  
        const globe = createGlobe(canvasRef.value, {
          devicePixelRatio: 2,
          width: width * 5,
          height: width * 2,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 3,
          mapSamples: 16000,
          mapBrightness: 1.2,
          baseColor: [1, 1, 1],
          markerColor: [251 / 255, 100 / 255, 21 / 255],
          glowColor: [1, 1.2, 1.2],
          markers: [],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.005;
            state.width = width * 2;
            state.height = width * 2;
          },
        });
  
        setTimeout(() => {
          if (canvasRef.value) {
            canvasRef.value.style.opacity = '1';
          }
        });
  
        onBeforeUnmount(() => {
          globe.destroy();
          window.removeEventListener('resize', onResize);
        });
      });
  
      return {
        canvasRef,
      };
    },
  };
  </script>
  