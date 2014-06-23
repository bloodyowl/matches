var tape = require("tape")
var matches = require("..")

tape("matches", function(test){
  var div = document.createElement("div")
  div.className = "foo bar baz"
  document.body.appendChild(div)
  test.equal(matches(".foo", div), true)
  test.equal(matches(".foo.bar", div), true)
  test.equal(matches(".foo.bar.baz", div), true)
  test.equal(matches("html body .foo.bar.baz", div), true)
  test.equal(matches(".nope", div), false)
  div.className += " nope"
  test.equal(matches(".nope", div), true)
  test.equal(matches("html", document.documentElement), true)
  test.throws(function(){
    matches("html", null)
  })
  test.end()
})
