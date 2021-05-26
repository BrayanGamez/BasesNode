const fs = require('fs');
require('colors');

const CreateTableMultiply =async(base=1,listStyle,n)=>
{
    try {
        let output ='';
        let consola ='';
console.log(`-------Tabla del ${base}------ \n`.rainbow);
for (let index = 0; index < n; index++) 
{
    let product = base*(index+1);
    output +=`${base} x ${index+1} = ${product} \n`;
    consola += `${base} ${'x'.blue} ${index+1} ${'='.green} ${product} \n`;
}

fs.writeFileSync(`./outputs/Tabla${base}.txt`,output);

if (listStyle) {
    console.log(consola);
}
console.log(`Tabla del ${base} creada`);
return `Tabla${base}.txt creada`;
    } catch (error) {
        throw error;
    }

}


module.exports = {
CreateTableMultiply
}