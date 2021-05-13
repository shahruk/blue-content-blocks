import { newE2EPage } from '@stencil/core/testing';

describe('content-hero-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-hero-block></content-hero-block>');

    const element = await page.find('content-hero-block');
    expect(element).toHaveClass('hydrated');
  });
});
