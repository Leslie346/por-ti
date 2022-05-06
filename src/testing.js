const bcryptjs = require('bcryptjs');

let hash = bcryptjs.hashSync('abc123', 10)

console.log(hash);
console.log(bcryptjs.compareSync(hash, 'abc12345'));