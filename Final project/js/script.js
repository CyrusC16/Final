// PRODUCT SEARCH FILTER

const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('keyup', function () {

        const filter = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {

            const text = product.innerText.toLowerCase();

            if (text.includes(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById('contactForm');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === '' || email === '' || message === '') {
            alert('Please complete all form fields.');
            return;
        }

        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for contacting GreenTech Solutions!');
        contactForm.reset();
    });
}

// FADE-IN ANIMATION ON SCROLL

const fadeElements = document.querySelectorAll('.card, .product-card, .blog-post');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// DYNAMIC YEAR IN FOOTER

const footerText = document.querySelector('footer p');

if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${currentYear} GreenTech Solutions`;
}

// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll('.btn, button');

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});