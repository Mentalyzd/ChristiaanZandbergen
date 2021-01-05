
var mouseCursor = document.getElementById("cursor_effect");
window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

var cursorHover = document.getElementsByClassName("cursorHover");

for (var i = 0; i < cursorHover.length; i++) {
  cursorHover[i].addEventListener('mouseenter', cursorHoverAnimIn, false);
}

for (var i = 0; i < cursorHover.length; i++) {
  cursorHover[i].addEventListener('mouseleave', cursorHoverAnimOut, false);
}

function cursorHoverAnimIn() {
  mouseCursor.classList.add("cursorHoverEffect");
}

function cursorHoverAnimOut() {
  mouseCursor.classList.remove("cursorHoverEffect");
}


/* Functies om de favicon en title te veranderen*/
var vis = function(){
  var stateKey, eventKey, keys = {
    hidden: "visibilitychange",
    webkitHidden: "webkitvisibilitychange",
    mozHidden: "mozvisibilitychange",
    msHidden: "msvisibilitychange"
  };
  for (stateKey in keys) {
    if (stateKey in document) {
      eventKey = keys[stateKey];
      break;
    }
  }
  return function(c) {
    if (c) document.addEventListener(eventKey, c);
    return !document[stateKey];
  }
}();

var visible = vis();
var titletimeout;

vis(function(){
  if (vis()) {
    document.title = 'Well... Hello, handsome!';
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg';
    link.rel = 'shortcut icon';
    link.href = '../assets/favicon.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    clearTimeout(titletimeout);
    titletimeout = setTimeout(function(){
      document.title = 'Glad you are here.';
      setTimeout(function(){
        document.title = 'I am Christiaan Zandbergen';
      }, 2000);
    }, 2000);
  }else {
    var questions = ["Where are you going?", "Comeback! I wasn't done yet!", "See you later alligator!", "Hey! You are missing something out.", "Okay... bye then?", "See you soon, racoon!", "It has been emotional, bye!", "Bye bye, butterfly!", "Peace out!", "Catch you on the rebound!", "Hasta la vista, baby!", "I'll be back!", "Until next time!", "Next time, bring more cookies!", "See you on the internet!"]
    document.title = questions[Math.floor((Math.random() * questions.length))];
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg';
    link.rel = 'shortcut icon';
    link.href = '../assets/favicon_blur.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    clearTimeout(titletimeout);
    titletimeout = setTimeout(function(){
      document.title = 'I am Christiaan Zandbergen';
    }, 5000);
  }
});

/*Einde Functies om de favicon en title te veranderen*/
