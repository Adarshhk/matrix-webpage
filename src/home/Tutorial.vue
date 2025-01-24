<template>
    <div class="">
        
        <div class="pt-24 pb-16 w-[95%] mx-auto text-center ">
            
            <h2 class="md:text-[38px] text-[27px] font-bold text-white">
                Steps to Access Your Account
            </h2>
            <p class="font-openSans text-[#dfdfdf] text-[16px] md:text-[18px] md:mt-4 mt-8 text-center">Follow these simple steps to quickly and securely log into your account and start your trading journey without any hassle.</p>
        </div>

        <div class="gap-4 mx-auto w-[95%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            <div v-for="user in intendedUsers" class=" relative text-left rounded-xl p-2 md:p-4 group">
                <img :src="user.bg" class="absolute top-8 w-52 group-hover:-translate-y-4 transition-all duration-200" alt="">
                <img :src="user.img" alt="" class="w-8 mb-6 group-hover:-translate-y-4 transition-all duration-200">
                <h2 class="text-white text-[24px] font-bold mb-4 group-hover:-translate-y-4 transition-all duration-200">
                    {{ user.name }}
                </h2>
                <p class="text-[#dfdfdf] max-w-96 text-[16px] group-hover:-translate-y-4 transition-all duration-200 font-openSans">
                    {{ user.description }}
                </p>
                <button
                    class="hidden  lg:flex translate-y-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-[#00B852] font-bold gap-1">
                    {{ user.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
                <button class="lg:hidden text-[#00B852] flex gap-1 font-bold mt-3">
                    {{ user.btn }}
                    <img src="/src/assets/svg/arrow.svg" alt="">
                </button>
            </div>
        </div>

        
    </div>
</template>

<script setup>
import login from '/src/assets/svg/login.svg';
import link from '/src/assets/svg/link.svg';
import rocket from '/src/assets/svg/rocket.svg';
import bg1 from '/src/assets/img/01.png';
import bg2 from '/src/assets/img/02.png';
import bg3 from '/src/assets/img/03.png';

const intendedUsers = [
    { 
        name: 'Register', 
        img : login,
        bg : bg1,
        description : "Sign up quickly and securely to begin your trading journey." ,
        btn : 'Sign Up Now'
    },

    { 
        name: 'Connect Broker',
        img : link,
        bg : bg2,
        description: "Link your account for seamless strategy execution.",
        btn : 'Know how it works'
    },
    { 
        name: 'Trade',
        img : rocket,
        bg : bg3,
        description: "Start trading confidently using our powerful tools.",
        btn : 'Get Started'
    },
    
]

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
button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}


</style>