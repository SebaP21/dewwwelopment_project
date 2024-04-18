const alert = document.querySelector('#alert-text')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const message = document.querySelector('#message')
const sendBtn = document.querySelector('.btn-send')

let inputsArray = [name, surname, email , tel ,message]

let formContent

const showAlert = (input,msg) => {
    console.log(input,msg);
}


const createFormResult = () => {
    const resultForm = document.createElement('div')
    resultForm.classList.add('form-result')

    const formValue = document.createElement('p')
    formValue.classList.add('result')

    resultForm.appendChild(formValue)
}






const checkForm = (input) => {
    input.forEach(el =>{
        if (el.value ===''){
            console.log(el.placeholder);
            showAlert(el, el.placeholder)
            alert.innerText='Uzupełnij formularz i wyślij wiadomość!'
        } else if (el.value.length <4){
            alert.innerText='Minimum 4 znaki'
        } else{
            createFormResult()
        }
        
    })
    
    // console.log(input.value);
}













sendBtn.addEventListener('click', e=>{
    e.preventDefault()

    checkForm([name, surname, email , tel ,message])
    
})