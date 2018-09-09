const argv = require('./config/yargs').argv;
const colors = require('colors');
const {createNewTask} = require('./src/modules')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let toCreate = createNewTask(argv.descripcion);
        console.log(toCreate);
        break;

    case 'listar':
        
        break;

    case 'actualizar':
        
        break;

    default:
        console.log(`${colors.red(comando)} no es un comando reconocible. 
                    Para mas informavcion utilize "--help"`)
        break;
}