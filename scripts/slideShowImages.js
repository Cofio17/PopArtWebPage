const peopleDivs = document.querySelectorAll('.person');
console.log(peopleDivs);

let delay = 0


const addVisibility = (entry, delay) => {
    const screenWidth = window.innerWidth
    if (screenWidth <= 450) {
        delay = 0
    }
    setTimeout(() => {
        entry.target.classList.add('slide-in-animation');
    }, delay);
}

const peopleObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            delay += 200
            addVisibility(entry, delay);
            peopleObserver.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.1
    })

peopleDivs.forEach(person => peopleObserver.observe(person))