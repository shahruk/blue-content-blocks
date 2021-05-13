import { newSpecPage } from '@stencil/core/testing';
import { ContentTextBlock } from '../content-text-block';

describe('content-text-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentTextBlock],
      html: `<content-text-block></content-text-block>`,
    });
    expect(page.root).toEqualHtml(`
      <content-text-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-text-block>
    `);
  });
});
