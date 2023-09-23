function convert()
{
    let total=document.getElementById('bill');
    let person=document.getElementById('person');
    let vpp=(total.value / person.value).toFixed(2);

   document.getElementById('result').innerText =  vpp + ' rs';

   total.value=''
   person.value=''
  
}

