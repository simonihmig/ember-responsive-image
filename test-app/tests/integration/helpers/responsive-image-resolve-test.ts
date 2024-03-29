import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import type { ResponsiveImageService, ImageData } from 'ember-responsive-image';
import testImage from 'test-app/images/tests/test.png?&widths=640,2048&responsive';

interface TestContext {
  testImage: ImageData;
}

module('Helper: ResponsiveImageResolve', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.set('testImage', testImage);
  });

  test('works without size', async function (assert) {
    await render<TestContext>(
      hbs`<h1>{{responsive-image-resolve this.testImage}}</h1>`,
    );
    assert.dom('h1').hasText(new RegExp('/images/test-2048w(-\\w+)?.png'));
  });

  test('supports size', async function (assert) {
    const service = this.owner.lookup(
      'service:responsive-image',
    ) as ResponsiveImageService;
    service.set('physicalWidth', 100);
    await render<TestContext>(
      hbs`<h1>{{responsive-image-resolve this.testImage size=45}}</h1>`,
    );

    // @todo use custom sizes for loader here
    assert.dom('h1').hasText(new RegExp('/images/test-640w(-\\w+)?.png'));
  });

  test('supports format', async function (assert) {
    await render<TestContext>(
      hbs`<h1>{{responsive-image-resolve this.testImage format="webp"}}</h1>`,
    );

    assert.dom('h1').hasText(new RegExp('/images/test-2048w(-\\w+)?.webp'));
  });
});
