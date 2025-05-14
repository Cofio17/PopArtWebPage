const sectionItems = document.querySelectorAll('.section-item');
console.log(sectionItems);

const observerSectionItem = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('slide-in-section')
            }, 200);

        }
    })
}, {
    threshold: 0.8
})

sectionItems.forEach(item => observerSectionItem.observe(item))