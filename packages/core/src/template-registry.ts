import type ResponsiveImageComponent from './components/responsive-image';
import type ResponsiveImageCloudinaryProvider from './helpers/responsive-image-cloudinary-provider';
import type ResponsiveImageImgixProvider from './helpers/responsive-image-imgix-provider';
import type ResponsiveImageResolve from './helpers/responsive-image-resolve';

export default interface Registry {
  ResponsiveImage: typeof ResponsiveImageComponent;
  'responsive-image-cloudinary-provider': typeof ResponsiveImageCloudinaryProvider;
  'responsive-image-imgix-provider': typeof ResponsiveImageImgixProvider;
  'responsive-image-resolve': typeof ResponsiveImageResolve;
}
