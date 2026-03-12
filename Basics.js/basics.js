

//use console.log("hellow js !") to print anything
console.log("hellow,world!");
 var fname = "shivam";
 console.log( "my name is -- " ,  fname);
 fname = 52;
 console.log("my age is",fname);

 //function
 function addNum(num1 , num2){
    var result = num1*num2;
     console.log(result)
 }

// console.log(addNum(2,2)); aase krenge to undefine aayega
addNum(10,5);
addNum(10,3);
addNum(10,6);
addNum(10,8);
addNum(10,9);  

//conditions
// age eligibility
var age =18;
if(age>=18){
    console.log("you are allowed to vote");
}

else if(age>=17){
    console.log("you are not allowed to vote");
}
else if(age>=16)
{
      console.log("you are nojjt allowed to vote")
}
//loops
//for loop

for(var i = 1; i<=10;i++){
console.log("the value is",i)
}