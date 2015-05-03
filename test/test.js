var cspfixer = require('../')
var assert = require('assert')

describe('cspfixer', function () {

	it('should return value', function () {
		var result = cspfixer({ filename: 'file.html', contents: '<script>console.log("Hello world")</script>' })
		assert.deepEqual(result, { html: { filename: 'file.html', contents: '<script src="file.0.js"></script>' }, js: [ { filename: 'file.0.js', contents: 'console.log("Hello world")' } ]})
	})

})
