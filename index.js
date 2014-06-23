var docEl = document.documentElement
var matches =
  docEl.matches ||
  docEl.matchesSelector ||
  docEl.webkitMatchesSelector ||
  docEl.mozMatchesSelector ||
  docEl.oMatchesSelector ||
  docEl.msMatchesSelector ||
  function(selector) {
    var element = this
    var parent = element.parentNode
    var match
    var index = -1
    var length
    if(!parent) {
      return false
    }
    match = parent.querySelectorAll(selector)
    length = match.length
    while(++index < length) {
      if(match[index] == element) {
        return true
      }
    }
    return false
  }

if(!matches) {
  throw new Error("this browser does not support .matchesSelector")
}

module.exports = function(selector, element){
  return matches.call(element, selector)
}
