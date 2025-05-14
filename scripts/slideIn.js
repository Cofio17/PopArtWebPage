document.addEventListener('DOMContentLoaded', () => {
    const scrollInDiv = document.querySelectorAll('.slide-in');

    const observerSlideIn = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-animation');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    scrollInDiv.forEach((el) => observerSlideIn.observe(el));
});