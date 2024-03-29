import '@glint/environment-ember-loose';
import AddonRegistry from 'ember-responsive-image/template-registry';
import CloudinaryRegistry from '@ember-responsive-image/cloudinary/template-registry';
import ImgixRegistry from '@ember-responsive-image/imgix/template-registry';
import type Helper from '@ember/component/helper';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends AddonRegistry,
      CloudinaryRegistry,
      ImgixRegistry {
    'page-title': new () => Helper<{
      Args: { Positional: [string] };
      Return: void;
    }>;
    dump: new () => Helper<{
      Args: { Positional: [unknown] };
      Return: void;
    }>;
  }
}
