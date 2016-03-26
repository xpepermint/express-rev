# [express](http://expressjs.com)-rev

> Middleware which adds helper functions for dealing with manifest files and file fingerprints.

## Setup

Configure your ExpressJS project based on the example below. Include this middleware before rendering a view.

```js
// index.js (example ExpressJS application)

var express = require('express');
var rev = require('express-rev');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(rev({
  manifest: './public/assets/manifest.json',
  prepend: '/assets'
}));
app.use('/', express.static('./public'));

app.get('/', function (req, res) {
  res.render('index');
});

module.exports = app;
```

Now you can use `rev` function in your views to print file path.

```jade
// index.jade (example jade view)

doctype html
html(lang='en')
  head
    title Asset Fingerprint Example
    link(rel='stylesheet', type='text/css', href=rev('index.css'))
    script(type='text/javascript', src='rev(index.js'))
  body
    img(src=rev('logo.png'))
```

Now all you need is a good asset-pipeline module. Use [gulp](gulpjs.com) with [gulp-devkit](https://github.com/xpepermint/gulp-devkit) for that.

## Config

Open [defaults.json](defaults.json) file to see the default configuration values.

### manifest: String

> Path to JSON manifest file (e.g this file will generate the [gulp-rev-all](https://github.com/smysnk/gulp-rev-all) plugin). Manifest replace-process is ignored if the file does not exist.

### prepend: String

> URL path where static route for assets should be mounted.
