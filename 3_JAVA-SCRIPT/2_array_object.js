var arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof arr)
console.log(arr[1] , arr[5])

arr[3]=40
arr[-1]=60
arr[5]='trupal'
console.log(arr)


var intro=['trupal',19,'pedhla',8283845401]
console.log(intro)
console.log(typeof intro)



var item=['milk','butter','bread']
console.log(item)
console.log(typeof item)

//insert
item.push('biscuit')
console.log(item)

//delete
item.pop()
console.log(item)

//action at the middle of array
// arrayname.splice(index , how many element to delete , optional-replace or add with ....)
item.splice(0,2)
console.log(item)

item.splice(0,0,'chese','buttermilk')
console.log(item)

item.splice(1,1,'milk','rusk')
console.log(item)



var user={name:'trupal',age:18,address:'pedhla',phone_number:9384756401}
console.log(user)

user.name='trupal godhat'  //upadate    an exciting value
user.branch='it'           //add a new value   (when not found any key value pair for upadate) 
console.log(user)

delete user.branch         //delete a element 
console.log(user)




/*------------------ array of object ------------------------*/


var users=[ {name:'trupal',phone_number:9384756401},
            {name:'jay',phone_number:9458673821},
            {name:'duman',phone_number:9012346401},
            {name:'sahil',phone_number:8544576434},
            {name:'vivek',phone_number:8200567431},
            {name:'utsav',phone_number:3400987654},
            {name:'vatsal',phone_number:3434546612} ]
 console.log(users)
         
//insert-at last
users.push({name:'nayan',phone_number:9987656789})
console.log(users)

//update
users[3].name='druman'
users.splice(5,2)
console.log(users)

users.splice(5,0, {name:'utsav',phone_number:3400987654},
            {name:'vatsal',phone_number:3434546612})
console.log(users)




//random - value
var randomnumber=Math.random()*users.length;
var index=Math.floor(randomnumber)

console.log(index);
console.log(users[index].name)


