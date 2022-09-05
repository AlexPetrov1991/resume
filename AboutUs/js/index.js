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