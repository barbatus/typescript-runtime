Package.describe({
  name: 'barbatus:typescript-runtime',
  version: '0.1.1',
  summary: 'TypeScript Runtime for Meteor',
  git: 'https://github.com/barbatus/typescript-runtime',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.addFiles(['typescript-helpers.js']);

  api.export([
    '__extends', '__decorate', '__metadata',
    '__param', '__awaiter', '__assign']);

  api.imply('promise@0.4.8');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:typescript-runtime');
});
