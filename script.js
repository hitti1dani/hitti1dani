// Select all sections for scroll animations
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

// Apply observer to each section
sections.forEach(section => {
    appearOnScroll.observe(section);
});
