var each = require('foreach');

module.exports = {
    map:    map,
    kmap:   kmap
};

function map (obj, iterator, context) {
    var result = {};
    each(obj, function (value, key) {
        result [key] = iterator.call(context, value, key);
    });
    return result;
}

function kmap (obj, iterator, context) {
    var result = {};
    each(obj, function (value, key) {
        result [iterator.call(context, key, value)] = value;
    });
    return result;
}


