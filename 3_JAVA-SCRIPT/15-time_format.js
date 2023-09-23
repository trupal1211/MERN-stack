let data = document.getElementById('time-format')

function bydefault(){
    console.log(data.value)
}

function formating()
{
     let date = new Date(data.value)

     let format1 = {
        weekday: 'long',
        year: 'numeric',
        month:'long',  
        day:'numeric'
     }          
     
     let format2 = {
        weekday: 'long',
        year: 'numeric',
        month:'numeric', 
        day:'numeric'
     }    

     let format3 = {
        weekday: 'long',
        month:'long',  
        day:'numeric'
     }    

     console.log(date.toLocaleDateString('en',format1))
     console.log(date.toLocaleDateString('hi',format1))
     console.log(date.toLocaleDateString('en',format2))
     console.log(date.toLocaleDateString('en',format3))
}