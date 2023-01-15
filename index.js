
// MENU HAMBURGUESA
const menuBtn = document.getElementById("menuBtn");
const navbarLinks = document.getElementById("navbarLinks");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  console.log("click");
  navbarLinks.classList.toggle("active");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuBtn.classList.remove("open");
  menuOpen = false;
});

//CARRUSEL
window.addEventListener("load", function(){
	new Glider(document.querySelector(".carousel__lista"), {
		slidesToShow: 1,
		slidesToScroll: 1,
    draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: ".carousel__anterior",
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 768px
			  breakpoint: 768,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 992,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			  }
			}
		]
	});
});