var todos = ["Buy new turtles"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list"){
        listTodos();
    } else if(input === "new"){
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");
}

console.log("You quit the App");


function listTodos() {
    console.log("*****************");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("*****************");
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todo array
    todos.push(newTodo);
    console.log("Added Todo")
}

function deleteTodo() {
    //ask for indecx of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete the todo
    todos.splice(index, 1);
    console.log("Deleted Todo");
}