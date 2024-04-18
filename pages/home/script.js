const faqAccordion = document.querySelector(".faq-body");
const faqBtns = document.querySelectorAll(".question-btn");

const ctaCounter = document.querySelector(".counter");
const cta = document.querySelector(".cta");

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

	if (entry[0].isIntersecting == true) {
		stepCounter = setInterval(() => {
			if (stepCounter < 6) {
				stepCounter++;
				ctaCounter.textContent = `${stepCounter}`;
			}
		}, 400);
	} else {
		stepCounter = 1;
	}
};
// console.log(ctaCounter.textContent);

//FORM














const countObserver = new IntersectionObserver(startCounter, options);
countObserver.observe(cta);

faqBtns.forEach((btn) => btn.addEventListener("click", openFaqItems));
window.addEventListener("click", clickOutsideFaq);
