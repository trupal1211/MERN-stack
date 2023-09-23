function convert()
{
    let meter=document.getElementById('meter')
    console.log(meter) //get input field
    //to get value of input field - meter.value
    let cm=meter.value * 100;

   let result =  document.getElementById('result');
   let finalresult = meter.value + ' m is equals ' + cm + ' cm'
   result.innerText=finalresult
    
   //document.getElementById('result').innerText= meter.value + ' m is equals ' + cm + ' cm';

   //make input field blanck    or we can insert inside the input field
   meter.value='';  //value is blanck now
}

