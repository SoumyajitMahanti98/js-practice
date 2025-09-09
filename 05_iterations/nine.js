const num = [1,2,3,4];
const initialValue=0;
const newNum = num.reduce((accumalator,currentValue)=> accumalator + currentValue,initialValue);
console.log(newNum);
//another program...
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
