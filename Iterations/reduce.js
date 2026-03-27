const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc:${acc} and currval${currval}`)
//     return acc + currval
// },0)

// console.log(myTotal)

// const myTotal= myNums.reduce((acc,curr)=>acc+curr,0)

const shoppingCart = [
    {

    itemName: "js course",
    price: 3999,

},
    {

    itemName: "CPP course",
    price: 4999,

},
    {

    itemName: "Python course",
    price: 3599,

},
    {

    itemName: "DSA course",
    price: 7999,

}
]

const priceToPay= shoppingCart.reduce((acc,item)=>acc+ item.price,0)
console.log(priceToPay)