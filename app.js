const argv = require('./config/yargs').argv;
const colors = require('colors');
const {createNewTask, getTodo, updateTask, deleteTask} = require('./src/modules')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let toCreate = createNewTask(argv.descripcion);
        break;

    case 'listar':
        let list = getTodo();
        for(let tarea of list) {
            console.log('============================')
            console.log(colors.bgWhite.black(tarea.desc))
            if (tarea.completado === false) {
                console.log('No completado'.red);
            } else {
                console.log('Tarea finalizada'.green)
            }
        }
        break;

    case 'actualizar':
        updateTask(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrar = deleteTask(argv.descripcion)
        console.log(borrar)
        break;

    default:
        console.log(`${colors.red(comando)} no es un comando reconocible.\nPara mas informacion utilize "--help"`)
        break;
}

console.log( argv )