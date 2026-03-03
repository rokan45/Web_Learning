// console.log("Im there!")
const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";


    fetch(url)
        .then(mytodo => mytodo.json())
        .then(json => Todo(json))
};

const Todo = (todos) => {
    //get the parent elemnent
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    todos.forEach(todo => {
        //create element
        const todoList = document.createElement("div");
        todoList.innerHTML = `
    <div class="todo-card">
    <h5>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</h5>
    <p>${todo.title}</p>
    
    </div>`


        //append child
        todoContainer.appendChild(todoList);
    });

}
loadTodo();
