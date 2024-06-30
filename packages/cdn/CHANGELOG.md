# @responsive-image/cdn

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

## 1.0.0-beta.1

### Major Changes

- [#586](https://github.com/simonihmig/responsive-image/pull/586) [`84abd80`](https://github.com/simonihmig/responsive-image/commit/84abd808faa6a869207396dd1a64caa695155677) Thanks [@simonihmig](https://github.com/simonihmig)! - Rename all packages to be under a new @responsive-image scope

### Minor Changes

- [#585](https://github.com/simonihmig/responsive-image/pull/585) [`ab0e08b`](https://github.com/simonihmig/responsive-image/commit/ab0e08ba9731a5c58fe37d160cd01ad6138096cf) Thanks [@simonihmig](https://github.com/simonihmig)! - Move CDN providers to a single dedicated cdn package.

  Ember helpers are now exposed from the main `@responsive-image/ember` package again, wrapping the function from the new `@responsive-image/cdn` package.
  The previous dedicated addons `@ember-responsive-image/cloudinary` and `@ember-responsive-image/imgix` have been removed again.

### Patch Changes

- Updated dependencies [[`84abd80`](https://github.com/simonihmig/responsive-image/commit/84abd808faa6a869207396dd1a64caa695155677)]:
  - @responsive-image/core@1.0.0-beta.1
