let argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'numero a multiplicar',
        type: 'number'
    })
    .option('l',{
        alias: 'listar',
        default: false,
        describe: 'Listar en consolar la tabla',
        type: 'boolean'
    })
    .option('h',{
        alias: 'hasta',
        default: 10,
        describe: 'Hasta que número se va a multiplicar',
        type: 'number'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b) ){
            throw new Error('No es numero');
        } 
        if(isNaN(argv.h)){
            throw new Error('No es numero');
        }
        
        return true;
    })
    
    .argv;

module.exports = argv;