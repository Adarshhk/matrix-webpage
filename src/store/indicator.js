import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";
import axios from "axios";

const useIndicatorStore = defineStore('indicator', () => {

    const loading = ref(false);
    const authToken = localStorage.getItem('token')
    const url = ref('https://usermatrixv3.punchmyorders.in/user/web/indicators')
    const indicators = ref([]);
    const selectedIndicator = ref(null);
    const indicatorBlog = ref('No details');
    const saleDate = ref(null);


    const getIndicators = async () => {

        try {
            if (authToken == '') return;
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });

            if (res.data) {
                indicators.value = res.data.data || [];
            }
            
        } catch (error) {
            console.log('error occured in Indicatorstore', error);
        } finally { loading.value = false; selectedIndicator.value = indicators.value[0] };
    }

    const fetchIndicatorById = (id) => {
        return indicators.value.filter(i => i.id == id)[0];
    }
    const getIndicatorById = async (id) => {
        loading.value = true;
        try {

            const res = await makeRequest('indicators', {}, id);
            if (res) {
                return res;
            }
            else return null;
        } catch (error) {
            console.log('error occured in Indicatorstore', error);
        } finally { loading.value = false };
    }

    getIndicators();
    return {fetchIndicatorById, loading, getIndicators, indicators, selectedIndicator, getIndicatorById, indicatorBlog }

})

export default useIndicatorStore;