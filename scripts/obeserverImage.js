const images = document.querySelectorAll('.image-animation');

const screenWidth = window.innerWidth;
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: 0.5
});

if (screenWidth <= 450) {
    images.forEach(image => observer.observe(image))
}






