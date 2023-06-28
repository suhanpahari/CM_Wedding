burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
rightNav= document.querySelector('.rightNav');
navList= document.querySelector('.nav-list');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})