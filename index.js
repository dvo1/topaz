// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//
// toggleButton.addEventListener('click', () => {
// navbarLinks.classlist.toggle('active')
//
// })


// const navSlide = () =>{
//   const burger = document.querySelector('.toggle-button')
//   const navLinks = document.querySelector('.navbar-links')
//   burger.addEventListener('click',() => {
//     navLinks.classList.toggle('active')
//
//
//   })
//
// }
//
// navSlide()

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
