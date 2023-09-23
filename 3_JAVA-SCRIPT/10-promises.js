// JS is a asynchronous lang.
// it will excuite line by line
// But never wait for previous task to get completed 

console.log('task 1')

setTimeout(()=>{
    console.log('task 2')
},2000)                        // make time delay by 2s

console.log('task 3')



console.log('download start')

setTimeout(()=>{
    console.log('downloding...')
},4000)                        // make time delay by 2s

console.log('download complete')


// now, we want to wait untill and unless the task is done , Thatswhere Promises comes out


// ------------ Promises ------------- //

console.log('download start')

let startdownload = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('downloding...')
        resolve();
    },4000)
})

startdownload.then(()=>{
    console.log('download complete')  // this part excuit when task is done succesfully
},()=>{
    console.log('download failed')   // this part excuit when task did not complete succesfully
})
