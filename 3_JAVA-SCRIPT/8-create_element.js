let users = [] 

function add()
{
  let name=document.getElementById('name')
  let email=document.getElementById('email')

  let user = {
    name:name.value,  
    email:email.value
  }

  addUser(user);  //to check if user exist or not
  displayUser();  
}


function addUser(user)
{
    let checkuser = users.filter((currentUser)=>{
        return currentUser.email == user.email
    })

    if(checkuser.length == 0){
    users.push(user)
    notifyUserAdded();
    }
    else{
      //alert('user already exist')
      notifyUserExist();
    }
}

function notifyUserAdded()
{
  let alert_added = document.getElementById('alert-added')

  alert_added.classList.add('alert-sucess')
  alert_added.classList.remove('alert-none')

  setTimeout(()=>{
    alert_added.classList.add('alert-none')
    alert_added.classList.remove('alert-sucess')
  },2000)
}

function notifyUserExist()
{
  let alert_added = document.getElementById('alert-exist')

  alert_added.classList.add('alert-danger')
  alert_added.classList.remove('alert-none')

  setTimeout(()=>{
    alert_added.classList.add('alert-none')
    alert_added.classList.remove('alert-danger')
  },2000)
}


function displayUser()
{
    let userscontainer=document.getElementById('users')
    userscontainer.innerText=''  //because clean everything includeing tag
    
   users.map((a)=>{
        let userDiv=document.createElement('div')
        let nameElement=document.createElement('p')
        let emailElement=document.createElement('p')
    
        userscontainer.appendChild(userDiv)
        userDiv.classList.add('user')

        nameElement.innerText=a.name
        emailElement.innerText=a.email
        
        userDiv.appendChild(nameElement)
        userDiv.appendChild(emailElement)
    })
}

// access a parent element and create a child element/div and append it on parent element also add a class using classlist
