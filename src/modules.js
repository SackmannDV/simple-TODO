const fs = require('fs');
const colors = require('colors');

let todoList = [];

const writeTodo = (forSave) => {
    let data = JSON.stringify(forSave);
    
    fs.writeFile('./.saveTasks/todoList.json', data, (err) => {
        if (err) throw err;
        console.log('La tarea fue guardada');
      });
}

const readTodo = () => {
    try {
        todoList = require('../.saveTasks/todoList.json');
    } catch (error) {
        todoList = [];
    }
}

const createNewTask = (desc) => {
    
    readTodo();

    let todo = {
        desc,
        completado: false
    }
    todoList.push(todo);
    
    writeTodo(todoList);
    
    return todo;
}

const getTodo = () => {
    readTodo();
    return todoList;
}

module.exports = {
    createNewTask,
    getTodo
}
