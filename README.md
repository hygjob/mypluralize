# mypluralize
mypluralize - for module

ref:
https://blog.ull.im/engineering/2018/12/23/how-to-create-and-publish-npm-module-in-typescript.html

## Installation 
```sh
npm install mypluralize --save
yarn add mypluralize
bower install mypluralize --save
```
## Usage

### Javascript
```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```
## Test 
```sh
npm run test # not working currently
```