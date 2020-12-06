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
    link.href = 'assets/favicon.svg';
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
    link.href = 'assets/favicon_blur.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
    clearTimeout(titletimeout);
    titletimeout = setTimeout(function(){
      document.title = 'I am Christiaan Zandbergen';
    }, 5000);

  }
});

/*Einde Functies om de favicon en title te veranderen*/






var link_to = document.getElementsByClassName("link_to");

function getHref(e) {
  var hrefLocation = e.toElement.dataset.hrefloc;

  if (hrefLocation == "me") {
    gotToPageMe();
  }else if (hrefLocation == "do") {
    gotToPageDo();
  }else if (hrefLocation == "work") {
    gotToPageWork();
  }else if (hrefLocation == "contact") {
    gotToPageContact();
  }

}

for (var i = 0; i < link_to.length; i++) {
  link_to[i].addEventListener('click', getHref, false);
}

function pageLoadAnim() {
  var main = document.getElementById("main");
  main.classList.remove("borderAmim");
  main.offsetWidth;// trigger a DOM reflow
  main.classList.add("borderAmim");
}

pageLoadAnim();

function scrollTo(where) {
  var mainwrap = document.getElementById("mainwrap");
  var pageDistance = mainwrap.children[0].offsetHeight;
  if (where == "me") {
    mainwrap.style.transform = "translateY(0px)";
  }else if(where == "do") {
    mainwrap.style.transform = "translateY(-" + pageDistance + "px)";
  }else if(where == "work"){
    mainwrap.style.transform = "translateY(-" + pageDistance*2 + "px)";
  }else if(where == "contact"){
    mainwrap.style.transform = "translateY(-" + pageDistance*3 + "px)";
  }
}

var mePageClass = document.getElementsByClassName("mePageClass");

gotToPageMe();

function gotToPageMe() {
  scrollTo("me");
  pageLoadAnim();
  removeEveryMeClass();
  for (var i = 0; i < mePageClass.length; i++) {
    mePageClass[i].style.opacity = "0";
    if (mePageClass[i].classList.contains("mePageLeft")) {
      mePageClass[i].offsetWidth;// trigger a DOM reflow
      mePageClass[i].classList.add("mePageAnimationLeft");

    }else{
      mePageClass[i].offsetWidth;// trigger a DOM reflow
      mePageClass[i].classList.add("mePageAnimationRight");
    }
  }
}

function removeEveryMeClass() {
  pageLoadAnim();
  for (var i = 0; i < mePageClass.length; i++) {
    mePageClass[i].classList.remove("mePageAnimationLeft");
    mePageClass[i].classList.remove("mePageAnimationRight");
    mePageClass[i].classList.remove("mePageAnimationLeftOut");
    mePageClass[i].classList.remove("mePageAnimationRightOut");
  }
}

function gotToPageDo() {
  scrollTo("do");
  pageLoadAnim();
  removeEveryMeClass();
  for (var i = 0; i < mePageClass.length; i++) {
    mePageClass[i].style.opacity = "1";
    if (mePageClass[i].classList.contains("mePageLeft")) {
      mePageClass[i].offsetWidth;// trigger a DOM reflow
      mePageClass[i].classList.add("mePageAnimationLeftOut");
    }else{
      mePageClass[i].offsetWidth;// trigger a DOM reflow
      mePageClass[i].classList.add("mePageAnimationRightOut");
    }
  }
}

function gotToPageWork() {
  scrollTo("work");
  pageLoadAnim();
}

function gotToPageContact() {
  scrollTo("contact");
  pageLoadAnim();
}




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

var menuHover = document.getElementById("menuHover");
var dimOverlay = document.getElementById("dimOverlay");

function menuHoverAnimIn() {
  dimOverlay.classList.add("dimHover");
}

function menuHoverAnimOut() {
  dimOverlay.classList.remove("dimHover");
}

menuHover.addEventListener('mouseenter', menuHoverAnimIn, false);
menuHover.addEventListener('mouseleave', menuHoverAnimOut, false);

var workCardHover = document.getElementsByClassName("workCardHover");

for (var i = 0; i < workCardHover.length; i++) {
  workCardHover[i].addEventListener('mouseenter', workCardHoveraAnimIn, false);
}

for (var i = 0; i < workCardHover.length; i++) {
  workCardHover[i].addEventListener('mouseleave', workCardHoveraAnimOut, false);
}

function workCardHoveraAnimIn(e) {
  e.toElement.children[2].currentTime = 0;
  e.toElement.children[2].play();
}

function workCardHoveraAnimOut(e) {
  e.fromElement.children[2].pause();
  e.fromElement.children[2].currentTime = 0;
}

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1.6,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
})
