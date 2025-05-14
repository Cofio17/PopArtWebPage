// const gallery = document.querySelector('.geometry-socials');
// const socialImages = document.querySelectorAll('.geometry-social');

// let current = 0;
// let scrollBlocked = false;
// let scrollCount = 0
// let inGallery = false;
// let scrolledPast = false;


// function isInGallery() {
//     const rect = gallery.getBoundingClientRect();
//     return rect.top < window.innerHeight && rect.bottom > 0
// }

// document.addEventListener('scroll', (e) => {

//     if (e.deltaY < 30) {
//         return;
//     }

//     if (isInGallery() && scrolledPast) {
//         e.preventDefault();
//         socialImages.forEach(img => img.classList.toggle('active'))
//         scrollCount++;
//     }

// })