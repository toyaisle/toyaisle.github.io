var swiper = new Swiper('.swiper', {
    loop: true,  // Enables looping of slides
    slidesPerView: 'auto',  // Allows multiple slides to be visible at once, based on the available space
    spaceBetween: 20,  // Space between slides, adjusted to 20px for a cleaner look
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
