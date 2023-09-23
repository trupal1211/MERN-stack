
let users = []  // this must be out-side the function 
                //otherwise everytime when fun. called users array became blank and not able to store all value 

function add()
{
  let name=document.getElementById('name')
  let email=document.getElementById('email')

  //console.log(name,email)
  
  let user = {
    name:name.value,  
    email:email.value
  }

  //to check that is email is already Exist or not
  
  let DoseUserExist = users.filter((user)=>{
       return email.value == user.email 
  })

  if(DoseUserExist==0)
     users.push(user)
  else
    console.log('user already Exist')

  console.log(users)

//   name.value=''
//   email.value=''
}