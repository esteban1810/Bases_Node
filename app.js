const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

let base = argv.base;
let listar = argv.listar;
let hasta = argv.hasta;

crearArchivo(base,listar,hasta)
    .then(msg => console.log('Se creo exitosamente el archivo',msg))
    .catch(err => console.log(err));
