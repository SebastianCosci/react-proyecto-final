const products = [
    {
        id: '1',
        name: 'Base Mac',
        price: '2000',
        category: 'bases',
        img: require("./img/base1.webp"), 
        stock: 25,
        description: 'Base con acabado mate para piel grasa',
    },
    {
        id: '2',
        name: 'Base Revlon',
        price: '1800',
        category: 'bases',
        img: require("./img/base2.webp"),
        stock: 20,
        description: 'Base hidratante para piel seca',
    },
    {
        id: '3',
        name: 'Base Maybelline',
        price: '1500',
        category: 'bases',
        img: require("./img/base3.webp"),
        stock: 30,
        description: 'Base con cobertura media',
    },
    {
        id: '4',
        name: 'Base L Oréal',
        price: '2200',
        category: 'bases',
        img: require("./img/base4.webp"),
        stock: 15,
        description: 'Base con SPF 30 para protección solar',
    },
    {
        id: '5',
        name: 'Base Clinique',
        price: '2500',
        category: 'bases',
        img: require("./img/base5.webp"),
        stock: 18,
        description: 'Base sin aceite para pieles sensibles',
    },
    {
        id: '6',
        name: 'Labial MAC',
        price: '1200',
        category: 'labiales',
        img: require("./img/labial1.webp"),
        stock: 40,
        description: 'Labial de larga duración con acabado satinado',
    },
    {
        id: '7',
        name: 'Labial Maybelline',
        price: '800',
        category: 'labiales',
        img: require("./img/labial2.webp"),
        stock: 35,
        description: 'Labial líquido de colores vibrantes',
    },
    {
        id: '8',
        name: 'Labial Revlon',
        price: '950',
        category: 'labiales',
        img: require("./img/labial3.webp"),
        stock: 28,
        description: 'Labial en barra de larga duración',
    },
    {
        id: '9',
        name: 'Labial NARS',
        price: '1800',
        category: 'labiales',
        img: require("./img/labial4.webp"),
        stock: 22,
        description: 'Labial mate de alta pigmentación',
    },
    {
        id: '10',
        name: 'Labial NYX',
        price: '750',
        category: 'labiales',
        img: require("./img/labial5.webp"),
        stock: 33,
        description: 'Labial cremoso de colores variados',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
}
