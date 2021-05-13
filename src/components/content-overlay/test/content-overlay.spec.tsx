import { newSpecPage } from '@stencil/core/testing';
import { ContentOverlay } from '../content-overlay';

describe('content-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentOverlay],
      html: `<content-overlay></content-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <content-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-overlay>
    `);
  });
});
