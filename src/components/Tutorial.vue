<template>
    <div class="">
        
        <div class="pt-24 pb-20 w-[95%] mx-auto ">
            
            <h2 class="text-[38px] font-bold text-white">
                Steps to Access Your Account
            </h2>
            <p class="font-openSans text-[#BBB8B8] text-[18px] mt-8">Follow these simple steps to quickly and securely log into your account and start your trading journey without any hassle.</p>
        </div>

        <div class="gap-4 mx-auto w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="user in intendedUsers" class="bg-[#1D2125] relative border text-left border-[#2F2F2F] rounded p-8">
                <img :src="user.bg" class="absolute top-8 w-52" alt="">
                <img :src="user.img" alt="" class="w-8 mb-6">
                <h2 class="text-white text-[24px] font-bold mb-6">
                    {{ user.name }}
                </h2>
                <p class="text-[#7F7F7F] max-w-96 text-[18px]">
                    {{ user.description }}
                </p>
            </div>
        </div>

        <div class="w-full text-center mt-10">
            <button class="btn btn-anim text-[#F3F8F9] text-sm w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
                <div class="content vertical flex justify-center">
                        <div class="text font-semibold text-base">Join Now</div>
                        <div class="hover-text font-semibold  text-base">Get Started</div>
                    </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import login from '../assets/svg/login.svg';
import link from '../assets/svg/link.svg';
import rocket from '../assets/svg/rocket.svg';
import bg1 from '../assets/img/01.png';
import bg2 from '../assets/img/02.png';
import bg3 from '../assets/img/03.png';

const intendedUsers = [
    { 
        name: 'Register', 
        img : login,
        bg : bg1,
        description : "Sign up in just a few clicks by providing required details. It’s simple, quick, and secure; it sets the foundation for your trading journey." 
    },

    { 
        name: 'Connect Broker',
        img : link,
        bg : bg2,
        description: "Connect your broker account seamlessly to enable automatic trading and execute your strategies with ease. We ensure smooth integration for hassle-free operation.",
    },
    { 
        name: 'Trade',
        img : rocket,
        bg : bg3,
        description: "Once set up, begin executing trades and using our powerful tools. With everything ready, you’re all set to make confident and informed decisions in the market.",
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