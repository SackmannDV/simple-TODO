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

const updateTask = (desc, stat = true) => {
    readTodo();
    
    let index = todoList.findIndex(tarea => tarea.desc === desc)
    console.log(index);
    if(index >= 0) {
        if(stat == 'true' || stat == true){
            todoList[index].completado = true;   
        } else if(stat == 'false') {
            todoList[index].completado = false;
        }
        writeTodo(todoList);
        return true;
    } else {
        return false;
    }

}

const deleteTask = desc => {
    readTodo();

    let index = todoList.filter(tarea => tarea.desc !== desc)
    console.log(index);
    if (index.length === todoList.length){
        return false
    } else {
        todoList = index
        writeTodo(todoList)
        return true;
    }
}

const getTodo = () => {
    readTodo();
    return todoList;
}

module.exports = {
    createNewTask,
    getTodo,
    updateTask,
    deleteTask
}
