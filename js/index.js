//Skills
function progressBar(value, elementId){

    if(value >= 100) value = 100;
    if(value < 0) value = 0;

    document.querySelector(`.progress#${elementId} .bar .bar-active`).style.width = value + '%';
    document.querySelector(`.progress#${elementId} .procent`).innerText = value + '%';
}
//Our Works
const $moreWork = document.querySelector('.more-works');;
const $button = document.querySelector('.more-works .button');
$button.addEventListener('click', function(){
    let exPicture = '<div class="picture">'+
                        '<img src="img/1583939652_1-p-krutie-arti-na-belom-fone-5.jpg">'+
                        '<div class="overlay" data-lightbox="img/1583939652_1-p-krutie-arti-na-belom-fone-5.jpg"></div>'+
                    '</div>'+
                    '<div class="picture">'+
                        '<img src="img/antis-max.jpg">'+
                        '<div class="overlay" data-lightbox="img/antis-max.jpg"></div>'+
                    '</div>'+
                    '<div class="picture">'+
                        '<img src="img/бабочка.jpg">'+
                        '<div class="overlay" data-lightbox="img/бабочка.jpg"></div>'+
                    '</div>'+
                    '<div class="picture">'+
                        '<img src="img/1577348813_1.jpg">'+
                        '<div class="overlay" data-lightbox="img/1577348813_1.jpg"></div>'+
                    '</div>';
    document.querySelector('.container-works').insertAdjacentHTML('beforeend', exPicture);
    document.querySelector('.container-works').classList.add('active');
    $moreWork.remove();
    $button.remove();
});

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
                    console.log(template);
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
        
        function modalController(action) {
            if (action == 'open') {
                
            } else if (action == 'close') {
                
            }
        };
    });
//Work process
const $playVideo = document.querySelector('.video img');
const $video = document.querySelector('.video video');

$playVideo.addEventListener('click', function(){
    $playVideo.remove();
    $video.removeAttribute('poster');
    $video.play();
    $video.setAttribute('played', '');
    $video.setAttribute('controls', '');
})
//Testimonials
let $selectedDot = document.querySelector('.dots-group .dot[data-tabs="q2"]');
let $selectedContent = document.querySelector('.wrapper .quote#q2');

document.querySelectorAll('.dot').forEach(function(el){
    el.addEventListener('click', function(){
        let target = this.getAttribute('data-tabs');
        
        $selectedDot.classList.remove('active');
        $selectedContent.classList.remove('active');
        
        $selectedDot = this;
        $selectedContent = document.querySelector('.quote#' + target);
        
        $selectedDot.classList.add('active');
        $selectedContent.classList.add('active');
    });
});
//Menu
const $menu = document.querySelector('.fond .header .menu');
const $btnMenu = document.querySelector('.fond .header .icon-menu');
const $fond = document.querySelector('.fond');

$btnMenu.addEventListener('click', function(){
    $menu.classList.toggle('active');
});
$fond.addEventListener('click', function(){
    //$modalContainer.classList.remove('active');
});
