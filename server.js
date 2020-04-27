const fs = require('fs');

console.log('Current directory: ', process.cwd());
console.log('Contents of current directory: ', fs.readdirSync(process.cwd()));
