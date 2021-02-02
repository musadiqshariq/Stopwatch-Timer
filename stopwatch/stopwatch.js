var min = 0
var sec = 0 
var mili = 0
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var mili_heading = document.getElementById("mili")
var interval;
function timeout(){
    mili++
    mili_heading.innerHTML = mili
    if(mili >= 100){
        sec++
        sec_heading.innerHTML = sec
        mili = 0
    }
    else if(sec >= 60){
        min++
        min_heading.innerHTML = min
        sec = 0
    }
    }
function start(){
    interval = setInterval(timeout, 10)
    interval
    var str = document.getElementById("start")
    str.className = "disable"
}
function pause(){
    interval = clearInterval(interval)
    interval
    var str = document.getElementById("start")
    str.className = "enable"
}
function reset(){
    min = 0
    sec = 0
    mili = 0
    min_heading.innerHTML = 0
    sec_heading.innerHTML = 0
    mili_heading.innerHTML = 0
    pause()
}