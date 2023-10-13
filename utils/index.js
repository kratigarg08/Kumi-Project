export const prod = {
    prodName: 'Banana',
    price: '0.69',
    weight: '18 oz',
    prodImg: '/assets/icons/banana.svg',
}

const produce = [
    {
        prodName: 'Banana',
        price: '0.69',
        weight: '18 oz',
        prodImg: '/assets/icons/banana.svg',
    },
    {
        prodName: 'Banana',
        price: '0.69',
        weight: '18 oz',
        prodImg: '/assets/icons/banana.svg',
    },
]

export const categories = [
    {
        cName: 'Produce',
        cProds: produce,
    },
    {
        cName: 'Prepared Food',
        cProds: [prod, prod],
    },
]