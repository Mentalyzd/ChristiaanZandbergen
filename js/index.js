var url = window.location;

if(url.hash === "#do") {
  setTimeout(function() {
    gotToPageDo();
  }, 100);
}

if(url.hash === "#work") {
  setTimeout(function() {
    gotToPageWork();
  }, 100);
}

if(url.hash === "#contact") {
  setTimeout(function() {
    gotToPageContact();
  }, 100);
}


var mijnPaginas = ["me", "do", "work", "contact"];
var currentPage = mijnPaginas[pageNumber];
var pageNumber = 0;

window.addEventListener('wheel', scrollLock);

var called = 0;
var timeout;

function scrollLock(event) {
  if (pageNumber == 0) {
    if (called == 0) {
      whenScroll(event);
      called = 1;
      setTimeout(function() {
        called = 0;
      }, 500);
    }
  }else if (pageNumber == 3) {
    if (called == 0) {
      whenScroll(event);
      called = 1;
      setTimeout(function() {
        called = 0;
      }, 500);
    }
  }else {
    if (called == 0) {
      whenScroll(event);
      called = 1;
      setTimeout(function() {
        called = 0;
      }, 3000);
    }
  }

}

function whenScroll(event) {
  if (event.deltaY < 0) {
    pageNumber--;
    if (pageNumber == 2) {
      gotToPageWork();
    }else if (pageNumber == 1) {
      gotToPageDo();
    }else if (pageNumber == 0) {
      gotToPageMe();
    }else if (pageNumber == -1) {
      pageNumber = 0;
    }
  }else if (event.deltaY > 0) {
    pageNumber++;
    if (pageNumber == 1) {
      gotToPageDo();
    }else if (pageNumber == 2){
      gotToPageWork();
    }else if (pageNumber == 3){
      gotToPageContact();
    }else if (pageNumber == 4) {
      pageNumber = 3;
    }
  }
}

window.addEventListener('resize', updateWindow);



function updateWindow() {
  var historyWindow = [];
  historyWindow.push(window.outerHeight);
  if (historyWindow[historyWindow.length - 2] != window.outerHeight) {
    if (pageNumber == 0) {
      gotToPageMe();
    }else if (pageNumber == 1) {
      gotToPageDo();
    }else if (pageNumber == 2) {
      gotToPageWork();
    }else if (pageNumber == 3){
      gotToPageContact();
    }
  }
}

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

function removeMainClasses() {
  document.body.classList.remove("mePageClassBody");
  document.body.classList.remove("doPageClassBody");
  document.body.classList.remove("workPageClassBody");
  document.body.classList.remove("contactPageClassBody");
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
var doPageClass = document.getElementsByClassName("doPageClass");
var workPageClass = document.getElementsByClassName("workPageClass");
var contactPageClass = document.getElementsByClassName("contactPageClass");

gotToPageMe();


function animMeIn() {
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

function animMeOut() {
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

function animDoIn() {
  for (var i = 0; i < doPageClass.length; i++) {
    doPageClass[i].style.opacity = "0";
    if (doPageClass[i].classList.contains("doPageLeft")) {
      doPageClass[i].offsetWidth;// trigger a DOM reflow
      doPageClass[i].classList.add("doPageAnimationLeft");
    }else{
      doPageClass[i].offsetWidth;// trigger a DOM reflow
      doPageClass[i].classList.add("doPageAnimationRight");
    }
  }
}

function animDoOut() {
  for (var i = 0; i < doPageClass.length; i++) {
    doPageClass[i].style.opacity = "1";
    if (doPageClass[i].classList.contains("doPageLeft")) {
      doPageClass[i].offsetWidth;// trigger a DOM reflow
      doPageClass[i].classList.add("doPageAnimationLeftOut");
    }else{
      doPageClass[i].offsetWidth;// trigger a DOM reflow
      doPageClass[i].classList.add("doPageAnimationRightOut");
    }
  }
}

function animWorkIn() {
  for (var i = 0; i < workPageClass.length; i++) {
    workPageClass[i].style.opacity = "0";
    if (workPageClass[i].classList.contains("workPageLeft")) {
      workPageClass[i].offsetWidth;// trigger a DOM reflow
      workPageClass[i].classList.add("workPageAnimationLeft");
    }else{
      workPageClass[i].offsetWidth;// trigger a DOM reflow
      workPageClass[i].classList.add("workPageAnimationRight");
    }
  }
}

function animWorkOut() {
  for (var i = 0; i < workPageClass.length; i++) {
    workPageClass[i].style.opacity = "1";
    if (workPageClass[i].classList.contains("workPageLeft")) {
      workPageClass[i].offsetWidth;// trigger a DOM reflow
      workPageClass[i].classList.add("workPageAnimationLeftOut");
    }else{
      workPageClass[i].offsetWidth;// trigger a DOM reflow
      workPageClass[i].classList.add("workPageAnimationRightOut");
    }
  }
}

function animContactIn() {
  for (var i = 0; i < contactPageClass.length; i++) {
    contactPageClass[i].style.opacity = "0";
    if (contactPageClass[i].classList.contains("contactPageLeft")) {
      contactPageClass[i].offsetWidth;// trigger a DOM reflow
      contactPageClass[i].classList.add("contactPageAnimationLeft");
    }else{
      contactPageClass[i].offsetWidth;// trigger a DOM reflow
      contactPageClass[i].classList.add("contactPageAnimationRight");
    }
  }
}

function animContactOut() {
  for (var i = 0; i < contactPageClass.length; i++) {
    contactPageClass[i].style.opacity = "1";
    if (contactPageClass[i].classList.contains("contactPageLeft")) {
      contactPageClass[i].offsetWidth;// trigger a DOM reflow
      contactPageClass[i].classList.add("contactPageAnimationLeftOut");
    }else{
      contactPageClass[i].offsetWidth;// trigger a DOM reflow
      contactPageClass[i].classList.add("contactPageAnimationRightOut");
    }
  }
}

function gotToPageMe() {
  removeMainClasses();
  document.body.classList.add("mePageClassBody");
  pageNumber = 0;
  scrollTo("me");
  pageLoadAnim();
  removeEveryMeClass();
  animMeIn();
  animDoOut();
  animWorkOut();
  animContactOut();
}

function gotToPageDo() {
  removeMainClasses();
  document.body.classList.add("doPageClassBody");
  pageNumber = 1;
  scrollTo("do");
  pageLoadAnim();
  removeEveryDoClass();
  animMeOut();
  animDoIn();
  animWorkOut();
  animContactOut();
}

function gotToPageWork() {
  removeMainClasses();
  document.body.classList.add("workPageClassBody");
  pageNumber = 2;
  scrollTo("work");
  pageLoadAnim();
  removeEveryWorkClass();
  animMeOut();
  animDoOut();
  animWorkIn();
  animContactOut();
}

function gotToPageContact() {
  removeMainClasses();
  document.body.classList.add("contactPageClassBody");
  pageNumber = 3;
  scrollTo("contact");
  pageLoadAnim();
  removeEveryContactClass();
  animMeOut();
  animDoOut();
  animWorkOut();
  animContactIn();
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

function removeEveryDoClass() {
  pageLoadAnim();
  for (var i = 0; i < doPageClass.length; i++) {
    doPageClass[i].classList.remove("doPageAnimationLeft");
    doPageClass[i].classList.remove("doPageAnimationRight");
    doPageClass[i].classList.remove("doPageAnimationLeftOut");
    doPageClass[i].classList.remove("doPageAnimationRightOut");
  }
}

function removeEveryWorkClass() {
  pageLoadAnim();
  for (var i = 0; i < workPageClass.length; i++) {
    workPageClass[i].classList.remove("workPageAnimationLeft");
    workPageClass[i].classList.remove("workPageAnimationRight");
    workPageClass[i].classList.remove("workPageAnimationLeftOut");
    workPageClass[i].classList.remove("workPageAnimationRightOut");
  }
}

function removeEveryContactClass() {
  pageLoadAnim();
  for (var i = 0; i < contactPageClass.length; i++) {
    contactPageClass[i].classList.remove("contactPageAnimationLeft");
    contactPageClass[i].classList.remove("contactPageAnimationRight");
    contactPageClass[i].classList.remove("contactPageAnimationLeftOut");
    contactPageClass[i].classList.remove("contactPageAnimationRightOut");
  }
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



var swiperContainer = document.getElementById("hulptekst");

swiperContainer.addEventListener('mouseenter', cursorHoverSwiperIn, false);
swiperContainer.addEventListener('mouseleave', cursorHoverSwiperOut, false);

function cursorHoverSwiperIn() {
  mouseCursor.classList.add("cursorSwiperEffect");
}

function cursorHoverSwiperOut() {
  mouseCursor.classList.remove("cursorSwiperEffect");
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
