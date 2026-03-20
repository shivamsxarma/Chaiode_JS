const tinder = new Object()
 tinder.id="123abc"
 tinder.name="sammy"
 tinder.isloggedin = false
// console.log(tinder)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstName:"shivam",
            lastName:"sharma"

        }
    }
}
console.log(regularUser.fullname.userFullname.firstName)

const obj = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign({},obj,obj2)

const obj4 = {...obj,...obj2,...obj3}
console.log(obj3)


const users =[
    {
        id:1,
        email:"shivam.com",
    }
    ,
    {
        id:1,
        email:"shivam.com",
    }
    ,
    {
        id:2,
        email:"shivam.com",
    }
    ,
    {
        id:3,
        email:"shivam.com",
    }
]
console.log(users[1].email) 

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('isloggedin'))