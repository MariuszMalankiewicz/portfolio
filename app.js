const btn_open_menu = document.querySelector('.open_menu');
const navigation = document.querySelector('nav');
const body = document.querySelector('body');

const btn_close_menu = document.querySelector('.close_menu');
function menuOpen(){
    navigation.style.left = "70%";
    // body.style.width = "70vw";
    // for(let i = 0; i < ul.length; i++){
        // ul[i].classList.toggle('ul_active');
    // }
}
function menuClose(){
    navigation.style.left = "100%";
    body.style.width = "100vw"; 
}

btn_open_menu.addEventListener('click', menuOpen);
btn_close_menu.addEventListener('click', menuClose);