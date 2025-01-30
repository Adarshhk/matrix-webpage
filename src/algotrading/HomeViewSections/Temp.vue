<template>

<div class="mb-24 lg:mb-32 bgdot border border-[#ffffff55] rounded-lg mx-auto">
    <TechText/>

</div>

</template>

<script setup>
import TechText from '../../component/TechText.vue';

</script>

<style>
.bgdot {
  --dot-bg: #161a1e;
  --dot-color: white;
  --dot-size: .5px;
  --dot-space: 12px;
	background:
		linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
		var(--dot-color);
}
</style>