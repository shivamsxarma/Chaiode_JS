const name = "shivam ";
const repoCount = 58;

//ye string concatination ka example haii
// console.log(name + repoCount + " value");

//ye string interpolation haii
console.log(`hellow my name is ${name} and my repo count is ${repoCount}`)


//string save in key value pairs
const gameName = new String('shivam-sh')
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);


let  big = "sharma";
console.log(big);

var bigOne = big.slice(1,4)
console.log(bigOne)

console.log(gameName.charAt(0))

const url = "https://hitesh.com/hitesh%20chaudhary "
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))