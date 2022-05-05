let bcrypt = require('bcryptjs');

let password = 'reydelnorte';

let resultado = bcrypt.hashSync(password, 10);

console.log(password);
console.log(resultado);