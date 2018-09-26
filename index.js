// You will create a single web page for a fake company. Use HTML and CSS to fully style it using modern design trends and page layout. Use JavaScript to create a modal to appear after a given amount of time on the page. You will need to fully style the modal too so think about what this modal will be used for. Is it a pop-up ad? Is it a prompt to get the user to enter their email address to sign up for the company newsletter? Is it a prompt to get the user to share this page on Facebook? You decide but make it look as professional as possible.
//

var setTime;
var modal = document.createElement('div')
var button = document.createElement('button')
var input = document.createElement('input')
var text = document.createElement('div')
var enter = document.createElement('button')
var article = document.createElement('div')
var home = document.getElementById('home')
var clock = document.getElementById('clock')
var p1 = document.createElement('div')
var heading = document.getElementById('heading')
function popup(){
  modal.style.height = '750px';
  modal.style.width = '75%';
  modal.style.margin= '15%';
  modal.style.marginLeft = '15%'
  modal.style.backgroundColor = 'lightblue';
  modal.style.backgroundImage = 'none'
  modal.style.zIndex = '3'
  modal.style.position = 'absolute';
  modal.style.opacity = '.7'
  document.body.appendChild(modal)

  button.style.height = '25px';
  button.style.width = '25px';
  button.style.backgroundColor = 'lightgrey';
  button.innerHTML = 'X';
  // button.style.position = 'relative';
  button.style.marginLeft = '97.25%';
  // button.style.marginBottom = '300px';
  // button.style.marginTop = '0px';
  modal.appendChild(button)


  home.style.marginLeft = '10%';
  home.style.fontSize = '3em';
  home.innerHTML = 'HOME';
  home.style.background = 'none';
  modal.appendChild(home)


  clock.style.marginLeft = '10%';
  clock.style.fontSize = '3em';
  clock.innerHTML = 'CLOCK';
  clock.style.background = 'none';
  modal.appendChild(clock)

  // navbar.style.border = '2px solid green';
  // navbar.style.textAlign = 'center';
  // navbar.style.backgroundColor = 'black';
  // navbar.style.color = 'white';
  // modal.appendChild(navbar)

  // text.style.position = 'relative';
  text.style.background = 'clear';
  text.style.border = '2px solid';
  text.style.width = '50%';
  text.style.margin= '20% auto';
  text.style.textAlign = 'center';
  text.innerHTML ='Please enter your e-mail address below to become part of our monthly newsletter! We will inform you of the flavors coming and going, and you will recieve coupons!';
  modal.appendChild(text)

  input.style.width ='30%';
  input.style.height = '3%';
  input.style.marginBottom = '500px';
  input.style.marginLeft = '35%'
  modal.appendChild(input)

  enter.style.height = '25px';
  // enter.style.width = '25px';
  enter.style.backgroundColor = 'lightgrey';
  enter.innerHTML = 'ENTER';
  // enter.style.marginLeft = '97.25%'
  modal.appendChild(enter)
}
article.style.border = '2px solid';
article.style.zIndex = '2';
article.style.position = 'absolute'
article.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
document.body.appendChild(article)

function start(){
  setTimeout(popup,3000)
}

button.addEventListener('click',function(){
  modal.style.display = 'none'
  button.style.display = 'none'
})
input.addEventListener('click', function(){
  input.value = ''
})
enter.addEventListener('click', function(){
  input.value = 'THANK YOU'
})
window.addEventListener('load', start)

p1.style.border = '2px solid';
p1.style.width = '50%'
p1.style.marginTop= '25%';
p1.style.marginLeft = '15%';
// p1.style.opacity = '0.5';
p1.style.background = 'none';
p1.style.zIndex = '2';
p1.style.position = 'absolute';
p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
document.body.appendChild(p1)
