// callback fun. is run for every single array element inside array.

let arr=[1,2,3,4]

//---------- foreach() -------------//           foreach( callback fun. )

// can't return value
// can't do chaining 

// get separate value    using console.log()


arr.forEach((x)=>{
   console.log(x*x)
})

 arr.forEach(function(n){
     console.log(n)
})




//------------ map() --------------//

//return a value
//do chain with map and filter

//return a array of result   using return 

let result1 =arr.map((x)=>{
   return x*x;
})
console.log(result1)




//---------- filter() --------------//

// return value (in array) as it is  , if condition in satisfied

// if want to modify return value than chain with MAP().

let result2 = arr.filter((n)=>{
    return n%2 == 0
})

console.log(result2)




//--------- reduce() ----------------//

// reduce an array into a single value
// deal with previousValue and currentValue. (unlike map and filter)
// must pass two args. in callback fun.

let a=[1,2,3,4]

let result3 = a.reduce((previousvalue,currentvalue)=>{
   return previousvalue + currentvalue;
}) 

console.log(result3)

// previous Value means value of last fun called.
