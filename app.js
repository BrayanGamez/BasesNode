const {CreateTableMultiply}=require('./helpers/multiply');
const param = require('./config/yargs');

console.clear();
 CreateTableMultiply(param.b,param.l,param.h)
 .then(msg=>console.log(msg))
 .catch(err=>console.log(err)); 
