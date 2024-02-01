/*let menu = document.querySelector('#menu-btn');
let header= document.querySelector('.header');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if( themeToggler.classList.toggle('fa-sun'))
    {
        document.body.classList.add('active');
    }else
    {
        document.body.classList.add('active'); 
    }
}*/
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let themeToggler = document.querySelector('#theme-toggler');
let body = document.body;

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (body.classList.contains('active')) {
        body.classList.remove('active');
    } else {
        body.classList.add('active');
    }
}
