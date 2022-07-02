const btnMenu = document.querySelector('.ellipsis-vertical');
const nav = document.querySelector('nav');
const wrapper = document.querySelector('.wrapper-all');
const aNav = document.querySelectorAll('nav ul li a');



btnMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active-menu');
    wrapper.classList.toggle('active-wrapper');
    aNav.forEach(a => a.classList.toggle('active-a'));
})