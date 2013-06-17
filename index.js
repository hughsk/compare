
module.exports = compare
function compare(array, comparator) {
  var l = array.length
  var a

  for (var i = 0; i < l; i += 1) {
    a = array[i]
    for (var j = 0; j < l; j += 1) {
      if (i === j) continue
      if (!comparator(a, array[j], i, j)) return false
    }
  }
  return true
}
