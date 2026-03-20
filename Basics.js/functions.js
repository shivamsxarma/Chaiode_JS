function saymyname(){
    console.log("s")
console.log("h")
console.log("i")
console.log("v")
console.log("a")
console.log("m")
}

saymyname();

//2 numbers
function addNumbers(Number1, Number2){
    let result = Number1+Number2
    return function hii(){
      console.log("bss")
    }
}
// const result = addNumbers(3,5)
// result()

// console.log("result:",result)

function loginUserMessage (username = "sam"){
    if (!username ){
 console.log("Enter a valid username")
 return
    }
    return `${username} just logged in`
}
console.log( loginUserMessage("shivam"))
