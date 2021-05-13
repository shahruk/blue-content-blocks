import { newSpecPage } from '@stencil/core/testing';
import { ContentImage } from '../content-image';

describe('content-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentImage],
      html: `<content-image></content-image>`,
    });
    expect(page.root).toEqualHtml(`
      <content-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-image>
    `);
  });
});
