// Script js permettant de faire défiler des diapositives selon un intervalle de temps défini ici 5s mais aussi en cliquant sur les bulles

const slides = document.querySelectorAll('.carousel-slide');
const bullets = document.querySelectorAll('.carousel-bullet');
let currentSlide = 0;

function showSlide(index) {
	slides[currentSlide].classList.remove('active');
	slides[index].classList.add('active');
	bullets[currentSlide].classList.remove('active');
	bullets[index].classList.add('active');
	currentSlide = index;
}
setInterval(() => {
	const nextSlide = (currentSlide + 1) % slides.length;
	showSlide(nextSlide);
}, 5000);
showSlide(currentSlide);