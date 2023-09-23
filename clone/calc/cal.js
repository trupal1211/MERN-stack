
function calculate()
{
   let cost=document.getElementById('cost').value
   let margin=document.getElementById('margin').value

   let revenue=((cost/(100-margin))*100).toFixed(2)
   let profit=((revenue - cost)).toFixed(2)

   //console.log(revenue,profit)

   document.getElementById('result').innerText = "Revenue = " + revenue + " rs\n" + "Profit = " + profit + " rs";
}


