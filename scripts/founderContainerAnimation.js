const bogdanComponents = document.querySelectorAll('.animate-bogdan');

let delayN = 0


const addVisibilityB = (entry, delay) => {
    const screenWidth = window.innerWidth
    if (screenWidth <= 450) {
        delayN = 0
    }
    setTimeout(() => {
        entry.target.classList.add('slide-in-animation');
    }, delayN);
}

const founderDivObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            delayN += 100
            addVisibilityB(entry, delayN);
            founderDivObserver.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.5
    })

bogdanComponents.forEach(component => founderDivObserver.observe(component))