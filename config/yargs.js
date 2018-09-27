/* This file is the configuration for the yargs Library */ 


const descripcion = {
    alias: 'd',
    demand: true
}

const argv = require('yargs')
                .command('crear', 'Crea una tarea', {
                    descripcion
                })
                .command('actualizar', 'Actualiza el estado de la tarea', {
                    descripcion,
                    completado: {
                        default: true,
                        alias: 'c'
                    }
                })
                .command('borrar', 'Borra una tarea', {
                    descripcion
                })           
                .help()    
                .argv;

module.exports = {
    argv
}
