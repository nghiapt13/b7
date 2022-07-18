document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide');
    splide.mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#thumbnail-carousel', {
        fixedWidth: 50,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        return:true,
    }).mount();
});