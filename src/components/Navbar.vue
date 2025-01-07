<template>
    <nav class="flex justify-between p-2 md:p-4 gap-2 w-full z-30 bg-[#161a1e]">
        <div class="flex items-center gap-3">
            <img src="/src/assets/svg/matrix-logo.svg" alt="logo" class="w-40 hidden lg:block">
            <!-- <img @click=toggleNav src="/src/assets/hamburger.svg" alt=""
                class="min-w-6 max-w-6 block md:hidden cursor-pointer"> -->
            <div class="flex bg-[#1D2125] rounded-full py-2 px-2 items-center">

                <img src="/src/assets/svg/sebi.svg" alt="">
                <div class="text-white text-xs ml-2 font-bold pl-1 pr-3">
                    <p>SEBI Registered</p>
                    <p>INH000019035</p>
                </div>
            </div>
        </div>
        <div class="md:flex justify-evenly hidden">
            <ul class="px-2 flex items-center text-sm font w-full gap-2 justify-evenly text-[#D6D6D6]">
                <li class=" cursor-pointer transition-all text-nowrap px-4 py-1 duration-200 hover:text-white"
                    @click="changeActiveItem(item.name)" v-for="item in navItems "><a :href="item.path">{{ item.name
                        }}</a></li>
            </ul>

            <!-- mobile -->
            <ul v-if="nav === true"
                class="text-sm w-full max-w-3xl  text-[#787878] fixed z-30 bg-white top-16 rounded-md p-2">

                <li :class="{ 'bg-[#222222] text-white': activeItem == item.name }"
                    class="py-2 lg:px-5 px-3 my-1 rounded-full cursor-pointer transition-all duration-200 "
                    @click="changeActiveItem(item.name)" v-for="item in navItems "><a :href="item.path">{{ item.name
                        }}</a>
                </li>
            </ul>

            <div class="flex w-full items-center relative">
                <a target="_blank" href="https://app.hifiinvesting.com/"
                    class="text-[#F3F8F9] animate text-sm lg:px-6 px-4 py-3 rounded-full bg-[#00B852] btn btn-anim shadow-md shadow-[#00b8539e]">
                    <div class="content vertical flex justify-center">
                        <div class="text">Sign Up / Login</div>
                        <div class="hover-text">Click Here</div>
                    </div>
                </a>
                
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const navItems = [
    { name: 'Pricing', path: '#hero' },
    { name: 'Product', path: '#features' },
    { name: 'Contact Us', path: '#why' },
    { name: 'News', path: '#media' },

]

const activeItem = ref('Home')

const changeActiveItem = (name) => {
    activeItem.value = name;
}

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value
    console.log(nav.value)
}
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
a:hover .vertical .hover-text,
a:hover .vertical .text {
  transform: translateY(-100%);
}

</style>