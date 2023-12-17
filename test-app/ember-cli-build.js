'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const EmberResponsiveImageWebpackLoaders =
  require('@ember-responsive-image/webpack').loaders;

module.exports = function (defaults) {
  let usesEmbroider =
    !!process.env.EMBROIDER_TEST_SETUP_OPTIONS ||
    process.env.EMBROIDER_TEST_SETUP_FORCE === 'embroider';

  let app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    autoImport: usesEmbroider
      ? {}
      : {
          watchDependencies: [
            'ember-responsive-image',
            '@ember-responsive-image/cloudinary',
            '@ember-responsive-image/imgix',
          ],
          allowAppImports: [
            'images/**/*.jpg',
            'images/**/*.jpeg',
            'images/**/*.png',
          ],
          webpack: {
            module: {
              rules: [
                {
                  resourceQuery: /responsive/,
                  use: EmberResponsiveImageWebpackLoaders,
                },
              ],
            },
          },
        },
    '@embroider/macros': {
      setConfig: {
        '@ember-responsive-image/cloudinary': {
          cloudName: 'kaliber5',
        },
        '@ember-responsive-image/imgix': {
          domain: 'kaliber5.imgix.net',
        },
      },
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    // This breaks with ember-cli-fastboot: https://github.com/ember-fastboot/ember-cli-fastboot/issues/925
    staticEmberSource: false,
    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              resourceQuery: /responsive/,
              use: EmberResponsiveImageWebpackLoaders,
            },
          ],
        },
      },
    },
  });
};