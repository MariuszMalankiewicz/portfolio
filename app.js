const menuBar = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const active = document.querySelector("active");
const ul = document.querySelectorAll('nav ul');
const ul_active = document.querySelector('.ul_active');
const body = document.querySelector('body');
function menuOpen(){
    nav.classList.toggle('active');
    body.classList.style.width ="500px";
    for(let i = 0; i < ul.length; i++){
        ul[i].classList.toggle('ul_active');

    }
}


menuBar.addEventListener('click', menuOpen);