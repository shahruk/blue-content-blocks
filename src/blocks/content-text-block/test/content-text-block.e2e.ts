import { newE2EPage } from '@stencil/core/testing';

describe('content-text-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-text-block></content-text-block>');

    const element = await page.find('content-text-block');
    expect(element).toHaveClass('hydrated');
  });
});
