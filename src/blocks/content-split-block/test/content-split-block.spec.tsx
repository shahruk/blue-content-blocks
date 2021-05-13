import { newSpecPage } from '@stencil/core/testing';
import { ContentSplitBlock } from '../content-split-block';

describe('content-split-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentSplitBlock],
      html: `<content-split-block></content-split-block>`,
    });
    expect(page.root).toEqualHtml(`
      <content-split-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-split-block>
    `);
  });
});
