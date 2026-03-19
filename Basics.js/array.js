//array
const myarr = [1, 2, 3, 4, 5, 6, true, "shivam"];
console.log(myarr);

let myarr2 = new Array("shivam",2,5,10)
console.log(myarr2)

//ARRAY METHODS

myarr2.push(7,8,9)
console.log(myarr2)

myarr2.pop()
console.log(myarr2)

myarr2.pop()
console.log(myarr2)

myarr2.unshift(9)
console.log(myarr2)

myarr2.shift()
console.log(myarr2)


myarr2.shift()
console.log(myarr2)

// questions

myarr2.push(9,10,11)
console.log(myarr2)

console.log(myarr2.includes(10))
console.log(myarr2.indexOf(10))

const newarr = myarr2.join()


console.log(newarr)
console.log(myarr2)

console.log(typeof newarr)
console.log(typeof myarr2)

// slice and splice

console.log(typeof myarr2)
const slicedArr = myarr2.slice(1,4);
console.log("A", slicedArr)
console.log( myarr2)


console.log( "Before" , myarr2)
const splicedArr = myarr2.splice(1,4);
console.log("B", splicedArr)
console.log( myarr2)


