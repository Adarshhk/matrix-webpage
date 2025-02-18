import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import usePricingStore from "./pricing";

const useCartStore = defineStore('cart', () => {
    const loading = ref(false);
    const cart = ref([]);
    const authToken = localStorage.getItem('token');
    const pricingStore = usePricingStore();
    const { selectedPriceType } = storeToRefs(pricingStore)

    const isInCart = (productName) => {
        return cart.value.some((item) => item.name === productName);
    };

    const addToCart = (product) => {
       
        if (isInCart(product.name)) return;
        else cart.value.push(product)
    }

    const removeFromCart = (product) => {

        cart.value = cart.value.filter(p => p.name != product.name);
    }

    
    return {
        loading,
        
        cart,
        isInCart,
        addToCart,
        removeFromCart
    }
})

export default useCartStore;