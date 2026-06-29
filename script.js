// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // Animate Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Lower is slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Only animate if in view
            const rect = counter.getBoundingClientRect();
            if(rect.top < window.innerHeight && counter.innerText == 0) {
                updateCount();
            }
        });
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load

    // Crane lift animation on scroll into view
    const blueprintImg = document.querySelector('.blueprint-img');
    if (blueprintImg) {
        const craneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    blueprintImg.classList.add('crane-animate');
                    craneObserver.disconnect();
                }
            });
        }, { threshold: 0.35 });
        craneObserver.observe(blueprintImg);
    }

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

});
