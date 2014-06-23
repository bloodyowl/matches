# matches

[![browser support](https://ci.testling.com/bloodyowl/matches.png)](https://ci.testling.com/bloodyowl/matches)


matches selectors for every browser who supports `querySelectorAll`

## install

```sh
$ npm install bloody-matches
```

## require

```javascript
var matches = require("bloody-matches")
```

## api

### `matches(selector, element) > boolean`

checks if `element` matches the given `selector` string.

selector as first argument has been chosen for simpler use of partial/curry.

## example

```javascript
var isAction = curry(matches, ".js-Action")

if(isAction(target)) {
  target.focus()
}
```
