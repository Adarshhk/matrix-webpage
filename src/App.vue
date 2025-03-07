<template>
 <RouterView/>

</template>

<script setup>
import { RouterView } from 'vue-router';




</script>

<style>
/* Add these styles to your global CSS */
body {

  /* Ensure the cursor remains visible */
  cursor: default;
}

/* Optional: Style for interactive elements */
a,
button {
  position: relative;
  z-index: 1;
}
</style>