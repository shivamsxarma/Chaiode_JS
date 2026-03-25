const userEmail = []
if (userEmail) {
    console.log("Got User Email");
    
}else{
    console.log("Dont get Email");
    
}

//falsy value
// false , 0 ,-0,BigInt , 0n , null , undefined, NaN

//iske alawa sab true values haii

// truthy values 
//"0" string maii 0 true value haii
//'false' ye bhi true haii ,,  " " ye bhi ,[]{}
//function(){} 

if (userEmail.length === 0){
    console.log("array is Empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined
//null value ki safety check karta haii 
let val1 ;
// val1 = 5??10;
// val1 = null ?? 10

val1 = undefined ?? 10 ?? 15

console.log(val1)

//ternary operator 
// condition=1;
// condition ? true :false

const iceTeaPrice = 100 
iceTeaPrice<=80 ? console.log("good price "):console.log("kya hai ye"
)
