<template>
    <div class="">
        
        <div class="pt-24 pb-16 w-[95%] mx-auto text-center">
            
            <h2 class="md:text-[38px] text-[27px] font-bold text-white">
                Steps to Access Your Account
            </h2>
            <p class="font-openSans text-[#BBB8B8] text-[16px] md:text-[18px] md:mt-4 mt-8 text-center">Follow these simple steps to quickly and securely log into your account and start your trading journey without any hassle.</p>
        </div>

        <div class="gap-4 mx-auto w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="user in intendedUsers" class="bg-[#1D2125] relative border text-left border-[#2F2F2F] rounded-xl p-6 md:p-8">
                <img :src="user.bg" class="absolute top-8 w-52" alt="">
                <img :src="user.img" alt="" class="w-8 mb-6">
                <h2 class="text-white text-[24px] font-bold mb-4">
                    {{ user.name }}
                </h2>
                <p class="text-[#7F7F7F] max-w-96 text-[18px]">
                    {{ user.description }}
                </p>
            </div>
        </div>

        <div class="w-full text-center mt-10">
            <button class="btn btn-anim text-[#F3F8F9] text-sm w-[95%] md:w-1/2 lg:w-1/5 py-3 rounded-full bg-[#00B852] shadow-md shadow-[#00b8539e]">
                <div class="content vertical flex justify-center">
                        <div class="text font-semibold text-base font-openSans">Join Now</div>
                        <div class="hover-text font-semibold  text-base font-openSans">Get Started</div>
                    </div>
            </button>
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
        description : "Sign up quickly and securely to begin your trading journey." 
    },

    { 
        name: 'Connect Broker',
        img : link,
        bg : bg2,
        description: "Link your account for seamless strategy execution.",
    },
    { 
        name: 'Trade',
        img : rocket,
        bg : bg3,
        description: "Start trading confidently using our powerful tools.",
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