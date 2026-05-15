const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"

	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"

	}
]

//Affichage des points sur chacune des slides présentes dans le tableau
const dots = slides.map(() => '<span class="dot"></span>').join("");
document.querySelector(".dots").innerHTML = dots;

//Création de la fonction de changement de Slide (détermine le changement d'image + du tag + du point). 
let slideNumber = 0;
const slideLength = slides.length;
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");
const LigneDots = document.querySelectorAll(".dot");

function ChangeSlide() {
	image.src = "./assets/images/slideshow/" + slides[slideNumber].image;
	tagLine.innerHTML = slides[slideNumber].tagLine;
	LigneDots.forEach(dot => dot.classList.remove("dot_selected"));
	LigneDots[slideNumber].classList.add("dot_selected");

};

//Appel de la fonction
ChangeSlide();

//Ajout de la fonction changement de slide au clique de la flèche gauche
let flechegauche = document.querySelector(".arrow_left");

flechegauche.addEventListener("click", function () {
	slideNumber--;

	if (slideNumber < 0) {
		slideNumber = slideLength - 1;
	}

	ChangeSlide();
});

//Ajout de la fonction changement de slide au clique de la flèche droite
let flechedroite = document.querySelector(".arrow_right");

flechedroite.addEventListener("click", function () {
	slideNumber++;

	if (slideNumber >= slideLength) {
		slideNumber = 0;
	}

	ChangeSlide();
});

