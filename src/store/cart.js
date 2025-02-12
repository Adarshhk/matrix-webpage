import { defineStore } from "pinia";
import { ref } from "vue";

const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const addToCart = (product) => {
        cart.value.push(product)
    }

    const removeFromCart = (product) => {

        cart.value = cart.value.filter(p => p.name != product.name);
    }

    const isInCart = (productName) => {
        return cart.value.some((item) => item.name === productName);
    };

    return {
        cart,
        isInCart,
        addToCart,
        removeFromCart
    }
})

export default useCartStore;