# Catsup

### Takes as input

```
{
	filename: 'HTML filename',
	contents: 'HTML file contents'
}
```

### Returns

```
{
	html: {
		filename: 'HTML filename',
		contents: 'HTML file contents with scripts extracted and sourced'
	},
	js: [
		{
			filename: 'Extracted script filename, based on HTML filename',
			contents: 'Extracted script file contents'
		},
		...
	]
}
```

### Example usage

```
var catsup = require('catsup')

catsup({
	filename: 'file.html',
	contents: '<script>console.log("Hello world")</script>'
}) => {
	html: {
		filename: 'file.html',
		contents: '<script src="file.0.js"></script>'
	},
	js: [
		{
			filename: 'file.0.js',
			contents: 'console.log("Hello world")'
		}
	]
}
```
