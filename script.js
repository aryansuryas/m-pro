// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
    
    // Reset form
    form.reset();
}

// Add scroll animation on page load
window.addEventListener('load', () => {
    // Add animation class to elements
    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.animation = 'slideInDown 0.6s ease forwards';
        }, index * 100);
    });
});

// Intersection Observer for lazy loading animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});