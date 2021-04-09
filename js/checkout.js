// Created By CodingNepal
const slidePage = document.querySelector('.checkout__slide--page--js');
const nextBtnFirst = document.querySelector('.checkout__first-btn');
const prevBtnSec = document.querySelector('.checkout__previuos--btn--1');
const nextBtnSec = document.querySelector('.checkout__next--btn--1');
const prevBtnThird = document.querySelector('.checkout__previuos--btn--2');
const nextBtnThird = document.querySelector('.checkout__next--btn--2');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.checkout__step--js p');
const progressCheck = document.querySelectorAll('.checkout__step--js .check');
const bullet = document.querySelectorAll('.checkout__step--js .checkout__bullet--js');
let current = 1;

nextBtnFirst.addEventListener('click', (event) => {
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
