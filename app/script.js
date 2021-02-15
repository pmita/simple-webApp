const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', addItem);
todoList.addEventListener('click', deleteOrCheck);

function addItem(event){
    event.preventDefault();
    console.log('js works');

    //Create main Div
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('box')

    //Create Li element
    const todoItem = document.createElement('li');
    todoItem.innerText = input.value;

    todoContainer.appendChild(todoItem);

    //Create check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.innerHTML = "<i class='fas fa-check'></i>";
    todoContainer.appendChild(checkButton);

    //Create trash button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('trash');
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    todoContainer.appendChild(deleteButton);

    todoList.appendChild(todoContainer);

    //Re-set the input text field
    input.value = '';
}

function deleteOrCheck(event){
    const cursorItem = event.target;
    console.log(cursorItem);

    if(cursorItem.classList[0] === 'trash'){
        cursorItem.parentElement.classList.add('collapse');
        cursorItem.parentElement.addEventListener('transitionend', function(){
            cursorItem.parentElement.remove();
            console.log('it worked?');
        });
    }

    if(cursorItem.classList[0] === 'check'){
        cursorItem.parentElement.classList.toggle('completed');
    }
}