// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default click behavior
        const targetId = this.getAttribute('href'); // Get the section ID
        const targetSection = document.querySelector(targetId); // Find the section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll animation
                block: 'start'
            });
        }
    });
});

// Form Validation Example (if a contact form is added later)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="_replyto"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all fields are valid, allow the form to submit
        alert('Thank you for your message!');
        contactForm.reset();
    });
}
