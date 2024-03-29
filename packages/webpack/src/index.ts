import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
export { getAspectRatio, getOptions, normalizeInput } from './utils';

import type { LoaderOptions } from './types';
export type { LoaderOptions, ImageLoaderChainedResult } from './types';

const require = createRequire(import.meta.url);

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

const IMAGES_LOADER = resolve(_dirname, 'images');
const EXPORT_LOADER = resolve(_dirname, 'export');
const COLOR_LOADER = resolve(_dirname, 'lqip/color');
const INLINE_LOADER = resolve(_dirname, 'lqip/inline');
let BLURHASH_LOADER = undefined;

try {
  BLURHASH_LOADER = require.resolve('@ember-responsive-image/blurhash/webpack');
} catch (e) {
  // do nothing if package is not available
}

const defaultLoaders: string[] = [
  EXPORT_LOADER,
  COLOR_LOADER,
  INLINE_LOADER,
  BLURHASH_LOADER,
  IMAGES_LOADER,
].filter(Boolean) as string[];

function setupLoaders(options?: LoaderOptions) {
  if (options) {
    return defaultLoaders.map((loader) => ({ loader, options }));
  }

  return defaultLoaders;
}

export { setupLoaders };
