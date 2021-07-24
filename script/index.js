if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
}else{ready()}

function ready(){

increment()
decrement()
}
function increment(){
  let button = document.getElementById('increment-btn')
  button.addEventListener('click', increase)

}
let i=0

function increase(){
  if(i!=0)
  {i=i+1
  document.getElementById('count-el').innerText=i
  console.log(i)}else{
    i=1
    document.getElementById('count-el').innerText=i
    console.log(i)
  }
}
  function decrement(){
    let buttonn = document.getElementById('delete-btn')
    buttonn.addEventListener('click', deletee)
  }
  function deletee(){
  i=0
    document.getElementById('count-el').innerText=i
}
function countdown(){
  for(let i=0;i<=10;i++)
  console.log(i)
}
