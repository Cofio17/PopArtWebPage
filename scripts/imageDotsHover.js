const dots = document.querySelectorAll('.point');
const div = document.createElement('div');
div.classList.add('overlay');

dots.forEach(dot => {
    const parent = dot.parentElement;
    const parentRoot = parent.parentElement;
    const tooltip = parent.children[0];
    const screenWidth = window.innerWidth;


    const showTooltip = () => {
        tooltip.style.opacity = 1
    }

    const hideTooltip = () => {
        tooltip.style.opacity = 0
    }

    if (screenWidth > 800) {
        dot.addEventListener('mouseenter', showTooltip);
        dot.addEventListener('mouseleave', hideTooltip);
    }
    else {
        dot.addEventListener('click', () => {
            const isVisible = tooltip.style.opacity === 1 || tooltip.style.opacity === '1';
            if (isVisible) {
                hideTooltip();
            }
            else {
                document.querySelectorAll('.tooltip').forEach(el => el.style.opacity = 0);
                showTooltip();
            }
        })

    }
})

