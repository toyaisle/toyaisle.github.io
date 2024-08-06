const faqItems = document.querySelectorAll('.faq-item-header');

faqItems.forEach(header => {
    header.addEventListener('click', () => {
        const faqItemBody = header.nextElementSibling;
        faqItemBody.classList.toggle('show');
        const toggler = header.querySelector('.faq-toggler');
        toggler.textContent = faqItemBody.classList.contains('show') ? '-' : '+';
    });
});