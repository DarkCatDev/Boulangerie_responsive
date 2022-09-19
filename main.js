gsap.from('.headling', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.slogan', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});
gsap.from('.arrow', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});
gsap.from('nav', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});

const hamburger = document.querySelector(".hamburger");
const titles = document.querySelector(".titles");
const headling = document.querySelector(".headling");
const arrow = document.querySelector(".bx-down-arrow-circle");
const html = document.querySelector("html");
const slogan = document.querySelector(".slogan");
const home = document.querySelector(".home");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    titles.classList.toggle("active")
    headling.classList.toggle("active")
    arrow.classList.toggle("active")
    html.classList.toggle("active")
    slogan.classList.toggle("active")
    home.classList.toggle("active")

})

const sr = ScrollReveal({
    duration: 2500,
    reset: true
})

sr.reveal('.data',{origin: 'left', distance: '70px'})

sr.reveal('.img_section',{origin: 'left', distance: '90px', delay:200})

