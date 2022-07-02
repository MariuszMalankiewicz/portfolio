const sliderList =[
{
    img: "imgs/todolist.png",
    title: 'To do list',
    number: '1',
    view: "https://mariuszmalankiewicz.github.io/To-Do-List/",
},
{
    img: "imgs/login_accont.png",
    title: 'User panel', 
    number: '2',
    view: "https://github.com/MariuszMalankiewicz/tworzeniekonta.git",   
}
];

const img = document.querySelector('.project img');
const title = document.querySelector('.project h2');
const counter = document.querySelector('.project span');
const btnView = document.querySelector('.project button a');

const btnPrev = document.querySelector('.fa-arrow-left');
const btnNext = document.querySelector('.fa-arrow-right');
const btnPauze = document.querySelector('.fa-pause');
const btnPlay = document.querySelector('.fa-play');


const time = 4000;
let active = 0;


const changeSlide = ()=>{
    img.src = sliderList[active].img;
    title.textContent = sliderList[active].title;
    counter.textContent = `#0${sliderList[active].number}`;
    btnView.href = sliderList[active].view;
}

btnPrev.addEventListener('click', ()=>{
    clearInterval(indexInterval);  
    active--
    if(active < 0){
        active = sliderList.length - 1;
    };
    changeSlide();
    indexInterval = setInterval(AutoChangeProject, time);
})

btnNext.addEventListener('click', ()=>{
    clearInterval(indexInterval);
    active++;
    if(active === sliderList.length){
        active = 0;
    }  
    changeSlide();
    indexInterval = setInterval(AutoChangeProject, time);
})

const AutoChangeProject = ()=>{
    active++;
    if(active === sliderList.length){
        active = 0;  
    };
    changeSlide();
}

btnPauze.addEventListener('click', ()=>{
    clearInterval(indexInterval);
    btnPauze.classList.toggle('seeMode');
    btnPlay.classList.toggle('seeMode');
    console.log('stop');
})

btnPlay.addEventListener('click', ()=>{
    indexInterval = setInterval(AutoChangeProject, time);
    btnPauze.classList.toggle('seeMode');
    btnPlay.classList.toggle('seeMode');
    console.log('start');
})

let indexInterval = setInterval(AutoChangeProject, time);


