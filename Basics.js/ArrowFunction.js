// const user = {
//     username:"shivam ",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome at mt website`)
//         console.log(this)
//     }




// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const chai = function (){
//     let username = "shivam"
//     console.log(this.username)
// }



// chai()

//arrow function

const chai =  () =>{
    let username = "shivam"
    console.log(this.username)
}

// chai()

//simple arrow function 
// const addtwo =  (num1 , num2)=>{
//     return num1+num2
// }


//advance arrow function

// const addtwo =  (num1 , num2) =>  num1+num2

//curly braces use karoge to return lagana padega paranthesis lagaoge
// to nahi karna pdega

// const addtwo =  (num1 , num2) =>  (num1+num2)

//object karna hua too ( )lagado

const addtwo =  (num1 , num2) =>  ({username:"shivam"})




console.log(addtwo(5,5))