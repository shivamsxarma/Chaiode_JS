// // for of 
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6,7]

// for (const val of arr) {
//     console.log(val)
// }

// const greetings = "hellow world "
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`)
// }

// maps
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"united states")
// map.set('fr', "france")

// console.log(map)

//it always contain unique values and does not contain copy of strings

const map = new Map()
map.set('IN',"India")
map.set('USA',"united states")
map.set('fr', "france")
map.set('IN',"India")
map.set('USA',"united states")
map.set('fr', "france")


// console.log(map)

for (const [key,value] of map) {
    // console.log(key , value)
    
}

const myObj = {
    'game': 'NFS',
    'game2': 'spiderman'

}
// for (const [key,value] of myObj) {
    
// } not working

