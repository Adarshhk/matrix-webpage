<template>
    <div class="bg-[#00B852] w-[95%] rounded-lg mt-24 mx-auto flex h-[60vh] md:h-[40vh] lg:h-[60vh] flex-wrap items-center xl:justify-between justify-center">
        <div class="text-center xl:text-left xl:px-10 px-4 xl:ml-10 xl:w-[50%]">
            
            <div class=" flex xl:justify-start items-center justify-center">
                <p class=" rounded-3xl font-semibold bg-white bg-opacity-10 border-[white] px-2 py-1 text-[14px] text-white mb-6">
                    #1 Community For All
                </p>
            </div>

            <h2 class="text-[27px] xl:text-[38px] font-bold text-white">
                Join our Matrix Community
            </h2>
            <p class="text-[#F3F8F9] text-[16px] font-openSans">
                Be a part of a vibrant community where people live the markets! Engage with like-minded users and request features that you want
            </p>
            <button class="bg-white rounded w-[80%] max-w-60 mt-10 font-bold text-[#00B852] py-3">
                <div class="content vertical flex justify-center">
                        <div class="text font-openSans">Join Now</div>
                        <div class="hover-text font-openSans">Click Here</div>
                    </div>
            </button>
        </div>
        <div class="xl:flex hidden h-full gap-2 relative mr-12">
            <div class="absolute z-30 top-1/3  text-white py-3 text-center w-full bg-gradient-to-r from-transparent via-[#00B852] to-transparent flex flex-col justify-center items-center">
                <h2 class="font-bold text-[38px]">
                    7000+
                </h2>
                <p class="text-[18px] font-light">
                    People Already Joined
                </p>
            </div>
            <div class="hidden 2xl:block">
                <Vue3Marquee :duration="25" :vertical="true" class="max-w-16 " :gradient="true" :gradientColor="[0, 184, 82, 1]" >
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