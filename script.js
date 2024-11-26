
// Smooth Scroll voor Navigatie
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-animaties
const faders = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => observer.observe(fader));

// Hover-effect verbeteren met JavaScript (Services-sectie)
document.querySelectorAll('.service-item').forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.style.transition = 'all 0.3s ease';
        service.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    service.addEventListener('mouseleave', () => {
        service.style.boxShadow = 'none';
    });
});
