const diagram = document.getElementById('neuron-network-container');
const cls6 = document.querySelectorAll('.cls-6')
const cls7 = document.querySelectorAll('.cls-7')
const cls8 = document.querySelectorAll('.cls-8')
const cls9 = document.querySelectorAll('.cls-9')

const cls1 = document.querySelectorAll('.cls-1')
const cls2 = document.querySelectorAll('.cls-2')
const cls3 = document.querySelectorAll('.cls-3')
const cls4 = document.querySelectorAll('.cls-4')
const cls5 = document.querySelectorAll('.cls-5')

const cls10 = document.querySelectorAll('.cls-10')


const nmbAnimation = 'numberAnimation 1s forwards 2s'
const drawingAnimation = 'drawing 4s forwards'
const diagramObserver = new IntersectionObserver((entries) => {

    const entry = entries[0];

    if (entry.isIntersecting) {
        diagramObserver.unobserve(entry.target);

        cls1.forEach(c => c.style.animation = drawingAnimation)
        cls2.forEach(c => c.style.animation = drawingAnimation)
        cls3.forEach(c => c.style.animation = drawingAnimation)
        cls4.forEach(c => c.style.animation = drawingAnimation)
        cls5.forEach(c => c.style.animation = drawingAnimation)

        cls6.forEach(c => c.style.animation = nmbAnimation)
        cls7.forEach(c => c.style.animation = nmbAnimation)
        cls8.forEach(c => c.style.animation = nmbAnimation)
        cls9.forEach(c => c.style.animation = nmbAnimation)

        cls10.forEach(c => c.style.animation = 'numberAnimation 1s forwards 1s')
    }
}, {
    threshold: 0.7
})

diagramObserver.observe(diagram);