const options={
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: false // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

let searchBtn = document.querySelector('#search-button');
let searchBar = document.querySelector('.search-bar-box');
let formBtn = document.querySelector('#login-button');
let loginForm = document.querySelector('.login-form-container'); 
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-button');

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active'); 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        
    },
});