import { newSpecPage } from '@stencil/core/testing';
import { ContentTabs } from '../content-tabs';

describe('content-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentTabs],
      html: `<content-tabs></content-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <content-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-tabs>
    `);
  });
});
