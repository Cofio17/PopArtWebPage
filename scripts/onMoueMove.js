document.addEventListener('mousemove', (e) => {
    const geoShape = document.getElementById('geo-2');
    const geoShape1 = document.getElementById('geo-1');

    const mouseY = e.clientY / 50;
    const mouseX = e.clientX / 50;

    geoShape.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    geoShape1.style.transform = `translate(${-mouseX}px, ${-mouseY}px)`
})