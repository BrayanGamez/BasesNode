var colors = require('colors');

const param = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la tabla del numero pasado'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la impresion de la tabla, por defecto no lo hace'
})
.option('h',    {
    alias:'hasta',
    type:'numeric',
    default:10,
    describe:'Especifica hasta donde llegara la tabla (por defecto 10)'
    }
)
.check((param,options)=>
{
    if (isNaN(param.b) || isNaN(param.h)) {
        throw 'La entrada debe ser un numero'.red;
    }

    return true;
})
.argv;

module.exports = param;