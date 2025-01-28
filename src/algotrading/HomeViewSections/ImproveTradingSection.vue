<script setup>
import LottieComponent from '../../home/utils/LottieComponent.vue';
import animation from '../animation.vue';
</script>

<template>
  <section class=" mt-16 lg:mt-24">
    <div class="">
      <h1 class=" font-bold text-center text-white text-[31px] xl:text-[38px]">
        Improve the way you do trading
      </h1>
    </div>

    <div class="mt-10 xl:mt-16 flex flex-col xl:flex-row items-center justify-between">
      <div class="flex flex-col items-center space-y-6 md:space-y-10 w-full xl:w-[50%]">
        <ul class="font-openSans font-normal text-[#dfdfdf] text-[16px] xl:text-[20px] space-y-4">
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" />
            <p class="font-openSans">
              <span class="font-bold font-openSans">Integrate</span>
              with platform across your business
            </p>
          </li>
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" /> 
            <p class="font-openSans">
              Discover actionable
              <span class=" font-bold font-openSans">strategies</span>
            </p>
          </li>
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" />
            <p class="font-openSans">
              <span class="font-openSans font-bold"
                >Get insights</span
              >
              of what you achieved today
            </p>
          </li>
        </ul>

        <div class="">
          <!-- <img src="/images/Macbook.png" alt="" class=" w-full xl:w-[90%]" /> -->
          <LottieComponent animationPath="/json/LaptopCounter.json"/>
        </div>

        <div class="">
          <img src="/images/Brokers.png" alt="" class=" w-full xl:w-[90%]" />
        </div>
      </div>

      <div class=" bg-[#00b852] w-full md:w-[85%] mt-10 xl:mt-0 px-8 py-6 md:py-14 rounded-2xl xl:w-[45%] 2xl:w-[40%] 3xl:w-[35%]">
        <form>
          <div class="text-center">
            <h1
              class=" font-bold text-white text-[27px] md:text-[38px]"
            >
              Get in touch with us
            </h1>
            <p class="font-openSans font-normal text-white text-[14px] md:text-[16px]">
              our team will contact you soon
            </p>
          </div>

          <hr class="border-dashed w-full opacity-25 my-5">

          <div class="space-y-3 md:space-y-5">
            <div class="flex flex-col items-start space-y-1">
              <label
                for="name"
                class="font-openSans font-normal text-white text-[14px] md:text-[16px]"
                >Full Name*</label
              >
              <input
                name="name"
                type="text"
                class="w-full bg-black bg-opacity-5 py-2 text-white md:py-3 rounded-md border-none focus:outline-none px-4"
              />
            </div>

            <div class="flex flex-col items-start space-y-1">
              <label
                for="number"
                class="font-openSans font-normal text-white text-[16px] md:text-[18px]"
                >Mobile No*</label
              >
              <input
                name="number"
                type="number"
                class="w-full bg-black bg-opacity-5 text-white py-2 md:py-3 rounded-md border-none  focus:outline-none px-4"
              />
            </div>

            <div class="flex flex-col items-start space-y-1">
              <label
                for="email"
                class="font-openSans font-normal text-white text-[16px] md:text-[18px]"
                >Email Id*</label
              >
              <input
                name="email"
                type="text"
                class="w-full bg-black bg-opacity-5 text-white py-2 md:py-3 rounded-md border-none focus:outline-none px-4"
              />
            </div>

            <div class="flex flex-col items-start space-y-1">
              <label
                for="dropdown"
                class="font-openSans font-normal text-white text-[16px] md:text-[18px]"
                >Do you have any prior experience in trading?</label
              >
              <select
                id="dropdown"
                name="options"
                placeholder="Choose from the list"
                class="w-full bg-[#00af4e] py-2 md:py-3 rounded-md border-none  text-white focus:outline-none px-4"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>

            <div class="">
              <button class=" font-bold bg-white w-full text-center py-2 md:py-3 rounded-md text-matrix-green text-[18px]">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>