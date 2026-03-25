// // if

// const isUserLoggedIn = true;
// const temprature = 41


// if(temprature<50){
// console.log("less than 50")
// }

// // < , > , <= , ==,!=,===

// const score = 200

// if(score>100){
//     let  POWER = "FLY";
//     console.log(`user power: ${POWER}`)
    
// }

const balance = 1000;
// if(balance>500) console.log("test");
// console.log("test2")

// if (balance<500 ) {
//     console.log("Less than")
// } 
// else if (balance <500){ 
//     console.log("less than 750")
// }
// else if (balance <900){ 
//     console.log("less than 900")
// }
// else{console.log("less than 1200")}

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard )  {
    console.log("allow to but course"); 
}

 if (loggedInFromEmail || loggedInFromGoogle){
 console.log("user logged in")
}
