import { newSpecPage } from '@stencil/core/testing';
import { ContentVideo } from '../content-video';

describe('content-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentVideo],
      html: `<content-video></content-video>`,
    });
    expect(page.root).toEqualHtml(`
      <content-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-video>
    `);
  });
});
