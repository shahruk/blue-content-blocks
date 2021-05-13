import { newE2EPage } from '@stencil/core/testing';

describe('content-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-image></content-image>');

    const element = await page.find('content-image');
    expect(element).toHaveClass('hydrated');
  });
});
