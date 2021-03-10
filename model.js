/*
For hver side: 
    - hvilke data trengs for å tegne opp denne siden? 
        queries
    - hva kan man gjøre på denne siden? hva kan man endre?
        commands

 - Noe data er felles for flere sider
 - Alle inputs er også felt i modellen - disse kan vi lagre per side

*/

const model = {
    currentPage: 'productListingPage',
    // app: {
    //     currentPage: 'productListingPage',
    //     userName: 'terje',
    // },
    inputs: {
        productListingPage: {
            sortOrder: '',
            filter: '',
        },
        shoppingCartPage: {

        },
    },
    shoppingCart: [
    ],
    products: [
        {
            name: 'Audio-Technica ATH-M70X Studio Hodetelefon',
            productId: 1157800,
            price: 3190,
            category: 1,
        },
        {
            name: 'Svive Charon Gaming Headset Sort',
            productId: 1081299,
            price: 949,
            category: 1,
        },
        {
            name: 'Terjes TV',
            productId: 109,
            price: 10000,
            category: 2,
        },
    ],
    categories: [
        {name: 'Headset', id: 1},
        {name: 'TV', id: 2},
    ],
};