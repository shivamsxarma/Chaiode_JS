const { log } = require("console")

//dates
let myDate = new Date()
console.log(myDate.toString() , "to string")
console.log(myDate.toDateString() , "toDateString")
console.log(myDate.toISOString() , "toISOString")
console.log(myDate.toJSON(), "toJSON")
console.log(myDate.toLocaleDateString() , "toLocaleDateString")
console.log(myDate.toLocaleString() , "toLocaleString")
console.log(myDate.toTimeString() ,  "toTimeString")
console.log(myDate.toUTCString() , "toUTCString")

// custom date
// let myCreatedDate = new Date(2026,2,26)
let myCreatedDate = new Date("2026-03-19")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString())

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())            
console.log(newDate.getTime())            
console.log(newDate.getMonth())            
