// age = 45;
// console.log(isAllowedToVote)

// console.log('value of age is ' , age , ' is allowed ?', isAllowedToVote(age) );

// var age = 12;

// let isAllowedToVote =  function (age){
//     return age >= 18;
// }

//    function isAllowedToVote (age){
//     return age >= 18;
// }

// norman function 
// age = 20;

// const isAllowedToVote = function (age){
//     return age >= 18;
// }
// console.log(isAllowedToVote(20))

// arrow function 


const isAllowedToVote =  (age) =>  age >= 18;
console.log(isAllowedToVote(20));

const UserAllowedToOpenBankAcc = (eligibility , minBalance) => eligibility>=18 && minBalance>=10000;
console.log(UserAllowedToOpenBankAcc(18,2000))

const fruit =  ['apple', 'banana' , 'orange' , 'pear' , 'peach'];
// console.log(fruit.indexOf('kiwi'))
// console.log(fruit.indexOf('apple'))
console.log(fruit)
console.log(fruit[3])
console.log(fruit[10])

// push kisi bhi array mai elements ko add kar deta haii
fruit.push('kiwi')
console.log(fruit)

// .length array ki total length batata haii
console.log(fruit.length)

// .include batata haii ki given element array mai hai ya nahii
console.log(fruit.includes('kiwi'))
console.log(fruit.includes('Kiwi'))
console.log(fruit.includes('mango'))
// const firstElement = fruit.shift();
// console.log(fruit)
// console.log( {firstElement})


// unshift  add kr deta haii elements ko array ke starting maii
fruit.unshift(1,2,3);
console.log(fruit);

//slice it give you copy of an array jaha se jaha tak kii

const firstElement = fruit.slice(2,5);
console.log(fruit)
console.log( {firstElement})

//pop last element nikalta haii

// console.log(fruit.pop());


// .indexof use karte hai index jan ne ke liye

console.log(fruit.indexOf('kiwi'))
console.log(fruit.indexOf('apple'))

console.log(fruit)


// to print all elements at array use loop 
// methord one 

// for( let i =0 ; i<fruit.length; i++){
//     console.log(fruit[i])  
// }

// methord 2 simple function se
// function printKardo(element){
//     console.log(element)
// }
// fruit.forEach(printKardo)

// methord 2.1 arrow function se

fruit.forEach ((element) => console.log(`---->> ${element}`));
// concatinate kara diya dono ko string ko or function ko $ sign see






