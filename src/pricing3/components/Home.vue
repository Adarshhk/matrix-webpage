<template>
  <!-- <Hero id="hero" /> -->
   <SnowFall/>
  <Why :addToCart="toggleCartItem" :cart="cart" :isInCart="isInCart" :setBillingPeriod="setBillingPeriod" :removeFromCart="removeFromCart"/>
  <Tutorial />
  <Features id="features" />
  <Comparison />
  <!-- <Globe /> -->
  <!-- <Insights /> -->
  <Cart :cart="cart" :billingPeriod="billingPeriod" :addToCart="toggleCartItem" :removeFromCart="removeFromCart"/>

  <!-- <Plans />
  <Plans2 /> -->


</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStrategiesStore } from "../../store/strategies";
import Features from "./Features.vue";
import Tutorial from "./Tutorial.vue";
import Why from "./Why.vue";
import Comparison from "./Comparison.vue";
import Insights from "./Insights.vue";
// import Globe from "./Globe.vue";
import Cart from "./Cart.vue";
import { ref } from "vue";
import SnowFall from "./SnowFall.vue";

// import Plans from "./Plans.vue";
// import Plans2 from "./Plans2.vue";


const strategiesStore = useStrategiesStore();
const { billingPeriod , cart} = storeToRefs(strategiesStore);

const addToCart = (product) => {
  cart.value.push(product);
};

const removeFromCart = (product) => {
  cart.value = cart.value.filter((item) => item.product_id != product.product_id);
  // console.log(cart.value)
};

const isInCart = (productID) => {
  return cart.value.some((item) => item.product_id === productID);
};

const toggleCartItem = (product) => {
  if (isInCart(product.product_id)) {
    removeFromCart(product.product_id);
  } else {
    addToCart(product);
  }
};


const setBillingPeriod = (period) => {
  billingPeriod.value = period
}
</script>
