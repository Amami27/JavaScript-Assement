let input = document.querySelector('#input');
let output = document.querySelector('#output');
let button = document.querySelector('#button');

let myfunction = () => {
    output.innerHTML = input.value;
    input.value = '';
}

button.addEventListener('click', myfunction);