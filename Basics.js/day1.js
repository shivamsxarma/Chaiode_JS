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
