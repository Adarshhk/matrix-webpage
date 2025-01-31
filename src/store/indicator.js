import { defineStore } from "pinia";
import { ref } from "vue";
import { makeRequest } from "../request/requests";


const useIndicatorStore = defineStore('indicator' , () => {

    const loading = ref(false);
    const indicators = ref([
        {
            id : 1,
            img: '/src/assets/img/trade.png',
            title: 'Smoothed Gaussian Trend Filter [AlgoAlpha]',
            description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
            date: '24 Oct 2023',
            categoryId: 1
        },
        {
            id : 2,
            img: '/src/assets/img/trade.png',
            title: 'Smooth Gaussian Trend Filter [AlgoAlpha]',
            description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
            date: '24 Oct 2023',
            categoryId: 2
        },
        {
            id : 3,
            img: '/src/assets/img/trade.png',
            title: 'Smoothed  Trend Filter [AlgoAlpha]',
            description: 'Experience seamless trend detection and market analysis with the Smoothed Gaussian Trend Filter by AlgoAlpha!',
            date: '24 Oct 2023',
            categoryId: 3
        }
    ]);
    const selectedIndicator = ref(null);
    const indicatorBlog = ref('No details');
    const saleDate = ref(null);


    const getIndicators = async () => {
        loading.value = true;
        try {

            const res = await makeRequest('indicators' , {} , {});
            if(res) {
                indicators.value = res || [];
            }
        } catch (error) {
            console.log('error occured in Indicatorstore' , error);
        } finally { loading.value = false ; selectedIndicator.value = indicators.value[0]};
    }

    const getIndicatorById = async (id) => {
        loading.value = true;
        try {

            const res = await makeRequest('indicators' , {} , id);
            if(res) {
                return res;
            }
            else return null;
        } catch (error) {
            console.log('error occured in Indicatorstore' , error);
        } finally { loading.value = false};
    }

    //getIndicators();
    return {loading , getIndicators , indicators , selectedIndicator , getIndicatorById , indicatorBlog}

})

export default useIndicatorStore;