import { newSpecPage } from '@stencil/core/testing';
import { ContentElementWrapper } from '../content-element-wrapper';

describe('content-element-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentElementWrapper],
      html: `<content-element-wrapper></content-element-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <content-element-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-element-wrapper>
    `);
  });
});
