Package.describe({
  name: 'barbatus:typescript-runtime',
  version: '1.1.0',
  summary: 'TypeScript Runtime for Meteor',
  git: 'https://github.com/barbatus/typescript-runtime',
  documentation: null
});

Npm.depends({
  'tslib': '1.9.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use(['ecmascript']);

  api.addFiles(['typescript-helpers.js']);

  api.export([
    '__extends',
    '__assign',
    '__rest',
    '__decorate',
    '__param',
    '__metadata',
    '__awaiter',
    '__param',
    '__generator',
    '__exportStar',
    '__values',
    '__read',
    '__spread',
    '__await',
    '__asyncGenerator',
    '__asyncDelegator',
    '__asyncValues',
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:typescript-runtime');
});
