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

  // The styling of the Modal
  modal.style.height = '750px';
  modal.style.width = '75%';
  modal.style.margin= '15%';
  modal.style.marginLeft = '15%'
  modal.style.backgroundColor = 'lightblue';
  modal.style.backgroundImage = 'none'
  modal.style.zIndex = '3'
  modal.style.position = 'absolute';
  modal.style.opacity = '.9'
  document.body.appendChild(modal)

// The styling of the x out button
  button.style.height = '25px';
  button.style.width = '25px';
  button.style.backgroundColor = 'lightgrey';
  button.innerHTML = 'X';
  button.style.marginLeft = '97.25%';
  modal.appendChild(button)

// //Home page hperlink
//   home.style.marginLeft = '10%';
//   home.style.fontSize = '3em';
//   home.innerHTML = 'HOME';
//   home.style.background = 'none';
//   modal.appendChild(home)

//link to the clock page
  clock.style.marginLeft = '40%';
  clock.style.fontSize = '3em';
  clock.innerHTML = 'CLOCK';
  clock.style.background = 'none';
  modal.appendChild(clock)

//Text for explaining the input box
  text.style.border = '2px solid';
  text.style.width = '50%';
  text.style.margin= '20% auto';
  text.style.textAlign = 'center';
  text.innerHTML ='Please enter your e-mail address below to become part of our monthly newsletter! We will inform you of the flavors coming and going, and you will recieve coupons!';
  modal.appendChild(text)

//input box asking for the user's email address
  input.style.width ='30%';
  input.style.height = '3%';
  input.style.marginBottom = '500px';
  input.style.marginLeft = '35%'
  modal.appendChild(input)

//enter button styling
  enter.style.height = '25px';
  // enter.style.width = '25px';
  enter.style.backgroundColor = 'lightgrey';
  enter.innerHTML = 'ENTER';
  // enter.style.marginLeft = '97.25%'
  modal.appendChild(enter)
}

//function that tells the modal to pop up 1 second after the page loads
function start(){
  setTimeout(popup,3000)
}
window.addEventListener('load', start)

//when you click the x button it gets rid of the modal
button.addEventListener('click',function(){
  modal.style.display = 'none'
  button.style.display = 'none'
})

//when you click the input box it gets rid of the text so you don't have to delete 'Thank you' if you wanted to enter in more than one email
input.addEventListener('click', function(){
  input.value = ''
})

//eventlistener that when you click the enter button 'Thank you' pops up in the input box
enter.addEventListener('click', function(){
  input.value = 'Thank You'
})

//1st div styling
article.style.marginTop = '100px';
article.style.marginLeft = '200px';
article.style.width = '25%';
article.style.border = '2px solid';
article.style.zIndex = '2';
article.style.position = 'absolute';
article.style.textAlign = 'center';
article.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
document.body.appendChild(article)


//2nd div styling
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
