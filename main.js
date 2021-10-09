let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Home page 

function imgSlider(anything) {
    document.querySelector('.food').src = anything;
}
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


// Login/Sign up page
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// LOGIN SHOW and HIDE
// var login_btn = document.querySelector('.login-btn');
// var popup = document.querySelector('.popup');
// var popup_open = document.querySelector('.popup.open');
// var popup_inner = document.querySelector('.popup-inner');

// login_btn.onclick = function(){
//     popup.classList.toggle('open');
// }

// popup.onclick = function(){
//     popup.classList.remove('open');
// }
// popup_inner.onclick = function(e){
//     e.stopPropagation();
// }

function togglePopup() {
    document.getElementById("popup-1")
        .classList.toggle("active");
}