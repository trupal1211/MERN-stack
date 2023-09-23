function roll()
{
  let dice=document.getElementById('dice')
  let number=document.getElementById('number')
 
//   console.log(dice)

dice.classList.add('roll-dice')
let audio=document.getElementById('audio')
audio.play();
number.innerText='  '  // when dice is rolling nothing will display.

setTimeout(()=>{
dice.classList.remove('roll-dice')
 number.innerText=Math.floor(Math.random()*6)
},1000)

}