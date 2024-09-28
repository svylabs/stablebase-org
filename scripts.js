let currentIndex = 0;

// Show the selected slide based on the dot clicked
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentIndex = index;
    const offset = -index * 100;
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Toggle accordion item on mobile view
function toggleAccordion(element) {
    const activeItems = document.querySelectorAll('.accordion-item.active');
    activeItems.forEach(item => item.classList.remove('active'));

    if (activeItems.length === 0 || !element.classList.contains('active')) {
        element.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});