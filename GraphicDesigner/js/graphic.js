const $overlay = document.querySelector('.magnify .overlay');

document.querySelector('.container-works').addEventListener('click', function(event){
    let template = '';
    let src = event.target.getAttribute('data-lightbox');
    template =  '<div class="magnify">'+
                    '<div class="overlay">'+
                        '<div class="images">'+
                            '<img class="bigImg" src="'+ src +'">'+
                            '<img class="close" src="img/Tilda_Icons_27bu_25.svg">'+
                        '</div>'+
                    '</div>'+
                '</div>';
    const $containerImg = document.querySelector('.containerImg');
    $containerImg.classList.add('active');            
    document.querySelector('.containerImg').innerHTML = template; //insertAdjacentHTML('beforeend', template);
    
    const $closeButton = document.querySelector('.magnify .close');
    const $magnify = document.querySelector('.magnify');
    $closeButton.addEventListener('click', function(){
        /*modalController('close');*/ $magnify.remove();
        $containerImg.classList.remove('active');
    });
    document.querySelector('.magnify .overlay').addEventListener('click', function(){
        /*modalController('close');*/ $magnify.remove();
        $containerImg.classList.remove('active');
    });
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

//mobile slides
$('.slides-row').slick({
    dots: true,
    easing: 'ease',
});