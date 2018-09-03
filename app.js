const yargs = require('yargs').argv;
const colors = require('colors');

let comando = yargs._[0];

switch (comando) {
    case 'crear':
        
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