Package.describe({
  name: 'barbatus:typescript-runtime',
  version: '1.0.0',
  summary: 'TypeScript Runtime for Meteor',
  git: 'https://github.com/barbatus/typescript-runtime',
  documentation: null
});

Npm.depends({
  'tslib': 'https://github.com/Microsoft/tslib/tarball/6a883a325b50a9969fe7738ac7461a03cd570363'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use(['ecmascript@0.4.2']);

  api.addFiles(['typescript-helpers.js']);

  api.export([
    '__extends', '__decorate', '__metadata',
    '__param', '__awaiter', '__assign', '__generator']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:typescript-runtime');
});
