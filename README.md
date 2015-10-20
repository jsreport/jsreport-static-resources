#jsreport-static-resources

**[jsreport](https://github.com/jsreport/jsreport) extension serving static scripts and styles like jquery or bootstrap from the pre-configured directory.**

1.
```
npm install jsreport-static-resources
```

2.
Copy the scripts, styles or other static resources to the jsreport data directory `data\staticResources`

3.
Reference resources inside the template content using `$staticResources` property provided to the templating engine.
```
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