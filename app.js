const input = document.querySelector('.inputToDo');
const btnInput = document.querySelector('.btnInput');
const todoList = document.querySelector('.todoList');
const getFilter = document.querySelector('.filter-todo');

//Event on button de start the function to create elements and get value on input

btnInput.addEventListener('click', handleToDo);
todoList.addEventListener('click', handleTarget);
getFilter.addEventListener('click', handleTodoFilter);


//function for get the value on input and create elements at HTML

function handleToDo(event){
 
  event.preventDefault();
  if ( input.value != ''){

    todoDiv = document.createElement('div');
    todoDiv.className ='todoDiv';
      
    const todoItem = document.createElement('li');
    todoItem.innerText = input.value;
    todoItem.className = 'todoItem';
    saveTodos(input.value)
    input.value = ('');
    todoDiv.appendChild(todoItem);
      
    const btnDone = document.createElement('button');
    btnDone.className = 'btnDone';
    btnDone.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(btnDone);

      
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btnDelete';
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(btnDelete);
    
    todoList.appendChild(todoDiv);
    
  }
}

  
  
function handleTarget(event){
  const target = event.target;
  const itemTodo = target.parentElement;
  const itemParent = itemTodo.parentElement;
  
  if (itemTodo.classList.contains('btnDelete')) {
    itemParent.classList.add('remove');
   
    setTimeout(() => {
      itemParent.remove();
    }, 400); 
  }

  if(itemTodo.classList.contains('btnDone')) {
    itemParent.classList.toggle('done')
  };

  console.log(itemTodo)
}


function handleTodoFilter (event){
  const todos = Array.from(todoList.children);

  todos.forEach((todo) => {
    
    switch (event.target.value) {
      case 'all':
        todo.style.display = 'flex'
      break;

      case 'completed':
        if(todo.classList.contains('done')){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
      break;
      
      case 'uncompleted':
        if(!todo.classList.contains('done')){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  })
};