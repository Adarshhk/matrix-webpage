import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest, baseApiUrl } from "../request/requests";
import axios from "axios";

const useIndicatorStore = defineStore('indicator', () => {

    const loading = ref(false);
    const authToken = localStorage.getItem('token')
    const url = ref(`${baseApiUrl.value}/user/web/indicators`)
    const indicators = ref([]);
    const selectedIndicator = ref(null);
    const indicatorBlog = ref('No details');
    const saleDate = ref(null);

    const cart = ref([]);
    const openSummaryModal = ref(false);
    const billingPeriod = ref('monthly')


    const getIndicators = async () => {

        try {
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });

            if (res.data && res.data?.data) {
                setProducts(res.data?.data || [])
            }
            
        } catch (error) {
            console.log('error occured in Indicatorstore', error);
        } finally { loading.value = false; selectedIndicator.value = indicators.value[0] };
    }


    function addTimelyPrice(products) {
        return products.map(product => {
          const timely_price = {};
          
          timely_price.monthly = {
            price: parseFloat((product.price_monthly || 0).toFixed(2)),
            offer_price: parseFloat((product.offer_price_monthly || 0).toFixed(2))
          };
          timely_price.quarterly = {
            price: parseFloat(((product.price_monthly * 3 || 0)).toFixed(2)),
            offer_price: parseFloat((product.offer_price_quarterly || 0).toFixed(2))
          };
          timely_price.yearly = {
            price: parseFloat(((product.price_monthly * 12 || 0)).toFixed(2)),
            offer_price: parseFloat((product.offer_price_yearly || 0).toFixed(2))
          };
          timely_price.lifetime = {
            price: parseFloat((product.price_lifetime || 0).toFixed(2)),
            offer_price: parseFloat((product.offer_price_lifetime || 0).toFixed(2))
          };

          return { ...product, timely_price };
        });
    }


    const setProducts = (data=[]) => {
        let processedData = data.map(({ strategies, ...rest }) => rest);
        let temp = addTimelyPrice(processedData)
        indicators.value = temp;
    };

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
    return {fetchIndicatorById, loading, getIndicators, indicators, selectedIndicator, getIndicatorById, indicatorBlog, openSummaryModal, billingPeriod, cart }

})

export default useIndicatorStore;