import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";
import axios from "axios";

const useProductsStore = defineStore('products', () => {

    const logged = ref(false);
    const authToken = localStorage.getItem('token')
    const url = ref('https://usermatrixv3.punchmyorders.in/user/products')
    const products = ref([]);

    const getProducts = async () => {

        try {
            if (authToken == '') return;
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });
            
            if (res.data) {
                products.value = res.data.data || [];
                console.log(products.value)
                logged.value = true
            }
            
        } catch (error) {
            console.log('error occured in productStore', error);
        } 
    }

    const isPurchased = (id) => {
       return products.value.some(prod => prod.product_id == id)
    }
    getProducts();
    return { getProducts, products ,logged , isPurchased}

})

export default useProductsStore;