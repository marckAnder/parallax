let scrollable = document.querySelector('.parallax');
let parallaxItems = document.querySelectorAll('.parallax-item');

scrollable.addEventListener('scroll', function () {
    parallaxItems.forEach(function (item) {
        let depth = item.getAttribute('data-depth');
        let yPos = scrollable.scrollTop * depth;
        item.style.transform = 'translateY(' + yPos + 'px)';
    });
});