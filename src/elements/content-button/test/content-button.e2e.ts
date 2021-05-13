import { newE2EPage } from '@stencil/core/testing';

describe('content-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-button></content-button>');

    const element = await page.find('content-button');
    expect(element).toHaveClass('hydrated');
  });
});
