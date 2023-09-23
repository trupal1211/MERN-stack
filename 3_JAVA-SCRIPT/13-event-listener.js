// --------------------------- aam zindgi ----------------------------// 

function fun()
{
    console.log('button is click');
}

fun = () =>
{
    console.log('button is click 😊');
}
  

// ------------------------------ mentos zindgi -------------------------//

//using event listener that show so much information 

let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    console.log('button is clicked');
})

// another method

btn.addEventListener('click',printbtn); // here no parantheses , otherwise it automatically call.

function printbtn()
{
    console.log('btn is now pressed');
}



btn.addEventListener('click',(event)=>{
    //console.log(event.target)
    console.log(event.target.innerText);
})



//-----------------------------------------------------------------------//



let btn1 = document.querySelector('.btn') // select only one button
console.log(btn1)



let btns = document.querySelectorAll('.btn')
console.log(btns)                             // get array of all buttons

btns.addEventListener('click',(e)=>{
     console.log(e.target.innerText + "was clicked")
})
//  this work for only btn   because from array how it track that which button is clicked 

// for resolve this problem use FOREACH() method

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
            console.log(e.target.innerText + " was clicked")
         })
})


//---------------------------------------------------------------------------//


// ==> listeners

// mouseover
// mouseout
// keyup
// keydown



// => on one element you can apply more than one listners

let tf = document.getElementById('tf')

    tf.addEventListener('click',(e)=>{
            console.log("user is ready to entering the name....")
        })
    tf.addEventListener('keydown',(e)=>{
            console.log(e.key + " was clicking...")
         })


    tf.addEventListener('keyup',(e)=>{
            console.log(e.key + " was clicked")
         })


