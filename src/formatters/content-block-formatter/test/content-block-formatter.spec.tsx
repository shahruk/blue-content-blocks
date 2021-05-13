import { newSpecPage } from '@stencil/core/testing';
import { ContentBlockFormatter } from '../content-block-formatter';

describe('content-block-formatter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentBlockFormatter],
      html: `<content-block-formatter></content-block-formatter>`,
    });
    expect(page.root).toEqualHtml(`
      <content-block-formatter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-block-formatter>
    `);
  });
});
