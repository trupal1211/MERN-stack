// event bubbling - event are moving botten to upward position  
//                  because it inherit from it's parent 

document.getElementById('superparent').addEventListener('click',()=>{
    console.log('superparant clicked')
})
// try with this only 

document.getElementById('parent').addEventListener('click',()=>{
    console.log('parant clicked')
},true)

document.getElementById('child').addEventListener('click',()=>{
    console.log('child clicked')
})

// false - bydefault bubbling args. (optional)
// true - trickling args.

// Trickling event -  flow top to bottem 
// Trickling - reverse the process of bubbling

// first Tricking effect work then the bubbling effect work

// propogation - in which direction the flow is moving
// bubbling propogation - bottem to top
// Trickling propogation - top to bottem 


// to stop propogation - only one event called which is  clicked
//                     - don't want to flow the thinds from here


// e.stopPropagation(); 
// if in all block having this - then no means on true or false

document.getElementById('superparent').addEventListener('click',(e)=>{
    console.log('superparant clicked')
    e.stopPropagation(); 
})

document.getElementById('parent').addEventListener('click',(e)=>{
    console.log('parant clicked')
    e.stopPropagation(); 
})

document.getElementById('child').addEventListener('click',(e)=>{
    console.log('child clicked')
    e.stopPropagation(); 
})