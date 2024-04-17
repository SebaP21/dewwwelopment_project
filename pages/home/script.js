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


const scrollValue = () => {
	const menuOptions = {
		threshold: 0.7

	};
	const menuObserver = new IntersectionObserver((entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) {
				desktopBgcRemover();
				if (
					(e.target.id == "home" && startNav == true) ||
					e.target.id == "cta-steps" ||
					e.target.id == "steps"
				) {
					desktopNav.classList.add("main-color");
				} else if (e.target.id == "aboutus") {
					desktopNav.classList.add("accent-color");
				} else if (
					e.target.id == "all-offer" ||
					e.target.id == "faq" ||
					e.target.id == "contact"
				) {
					desktopNav.classList.add("break-color");
				} else {
					desktopBgcRemover();
				}
			}
		});
	}, menuOptions);
	sections.forEach((section) => {
		menuObserver.observe(section);
	});
	let scrollCheck = window.scrollY;
	let startNav;
	if (scrollCheck > 30) {
		startNav = true;
	} else {
		startNav = false;
	}
};

const desktopBgcRemover = () => {
	desktopNav.classList.remove("main-color");
	desktopNav.classList.remove("accent-color");
	desktopNav.classList.remove("break-color");
	desktopNav.classList.remove("main-color");
};



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
	
	if (entry[0].isIntersecting==true) {
		stepCounter = setInterval(() => {
			if (stepCounter < 6) {
				stepCounter++;
				ctaCounter.textContent = `${stepCounter}`;
			}
		}, 400);
	}else {
		stepCounter=1
	}
};
console.log(ctaCounter.textContent);

const countObserver = new IntersectionObserver(startCounter, options);
countObserver.observe(cta);










mobileNavBtn.addEventListener("click", showMobileMenu);
mobileNavLinks.forEach((item) =>
	item.addEventListener("click", closeMobileMenu)
);
faqBtns.forEach((btn) => btn.addEventListener("click", openFaqItems));
window.addEventListener("click", clickOutsideFaq);
window.addEventListener("scroll", scrollValue);

