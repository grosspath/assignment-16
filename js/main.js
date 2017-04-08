var buttonPushEl = document.querySelector('.push')
buttonPushEl.addEventListener('click', function(evt){
    var domElofEvent = evt.target
    var inputText = document.querySelector('.information-style')
    var text_bar = document.querySelector('.background-bar_plain')
    text_bar.classList.add('wider')
    text_bar.innerHTML = inputText.value
    var hideNavBar = document.querySelector ('.nav-elements')
    hideNavBar.classList.add('hide-it')
    function clockTimer(ms){
      var totalSeconds = Math.floor(ms/1000)
      var minutes = Math.floor(totalSeconds/60)
      var seconds = totalSeconds - minutes * 60
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      return minutes + ':' + seconds
    }
    var counterVal = 1500000
    var intervalId = setInterval (function (){
      counterVal = counterVal - 1000
      if(counterVal === 0){
        clearInterval(intervalId)
      }
      var countDownEl = document.querySelector('.initialTimerView')
      var time = clockTimer(counterVal)
      countDownEl.innerHTML = time
      if (time === '0:00'){
        first = document.querySelector('.initialTimerView')
        second = document.querySelector('.clockComplete')
        third = document.querySelector('.background-bar_plain')
        first.classList.add('hide-it')
        second.classList.remove('hide-it')
        third.classList.add('hide-it')


      }
    }, 1000)
  })
