if (typeof mapr == 'undefined') {
    var mapr = require('../'),
        chai     = require('chai');
}
var map = mapr.map,
    kmap = mapr.kmap;

chai.should();

var toUpper = function (value) {
    return value.toUpperCase();
};

describe('map', function () {
    it('should map the values', function () {
        var obj = {
                bla:        'hello',
                example:    'lower'
            },
            result = map(obj, toUpper);

        result.bla.should.equal('HELLO');
        result.example.should.equal('LOWER');
    });
});

describe('kmap', function () {
    it('should map the keys', function () {
        var obj = {
                bla:        'expected',
                example:    'expected'
            },
            result = kmap(obj, toUpper);

        result.BLA.should.equal(obj.bla);
        result.EXAMPLE.should.equal(obj.example);
    });
});

