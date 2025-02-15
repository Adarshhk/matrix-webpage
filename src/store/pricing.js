
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const usePricingStore = defineStore('pricing', () => {
    const authToken = localStorage.getItem('token');
    const url = ref('https://vlqf88cf-8082.inc1.devtunnels.ms/user/products');
    const edgePricing = ref([
        {
            name: 'Signals',
            tag: 'TOP SELLING',
            price: 300,
            actual_price: 500,
            plans: [
                {
                    name: 'Individual',
                    tag: 'RECOMMENDED',
                    price: 5000,
                    plans: [
                        {
                            name: 'F&O',
                            tag: '50% OFF',
                            price: 5000,
                            actual_price: 3000,
                            features: [
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                            ],
                            products: ['screener', 'indicator']
                        },
                        {
                            name: 'Equity',
                            tag: '',
                            price: 5000,
                            actual_price: 3000,
                            features: [
                                {
                                    title: '20,+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                            ],
                            products: ['screener', 'indicator']
                        },
                        {
                            name: 'Commodity',
                            tag: '',
                            price: 5000,
                            actual_price: 3000,
                            features: [
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                            ],
                            products: ['screener', 'indicator']
                        },
                        {
                            name: 'Stocks',
                            tag: '',
                            price: 5000,
                            actual_price: 3000,
                            features: [
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: true,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                                {
                                    title: '20,000+ of PNG & SVG graphics',
                                    is_enable: false,
                                },
                            ],
                            products: ['screener', 'indicator']
                        },

                    ]
                },
                {
                    name: 'Trader',
                    tag: '',
                    price: 5000,
                    features: [
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                    ],
                    products: ['screener', 'indicator']
                },
                {
                    name: 'Investor',
                    tag: '',
                    price: 5000,
                    features: [
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                    ],
                    products: ['screener', 'indicator']
                }
            ]
        },
        {
            name: 'Screener',
            tag: '',
            price: '500',
            actual_price: 0,
            features: [
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
            ],
            products: ['screener', 'indicator']
        },
        {
            name: 'Indicators',
            tag: '',
            price: '500',
            actual_price: 0,

        },
        {
            name: 'Webhook',
            tag: '',
            price: 30,
            actual_price: 500,
            plans: [

                {
                    name: 'Upto 5 Strategies',
                    tag: '',
                    price: 3000,
                    features: [
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,00 of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                    ],
                    products: ['screener', 'indicator']
                },
                {
                    name: 'Upto 10 Strategies',
                    tag: '',
                    price: 5000,
                    features: [
                        {
                            title: '20000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                    ],
                    products: ['screener', 'indicator']
                },
                {
                    name: 'Unlimited Strategies',
                    tag: '',
                    price: 10000,
                    features: [
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,0+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: true,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                        {
                            title: '20,000+ of PNG & SVG graphics',
                            is_enable: false,
                        },
                    ],
                    products: ['screener', 'indicator']
                }
            ]
        },
    ]);
    const algoPricing = ref([
        {
            name: 'Essential',
            tag: '',
            price: 5000,
            features: [
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
            ],
            products: ['screener', 'indicator']
        },
        {
            name: 'Evaluation',
            tag: '',
            price: 5000,
            features: [
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
            ],
            products: ['screener', 'indicator']
        },
        {
            name: 'Elite',
            tag: '',
            price: 500,
            features: [
                {
                    title: '20,00 of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
            ],
            products: ['screener', 'indicator']
        },
        {
            name: 'HNI',
            tag: '',
            price: 5000,
            features: [
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: true,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
                {
                    title: '20,000+ of PNG & SVG graphics',
                    is_enable: false,
                },
            ],
            products: ['screener', 'indicator']
        },
    ]);

    const onePricing = ref({
        title: "Freebie",
        price: '5000',
        description: 'Ideal for individuals who need quick access to basic features',
        tag: 'Get 20% offwhen billed annually',
        features: [
            {
                title: '20,000+ of PNG & SVG graphics',
                is_enable: true,
            },
            {
                title: '20,000+ of PNG & SVG graphics',
                is_enable: true,
            },
            {
                title: '20,000+ of PNG & SVG graphics',
                is_enable: true,
            },
            {
                title: '20,000+ of PNG & SVG graphics',
                is_enable: false,
            },
            {
                title: '20,000+ of PNG & SVG graphics',
                is_enable: false,
            },
        ],
        products: [
            'webhook', 'manual_trade', 'signal', 'screener', 'indicator', 'algo_trading'
        ]
    });



    const webhook = ref([]);
    const signals = ref([]);
    const screener = ref([]);
    const indicators = ref([]);
    const matrixOne = ref({});
    const matrixAlgo = ref({});
    const matrixEdge = ref({});
    const activePlan = ref(null);
    const packages = ref('monthly');
    const plans = ref([]);
    
    const getPricing = async () => {
        if (authToken == '') return;
        const res = await axios.get(url.value, { headers: { Authorization: authToken } });

        plans.value = res.data.data;
        matrixOne.value = plans.value.filter(plan => plan.category_name == 'matrix one')[0];
        matrixAlgo.value = plans.value.filter(plan => plan.base_category_name == 'Matrix ALGO');
        matrixEdge.value = plans.value.filter(plan => plan.base_category_name == 'Matrix EDGE');

        console.log(matrixAlgo.value)
        webhook.value = plans.value.filter(plan => plan.category_name == 'webhook')
        indicators.value = plans.value.filter(plan => plan.category_name == 'indicator')
        signals.value = plans.value.filter(plan => plan.category_name == 'signals')
        screener.value = plans.value.filter(plan => plan.category_name == 'screener')
        
        edgePricing.value[0].actual_price = Math.min(...signals.value.map(item => item.offer_price));
        edgePricing.value[0].price = edgePricing.value[0].actual_price
        edgePricing.value[1].price = screener.value[0].offer_price
        edgePricing.value[2].price = Math.min(...indicators.value.map(item => item.offer_price));
        edgePricing.value[3].price = Math.min(...webhook.value.map(item => item.offer_price));


        for (let i = 0; i <= 2; i++) {
            edgePricing.value[3].plans[i] = {
                name: `Upto ${webhook.value[i].max_webhook_strategies} strategies`,
                tag : webhook.value[i].is_recommended ? 'Recommended' : '',
                price: webhook.value[i].offer_price,
                features: JSON.parse(webhook.value[i].description),
                products: edgePricing.value[3].plans[i].products
            };
        }

        edgePricing.value[0].plans[0].plans = edgePricing.value[0].plans[0].plans.map(plan => {
            const matchingData = signals.value.find(data => data.product_name === plan.name);
            if (matchingData) {
                
                plan.features = JSON.parse(matchingData.description);
                plan.price = matchingData.offer_price
                plan.actual_price = matchingData.price
                plan.tag = matchingData.is_recommended ? 'Recommended' : ''
            }
            
            return plan;
        });

        edgePricing.value[0].plans = edgePricing.value[0].plans.map(plan => {
            const matchingData = signals.value.find(data => data.product_name === plan.name)
            if(matchingData)
            {
                plan.price = matchingData.offer_price;
                plan.features = JSON.parse(matchingData.description)
                plan.tag = matchingData.is_recommended ? 'Recommended' : ''
            }

            return plan;
        })

        edgePricing.value[0].plans = edgePricing.value[0].plans.map(p => {
            if (p.name === 'Individual') {
                const prices = signals.value
                    .filter(item => item.title === p.name)
                    .map(item => item.offer_price); // Extract offer_price values
        
                if (prices.length > 0) {
                    p.price = Math.min(...prices);
                }
            }
            return p;
        });
        
        edgePricing.value[1].features = JSON.parse(screener.value[0].description);
        edgePricing.value[1].price = screener.value[0].offer_price;


        
        algoPricing.value = algoPricing.value.map(plan => {
            const matchingData = matrixAlgo.value.find(data => data.title === plan.name)
            if(matchingData)
            {
                plan.price = matchingData.offer_price;
                plan.features = JSON.parse(matchingData.description)
                plan.tag = matchingData.is_recommended ? 'Recommended' : ''
            }

            return plan;
        })
       

        // onePricing.value = res.data.one;
        // edgePricing.value = res.data.edge;
        // algoPricing.value = res.data.algo;
        // activePlan.value = edgePricing.value[0];
    }

    getPricing();
    return {
        onePricing,
        edgePricing,
        algoPricing,
        activePlan,
        packages,
        matrixOne,
        matrixAlgo,
        matrixEdge,
        webhook,
        signals,
        screener
    }
})


export default usePricingStore;