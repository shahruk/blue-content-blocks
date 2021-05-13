import { newSpecPage } from '@stencil/core/testing';
import { ContentAccordion } from '../content-accordion';

describe('content-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentAccordion],
      html: `<content-accordion></content-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <content-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-accordion>
    `);
  });
});
