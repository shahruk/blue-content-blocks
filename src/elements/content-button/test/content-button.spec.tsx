import { newSpecPage } from '@stencil/core/testing';
import { ContentButton } from '../content-button';

describe('content-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentButton],
      html: `<content-button></content-button>`,
    });
    expect(page.root).toEqualHtml(`
      <content-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-button>
    `);
  });
});
