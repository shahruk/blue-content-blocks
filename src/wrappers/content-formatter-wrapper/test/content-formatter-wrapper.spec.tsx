import { newSpecPage } from '@stencil/core/testing';
import { ContentFormatterWrapper } from '../content-formatter-wrapper';

describe('content-formatter-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentFormatterWrapper],
      html: `<content-formatter-wrapper></content-formatter-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <content-formatter-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-formatter-wrapper>
    `);
  });
});
