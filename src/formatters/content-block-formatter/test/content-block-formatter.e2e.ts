import { newE2EPage } from '@stencil/core/testing';

describe('content-block-formatter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-block-formatter></content-block-formatter>');

    const element = await page.find('content-block-formatter');
    expect(element).toHaveClass('hydrated');
  });
});
