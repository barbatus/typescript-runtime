Package.describe({
  name: 'barbatus:typescript-runtime',
  version: '0.1.0-beta.1',
  summary: 'TypeScript Runtime for Meteor',
  git: 'https://github.com/barbatus/typescript-runtime',
  documentation: null
});

Package.onUse(function(api) {
  api.addFiles(['typescript-helpers.js']);

  api.export(['__extends', '__decorate', '__metadata', '__param', '__awaiter']);

  api.imply('promise@0.4.8');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:typescript-runtime');
});
