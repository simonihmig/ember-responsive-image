# ember-responsive-image

## 1.0.0-beta.2

### Major Changes

- [#614](https://github.com/simonihmig/responsive-image/pull/614) [`2d10626`](https://github.com/simonihmig/responsive-image/commit/2d10626daca68fa97c6566bb5203e9861f1dadff) Thanks [@simonihmig](https://github.com/simonihmig)! - Use Record-based API for cloudinary transformations

  Instead of passing cloudinary transformations as a string according to the Cloudinary Transformation URL API, you need to pass them as an object. If you want to use chained transformations, pass an array of objects.

  ```js
  // using @resposive-image/cdn
  const simpleTransformation = cloudinaryProvider('foo/bar.jpg', {
    transformations: { co: 'rgb:20a020', e: 'colorize:50' },
  });

  const chainedTransformation = cloudinaryProvider('foo/bar.jpg', {
    transformations: [
      { co: 'rgb:20a020', e: 'colorize:50' },
      { ar: '1.0', c: 'fill', w: '150' },
      { r: 'max' },
    ],
  });
  ```

  ```hbs
  {{!-- using @responsive-image/ember }}
  <ResponsiveImage
    @src={{responsiveImageCloudinaryProvider
      "foo/bar.jpg"
      transformations=(hash co="rgb:20a020" e="colorize:50")
    }}
  >
  ```

### Patch Changes

- Updated dependencies [[`2d10626`](https://github.com/simonihmig/responsive-image/commit/2d10626daca68fa97c6566bb5203e9861f1dadff)]:
  - @responsive-image/cdn@1.0.0-beta.2

## 1.0.0-beta.1

### Major Changes

- [#586](https://github.com/simonihmig/responsive-image/pull/586) [`84abd80`](https://github.com/simonihmig/responsive-image/commit/84abd808faa6a869207396dd1a64caa695155677) Thanks [@simonihmig](https://github.com/simonihmig)! - Rename all packages to be under a new @responsive-image scope

- [#598](https://github.com/simonihmig/responsive-image/pull/598) [`025ccef`](https://github.com/simonihmig/responsive-image/commit/025ccef1c8a0580a1426126fade5cb7b25aa1859) Thanks [@simonihmig](https://github.com/simonihmig)! - Refactored BlurHash implementation to be ESM based

- [#579](https://github.com/simonihmig/responsive-image/pull/579) [`5a69e21`](https://github.com/simonihmig/responsive-image/commit/5a69e21cca4716332ec41aa7cf9ae143eddd9d1c) Thanks [@simonihmig](https://github.com/simonihmig)! - Drop service class

  The `responsive-image` service has been dropped and replaced with a simple static module from the new `core` package.

### Minor Changes

- [#585](https://github.com/simonihmig/responsive-image/pull/585) [`ab0e08b`](https://github.com/simonihmig/responsive-image/commit/ab0e08ba9731a5c58fe37d160cd01ad6138096cf) Thanks [@simonihmig](https://github.com/simonihmig)! - Move CDN providers to a single dedicated cdn package.

  Ember helpers are now exposed from the main `@responsive-image/ember` package again, wrapping the function from the new `@responsive-image/cdn` package.
  The previous dedicated addons `@ember-responsive-image/cloudinary` and `@ember-responsive-image/imgix` have been removed again.

### Patch Changes

- Updated dependencies [[`84abd80`](https://github.com/simonihmig/responsive-image/commit/84abd808faa6a869207396dd1a64caa695155677), [`ab0e08b`](https://github.com/simonihmig/responsive-image/commit/ab0e08ba9731a5c58fe37d160cd01ad6138096cf)]:
  - @responsive-image/core@1.0.0-beta.1
  - @responsive-image/cdn@1.0.0-beta.1

## 5.0.0-beta.1

### Patch Changes

- [#573](https://github.com/simonihmig/ember-responsive-image/pull/573) [`fed835d`](https://github.com/simonihmig/ember-responsive-image/commit/fed835de43ac86b28d9a5cc80d751adff76df219) Thanks [@simonihmig](https://github.com/simonihmig)! - Fix broken build when no addon config is found

- Updated dependencies [[`f8d3ebb`](https://github.com/simonihmig/ember-responsive-image/commit/f8d3ebb5147878a6c4bbea655756e60600667ce3)]:
  - @ember-responsive-image/blurhash@1.0.0-beta.1

## 5.0.0-beta.0

### Major Changes

- [#547](https://github.com/simonihmig/ember-responsive-image/pull/547) [`fe2b113`](https://github.com/simonihmig/ember-responsive-image/commit/fe2b11311c3bd5d8d8d0e28f2040f1118acc937b) Thanks [@simonihmig](https://github.com/simonihmig)! - Major rewrite as a v2 addon

  The main addon is now a fully static v2 addon. No more broccoli, all processing of local images has moved to Webpack-native loaders, invoked by ember-auto-import for classic builds or Embroider.

  The main breaking change here is that when using the `<ResponsiveImage/>` component you don't refer to the image by a string-based reference anymore. In the pull-based world of v2 addons, you need to explicitly import the image file. This triggers the Webpack loaders, applying the image processing. This has t he benefit of only processing what is actually used, and being able to apply specific image processing options _per import_.

  For organizational purposes, the different concerns (image processing, image CDN providers etc.) have been split into separate packages that you need to add as dependencies if you make use of them:

  - `@ember-responsive-image/webpack` for local image processing
  - `@ember-responsive-image/cloudinary` for supporting the Cloudinary image CDN
  - `@ember-responsive-image/imgix` for supporting the Imgix image CDN
  - `@ember-responsive-image/blurhash` for BlurHash LQIP support

  The configuration of the addon has been moved from `ember-cli-build.js` to separate configurations for each of the above packages. Please refer to their respective documentation.

### Patch Changes

- Updated dependencies [[`fe2b113`](https://github.com/simonihmig/ember-responsive-image/commit/fe2b11311c3bd5d8d8d0e28f2040f1118acc937b)]:
  - @ember-responsive-image/blurhash@1.0.0-beta.0
