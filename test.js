var compare = require('./')
var test = require('tape')

test('Equality check', function(t) {
  t.equal(compare([1, 1, 1, 1], function(a, b) { return a === b }), true)
  t.equal(compare([1, 2, 1, 1], function(a, b) { return a === b }), false)
  t.end()
})

test('Inequality check', function(t) {
  t.equal(compare([1, 2, 3, 4], function(a, b) { return a !== b }), true)
  t.equal(compare([1, 2, 3, 3], function(a, b) { return a !== b }), false)
  t.end()
})
