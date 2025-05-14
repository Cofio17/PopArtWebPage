document.addEventListener('DOMContentLoaded', () => {

    const texts = document.querySelectorAll('.highlight-text');

    texts.forEach((text) => {


        const words = (text.innerText.split(' '));
        text.innerHTML = '';


        words.forEach((word) => {
            const span = document.createElement('span');
            span.textContent = word + ' '


            span.addEventListener('mouseover', () => {
                span.classList.add('primary-text');
            })

            span.addEventListener('mouseleave', () => {
                span.classList.remove('primary-text');
            })

            text.appendChild(span);

        })
    })

})





