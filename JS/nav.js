const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll("nav");

//MOBILE MENU
const mobileNavBtn = document.querySelector(".nav-mobile-btn");
const closeMobileNavBtn = document.querySelector(".close-mobile-btn");
const mobileNav = document.querySelector(".nav-mobile");
const mobileNavLinks = document.querySelectorAll(".nav-mobile a");

const showMobileMenu = () => {
	mobileNav.classList.add("mobile-active");
	mobileNavBtn.style.display = "none";
};
const closeMobileMenu = () => {
	mobileNav.classList.remove("mobile-active");
	mobileNavBtn.style.display = "block";
};

const openMobileMenu = () => {};
//nav
const scrollValue = () => {
	const menuOptions = {
		threshold: 0.6,
	};
	const menuObserver = new IntersectionObserver((entries) => {
		entries.forEach((e) => {
			if (e.isIntersecting) {
				desktopBgcRemover();
				mobileBgcRemover();
				if (
					(e.target.id == "home" && startNav == true) ||
					(e.target.id == "offer-header" && startNav == true) ||
					e.target.id == "cta-steps" ||
					e.target.id == "steps" ||
					e.target.id == "onepage" ||
					e.target.id == "courses" ||
					e.target.id == "course-info-cta"
				) {
					nav[0].classList.add("main-color");
					nav[1].classList.add("main-mobile");
				} else if (e.target.id == "aboutus" || e.target.id == "ecommerce") {
					nav[0].classList.add("accent-color");
					nav[1].classList.add("accent-mobile");
					// mobileNavBtn.classList.add("accent-mobile")
				} else if (
					e.target.id == "all-offer" ||
					e.target.id == "faq" ||
					e.target.id == "contact" ||
					e.target.id == "advancedproject" ||
					e.target.id == "support"
				) {
					nav[0].classList.add("break-color");
					nav[1].classList.add("break-mobile");
				} else {
					desktopBgcRemover();
					mobileBgcRemover();
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
	nav[0].classList.remove("main-color");
	nav[0].classList.remove("accent-color");
	nav[0].classList.remove("break-color");
};

const mobileBgcRemover = () => {
	nav[1].classList.remove("main-mobile");
	nav[1].classList.remove("accent-mobile");
	nav[1].classList.remove("break-mobile");
};

// const burgerBtnColor = () => {
//     let currentSection = window.scrollY

//     sections.forEach(section => {
//         if(section.classList.contains('about')){
//         } else{
//             mobileNavBtn.style.backgroundColor = "#ddd"
//         }
//     })
// }

// window.addEventListener("scroll",burgerBtnColor)

window.addEventListener("scroll", scrollValue);
//MOBILE LISTENERS
mobileNavBtn.addEventListener("click", showMobileMenu);
closeMobileNavBtn.addEventListener("click", closeMobileMenu);
mobileNavLinks.forEach((item) =>
	item.addEventListener("click", closeMobileMenu)
);
