# compare #

Compare each element in an array with every other element in the array.

## Installation ##

``` bash
npm install compare
```

## Usage ##

``` javascript
var compare = require('compare')

compare([1, 1, 1, 1], function(a, b) { return a === b }) // true
compare([1, 2, 3, 4], function(a, b) { return a !== b }) // true
compare([1, 2, 3, 3], function(a, b) { return a !== b }) // false
```
