var hour_input = document.getElementById("hr")
var min_input = document.getElementById("min")
var sec_input = document.getElementById("sec")
var mili_input = document.getElementById("mili")
var interval;
function start(){
    interval = setInterval(timeout, 10)
    interval
    var str = document.getElementById("start")
    str.className = "disable"
    hour_input.disabled = true
    min_input.disabled = true
    sec_input.disabled = true
    mili_input.disabled = true
}
function pause(){
    interval = clearInterval(interval)
    interval
    var str = document.getElementById("start")
    str.className = "enable"
}
function reset(){
    hour_input.value = null
    min_input.value = null
    sec_input.value = null
    mili_input.value = null
    hour_input.disabled = false
    min_input.disabled = false
    sec_input.disabled = false
    mili_input.disabled = false
    pause()
}
function timeout(){
    mili_input.value--
    if(mili_input.value <= 0){
        sec_input.value--
        mili_input.value = 100
    }
    else if(sec_input.value <= 0){
        min_input.value--
        sec_input.value = 60
    }
    else if(min_input.value < 0){
        hour_input.value--
        min_input.value = 60
    }
    else if(hour_input.value < 0){
        alert("Countdown Completed!")
        reset()
    }
}
