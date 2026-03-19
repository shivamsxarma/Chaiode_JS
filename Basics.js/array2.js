// to merge 2 arrays 

const marvelHeros = ["spiderman" , "hulk" , "thor"];
const dcHeros = ["batman ", "flash" , "superman"];
const allHeros = [...marvelHeros,...dcHeros]
console.log(allHeros)

//(...) is a spread operator

const arrayInArray = [1,2,3,[4,5,6],[6,7,8]]
const anotherArray = arrayInArray.flat(Infinity);
console.log(anotherArray);

//.from string ko array mai convert kar deta haii

console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log(Array.from({name:"shivam"})) // intresting interview topic ye empty array dega

//variables ko array mai convert karna haii to .of use krenge
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))