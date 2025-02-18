<template>
  <div class="min-h-screen  w-full relative pt-40">
    <div class="mx-5 flex flex-col lg:flex-row gap-8 px-0">


      <!-- Grid Background Images -->
      <div class="absolute inset-0 hidden lg:block">
        <img src="/src/assets/img/Grid.png" alt="Grid Pattern Left" class="absolute ml-24 left-0 top-[-100px]" />
        <img src="/src/assets/img/Grid.png" alt="Grid Pattern Right" class="absolute right-0 top-[-250px] " />
      </div>

      <!-- Left Column (100% on md and below, 70% on lg and above) -->
      <div class="w-full  p-8  xl:p-2 2xl:p-4 z-10 ">
        <div class="mb-12">
          <h1 class="text-[40px] font-extrabold mb-4">
            <span class="bg-gradient-to-r from-[#00b853] to-[#2fc1a7] bg-clip-text text-transparent">
              Understanding Option Trading: A Guide to Navigating the Market

            </span>
          </h1>

          <p class="text-[#dfdfdf] text-[14px] font-openSans mb-8">UPDATED ON: 23 Oct 2023</p>

          <img :src="blog1" alt="" class="my-8">
          <p class="text-[#dfdfdf] text-[16px] font-openSans">
            Option trading is a very helpful tool for traders and investors in the realm of financial markets. Options
            offer a variety of ways to reach your financial goals. Whether you want to hedge your risks, speculate on
            price movements, or generate additional income, options provide a wide array of strategies to achieve your
            financial goals. In this article, we'll look at basic concepts of option trading and why it's worthwhile.

          </p>
          <h2 class="text-white text-[27px] font-semibold font-openSans font-openSans mt-8">
            What is Option Trading?

          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            Option trading involves buying and selling contracts that give the holder the right, but not the obligation,
            to buy or sell an underlying asset at a predetermined price within a specified time frame. These contracts
            are known as "options." They are primarily of two types: call options and put options. Call options give the
            buyer the right to purchase an asset at a fixed price (strike price) before the option expires, and traders
            use them when they anticipate the asset's price will rise. Put options, on the other hand, give the buyer
            the right to sell an asset at a fixed price before the expiration date, and traders use them when they
            expect the asset's price to decline.
          </p>
        </div>

        <!-- First card with placeholder image -->
        <!-- <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img src="/src/assets/img/blog1.jpeg" alt="Placeholder" class="w-full h-full object-contain" />
          </div>
        </div> -->

        <div class="mb-8">
          <h2 class="text-white text-[27px] font-openSans font-semibold font-openSans mt-8">
            Features of Options

          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 list-disc space-y-2">

            <li>
              <p><span class="font-semibold font-openSans">Usages: </span>Options give traders access to a larger position for a
                smaller amount of capital, which can increase potential gains.
              </p>
            </li>
            <li>
              <p><span class="font-semibold font-openSans">Variety: </span>The strategies available with options range from
                conservative to incredibly speculative, providing them with some flexibility suitable for any risk
                appetite.

              </p>
            </li>
            <li>
              <p><span class="font-semibold font-openSans">Hedging Tool: </span>Options can act as insurance against unfavorable price
                movements in the underlying asset.

              </p>
            </li>
          </ul>


          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Why Trade Options?


          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            Option trading is popular for a number of reasons. It is a great risk management technique, as options are
            commonly used to hedge portfolios. For example, if you own equities and are concerned about a future
            decline, buying put options can assist minimize losses. Options also allow traders to create additional
            money by writing (selling) options, such as covered calls, which earn premiums. Furthermore, options are an
            excellent speculative tool, providing opportunities to bet on price movements without owning the underlying
            asset, offering high-profit potential.

          </p>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Strategies in Option Trading


          </h2>
          <ul class="text-[#dfdfdf] text-[16px] font-openSans mt-2 list-disc space-y-2">

            <li>
              <p><span class="font-semibold font-openSans">Covered Call: </span>Involves owning the underlying asset and selling call options to generate income.

              </p>
            </li>
            <li>
              <p><span class="font-semibold font-openSans">Protective Put: </span>Involves purchasing put options to safeguard against potential losses in an existing stock position.


              </p>
            </li>
            <li>
              <p><span class="font-semibold font-openSans">Straddles and Strangles: </span>These involve buying both call and put options to profit from significant price movements, regardless of direction.


              </p>
            </li>
            <li>
              <p><span class="font-semibold font-openSans">Iron Condor: </span>A strategy designed to profit from low volatility by selling both calls and puts with specific strike prices.


              </p>
            </li>
          </ul>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Risks to Consider
          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            While options offer significant benefits, they also come with risks. Buyers risk losing the premium paid if
            the option expires worthless. Additionally, options are inherently complex and require a good understanding
            of market movements and contract specifications. While leverage might be advantageous, it can also increase
            losses if the market goes against you. It is critical to approach option trading with a solid understanding
            of the risks.

          </p>
        </div>

        <!-- Second card with placeholder image -->
        <!-- <div class="mb-8">
          <div class=" xl:h-[400px] 2xl:h-[600px] bg-[#222426] rounded-lg overflow-hidden">
            <img src="/src/assets/img/placeholder.webp" alt="Placeholder" class="w-full h-full object-contain" />
          </div>
        </div> -->

        <div class="mb-8">
          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Getting Started with Option Trading

          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            To start with option trading, it is essential to educate yourself thoroughly. Understanding the basics, including terminology, strategies, and risks, is critical. Beginners should start small, beginning with simple strategies like covered calls or protective puts to gain confidence. Choosing a reliable trading platform with advanced tools, user-friendly interfaces, and educational resources is equally important. Before risking real money, it’s a good idea to practice with simulations and demo accounts to test your strategies and build experience.

          </p>

          <h2 class="text-white text-[27px] font-semibold font-openSans mt-8">
            Conclusion

          </h2>
          <p class="text-[#dfdfdf] text-[16px] font-openSans mt-2">
            Option trading is a powerful tool that can enhance your trading and investment portfolio. With its unique combination of flexibility, leverage, and risk management features, it opens up a world of possibilities for traders. However, success in option trading requires a solid understanding of strategies, continuous learning, and disciplined execution. If you’re ready to explore the potential of options, start with a well-thought-out plan and take advantage of this dynamic financial instrument.


          </p>
        </div>
      </div>

      <!-- Right Column (30%) - Sticky Form (visible only on lg and above) -->
      
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import blog1 from '/src/assets/img/blog1.jpeg'

const showPopup = ref(false);


</script>

<style scoped>
.from-blue-400\/40 {
  --tw-gradient-from: rgb(96 165 250 / 0.4);
}

.to-blue-600\/40 {
  --tw-gradient-to: rgb(37 99 235 / 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
