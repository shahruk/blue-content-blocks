import { newSpecPage } from '@stencil/core/testing';
import { ContentSpacingWrapper } from '../content-spacing-wrapper';

describe('content-spacing-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentSpacingWrapper],
      html: `<content-spacing-wrapper></content-spacing-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <content-spacing-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-spacing-wrapper>
    `);
  });
});
