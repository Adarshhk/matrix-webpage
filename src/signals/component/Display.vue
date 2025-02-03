<template>
    <div class="hidden md:flex my-24 bg md:h-[80vh] lg:h-[90vh] justify-end overflow-hidden items-center">
        <div class="h-full phone-bg w-1/3 flex justify-center">
            
                <img src="/src/assets/img/successfull.gif" alt="" class="w-20 h-20 mt-28">
            
        </div>
        <!-- <img src="/src/assets/img/phone.png" alt="" class="h-full"> -->

        <!-- <div class="  mr-[18%] mt-[6%]">
            <img src="/src/assets/img/successfull.gif" alt="" class="w-20 h-20 ">
        </div> -->
    </div>
    <div class="bg-mobile md:hidden h-[80vh] my-16 flex justify-center">
        <img src="/src/assets/img/successfull.gif" alt="" class="w-14 h-14 mt-56 mr-4">
    </div>

</template>

<script setup>
</script>

<style scoped>
.bg {

    background-image: url('/src/assets/img/signalhero2.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

}

.phone-bg {
    background-image: url('/src/assets/img/phone.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.bg-mobile {

    background-image: url('/src/assets/img/signaldisplaymobile.webp');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

}
</style>