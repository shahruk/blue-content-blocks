import { newSpecPage } from '@stencil/core/testing';
import { ContentBlockWrapper } from '../content-block-wrapper';

describe('content-block-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentBlockWrapper],
      html: `<content-block-wrapper></content-block-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <content-block-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-block-wrapper>
    `);
  });
});
