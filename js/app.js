var countDownEl = document.querySelector('.background-bar')
var counterVal = 10
var intervalId = setInterval (function (){
  counterVal --
  countDownEl.innerHTML = counterVal + ':00'
if (counterVal < 10) {
  countDownEl.innerHTML = '0:0'+counterVal
}
if(counterVal === 0){
  clearInterval(intervalId)
}
}, 1000)
