const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value !== '') {
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
    
        input.value = ''; // input창 비우기
    }
})