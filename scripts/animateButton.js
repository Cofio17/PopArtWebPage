const buttons = document.querySelectorAll(".button");

const buttonObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("animate-button");
                }, 700);

                buttonObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
    }
);

buttons.forEach((button) => buttonObserver.observe(button));
