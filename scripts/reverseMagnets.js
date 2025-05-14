const svgWrapper = document.querySelectorAll('.svg-wrapper');


svgWrapper.forEach((div, index) => {

    div.addEventListener('mouseover', () => {
        svgWrapper.forEach((divInner, indexInner) => {

            if (index > indexInner) {
                divInner.style.transform = 'translateX(-35px)';
            }
            else if (index < indexInner) {
                divInner.style.transform = 'translateX(35px)';
            }
            else {
                divInner.style.transform = 'translateX(0)';
            }
        })

    })

    div.addEventListener('mouseleave', () => {
        svgWrapper.forEach((divInner) => {
            divInner.style.transform = 'translateX(0)';
        })
    })


})


