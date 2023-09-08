import './style.css';


const inputEl = document.querySelector('.input-box input[name="username"]')
const divEl = document.querySelector('.input-box div.username')

inputEl.addEventListener('keyup', function(){
    const valueOfInput = inputEl.value
    divEl.innerHTML = valueOfInput
})