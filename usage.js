var index = require('./dist/index.js');

var result = index.getPlural('Boy');
console.log(result);

result = index.getPlural('Goose');
console.log(result);

result = index.getPlural('Man');
console.log(result);

