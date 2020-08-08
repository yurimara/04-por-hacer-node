const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca cmo completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estad completado de una tareas', {
        descripcion,
        completado
    })
    .command('listar', 'Listar los elementos de la lista', {})
    .command('borrar', 'Borrar un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}