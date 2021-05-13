import { newE2EPage } from '@stencil/core/testing';

describe('content-grid-formatter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-grid-formatter></content-grid-formatter>');

    const element = await page.find('content-grid-formatter');
    expect(element).toHaveClass('hydrated');
  });
});
