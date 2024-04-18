const footerYear = document.querySelector('.year-count')


const currentYear = () => {
    const year = (new Date).getFullYear()
    footerYear.innerText = year
}
currentYear()