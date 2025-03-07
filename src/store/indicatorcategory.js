import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";


const useIndicatorCategoryStore = defineStore('indicatorCategory', () => {

    const loading = ref(false);
    const indicatorCategory = ref([
        { id: 1, name: "Large Cap Stocks" },
        { id: 2, name: "Perfect Sell (short)" },
        { id: 3, name: "Profit Jump by 200%" },
        { id: 4, name: "Low debt companies" }
    ]);

    const selectedIndicatorCategory = ref(null);

    const getIndicatorCategory = async () => {
        loading.value = true;
        try {

            const res = await makeRequest('indicatorCategory', 'GET', {}, {}, {}, {}, {});
            if (res) {
                indicatorCategory.value = res || [];
            }
        } catch (error) {
            console.log('error occured in IndicatorCategorystore', error);
        } finally { loading.value = false };
    }

    const getIndicatorCategoryById = async () => {
        loading.value = true;
        try {

            const res = await makeRequest('indicatorCategory', 'GET', {}, {}, {}, {}, selectedIndicatorCategory.value);
            if (res) {
                indicatorCategory.value = res || [];
            }
        } catch (error) {
            console.log('error occured in indicatorcategoryStore', error);
        } finally { loading.value = false };
    }

    //getIndicators();
    return { loading, getIndicatorCategory, indicatorCategory, selectedIndicatorCategory }

})

export default useIndicatorCategoryStore;