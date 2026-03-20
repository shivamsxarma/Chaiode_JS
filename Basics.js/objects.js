// object literals 

const mysymbol = Symbol("key 1")
const js ={
    name:"shivam",
    "full name" : "shivamsharma",
    [mysymbol]:"mykey1",
    age:18,
    location:"jaipur",
    email:"shivamsxarma@gmaiil.com",
    isLoggedIn:false,
    lastLogIn:["monday","tuesday"],
}
//to access object
console.log(js.email) // first way
console.log(js["email"]) //secong and good way
console.log(js["full name"])

console.log(js[mysymbol]) // for accessing Symbol

//to change a value insige object
js.email="shivamFr@gmail.com";
console.log(js.email)
// Object.freeze(js) // it is use to freeze object so no one can change it
js.email="shivam00000@gmail.com";

console.log(js.email)

console.log(js)

js.greeting = function()
{
     console.log("hlw js user")
}
js.greeting()

// string object interpolation
js.greeting2 = function()
{
    console.log(`hellow js user , ${this.age }`)
}
js.greeting2()

