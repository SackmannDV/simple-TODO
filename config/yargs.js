const argv = require('yargs')
                .command('crear', 'Crea una tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true
                    }
                })
                .command('actualizar', 'Actualiza el estado de la tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true
                    },
                    completado: {
                        default: true,
                        alias: 'c'
                    }
                })
                .command('borrar', 'Borra una tarea', {
                    descripcion: {
                        alias: 'd',
                        demand: true
                    }
                })           
                .help()    
                .argv;

module.exports = {
    argv
}
