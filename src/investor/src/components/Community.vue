
<!-- not needed -->
<template>
    
    <div class="bg-[#00B852] rounded-lg mt-24 mx-auto px-16 flex flex-wra items-center lg:justify-between justify-center h-[60vh]">
        <div class="">
            <h2 class="text-3xl md:text-[38px] font-bold text-white">
                Join our Matrix Community
            </h2>
            <p class="text-[#F3F8F9] text-[16px] mt-8 font-openSans">
                Step into a community where passion for the markets comes alive! Connect, share, and grow with others who are just as dedicated as you. Your voice matters—together, we shape the future.

            </p>
            <button class="bg-white rounded max-w-80 mt-10 font-bold text-[#00B852] py-3">
                Join Now
            </button>
        </div>
        <div class="md:flex h-full gap-2 relative hidden">
            <div class="absolute z-30 top-1/3 border-t border-b text-white py-3 text-center w-full bg-gradient-to-r from-transparent via-[#00B852] to-transparent flex flex-col justify-center items-center">
                <h2 class="font-bold text-[38px]">
                    7000+
                </h2>
                <p class="text-[18px] font-light">
                    People Already Joined
                </p>
            </div>
            <div>
                <Vue3Marquee :duration="25" :vertical="true" class="max-w-16" :gradient="true" :gradientColor="[0, 184, 82, 1]">
                    <img src="/src/assets/img/community/1 (1).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (2).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (3).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (4).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (5).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (33).png" alt="" class="my-2" >
                </Vue3Marquee>
            </div>
            <div>

                <Vue3Marquee :duration="25" :vertical="true" class=" max-w-16" direction="reverse" :gradient="true" :gradientColor="[0, 184, 82, 1]">
                    <img src="/src/assets/img/community/1 (6).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (24).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (30).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (9).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (10).png" alt="" class="my-2" >
                    <img src="/src/assets/img/community/1 (34).png" alt="" class="my-2" >
                </Vue3Marquee>
            </div>
            <Vue3Marquee :duration="25" :vertical="true" class=" max-w-16" :gradient="true" :gradientColor="[0, 184, 82, 1]">
                <img src="/src/assets/img/community/1 (22).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (12).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (13).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (14).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (15).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (32).png" alt="" class="my-2" >
            </Vue3Marquee>
            <Vue3Marquee :duration="25" :vertical="true" class=" max-w-16" :gradient="true" :gradientColor="[0, 184, 82, 1]" direction="reverse">
                <img src="/src/assets/img/community/1 (16).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (17).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (12).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (19).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (25).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (1).png" alt="" class="my-2" >
            </Vue3Marquee>
            <Vue3Marquee :duration="25" :vertical="true" class=" max-w-16" :gradient="true" :gradientColor="[0, 184, 82, 1]">
                <img src="/src/assets/img/community/1 (15).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (22).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (23).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (24).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (25).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (26).png" alt="" class="my-2" >
            </Vue3Marquee>
            <Vue3Marquee :duration="25" :vertical="true" class=" max-w-16" :gradient="true" :gradientColor="[0, 184, 82, 1]" direction="reverse">
                <img src="/src/assets/img/community/1 (26).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (27).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (28).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (29).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (30).png" alt="" class="my-2" >
                <img src="/src/assets/img/community/1 (31).png" alt="" class="my-2" >
            </Vue3Marquee>
        </div>
        <!-- <div class="justify-center items-center w-[40%] hidden lg:flex">
            <div class="-t border-b text-white py-3 text-center w-full bg-gradient-to-r from-transparent via-[#00B852] to-transparent flex flex-col justify-center items-center">
                <h2 class="font-bold text-[38px]">
                    7000+
                </h2>
                <p class="text-[18px] font-light">
                    People Already Joined
                </p>
            </div>
            
        </div> -->
        
    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

</script>