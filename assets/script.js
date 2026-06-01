const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// Création des points (dots)

const dots = slides.map(() => '<span class="dot"></span>').join("");

document.querySelector(".dots").innerHTML = dots;

// Elements du DOM

const slideLength = slides.length;
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");
const slideDots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Variable - Index slide

let currentSlideIndex = 0;

// Fonction changement de Slide

function changeSlide() {
	image.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
	tagLine.innerHTML = slides[currentSlideIndex].tagLine;
	slideDots.forEach(dot => dot.classList.remove("dot_selected"));
	slideDots[currentSlideIndex].classList.add("dot_selected");
}

// Appel de la fonction changement de Slide

changeSlide();

// Fonction Navigation flèche gauche

leftArrow.addEventListener("click", () => {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slideLength - 1;
	}
	changeSlide();
});

// Fonction Navigation flèche droite

rightArrow.addEventListener("click", () => {
	currentSlideIndex++;
	if (currentSlideIndex >= slideLength) {
		currentSlideIndex = 0;
	}
	changeSlide();
});

// Fonction Navigation Dots

slideDots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentSlideIndex = index;
		changeSlide();
	});
});

