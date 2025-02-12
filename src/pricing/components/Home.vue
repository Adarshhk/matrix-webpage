<template>
  <!-- <Hero id="hero" /> -->
   <SnowFall/>
  <Why/>
  <Tutorial />
  <Features id="features" />
  <Comparison />
  <Globe />
  <Insights />
  <Cart />
</template>

<script setup>
import Features from "./Features.vue";
import Tutorial from "./Tutorial.vue";
import Why from "./Why.vue";
import Comparison from "./Comparison.vue";
import Insights from "./Insights.vue";
import Globe from "./Globe.vue";
import Cart from "./Cart.vue";
import { ref } from "vue";
import SnowFall from "./SnowFall.vue";



const cart = ref([]);

const addToCart = (product) => {
  cart.value.push(product);
};

const removeFromCart = (productName) => {
  cart.value = cart.value.filter((item) => item.name !== productName);
};

const isInCart = (productName) => {
  return cart.value.some((item) => item.name === productName);
};

const toggleCartItem = (product) => {
  console.log(product);
  if (isInCart(product.name)) {
    removeFromCart(product.name);
  } else {
    addToCart(product);
  }
};
</script>
