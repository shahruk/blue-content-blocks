import { newSpecPage } from '@stencil/core/testing';
import { ContentHeroBlock } from '../content-hero-block';

describe('content-hero-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentHeroBlock],
      html: `<content-hero-block></content-hero-block>`,
    });
    expect(page.root).toEqualHtml(`
      <content-hero-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-hero-block>
    `);
  });
});
