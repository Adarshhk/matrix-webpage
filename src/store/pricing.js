
import axios from "axios";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { baseApiUrl } from "../request/requests";

const usePricingStore = defineStore('pricing', () => {
    const authToken = localStorage.getItem('token');
    const url = ref(`${baseApiUrl.value}/user/web/products`);
    const selectedPriceType = ref('yearly');

    // Store raw response data
    const rawPlans = ref([]);

    // Helper function for parsing features
    const parseFeatures = (description) => {
        try {
            return JSON.parse(description) || [];
        } catch {
            return [];
        }
    };

    // Reactive refs for filtered data by category
    const webhook = ref([]);
    const signals = ref([]);
    const screener = ref([]);
    const indicators = ref([]);
    const matrixOne = ref({});
    const matrixAlgo = ref([]);
    const matrixEdge = ref([]);

    // Main pricing structure refs
    const activePlan = ref(null);
    const packages = ref('monthly');

    const edgePricing = ref([
        {
            name: 'Signals',
            tag: 'TOP SELLING',
            price: 300,
            actual_price: 500,
            product_id: 0,
            plans: [
                {
                    name: 'Individual',
                    tag: 'RECOMMENDED',
                    product_id: 0,
                    price: 5000,
                    plans: [
                        {
                            name: 'F&O',
                            product_id: 0,
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
                            product_id: 0,
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
                            product_id: 0,
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
                            product_id: 0,
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
                    product_id: 0,
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
                    product_id: 0,
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
            product_id: 0,
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
            product_id: 0,
        },
        {
            name: 'Webhook',
            tag: '',
            price: 30,
            actual_price: 500,
            product_id: 0,
            plans: [

                {
                    product_id: 0,
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
                    product_id: 0,
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
                    product_id: 0,
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
            product_id: 0,
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
            product_id: 0,
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
            product_id: 0,
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
            product_id: 0,
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
        product_id: 0,
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

    // Function to update pricing data based on selectedPriceType
    const updatePricingData = () => {
        // Filter raw data based on selectedPriceType
        webhook.value = rawPlans.value.filter(plan =>
            plan.category_name === 'webhook' &&
            plan.price_type === selectedPriceType.value
        );

        signals.value = rawPlans.value.filter(plan =>
            plan.category_name === 'signals' &&
            plan.price_type === selectedPriceType.value
        );

        screener.value = rawPlans.value.filter(plan =>
            plan.category_name === 'screener' &&
            plan.price_type === selectedPriceType.value
        );

        indicators.value = rawPlans.value.filter(plan =>
            plan.category_name === 'indicator' &&
            plan.price_type === selectedPriceType.value
        );

        matrixAlgo.value = rawPlans.value.filter(plan =>
            plan.base_category_name === 'Matrix ALGO' &&
            plan.price_type === selectedPriceType.value
        );

        // Update Edge Pricing
        if (signals.value.length > 0) {
            edgePricing.value[0].actual_price = Math.min(...signals.value.map(item => item.offer_price));
            edgePricing.value[0].price = edgePricing.value[0].actual_price;
            edgePricing.value[0].product_id = signals.value[0]?.product_id;
            edgePricing.value[0].price_type = signals.value[0]?.price_type;
        }

        if (screener.value.length > 0) {
            edgePricing.value[1].price = screener.value[0].offer_price;
            edgePricing.value[1].product_id = screener.value[0]?.product_id;
            edgePricing.value[1].price_type = screener.value[0]?.price_type;
            edgePricing.value[1].features = parseFeatures(screener.value[0].description);
        }

        if (indicators.value.length > 0) {
            edgePricing.value[2].price = Math.min(...indicators.value.map(item => item.offer_price));
            edgePricing.value[2].product_id = indicators.value[0]?.product_id;
            edgePricing.value[2].price_type = indicators.value[0]?.price_type;
        }

        if (webhook.value.length > 0) {
            edgePricing.value[3].price = Math.min(...webhook.value.map(item => item.offer_price));
            edgePricing.value[3].product_id = webhook.value[0]?.product_id;
            edgePricing.value[3].price_type = webhook.value[0]?.price_type;

            // Update webhook plans
            webhook.value.forEach((item, i) => {
                if (i < edgePricing.value[3].plans.length) {
                    edgePricing.value[3].plans[i] = {
                        name: `Upto ${item.max_webhook_strategies} strategies`,
                        tag: item.is_recommended ? 'Recommended' : '',
                        price: item.offer_price,
                        product_id: item.product_id,
                        price_type: item.price_type,
                        features: parseFeatures(item.description),
                        products: edgePricing.value[3].plans[i].products
                    };
                }
            });
        }

        // Update signal plans
        if (signals.value.length > 0) {
            edgePricing.value[0].plans[0].plans = edgePricing.value[0].plans[0].plans.map(plan => {
                const matchingData = signals.value.find(data => data.product_name === plan.name);
                if (matchingData) {
                    return {
                        ...plan,
                        features: parseFeatures(matchingData.description),
                        price: matchingData.offer_price,
                        actual_price: matchingData.price,
                        tag: matchingData.is_recommended ? 'Recommended' : '',
                        product_id: matchingData.product_id,
                        price_type: matchingData.price_type
                    };
                }
                return plan;
            });

            edgePricing.value[0].plans = edgePricing.value[0].plans.map(plan => {
                const matchingData = signals.value.find(data => data.product_name === plan.name);
                if (matchingData) {
                    return {
                        ...plan,
                        price: matchingData.offer_price,
                        product_id: matchingData.product_id,
                        price_type: matchingData.price_type,
                        features: parseFeatures(matchingData.description),
                        tag: matchingData.is_recommended ? 'Recommended' : ''
                    };
                }
                return plan;
            });
        }

        // Update Algo Pricing
        if (matrixAlgo.value.length > 0) {
            algoPricing.value = algoPricing.value.map(plan => {
                const matchingData = matrixAlgo.value.find(data => data.title === plan.name);
                if (matchingData) {
                    return {
                        ...plan,
                        price: matchingData.offer_price,
                        product_id: matchingData.product_id,
                        price_type: matchingData.price_type,
                        features: parseFeatures(matchingData.description),
                        tag: matchingData.is_recommended ? 'Recommended' : ''
                    };
                }
                return plan;
            });
        }
    };

    // Watch for changes in selectedPriceType
    watch(selectedPriceType, () => {
        updatePricingData();
    });

    // Fetch and initialize data
    const getPricing = async () => {
        if (authToken == '') return;

        try {
            const res = await axios.get(url.value, { headers: { Authorization: authToken } });
            rawPlans.value = res.data.data;

            // Find and set matrix one data
            matrixOne.value = rawPlans.value.filter(plan =>
                plan.category_name == 'matrix one'
               
            )[0];

            if (matrixOne.value) {
                onePricing.value.product_id = matrixOne.value.product_id;
                onePricing.value.price_type = matrixOne.value.price_type;
            }

            // Update all pricing data based on selectedPriceType
            updatePricingData();
        } catch (error) {
            console.error('Error fetching pricing data:', error);
        }
    };

    // getPricing();

    return {
        rawPlans,
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
        screener,
        selectedPriceType
    };
})

export default usePricingStore;