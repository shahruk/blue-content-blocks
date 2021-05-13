import { newSpecPage } from '@stencil/core/testing';
import { ContentToutBlock } from '../content-tout-block';

describe('content-tout-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentToutBlock],
      html: `<content-tout-block></content-tout-block>`,
    });
    expect(page.root).toEqualHtml(`
      <content-tout-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-tout-block>
    `);
  });
});
