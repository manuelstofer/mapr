# mapr

![Build status](https://api.travis-ci.org/manuelstofer/mapr)

Resolves a path in a object.


## Installation

[node.js](http://nodejs.org)
```bash
$ npm install mapr
```

[component](https://github.com/component/component)
```bash
$ component install manuelstofer/mapr
```

## Usage

```Javascript
var mapr = require('mapr'),
    map = mapr.map,
    kmap = mapr.kmap,

    obj = {
       bla: 'hello'
    };

    // map object values
    // {bla: 'HELLO'}
    map(obj, function (value, key) {
        return value.toUpperCase();
    });

    // map object keys
    // {BLA: 'hello'}
    kmap(obj, function (key, value) {
        return key.toUpperCase();
    });
```
