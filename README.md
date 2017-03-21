# jsreport-static-resources
[![NPM Version](http://img.shields.io/npm/v/jsreport-static-resources.svg?style=flat-square)](https://npmjs.com/package/jsreport-static-resources)

> **!!! Please use [assets](https://jsreport.net/learn/assets) extension which solves the static resources referencing in better way instead**


**[jsreport](https://github.com/jsreport/jsreport) extension serving static scripts and styles like jquery or bootstrap from the pre-configured directory.**

1.

```
npm install jsreport-static-resources
```

2.

Copy the scripts, styles or other static resources to the jsreport data directory `data\staticResources`

3.

Reference resources inside the template content using `$staticResources` property provided to the templating engine.
```html
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="{{$staticResources}}/style.css">
	</head>
...
```

4.
Optionally override the path to the static resources directory inside the jsreport configuration 
```js
{
  ...
  'static-resources': {
    'directory': 'c:\build'
  }
  ...
}
```

## jsreport-core
You can apply this extension also manually to [jsreport-core](https://github.com/jsreport/jsreport-core)

```js
var jsreport = require('jsreport-core')()
jsreport.use(require('jsreport-static-resources')())
```
