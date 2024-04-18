const courseCta = document.querySelector('.course-info-cta')
const courseDescription = document.querySelector('.course-desctiption-cta')


console.log(courseCta);

const options = {
    rootMargin : "-100px"
}

const showDescription = (entry) => {
    if (entry[0].isIntersecting){
        courseDescription.style.display = 'flex'
    } else {
        return
    }
}

const courseObserver = new IntersectionObserver(showDescription,options)
courseObserver.observe(courseCta)