'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);
document.getElementById('section--1');
const allButons = document.getElementsByClassName('btn');

//Creating and inserting elements
//.insertAdacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent =
//  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn--close-cookie">Got it!</button>';
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty//('--color-primary', 'orangered');
//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data aattributes
//data-version-number="3.0"

console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use
//logo.className = 'Jonas';

const btnSrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnSrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log('Current scrol (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  console.log(e.target.getBoundingClientRect());
  //Scrolling
  //window.scrollTo(
  ////  s1coords.left + window.pageXOffset,
  ////  s1coords.top + window.pageYOffset
  //);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
  //});
  //const h1 = document.querySelector('h1');
  //const alertH1 = function (e) {
  //  alert('addEventListener: Great! You are reading the heading');
  //};
  //
  //h1.addEventListener('mouseenter', alertH1);
  //
  //setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
});

//const randomInt = (min, max) =>
//  Math.floor(Math.random() * (max - min + 1) + min);
//const randomColor = () =>
//  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
//
//document.querySelector('.nav__link').addEventListener('click', function (e) {
//  this.style.backgroundColor = randomColor();
//  console.log('LINK', e.target, e.currentTarget);
//  console.log(e.currentTarget === this);
//});
//
//document.querySelector('.nav').addEventListener('click', function (e) {
//  this.style.backgroundColor = randomColor();
//  console.log('NAV', e.target, e.currentTarget);
//});
