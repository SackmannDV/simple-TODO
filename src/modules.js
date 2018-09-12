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
