const onScrollElements = document.querySelectorAll('.onScroll');
const onScrollElementsReverse = document.querySelectorAll('.onScrollReverse');
const onScrollArrows = document.querySelectorAll('.onScrollArrow');
let prevScroll = 0;
let nmb = 0;
let nmbReverse = 0


document.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
        nmb += 2;
        nmbReverse -= 2;
    }
    else {
        nmb -= 2;
        nmbReverse += 2
    }
    onScrollElements.forEach(el => el.style.transform = `rotate(${nmb}deg)`)
    onScrollElementsReverse.forEach(el => el.style.transform = `rotate(${nmbReverse}deg)`)
    // onScrollArrows.forEach(el => el.style.transform = `translateX(${nmb / 5}px)`)

    prevScroll = currentScroll;
})