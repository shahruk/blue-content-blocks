import { newSpecPage } from '@stencil/core/testing';
import { ContentCarousel } from '../content-carousel';

describe('content-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentCarousel],
      html: `<content-carousel></content-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <content-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-carousel>
    `);
  });
});
