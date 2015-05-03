var cheerio = require('cheerio')
var rewriteext = require('rewrite-ext')


module.exports = function (htmlfile) {
	var $ = cheerio.load(htmlfile.contents)
	var result = {
		html: htmlfile,
		js: []
	}

	$('script:not(:empty)').each(function (index, scriptTag) {
		scriptTag = $(scriptTag)
		var scriptFilename = rewriteext(htmlfile.filename, '.' + index + '.js')
		var scriptContents = scriptTag.html()

		result.js.push({
			filename: scriptFilename,
			contents: scriptContents
		})

		scriptTag.attr('src', scriptFilename)
		scriptTag.empty()
	})

	if (result.js.length !== 0) {
		result.html.contents = $.html()
	}

	return result
}
