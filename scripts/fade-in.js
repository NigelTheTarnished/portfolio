document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.getElementById('container--main');
    if (mainContainer) {
        mainContainer.querySelectorAll("*").forEach(el => {
            el.classList.add("fade-in");
        });
    }

    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));
});