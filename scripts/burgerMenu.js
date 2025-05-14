const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const navlinks = document.querySelectorAll('nav ul li');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    nav.classList.toggle('blur');

})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        nav.classList.remove('blur');
    })
})


