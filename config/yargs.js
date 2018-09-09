const argv = require('yargs')
                .command('crear', 'Crea una tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true
                    }
                })
                .command('Actualizar', 'Actualiza el estado de la tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true
                    },
                    completado: {
                        default: true,
                        alias: 'c'
                    }
                })            
                .help()    
                .argv;

module.exports = {
    argv
}
