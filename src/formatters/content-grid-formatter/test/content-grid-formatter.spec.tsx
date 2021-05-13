import { newSpecPage } from '@stencil/core/testing';
import { ContentGridFormatter } from '../content-grid-formatter-formatter';

describe('content-grid-formatter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentGridFormatter],
      html: `<content-grid-formatter></content-grid-formatter>`,
    });
    expect(page.root).toEqualHtml(`
      <content-grid-formatter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-grid-formatter>
    `);
  });
});
