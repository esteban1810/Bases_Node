const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=2,listar,hasta) => {
    try{
        let salida='';
        let nombreArchivo = `TablaDel${base}`;

        console.log('=================='.america);
        console.log('   Tabla Del: '.green,base);
        console.log('=================='.america);

        for(let i=1; i<=hasta; i++)
            salida+=`${base} ${'X'} ${i} = ${base*i}\n`;

        if(listar){
            console.log(salida.cyan);
        }

        const err = fs.writeFileSync(`./tablas/TablaDel${base}`, salida);
    
        return nombreArchivo;
    } catch(err){
        throw err;
    }
}


module.exports = {
    crearArchivo
}

