const mobileNavBtn = document.querySelector(".nav-mobile-btn");
const mobileNav = document.querySelector(".nav-mobile");
const mobileNavLinks = document.querySelectorAll(".nav-mobile a");

const faqAccordion = document.querySelector(".faq-body");
const faqBtns = document.querySelectorAll(".question-btn");

const ctaCounter = document.querySelector(".counter");
const cta = document.querySelector(".cta");

//MOBILE MENU
const showMobileMenu = () => {
	mobileNav.style.display = "block";
};
const closeMobileMenu = () => {
	mobileNav.style.display = "none";
};

//DESKTOP MENU
const sections = document.querySelectorAll("section");
const desktopNav = document.querySelector(".nav-desktop");

const menuOptions = {
	threshold: 0.99,
}

const menuObserver = new IntersectionObserver(entries => {

	entries.forEach(e => {
		if(e.isIntersecting){
			// console.log(e);
			desktopBgcRemover()
			if(
				e.target.id == "home" ||
				e.target.id == "cta-steps" ||
				e.target.id == "steps"
			){
				desktopNav.classList.add("main-color")
			} else if(e.target.id == "aboutus"){
				desktopNav.classList.add("accent-color")
			} else if (
				e.target.id =="all-offer" ||
				e.target.id =="faq" ||
				e.target.id =="contact"

			){
				desktopNav.classList.add("break-color")
			}else{
				return
			}
		}
	})



}, menuOptions)

sections.forEach(section =>{
	menuObserver.observe(section)
})
const desktopBgcRemover = () => {
	desktopNav.classList.remove("main-color")
	desktopNav.classList.remove("accent-color")
	desktopNav.classList.remove("break-color")
	desktopNav.classList.remove("main-color")
}























// console.log(section);
// console.log(desktopNavLinks);

// window.onscroll = () => {
// 	section.forEach((sec) => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop;
// 		let height = sec.offsetHeight;
// 		let id = sec.getAttribute("id");

// 		if (top >= offset && top < offset + height) {
// 			desktopNavLinks.forEach((link) => {
// 				link.classList.remove("nav-desktop-active-link");
// 				document
// 					.querySelector(".nav-desktop a[href*=" + id + "]")
// 					.classList.add("nav-desktop-active-link");
// 			});
// 		}
// 	});
// };

//FAQ ACCORDION
function openFaqItems() {
	if (this.nextElementSibling.classList.contains("faq-active")) {
		this.nextElementSibling.classList.remove("faq-active");
	} else {
		closeFaqItems();
		this.nextElementSibling.classList.add("faq-active");
	}
}

const closeFaqItems = () => {
	const allActiveItems = document.querySelectorAll(".faq-answer");
	allActiveItems.forEach((item) => item.classList.remove("faq-active"));
};

const clickOutsideFaq = (e) => {
	if (
		e.target.classList.contains("question-btn") ||
		e.target.classList.contains("faq-answer") ||
		e.target.classList.contains("faq-answer-text")
	)
		return;
	closeFaqItems();
};

// STEPS COUNTER

const options = {
	rootMargin: "-100px",
};
let stepCounter = 1;

const startCounter = (entry) => {
	// console.log(entry[0].isIntersecting);

	if (!entry[0].isIntersecting) {
		stepCounter = setInterval(() => {
			if (stepCounter < 6) {
				stepCounter++;
				ctaCounter.textContent = `${stepCounter}`;
			}
		}, 300);
	}
};
// console.log(ctaCounter.textContent);

const countObserver = new IntersectionObserver(startCounter, options);

countObserver.observe(cta);

mobileNavBtn.addEventListener("click", showMobileMenu);
mobileNavLinks.forEach((item) =>
	item.addEventListener("click", closeMobileMenu)
);
faqBtns.forEach((btn) => btn.addEventListener("click", openFaqItems));
window.addEventListener("click", clickOutsideFaq);
