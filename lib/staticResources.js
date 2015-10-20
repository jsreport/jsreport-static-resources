var mkdirp = require('mkdirp');
var path = require('path');
var serveStatic = require("serve-static");

module.exports = function (reporter, definition) {

  var staticResourcesPath;

  if (definition.options.directory) {
    staticResourcesPath = definition.options.directory;
  } else {
    staticResourcesPath = path.join(reporter.options.dataDirectory, 'staticResources');
  }

  mkdirp.sync(staticResourcesPath);

  reporter.on('express-configure', function (app) {
    app.use("/static-resources", serveStatic(staticResourcesPath));
  });

  function resolveStaticResourcesPath(req) {
    var escapedUrl = req.url.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    var path = (req.originalUrl || "/").replace(new RegExp(escapedUrl + '$'), "");
    var base = req.protocol + '://' + req.get('host') + path;
    return  base + '/static-resources';
  }

  reporter.beforeRenderListeners.insert({after: "data", before: "scripts"}, definition.name, function (req, res) {
    req.data = req.data || {};
    req.data['$staticResources'] = resolveStaticResourcesPath(req);
  });
};
