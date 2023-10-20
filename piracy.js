const myCarouselElement = document.querySelector('.carousel-item')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
  touch: false
})


const myCarousel = document.getElementById('.carousel-item')

myCarousel.addEventListener('slide.bs.carousel', event => {
  
});


