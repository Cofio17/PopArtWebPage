const text = document.getElementById('back-text');

const animation = `
  typing 3s steps(40, end),
  blink-caret .75s step-end infinite
`;

const textTypeTrigger = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.style.animation = animation;
        textTypeTrigger.unobserve(entries[0].target);
    }
},
    {
        threshold: 0.3
    })

textTypeTrigger.observe(text);