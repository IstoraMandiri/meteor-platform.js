Package.describe({
  summary: "A platform detection library that works on nearly all JavaScript platforms.",
  name: "hitchcott:platform",
  version: '0.0.1',
  git: "https://github.com/hitchcott/meteor-platform.js"
});

Package.on_use(function (api, where) {

  where = where || ['client', 'server'];

  api.add_files('lib/platform.js', where);

  api.export('platform');
});