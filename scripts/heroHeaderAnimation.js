// const heroComponents = document.querySelectorAll('animate-hero');

// let delayN = 0


// const addVisibilityB = (entry, delay) => {
//     const screenWidth = window.innerWidth
//     if (screenWidth <= 450) {
//         delayN = 0
//     }
//     setTimeout(() => {
//         entry.target.classList.add('slide-in-animation');
//     }, delayN);
// }

// const heroDivObserver = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             delayN += 200
//             addVisibilityB(entry, delayN);
//             founderDivObserver.unobserve(entry.target)
//         }
//     })
// },
//     {
//         threshold: 0.5
//     })

// heroComponents.forEach(component => heroDivObserver.observe(component))