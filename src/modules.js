const fs = require('fs');
const colors = require('colors');

let todoList = [];

const createNewTask = (desc) => {
    let todo = {
        desc,
        completado: false
    }
    todoList.push(todo);
    return todo;
}

module.exports = {
    createNewTask
}

fs.writeFile(`../.saveTasks/TodoList`, todoList, (err) => {
    if (err) throw err;
    console.log(`Se a añadido la tarea`);
})