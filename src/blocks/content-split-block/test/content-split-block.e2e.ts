import { newE2EPage } from '@stencil/core/testing';

describe('content-split-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-split-block></content-split-block>');

    const element = await page.find('content-split-block');
    expect(element).toHaveClass('hydrated');
  });
});
