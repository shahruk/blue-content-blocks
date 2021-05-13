import { newE2EPage } from '@stencil/core/testing';

describe('content-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-video></content-video>');

    const element = await page.find('content-video');
    expect(element).toHaveClass('hydrated');
  });
});
