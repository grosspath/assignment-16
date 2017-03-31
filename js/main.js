var countDownEl = document.querySelector('.timer')
var counterVal = 20
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

var buttonPushEl = document.querySelector('.push')
buttonPushEl.addEventListener('click', function(evt){
    var domElofEvent = evt.target
    // var textInsertion = document.querySelector('.background-bar_with-text')
    var inputText = document.querySelector('.information-style')
      // textInsertion.innerHTML = inputText.value
    var text_bar = document.querySelector('.background-bar_plain')
    text_bar.classList.add('wider')
    text_bar.innerHTML = inputText.value
    var hideNavBar = document.querySelector('.nav-elements')
    hideNavBar.classList.add('hide-it')
  })
