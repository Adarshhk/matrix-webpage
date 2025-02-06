import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const usePricingStore = defineStore('pricing' , () => {

    const edgePricing = ref([
        {
            name : 'Signals',
            tag : 'TOP SELLING' , 
            price : 300,
            actual_price : 500,
            plans : [
                {
                    name : 'Individual',
                    tag : 'RECOMMENDED',
                    price : 5000,
                    plans : [
                        {
                            name : 'F&0',
                            tag : '50% OFF',
                            price : 5000,
                            actual_price : 3000,
                            features : [
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                            ],
                            products : ['screener' , 'indicator']
                        },
                        {
                            name : 'Equity',
                            tag : '',
                            price : 5000,
                            actual_price : 3000,
                            features : [
                                {
                                    title : '20,+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                            ],
                            products : ['screener' , 'indicator']
                        },
                        {
                            name : 'Commodity',
                            tag : '',
                            price : 5000,
                            actual_price : 3000,
                            features : [
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                            ],
                            products : ['screener' , 'indicator']
                        },
                        {
                            name : 'Stocks',
                            tag : '',
                            price : 5000,
                            actual_price : 3000,
                            features : [
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : true,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                                {
                                    title : '20,000+ of PNG & SVG graphics',
                                    is_enable : false,
                                },
                            ],
                            products : ['screener' , 'indicator']
                        },

                    ]
                },
                {
                    name : 'Trader',
                    tag : '',
                    price : 5000,
                    features : [
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                    ],
                    products : ['screener' , 'indicator']
                },
                {
                    name : 'Investor',
                    tag : '',
                    price : 5000,
                    features : [
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                    ],
                    products : ['screener' , 'indicator']
                }
            ]
        },
        {
            name : 'Screener',
            tag : '',
            price : '500',
            actual_price : 0,
            features : [
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
            ],
            products : ['screener' , 'indicator']
        },
        {
            name : 'Indicators',
            tag : '',
            price : '500',
            actual_price : 0,

        },
        {
            name : 'Webhook',
            tag : '' , 
            price : 300,
            actual_price : 500,
            plans : [
                
                {
                    name : 'Upto 5 Strategies',
                    tag : '',
                    price : 3000,
                    features : [
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,00 of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                    ],
                    products : ['screener' , 'indicator']
                },
                {
                    name : 'Upto 10 Strategies',
                    tag : '',
                    price : 5000,
                    features : [
                        {
                            title : '20000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                    ],
                    products : ['screener' , 'indicator']
                },
                {
                    name : 'Unlimited Strategies',
                    tag : '',
                    price : 10000,
                    features : [
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,0+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : true,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                        {
                            title : '20,000+ of PNG & SVG graphics',
                            is_enable : false,
                        },
                    ],
                    products : ['screener' , 'indicator']
                }
            ]
        },
    ]);
    const algoPricing = ref([
        {
            name : 'Essential',
            tag : '',
            price : 5000,
            features : [
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
            ],
            products : ['screener' , 'indicator']
        },
        {
            name : 'Evaluation',
            tag : '',
            price : 5000,
            features : [
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
            ],
            products : ['screener' , 'indicator']
        },
        {
            name : 'Elite',
            tag : '',
            price : 500,
            features : [
                {
                    title : '20,00 of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
            ],
            products : ['screener' , 'indicator']
        },
        {
            name : 'HNI',
            tag : '',
            price : 5000,
            features : [
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : true,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
                {
                    title : '20,000+ of PNG & SVG graphics',
                    is_enable : false,
                },
            ],
            products : ['screener' , 'indicator']
        },
    ]);
    
    const onePricing = ref({
        title : "Freebie",
        price : '5000',
        description : 'Ideal for individuals who need quick access to basic features',
        tag : 'Get 20% offwhen billed annually',
        features : [
            {
                title : '20,000+ of PNG & SVG graphics',
                is_enable : true,
            },
            {
                title : '20,000+ of PNG & SVG graphics',
                is_enable : true,
            },
            {
                title : '20,000+ of PNG & SVG graphics',
                is_enable : true,
            },
            {
                title : '20,000+ of PNG & SVG graphics',
                is_enable : false,
            },
            {
                title : '20,000+ of PNG & SVG graphics',
                is_enable : false,
            },
        ],
        products : [
            'webhook' , 'manual_trade' , 'signal' , 'screener' , 'indicator' , 'algo_trading'
        ]
    });

    const activePlan = ref(null);
    const packages = ref('monthly');

    const getPricing = async () => {
        const res = await axios.get('url');
        onePricing.value = res.data.one;
        edgePricing.value = res.data.edge;
        algoPricing.value = res.data.algo;
        activePlan.value = edgePricing.value[0];
    }


    return{
        onePricing,
        edgePricing,
        algoPricing,
        activePlan,
        packages,
    }
})


export default usePricingStore;