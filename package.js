Package.describe({
  summary: "A platform detection library that works on nearly all JavaScript platforms."
});

Package.on_use(function (api, where) {

  where = where || ['client'];

  api.add_files('lib/platform.js', where);

  api.export('platform');
});