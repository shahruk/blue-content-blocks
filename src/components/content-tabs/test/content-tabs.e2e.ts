import { newE2EPage } from '@stencil/core/testing';

describe('content-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-tabs></content-tabs>');

    const element = await page.find('content-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
