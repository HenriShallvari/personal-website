let counter = 0;
let hero_img = document.getElementById('hero-image');
let thug_img = document.getElementById('image');
let body = document.getElementsByTagName('body');

function showGlasses(){
    counter++;

    if(counter == 10){
     thug_img.setAttribute('src', 'assets/davinci-glasses.png');
     thug_img.style.width = '47vw';
     hero_img.style.bottom  = '-31%';
     hero_img.style.right  = '3%';
    }
}

const menu_toggle = document.querySelector('#mobile-hamburger');

menu_toggle.addEventListener("click", ()=>{
    menu_toggle.classList.toggle("active");
})