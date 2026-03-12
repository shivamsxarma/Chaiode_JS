//ek function jab dusre function ko parameter mai lele usko higher order function khete haii


//simple function

// function meraPyaraFunction(num){
// return 2+3+num;
// }

// console.log(meraPyaraFunction(5))

//Higher order function

function meraPyaraFunction(udharKaFunction){
return udharKaFunction() + 40;
}


function cartoon() {
    return 10;
}

function meraEkOrFunction (){
    return 100;
} 
console.log(meraPyaraFunction(meraEkOrFunction))

