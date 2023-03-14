const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
    1. 삭제 버튼 추가
    2. 저장 되게끔
    3. 삭제 버튼 -> 저장된 데이터 업데이트
*/

let todos = [];

const save = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = (e) => {
    const target = e.target.parentElement;

    todos = todos.filter((todo) => todo.id !== parseInt(target.id));
    save();
    target.remove();
}

const addItem = (todo) => {
    if (todo.text !== '') {
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = todo.text;
        button.innerText = '삭제';
        button.addEventListener('click', delItem);
        
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
        li.id = todo.id;
    }
};

const handler = (e) => {
    e.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value,
    };
    
    todos.push(todo);
    addItem(todo);
    save();

    input.value = '';
};

const init = () => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if (userTodos) {
        userTodos.forEach((todo) => {
            addItem(todo);
        });

        todos = userTodos;
    }
}

init();
form.addEventListener('submit', handler);

