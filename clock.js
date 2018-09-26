// The hex clock on page 2 is a hex code that reflects the time of day in #hhmmss format instead of hh:mm:ss format. The background color of the screen is then changed based on the hex code which is created by the current time.
var setTime;
var body = document.getElementsByTagName('body')[0]
var clock = document.getElementById('clock')
var color;
var navbar = document.getElementById('navbar')
function startTime(){
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
clock.innerHTML = h + ":" + m + ":" + s
body.style.backgroundColor = '#' + h + m + s
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function start(){
setInterval(function(){
  startTime()}, 1000)
}
//
window.addEventListener('load', start)

//
// body.style.backgroundColor = '#' + color
clock.style.margin = '20% 30%';
clock.style.fontSize = '10em';
clock.style.fontColor = 'white'

navbar.style.margin='200px 25%'
navbar.style.position = 'relative'
navbar.style.fontSize = '5em'
navbar.style.decoration = 'none';
// navbar.style.border = '2px solid'
