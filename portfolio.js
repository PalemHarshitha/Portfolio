

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.section-title');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
