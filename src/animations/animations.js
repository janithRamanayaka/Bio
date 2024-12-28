const animations = () => {
    // Fade-in animation
    const fadeIn = (element) => {
        element.style.opacity = 0;
        let last = +new Date();
        const tick = () => {
            element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
            last = +new Date();
            if (+element.style.opacity < 1) {
                requestAnimationFrame(tick);
            }
        };
        tick();
    };

    // Slide-in animation
    const slideIn = (element) => {
        element.style.transform = 'translateX(-100%)';
        element.style.transition = 'transform 0.5s ease-in-out';
        requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
        });
    };

    // Exporting animations
    return {
        fadeIn,
        slideIn
    };
};

export default animations();