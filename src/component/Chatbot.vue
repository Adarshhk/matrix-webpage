<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref, nextTick, watch } from "vue";
import LottieComponent from "../home/utils/LottieComponent.vue";
import useCartStore from "../store/cart";
import { storeToRefs } from "pinia";

const showChatbox = ref(false);
const showBot = ref(true);
const chatContainer = ref(null);

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

watch(cart.value, () => {
    if (cart.value.length > 0) {
        showBot.value = false;
    }
    else showBot.value = true;
})

const toggleChatbox = () => {

    showChatbox.value = !showChatbox.value
}

const scrollToBottom = async () => {
    await nextTick();
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
}

const messages = ref([
    {
        text: "Welcome to the Matrix advanced AI Technology. How can I help you?",
        isUser: false,
    }
]);
const options = ref([
    { label: "Best Plans for Me 🤩" },
    { label: "Plans with High Win Ratio 🥳" },
    { label: "Suggest me plan on basis of my capital🤷‍♂️" },
    { label: "Low Risk Strategy😊" },
]);

const showOptions = ref(true);

const handleOption = async (option) => {
    messages.value.push({ text: option.label, isUser: true });
    messages.value.push({
        text: "Here is some information about your choice.",
        isUser: false,
    });
    showOptions.value = false;
    await scrollToBottom();
};

const suggestMore = async () => {
    showOptions.value = true;
    await scrollToBottom();
};

const resetChat = async () => {
    messages.value = [
        {
            text: "Welcome to the Matrix advanced AI Technology. How can I help you?",
            isUser: false,
        }
    ];
    showOptions.value = true;
    await scrollToBottom();
};

// Watch for chatbox visibility to scroll to bottom when opened
watch(showChatbox, async (newValue) => {
    if (newValue) {
        await scrollToBottom();
    }
});
</script>

<template>
    <div v-if="showChatbox" class="fixed inset-0 z-50 flex items-end justify-end bg-[rgb(0,0,0,0.3)]">
        <div
            class="bg-[#161a1e] mb-10 md:mb-0 mr-4 p-6 rounded-xl min-h-[45rem] h-[70%] flex flex-col w-[95%] md:w-[30%]">
            <!-- Fixed Header -->
            <div class="flex justify-between items-start">
                <div class="flex items-center gap-2">
                    <div class="w-16">
                        <LottieComponent animationPath="/json/chatbot.json" />
                    </div>
                    <div class="leading-6 ">
                        <p class="leading-tight font-bold text-[#dfdfdf] text-[16px]">Matrix Ai</p>
                        <p class="leading-tight text-[12px] opacity-70 font-openSans text-[#dfdfdf]">Online</p>
                    </div>
                </div>
                <button @click="showChatbox = false" class="pi pi-times text-white"></button>
            </div>

            <!-- Scrollable Chat Area -->
            <div ref="chatContainer"
                class="bg-[#000000] custom-scrollbar w-full mt-4 rounded-lg p-4 flex-1 min-h-[32rem] overflow-auto">
                <!-- Chat Messages -->
                <div class="flex flex-col gap-4">
                    <div v-for="(message, index) in messages" :key="index" class="flex flex-col">
                        <!-- Sender Label -->
                        <span v-if="!message.isUser" class=" text-[18px] font-semibold flex items-center gap-2">

                            <p class="text-[#dfdfdf] text-[14px]">Matrix Ai</p>
                        </span>
                        <!-- Message Bubble -->
                        <div class="font-OpenSans px-4 py-3 rounded-xl text-[14px] font-semibold bg-[dfdfdf] w-fit"
                            :class="{
                                'self-end font-openSans bg-[white] text-[black] rounded-tr-none': message.isUser,
                                'text-[#dfdfdf] rounded-tl-none bg-[#ffffff22] font-OpenSans': !message.isUser,
                            }">
                            <p class="font-openSans">
                                {{ message.text }}
                            </p>
                        </div>
                    </div>

                    <!-- Options moved inside scrollable area -->
                    <div v-if="showOptions" class="flex flex-wrap gap-2">
                        <button v-for="(option, index) in options" :key="index"
                            class="text-[12px] font-bold px-4 py-2 font-openSans text-[#ff37df] border border-[#ff37df] rounded-full"
                            @click="handleOption(option)">
                            {{ option.label }}
                        </button>
                    </div>

                    <!-- Suggest More and Reset moved inside scrollable area -->
                    <div v-if="!showOptions" class="flex gap-4 sm-text">
                        <button
                            class="text-[12px] font-bold px-4 py-2 font-openSans text-[#ff37df] border border-[#ff37df] rounded-full"
                            @click="suggestMore">
                            Suggest Me More
                        </button>
                        <button class="px-4 py-2 font-openSans bg-[#ffffff11] bg-opacity-15 text-[#00b852] rounded-full"
                            @click="resetChat">
                            <i class="pi pi-refresh"></i>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button v-if="showBot" @click="toggleChatbox" class="z-50 fixed bottom-5 right-5">
        <div class="w-32 flex flex-col justify-center items-center">
            <LottieComponent animationPath="/json/chatbot.json" />
            <img src="/src/assets/svg/advisor.svg" alt="">
        </div>
    </button>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #ffffff22;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #ffffff22;
}

/* For Firefox */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #ffffff22 rgba(255, 255, 255, 0.1);
}
</style>