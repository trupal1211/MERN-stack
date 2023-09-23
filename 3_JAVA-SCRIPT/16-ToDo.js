let todos = []
let addtaskContainer = document.getElementById('add-task')
addtaskContainer.classList.add('d-non')

function displayAddTask()
{
    addtaskContainer.classList.remove('d-non')
}



function addTask(){
    addtaskContainer.classList.add('d-non')

    let taskinput = document.getElementById('taskinput')
    let dateinput = document.getElementById('dateinput')

    let temptodo = {
        task : taskinput.value,
        duedate : dateinput.value
    }

    todos.push(temptodo)

    //console.log(todos)

    renderToDos()
}

let taskcontainer = document.getElementById('todoscontainer') 

function renderToDos(){

    taskcontainer.innerHTML = ''

    todos.map((todo)=>{
        let card = document.createElement('div')
     card.classList.add('card')

     let cardflex = document.createElement('div')
     cardflex.classList.add('card-flex')

     let checkboxinput = document.createElement('input')
     checkboxinput.type = 'checkbox'
     checkboxinput.classList.add('checkbox')
     

     let taskinput = document.createElement('input')
     taskinput.value=todo.task
     taskinput.classList.add('task-edit')

     let duedate = document.createElement('div')
     duedate.classList.add('duedate')
     duedate.innerText = formatedDate(todo.duedate)

     taskcontainer.appendChild(card)
     card.appendChild(cardflex)
     cardflex.appendChild(checkboxinput)
     cardflex.appendChild(taskinput)
     card.appendChild(duedate)
    })    
}

function formatedDate(duedate){
    let data=new Date(duedate)
    let format = { weekday : 'long' , day: 'numeric' , month : 'long' }

    return data.toLocaleDateString('en',format)
}

