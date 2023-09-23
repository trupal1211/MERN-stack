
const users = [
   {firstName: "Aditi", lastName: "Sharma",age: 25,gender: "female"},
   {firstName: "Arnav",lastName: "Singh",age: 27,gender: "male"},
   {firstName: "Chhavi",lastName: "Mehta",age: 23,gender: "female"},
   {firstName: "Dhruv",lastName: "Agarwal",age: 28,gender: "male"},
   {firstName: "Eesha",lastName: "Gupta",age: 22,gender: "female"},
   {firstName: "Gaurav",lastName: "Dwivedi",age: 26,gender: "male"},
   {firstName: "Harsh",lastName: "Verma",age: 29,gender: "male"},
   {firstName: "Ishita",lastName: "Banerjee",age: 24,gender: "female"},
   {firstName: "Jatin",lastName: "Kumar",age: 20,gender: "male"}
 ];

 // foreach

 users.forEach((user) => {
    console.log(user.firstName)
 })

 // mapping

 let firstnames = users.map((user) =>{
    //return user.firstName 
    return user.firstName + " " + user.lastName
})
console.log(firstnames)

// filter

let femaleusers = users.filter((user)=>{
   return user.gender=='female'
})

console.log(femaleusers)

// i want to get only name of this
// chaing helps 

let females = users.filter((user)=>{
   return user.gender=='female'
}).map((user)=>{
   return user.firstName
})

console.log(females)


let eligible = users.filter((user)=>{
   return user.gender == 'male' && user.age>=21  // if(...)  return user;
}).map((user)=>{
   return user.firstName + " " + user.lastName
})

console.log(eligible)


// reduce

let salaries = [20000,45000,90000,35000,70000,110000,50000]

let result4 = salaries.reduce((p,c)=>{
   return p+c;
},0)




let maxsalary = salaries.reduce((max,c)=>{
   if(c>max)
   {
      max=c;
   }
   return max;
},0)

console.log(maxsalary)