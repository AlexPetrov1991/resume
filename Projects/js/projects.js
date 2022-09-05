const $sliderContainer = document.querySelector('.slider-container');
const $slidesRow = document.querySelector('.slider-container .slides-row');
const $slides = document.querySelectorAll('.slider-container .slides-row .two-block');
const $previous = document.querySelector('.container-control .control .previous');
const $next = document.querySelector('.container-control .control .next');

const SLIDER_WIDTH = $sliderContainer.offsetWidth;
const SLIDES_COUNT = $slides.length;

let carrentSlides = 0;

$slides.forEach(function (elem){
    elem.style.width = SLIDER_WIDTH + 'px';
});

function slidesController(slide){
    let distance = slide * SLIDER_WIDTH * (-1);
    $slidesRow.style.left = distance + 'px';
};

$previous.addEventListener('click', function(){
    carrentSlides--;
    if(carrentSlides < 0) carrentSlides = SLIDES_COUNT - 1;
    slidesController(carrentSlides);
});

$next.addEventListener('click', function(){
    carrentSlides++;
    if(carrentSlides >= SLIDES_COUNT) carrentSlides = 0;
    slidesController(carrentSlides);
});
//Menu
const $menu = document.querySelector('.header-bg .wrapper .menu');
const $btnMenu = document.querySelector('.header-bg .wrapper .icon-menu');
const $fond = document.querySelector('.header-bg');

$btnMenu.addEventListener('click', function(){
    $menu.classList.toggle('active');
});
$fond.addEventListener('click', function(){
    //$modalContainer.classList.remove('active');
});