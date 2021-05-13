import { newE2EPage } from '@stencil/core/testing';

describe('content-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-carousel></content-carousel>');

    const element = await page.find('content-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
